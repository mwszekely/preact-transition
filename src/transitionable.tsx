import { forwardElementRef } from "./forward-element-ref";
import { cloneElement, h, VNode, Ref, createContext } from "preact";
import { OnPassiveStateChange, returnNull, useEnsureStability, useMergedProps, usePassiveState, useRefElement, useStableGetter, useState } from "preact-prop-helpers";
import { runImmediately } from "preact-prop-helpers/preact-extensions/use-passive-state";
import { memo } from "preact/compat";
import { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { SwappableContext } from "./context";

export type TransitionPhase = 'init' | 'transition' | 'finalize';
export type TransitionDirection = 'enter' | 'exit';
export type TransitionState = `${TransitionDirection}-${TransitionPhase}`;


export function defaultClassBase(given: string | null | undefined) {
    return given ?? "ptl";
}


export interface UseTransitionProps {
    /**
     * If true, this element should make itself visible.
     */
    show: boolean | null;
    /**
     * Controls whether or not the element mounts in an already-transitioned appearance or not.
     */
    animateOnMount?: boolean;

    /**
     * Certain types of transitions require measuring the size of the element (namely collapse).
     * 
     * It incurs a reflow-based performance penalty every time `visible` changes when used.
     */
    measure: boolean;

    /**
     * The base of all CSS classes used. 
     * 
     * Cannot change while the element is mounted; it **MUST** remain stable throughout the component's lifetime.
     */
    classBase?: string;

    /**
     * Can also be provided via CSS properties (but this will match whatever `classBase` you use for you)
     */
    duration?: number;

    /**
     * After the element has finished its exit animation, what happens to it?
     * 
     * * `"removed"`: `display: none` is applied.
     * * `"hidden"`: `visibility: none` is applied.
     * * `"visible"`: No additional styling is applied.
     * * `"inert"`: No additional styling is applied, but the `inert` attribute is applied. You will likely need a polyfill to make this work on older browsers.
     */
    exitVisibility?: "inert" | "removed" | "hidden" | "visible";
}

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
export function useTransition<E extends HTMLElement>({ show: v, animateOnMount: a, measure: m, classBase, exitVisibility: e, duration: d }: UseTransitionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { getAnimateOnMount } = useContext(SwappableContext);
    classBase ||= defaultClassBase(classBase);
    e ||= "hidden"
    a ??= getAnimateOnMount();
    m ??= false;
    const getMeasure = useStableGetter(m);
    //const getDurationOverride = useStableGetter(d);
    useEnsureStability("useTransition", classBase);
    const getExitVisibility = useStableGetter(e);

    const { refElementReturn: { getElement, propsStable } } = useRefElement<E>({ refElementParameters: {} })
    const cssProperties = useRef<h.JSX.CSSProperties>({});
    const classNames = useRef(new Set<string>([
        // This is removed during useLayoutEffect on the first render
        // (at least once `show` is non-null)
        `${classBase}-pending`,
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

    // The very first time 
    const hasMounted = useRef(false);

    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    const updateClasses = useCallback((element: E | null, direction: TransitionDirection, phase: TransitionPhase) => {
        if (element == null)
            return;

        const exitVisibility = getExitVisibility();

        const allClassesToRemove = [
            `${classBase}-enter`, `${classBase}-exit`,
            `${classBase}-enter-init`, `${classBase}-enter-transition`, `${classBase}-enter-finalize`,
            `${classBase}-exit-init`, `${classBase}-exit-transition`, `${classBase}-exit-finalize`,
            `${classBase}-ev-${"inert"}`,
            `${classBase}-ev-${"removed"}`,
            `${classBase}-ev-${"hidden"}`,
            `${classBase}-ev-${"visible"}`,
            `${classBase}-pending`,
        ];
        const allClassesToAdd = [
            `${classBase}`,
            `${classBase}-${direction}`,
            `${classBase}-${direction}-${phase}`,
            `${classBase}-ev-${exitVisibility}`
        ];

        //(measure ? allClassesToAdd : allClassesToRemove).push(`${classBase}-measure`);

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
     * Updates all "measure" variables (or removes them)
     */
    const updateSizeProperties = useCallback((element: E, nextSize: DOMRectReadOnly | null) => {
        updateSizeProperty(element, `--${classBase}-measure-top`, nextSize?.top);
        updateSizeProperty(element, `--${classBase}-measure-left`, nextSize?.left);
        updateSizeProperty(element, `--${classBase}-measure-width`, nextSize?.width);
        updateSizeProperty(element, `--${classBase}-measure-height`, nextSize?.height);
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

            updateSizeProperties(element, size);
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
        setIsVisible(nextDirection == "enter" || (nextDirection == "exit" && nextPhase != "finalize"));
        const element = getElement();
        const measure = getMeasure();
        //const durationOverride = getDurationOverride();
        /*if (durationOverride != null) {
            cssProperties.current[`--${classBase}-duration`] = durationOverride + "ms";
            element?.style.setProperty(`--${classBase}-duration`, `${durationOverride}ms`);
        }*/
        if (measure && element && nextPhase == "init") {
            // We actually need all these reflows, either to make things like block-size work, or to make things like opacity work.
            element.classList.add(`${classBase}-measure`);
            updateClasses(element, nextDirection, "finalize");
            forceReflow(element);   // By measuring the element below we implicitly reflow, but this is a reminder that it happens.
            measureElementAndUpdateProperties(element, measure);
            updateClasses(element, nextDirection, nextPhase);
            forceReflow(element);
            element.classList.remove(`${classBase}-measure`);
            forceReflow(element);
        }
        else {
            updateClasses(element, nextDirection, nextPhase);
            // TODO: Unnecessary reflow?
            // It might only be necessary when changing from -init to -transition
            if (element)
                forceReflow(element);
        }

        const exitVisibility = getExitVisibility();
        if (exitVisibility) {
            const inert = (exitVisibility == "inert" && nextDirection == "exit" ? true : undefined);
            if (inert)
                (otherProps.current as any).inert = true;
            else
                delete otherProps.current["inert" as never];

            if (element)
                element.inert = (inert || false);
        }
        switch (nextPhase) {
            case "init": {
                if (timeoutHandle.current >= 0)
                    timeoutClearFunction.current?.(timeoutHandle.current);

                timeoutHandle.current = requestAnimationFrame(() => { setState(`${nextDirection}-transition`); });
                timeoutClearFunction.current = (f: number) => cancelAnimationFrame(f);
                break;
            }
            case "transition": {
                if (timeoutHandle.current >= 0)
                    timeoutClearFunction.current?.(timeoutHandle.current);

                timeoutHandle.current = setTimeout(() => {
                    handleTransitionFinished();
                }, getTimeoutDuration(element) * 1.5);
                timeoutClearFunction.current = (f: number) => clearTimeout(f);
                break;
            }
            case "finalize": {
                // Nothing to do or schedule or anything -- we just update our classes and we're done.

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
        if (v == null)
            return;

        // `show` is true or false (as opposed to null).
        // If this is our first time seeing a non-null value, 
        // then remove the class that indicates the no transition logic has started.
        // (Because this is useLayoutEffect, it will take effect before the class's effects are painted)
        if (!hasMounted.current) {
            classNames.current.delete(`${classBase}-pending`);
            const element = getElement();
            if (element) {
                element.classList.remove(`${classBase}-pending`);
                // Because the pending class often makes this hidden or d-none, 
                // force a reflow juuust to be safe.
                forceReflow(element);
            }
        }

        const currentState = getState();
        let nextPhase: TransitionPhase = "init";
        if (currentState) {
            const [currentDirection, currentPhase] = parseState(currentState);
            if (currentPhase != "finalize")
                nextPhase = "transition";
        }

        // Note: the setState change handler runs immediately with no debounce.
        if (v) {
            if (hasMounted.current || a)
                setState(`enter-${nextPhase}`);

            else
                setState("enter-finalize");

        }
        else {
            if (hasMounted.current || a)
                setState(`exit-${nextPhase}`);
            else
                setState("exit-finalize");
        }

        hasMounted.current = true;
    }, [v]);


    if (d != null)
        cssProperties.current[`--${classBase}-duration`] = d + "ms";
    else
        delete cssProperties.current[`--${classBase}-duration`];

    // TODO
    const inlineDirection = null;
    const blockDirection = null;

    return {
        isVisible,
        props: useMergedProps<E>(propsStable, {
            className: [
                ...classNames.current,
                `${classBase}-ev-${e}`,
                `${classBase}-inline-direction-${inlineDirection ?? "ltr"}`,
                `${classBase}-block-direction-${blockDirection ?? "ttb"}`
            ].join(" "),
            style: cssProperties.current,
            ...otherProps.current
        })
    }
}

/**
 * All attributes are merged, but autocomplete becomes really noisy trying to find the props that are relevant to the `Transitionable` itself. 
 * To avoid wading through a sea of event handlers and attributes no one ever uses, only the most common ones are shown.
 * 
 * Again, though, **all props are merged and forwarded, not just these ones!** You can use any/all of the usual attributes, including `onTransitionEnd`.
 */
export interface NonIntrusiveElementAttributes<E extends Element> extends Pick<h.JSX.HTMLAttributes<E>, "children" | "ref" | "style" | "class" | "className"> { }

export interface TransitionableProps<E extends Element> extends UseTransitionProps, h.JSX.HTMLAttributes<E> {
    delayMountUntilShown: boolean | undefined;
}

const IsVisibleContext = createContext(false);

export function useIsTransitionVisible() {
    return useContext(IsVisibleContext);
}

export const Transitionable = memo(forwardElementRef(function Transitionable<E extends HTMLElement>({ delayMountUntilShown, animateOnMount, duration, classBase, exitVisibility, measure, show, children, ...props }: TransitionableProps<E>, ref?: Ref<E>) {
    const { props: transitionProps, isVisible } = useTransition<E>({
        animateOnMount,
        classBase,
        duration,
        exitVisibility,
        measure,
        show
    });


    const childrenIsVnode = (children && (children as VNode).type && (children as VNode).props);
    const finalProps = useMergedProps<E>(props, transitionProps, { ...props, ref }, childrenIsVnode ? { ref: (children as VNode).ref, ...(children as VNode).props } : {});

    // No matter what delayMountUntilShown is,
    // once we've rendered our children once, 
    // ensure that we don't unmount them again and waste all that work.
    // (If you really need this you can just unmount the entire transition itself)
    const renderChildren = (show || !delayMountUntilShown);
    const hasRenderedChildren = useRef(false);
    useEffect(() => {
        if (renderChildren)
            hasRenderedChildren.current ||= true;
    }, [hasRenderedChildren.current ? false : renderChildren])

    if (!renderChildren && !hasRenderedChildren.current)
        return null;

    const context = useRef({ getAnimateOnMount: () => false }).current;

    let ret: VNode;

    if (childrenIsVnode) {
        ret = <SwappableContext.Provider value={context}>{cloneElement(children as VNode, finalProps)}</SwappableContext.Provider>
    }
    else {
        ret = <SwappableContext.Provider value={context}><span {...finalProps as h.JSX.HTMLAttributes<any>}>{children}</span></SwappableContext.Provider>
    }

    return (
        <IsVisibleContext.Provider value={isVisible}>{ret}</IsVisibleContext.Provider>
    )
}));

// This isn't actually publicly exported. It's just to try to make sure it's not optimized out.
// (TODO: Unneeded?)
export let _dummy: any;
function forceReflow<E extends HTMLElement>(e: E) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    _dummy = e.getBoundingClientRect();
    _dummy = e.style.opacity;
    _dummy = e.style.transform;
    return e;
}
