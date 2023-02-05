import { cloneElement, h, VNode } from "preact";
import { OnPassiveStateChange, returnNull, useEnsureStability, useMergedProps, usePassiveState, useRefElement, useStableGetter } from "preact-prop-helpers";
import { returnFalse, runImmediately } from "preact-prop-helpers/preact-extensions/use-passive-state";
import { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { SwappableContext, useCssClasses } from "./util/context";
import { TransitionDirection, TransitionPhase, TransitionState, UseTransitionParameters } from "./util/types";


function getTimeoutDuration<E extends HTMLElement>(element: E | null) {
    return Math.max(...(window.getComputedStyle(element || document.body).getPropertyValue(`transition-duration`)).split(",").map(str => {
        if (str.endsWith("ms"))
            return +str.substring(0, str.length - 2);
        if (str.endsWith("s"))
            return (+str.substring(0, str.length - 1)) * 1000;
        return 1000;
    }));
}

function parseState(nextState: TransitionState) {
    return nextState.split("-") as [TransitionDirection, TransitionPhase];
}

/**
 * Provide props that can be used to animate a transition.
 * 
 * @param param0 
 * @returns 
 */
export function useTransition<E extends HTMLElement>({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, onVisibilityChange }, refElementParameters }: UseTransitionParameters<E>): VNode<h.JSX.HTMLAttributes<E>> | null {
    //const [isVisible, setIsVisible] = useState(false);
    const { getAnimateOnMount } = useContext(SwappableContext);
    exitVisibility ||= "hidden"
    animateOnMount ??= getAnimateOnMount();
    measure ??= false;
    //const getDurationOverride = useStableGetter(d);
    useEnsureStability("useTransition", onVisibilityChange);
    const getExitVisibility = useStableGetter(exitVisibility);
    const { GetBaseClass, GetEnterClass, GetExitClass, GetMeasureClass, GetInitClass, GetTransitionClass, GetFinalizeClass, GetDirectionClass, GetPhaseClass } = useCssClasses();

    const { refElementReturn, refElementReturn: { getElement, propsStable } } = useRefElement<E>({ refElementParameters })
    const cssProperties = useRef<h.JSX.CSSProperties>({});
    const classNames = useRef(new Set<string>([
        // This is removed during useLayoutEffect on the first render
        // (at least once `show` is non-null)
        `${GetBaseClass()}-pending`,
    ]));
    const handleTransitionFinished = useCallback(() => {
        const state = getState();
        console.assert(!!state);
        if (state) {
            const [direction, phase] = parseState(state);
            if (phase == "transition") {
                setState(`${direction}-finalize`);
                if (timeoutHandle.current > 0) {
                    timeoutClearFunction.current?.(timeoutHandle.current);
                    timeoutHandle.current = -1;
                }
            }
        }
    }, [])
    const otherProps = useRef<h.JSX.HTMLAttributes<E>>({
        onTransitionEnd: (e) => {
            if (e.target == getElement() && e.elapsedTime) {
                handleTransitionFinished();
            }
        }
    })

    const hasMounted = useRef(false);

    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    const updateClasses = useCallback((element: E | null, direction: TransitionDirection, phase?: TransitionPhase) => {
        if (element == null)
            return;


        const exitVisibility = getExitVisibility();

        const allClassesToRemove = [
            `${GetBaseClass()}-${GetEnterClass()}`, `${GetBaseClass()}-${GetExitClass()}`,
            `${GetBaseClass()}-${GetEnterClass()}-${GetMeasureClass()}`, `${GetBaseClass()}-${GetEnterClass()}-${GetInitClass()}`, `${GetBaseClass()}-${GetEnterClass()}-${GetTransitionClass()}`, `${GetBaseClass()}-${GetEnterClass()}-${GetFinalizeClass()}`,
            `${GetBaseClass()}-${GetExitClass()}-${GetMeasureClass()}`, `${GetBaseClass()}-${GetExitClass()}-${GetInitClass()}`, `${GetBaseClass()}-${GetExitClass()}-${GetTransitionClass()}`, `${GetBaseClass()}-${GetExitClass()}-${GetFinalizeClass()}`,
            `${GetBaseClass()}-ev-${"inert"}`,
            `${GetBaseClass()}-ev-${"removed"}`,
            `${GetBaseClass()}-ev-${"hidden"}`,
            `${GetBaseClass()}-ev-${"visible"}`,
            `${GetBaseClass()}-pending`,
        ];

        const allClassesToAdd = [
            `${GetBaseClass()}`,
            `${GetBaseClass()}-${GetDirectionClass(direction)}`,
            phase ? `${GetBaseClass()}-${GetDirectionClass(direction)}-${GetPhaseClass(phase)}` : "",
            `${GetBaseClass()}-ev-${exitVisibility}`
        ];

        element.classList.remove(...allClassesToRemove);
        allClassesToRemove.map(v => classNames.current.delete(v));

        element.classList.add(...allClassesToAdd);
        allClassesToAdd.map(v => classNames.current.add(v));

    }, []);

    /**
     * Updates a single "measure" variable (or removes it)
     */
    const updateSizeProperty = useCallback((element: E, varName: (keyof h.JSX.CSSProperties) & string, value: string | number | null | undefined) => {
        if (value != null) {
            value = `${value}px`;
            element.style.setProperty(varName, value);
            cssProperties.current[varName] = value;
        }
        else {
            element.style.removeProperty(varName);
            delete cssProperties.current[varName];
        }
    }, []);

    /**
     * Adds the "measure" variupdateClassesables to the element if requested.
     */
    const measureElementAndUpdateProperties = useCallback((element: E | null, measure: boolean) => {
        if (element) {
            let size: DOMRectReadOnly | null = null;
            if (measure) {
                size = element.getBoundingClientRect();
            }

            updateSizeProperty(element, `--${GetBaseClass()}-measure-top`, size?.top);
            updateSizeProperty(element, `--${GetBaseClass()}-measure-left`, size?.left);
            updateSizeProperty(element, `--${GetBaseClass()}-measure-width`, size?.width);
            updateSizeProperty(element, `--${GetBaseClass()}-measure-height`, size?.height);
        }
    }, []);

    // We use both useTimeout and requestAnimationFrame for timing certain things --
    // raf is used for changing from init to transition (would use queueMicrotask but it can't be cancelled)
    // setTimeout is used for changing from transition to finalize (as a backup in case transitionend doesn't fire)
    //
    // In order to avoid stale callbacks running (i.e. when we rapidly switch between visible and not)
    // we need to make sure we accurately cancel anything that can change our state on a delay.
    //
    // Also of note, we store "(f) => window.clearTimeout(f)" instead of just "window.clearTimeout" because
    // of the implicit window object -- problems with a missing `this` object and all that nonsense.
    const timeoutHandle = useRef<number>(-1);
    const timeoutClearFunction = useRef<(typeof cancelAnimationFrame) | (typeof clearTimeout) | null>(null);

    /**
     * Any time the state changes, there's some logic we need to run:
     * 
     * * If we're changing to an `init` phase, update the classes, then wait a moment and then change to the `transition` phase.
     * * If we're changing to a `transition` phase, update the classes, then wait until the transition completes, then change to the `finalize` phase.
     * 
     * Any change in state or classes/styles does not implicitly cause a re-render.
     */
    const onStateChange = useCallback<OnPassiveStateChange<TransitionState | null, undefined>>((nextState, prevState, reason) => {
        if (nextState == null)
            return;

        const [nextDirection, nextPhase] = parseState(nextState);
        const element = getElement();

        // Make sure no stale change code ever runs
        if (timeoutHandle.current >= 0 && timeoutClearFunction.current)
            timeoutClearFunction.current(timeoutHandle.current);

        // Handle inert props/property
        const exitVisibility = getExitVisibility();
        if (exitVisibility) {
            const inert = (exitVisibility == "inert" && (nextDirection == "exit" && nextPhase == "finalize") ? true : undefined);
            if (inert)
                (otherProps.current as any).inert = true;
            else
                delete otherProps.current["inert" as never];

            if (element)
                element.inert = (inert || false);
        }

        onVisibilityChange?.(nextDirection == "enter" || (nextDirection == "exit" && nextPhase != "finalize"));

        updateClasses(element, nextDirection, nextPhase);
        if (element && (nextPhase == "init" || nextPhase == "transition"))
            forceReflow(element);



        switch (nextPhase) {
            case "measure": {
                if (element)
                    measureElementAndUpdateProperties(element, true);
                //setState(`${nextDirection}-init`);
                updateClasses(element, nextDirection, "init");
                if (element)
                    forceReflow(element);

                // !!Intentional fall-through!!
            }
            case "init": {
                timeoutHandle.current = requestAnimationFrame(() => { setState(`${nextDirection}-transition`); });
                timeoutClearFunction.current = (f: number) => cancelAnimationFrame(f)
                break;
            }
            case "transition": {
                timeoutHandle.current = setTimeout(() => {
                    handleTransitionFinished();
                }, getTimeoutDuration(element) * 1.5);
                timeoutClearFunction.current = (f: number) => clearTimeout(f)
                break;
            }
            case "finalize": {
                // Nothing to do or schedule or anything -- we just update our classes and we're done.
                timeoutClearFunction.current = null;    // Does this make it more or less clear?

                break;
            }
            default: {
                debugger; // Intentional
                console.log(`Invalid state used in transition: ${nextState}. Previous state was ${prevState ?? "null"}`);
                break;
            }
        }
    }, []);

    const [getState, setState] = usePassiveState<TransitionState | null, undefined>(onStateChange, returnNull, runImmediately);


    // When we mount, and every time thereafter that `show` changes,
    // change our current state according to that `show` value.
    useLayoutEffect(() => {

        // If `show` is null, then we don't change anything.
        if (show == null)
            return;

        // `show` is true or false (as opposed to null).
        // If this is our first time seeing a non-null value, 
        // then remove the class that indicates the no transition logic has started.
        // (Because this is useLayoutEffect, it will take effect before the class's effects are painted)
        if (!hasMounted.current) {
            classNames.current.delete(`${GetBaseClass()}-pending`);
            const element = getElement();
            if (element) {
                element.classList.remove(`${GetBaseClass()}-pending`);
                // Because the pending class often makes this hidden or d-none, 
                // force a reflow juuust to be safe.
                forceReflow(element);
            }
        }

        const currentState = getState();
        let nextPhase: TransitionPhase = measure ? "measure" : "init";
        if (currentState) {
            const [currentDirection, currentPhase] = parseState(currentState);
            if (currentPhase != "finalize")
                nextPhase = "transition";
        }

        // Note: the setState change handler runs immediately with no debounce.
        if (show) {
            if (hasMounted.current || animateOnMount)
                setState(`enter-${nextPhase}`);

            else
                setState("enter-finalize");

        }
        else {
            if (hasMounted.current || animateOnMount)
                setState(`exit-${nextPhase}`);
            else
                setState("exit-finalize");
        }

        hasMounted.current = true;
    }, [measure, show]);


    if (duration != null)
        cssProperties.current[`--${GetBaseClass()}-duration`] = duration + "ms";
    else
        delete cssProperties.current[`--${GetBaseClass()}-duration`];



    // TODO
    const inlineDirection = null;
    const blockDirection = null;



    // No matter what delayMountUntilShown is,
    // once we've rendered our children once, 
    // ensure that we don't unmount them again and waste all that work.
    // (If you really need this you can just unmount the entire transition itself)
    const definitelyShouldMountChildren = (show || !delayMountUntilShown);
    const hasRenderedChildren = useRef(false);
    const renderChildren = definitelyShouldMountChildren || hasRenderedChildren.current;
    useEffect(() => {
        if (definitelyShouldMountChildren)
            hasRenderedChildren.current ||= true;
    }, [hasRenderedChildren.current ? false : definitelyShouldMountChildren]);


    const childrenIsVnode = (children && (children as VNode).type && (children as VNode).props);
    const finalProps = useMergedProps<E>(p, propsStable, otherProps.current, {
        className: [
            ...classNames.current,
            `${GetBaseClass()}-ev-${exitVisibility}`,
            `${GetBaseClass()}-inline-direction-${inlineDirection ?? "ltr"}`,
            `${GetBaseClass()}-block-direction-${blockDirection ?? "ttb"}`
        ].join(" "),
        style: cssProperties.current
    }, childrenIsVnode ? { ref: (children as VNode).ref, ...(children as VNode).props } : {});



    const context = useRef({ getAnimateOnMount: returnFalse }).current;

    let modifiedChildren: VNode;

    if (childrenIsVnode) {
        modifiedChildren = <SwappableContext.Provider value={context}>{cloneElement(children as VNode, finalProps)}</SwappableContext.Provider>
    }
    else {
        modifiedChildren = <SwappableContext.Provider value={context}><span {...finalProps as h.JSX.HTMLAttributes<any>}>{children}</span></SwappableContext.Provider>
    }



    return renderChildren ? modifiedChildren : null;
}



function forceReflow<E extends HTMLElement>(e: E) {

    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    const p = (globalThis as any)._dummy;
    (globalThis as any)._dummy = e.getBoundingClientRect();
    (globalThis as any)._dummy = e.style.opacity;
    (globalThis as any)._dummy = e.style.transform;
    (globalThis as any)._dummy = p;
    return e;
}
