import { cloneElement, ComponentChildren, h, Ref, VNode } from "preact";
import { OnPassiveStateChange, returnNull, useEnsureStability, useLogicalDirection, useMergedProps, usePassiveState, useRefElement, useStableGetter } from "preact-prop-helpers";
import { forwardRef } from "preact/compat";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";

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
     * 
     * Cannot change while the element is mounted; it **MUST** remain stable throughout the component's lifetime.
     */
    measure: boolean;

    /**
     * The base of all CSS classes used. 
     * 
     * Cannot change while the element is mounted; it **MUST** remain stable throughout the component's lifetime.
     */
    classBase?: string;

    /**
     * Can also be provided via CSS properties, but this handles `classBase` properly
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
    classBase ||= defaultClassBase(classBase);
    e ||= "hidden"
    a ??= false;
    m ??= false;
    const getMeasure = useStableGetter(m);
    const getDurationOverride = useStableGetter(d);
    useEnsureStability("useTransition", classBase);
    const getExitVisibility = useStableGetter(e);

    const { refElementReturn: { getElement, propsStable } } = useRefElement<E>({ refElementParameters: {} })
    const cssProperties = useRef<h.JSX.CSSProperties>({});
    const classNames = useRef(new Set<string>());
    const handleTransitionFinished = useCallback(() => {
        const state = getState();
        console.assert(!!state);
        if (state) {
            const [direction, phase] = parseState(state);
            if (phase == "transition") {
                setState(`${direction}-finalize`);
                if (timeoutHandle.current > 0) {
                    clearTimeout(timeoutHandle.current);
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

        console.log("updating classes to " + direction + " " + phase);

        const exitVisibility = getExitVisibility();

        const allClassesToRemove = [
            `${classBase}-enter`, `${classBase}-exit`,
            `${classBase}-enter-init`, `${classBase}-enter-transition`, `${classBase}-enter-finalize`,
            `${classBase}-exit-init`, `${classBase}-exit-transition`, `${classBase}-exit-finalize`,
            `${classBase}-ev-${"inert"}`,
            `${classBase}-ev-${"removed"}`,
            `${classBase}-ev-${"hidden"}`,
            `${classBase}-ev-${"visible"}`
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
        console.log(`Updating measure properties (width: ${nextSize?.width ?? "null"})`)
        updateSizeProperty(element, `--${classBase}-measure-top`, nextSize?.top);
        updateSizeProperty(element, `--${classBase}-measure-left`, nextSize?.left);
        updateSizeProperty(element, `--${classBase}-measure-width`, nextSize?.width);
        updateSizeProperty(element, `--${classBase}-measure-height`, nextSize?.height);
    }, []);

    /**
     * Adds the "measure" variables to the element if requested.
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

    // When a transition starts, we read the transition-duration and use it as an emergency timeout in case onTransitionEnd doesn't work.
    // So we need a way to cancel that timeout if needed.
    const timeoutHandle = useRef<number>(-1);

    /**
     * Any time the state changes, there's some logic we need to run:
     * 
     * * If we're changing to an `init` phase, wait a moment and then change to the `transition` phase.
     * * If we're changing to a `transition` phase, wait until the transition completes, then change to the `finalize` phase.
     * 
     * In addition, any change results in the classes/styles updating as necessary without implicitly causing a re-render.
     */
    const onStateChange = useCallback<OnPassiveStateChange<TransitionState | null, undefined>>((nextState, prevState, reason) => {
        if (nextState == null)
            return;

        console.log(`onStateChage from ${prevState ?? "null"} to ${nextState}`)

        const [nextDirection, nextPhase] = parseState(nextState);
        const element = getElement();
        const measure = getMeasure();
        const durationOverride = getDurationOverride();
        if (durationOverride != null) {
            cssProperties.current[`--${classBase}-duration`] = durationOverride;
            element?.style.setProperty(`--${classBase}-duration`, `${durationOverride}`);
        }
        if (measure && element && nextPhase == "init") {
            // We actually need all these reflows, either to make things like block-size work, or to make things like opacity work.
            console.log("Adding measure")
            element.classList.add(`${classBase}-measure`);
            updateClasses(element, nextDirection, "finalize");
            forceReflow(element);   // By measuring the element below we implicitly reflow, but this is a reminder that it happens.
            measureElementAndUpdateProperties(element, measure);
            updateClasses(element, nextDirection, nextPhase);
            forceReflow(element);
            console.log("Removing measure")
            element.classList.remove(`${classBase}-measure`);
            forceReflow(element);
        }
        else {
            updateClasses(element, nextDirection, nextPhase);
        }

        const exitVisibility = getExitVisibility();
        if (exitVisibility) {
            const inert = (exitVisibility == "inert" && nextDirection == "exit" ? true : false);
            (otherProps.current as {} as { inert?: boolean }).inert = inert;
            if (element)
                element.inert = inert;
        }
        switch (nextPhase) {
            case "init": {
                requestAnimationFrame(() => { setState(`${nextDirection}-transition`); });
                break;
            }
            case "transition": {
                if (timeoutHandle.current >= 0)
                    clearTimeout(timeoutHandle.current);
                timeoutHandle.current = setTimeout(() =>  { handleTransitionFinished(); }, getTimeoutDuration(element) * 1.5);
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

    const [getState, setState] = usePassiveState<TransitionState | null, undefined>(onStateChange, returnNull);


    useLayoutEffect(() => {
        if (v === null)
            return;

        const currentState = getState();
        let nextPhase: TransitionPhase = "init";
        if (currentState) {
            const [currentDirection, currentPhase] = parseState(currentState);
            if (currentPhase != "finalize")
                nextPhase = "transition";
        }

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

    // TODO
    const inlineDirection = null;
    const blockDirection = null;

    return {
        props: useMergedProps<E>(propsStable, {
            className: [
                ...classNames.current,

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

export interface TransitionableProps<E extends Element> {
    transition: UseTransitionProps;
    props: h.JSX.HTMLAttributes<E>;
}

export function Transitionable<E extends HTMLElement>({ transition: { animateOnMount, duration, classBase, exitVisibility, measure, show }, props: { children, ...props } }: TransitionableProps<E>) {
    const { props: transitionProps } = useTransition<E>({
        animateOnMount,
        classBase,
        duration,
        exitVisibility,
        measure,
        show
    });

    const childrenIsVnode = (children && (children as VNode).type && (children as VNode).props);
    const finalProps = useMergedProps<E>(props, transitionProps, childrenIsVnode ? { ref: (children as VNode).ref, ...(children as VNode).props } : {});
    if (childrenIsVnode) {
        return cloneElement(children as VNode, finalProps)
    }
    else {
        return <span {...finalProps as h.JSX.HTMLAttributes<any>}>{children}</span>
    }
}

let dummy: any;
function forceReflow<E extends HTMLElement>(e: E) {
    console.log("Forcing reflow")
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    dummy = e.getBoundingClientRect();
    dummy = e.style.opacity;
    dummy = e.style.transform;
    return e;
}
