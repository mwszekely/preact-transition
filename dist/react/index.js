import { createContext, useContext, useCallback, useEnsureStability, usePassiveState, useManagedChildren, useChildrenFlag, useMemoObject, useMemo, useState, useManagedChild, useLayoutEffect, assertEmptyObject, useStableGetter, useStableCallback, useRefElement, useRef, returnNull, runImmediately, useEffect, useMergedProps, returnFalse, cloneElement, forwardRef, memo } from 'preact-prop-helpers/react';
import { clsx } from 'clsx';
import { jsx } from 'react/jsx-runtime';
import { memoize } from 'lodash-es';

function getExclusiveTransitionContextPrememoization(exclusivityKey) {
    if (exclusivityKey == null)
        return null;
    return createContext(null);
}
const SwappableContext = createContext({ getAnimateOnMount: () => false });
/**
 * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
 *
 * If
 */
const GetExclusiveTransitionContext = memoize(getExclusiveTransitionContextPrememoization);
const CssClassContext = createContext({
    GetBaseClass: () => "ptl",
    GetEnterClass: () => "n",
    GetExitClass: () => "x",
    GetMeasureClass: () => "m",
    GetInitClass: () => "i",
    GetTransitionClass: () => "t",
    GetFinalizeClass: () => "f",
});
function useCssClasses() {
    const { GetBaseClass, GetEnterClass, GetExitClass, GetMeasureClass, GetInitClass, GetTransitionClass, GetFinalizeClass } = useContext(CssClassContext);
    const GetDirectionClass = useCallback((direction) => { switch (direction) {
        case "enter": return GetEnterClass();
        case "exit": return GetExitClass();
    } }, []);
    const GetPhaseClass = useCallback((phase) => { switch (phase) {
        case "measure": return GetMeasureClass();
        case "init": return GetInitClass();
        case "transition": return GetTransitionClass();
        case "finalize": return GetFinalizeClass();
    } }, []);
    return {
        GetBaseClass,
        GetEnterClass,
        GetExitClass,
        GetMeasureClass,
        GetInitClass,
        GetTransitionClass,
        GetFinalizeClass,
        GetDirectionClass,
        GetPhaseClass
    };
}

let globalCount = -1;
function ExclusiveTransitionProvider({ exclusivityKey, children }) {
    useEnsureStability("ExclusiveTransitionProvider", exclusivityKey);
    const [getNextIndexInLine, setNextIndexInLine] = usePassiveState(null);
    const { context, managedChildrenReturn: { getChildren } } = useManagedChildren({ managedChildrenParameters: {} });
    const { changeIndex, getCurrentIndex } = useChildrenFlag({
        getChildren,
        closestFit: false,
        initialIndex: null,
        onIndexChange: null,
        setAt: useCallback((m, v) => { m.setExclusivelyOpen(v); }, []),
        getAt: useCallback((m) => m.getExclusivelyOpen(), []),
        isValid: useCallback((_m) => { return true; }, []),
        onClosestFit: null
    });
    const onVisibilityChange = useCallback((index, visible) => {
        const nextInLine = getNextIndexInLine();
        const currentInLine = getCurrentIndex();
        if (visible == "show" && index != currentInLine) {
            /**
             * When a child transition shows itself initially
             * (i.e. requests itself to be the exclusive transition)
             * we either let it open immediately if there's no one finishing their exit,
             * or wait until that aforementioned exit has finished.
             */
            if (currentInLine == null) {
                changeIndex(index);
            }
            else {
                getChildren().getAt(currentInLine)?.forceClose?.();
                setNextIndexInLine(index);
            }
        }
        else if (visible == "hidden") {
            /**
             * When a child transition has finished its exit transition,
             * make sure that if someone requested to be shown in the meantime
             * that we do so.
             */
            if (nextInLine != null) {
                changeIndex(nextInLine);
                setNextIndexInLine(null);
            }
            else {
                changeIndex(null);
            }
        }
    }, []);
    const context2 = useMemoObject({
        ...context,
        exclusiveTransitionContext: useMemoObject({
            exclusivityKey,
            onVisibilityChange,
        })
    });
    const ExclusiveTransitionContext = GetExclusiveTransitionContext(exclusivityKey);
    return (ExclusiveTransitionContext == null) ? (children ?? null) : jsx(ExclusiveTransitionContext.Provider, { value: context2, children: children });
}
function useExclusiveTransition({ transitionParameters: { show }, exclusiveTransitionParameters: { forceClose, exclusivityKey } }) {
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c ? useContext(c) : null;
    const index = useMemo(() => { globalCount += 1; return (globalCount).toString(); }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState(!!show);
    useManagedChild({ context, info: { index, getExclusivelyOpen, setExclusivelyOpen, forceClose } });
    const parentOnVisChange = context?.exclusiveTransitionContext.onVisibilityChange;
    const onVisibilityChange = useCallback((visible) => {
        parentOnVisChange?.(index, visible == false ? "hidden" : "show");
    }, [parentOnVisChange, index]);
    useLayoutEffect(() => {
        if (show)
            parentOnVisChange?.(index, "show");
    }, [show, parentOnVisChange, index]);
    return {
        exclusiveTransitionReturn: {
            isExclusive: (context != null),
            exclusivelyOpen,
            setExclusivelyOpen,
            getExclusivelyOpen,
            onVisibilityChange
        }
    };
}

function getTimeoutDuration(element) {
    return Math.max(...(window.getComputedStyle(element || document.body).getPropertyValue(`transition-duration`)).split(",").map(str => {
        if (str.endsWith("ms"))
            return +str.substring(0, str.length - 2);
        if (str.endsWith("s"))
            return (+str.substring(0, str.length - 1)) * 1000;
        return 1000;
    }));
}
function parseState(nextState) {
    return nextState.split("-");
}
/**
 * Provide props that can be used to animate a transition.
 *
 * @compositeParams
 */
function useTransition({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, easing, easingIn, easingOut, onVisibilityChange, ...void2 }, exclusiveTransitionParameters: { exclusivityKey, ...void3 }, refElementParameters, ...void1 }) {
    useEnsureStability("useTransition", onVisibilityChange);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const { getAnimateOnMount } = useContext(SwappableContext);
    exitVisibility ||= "hidden";
    animateOnMount ??= getAnimateOnMount();
    measure ??= false;
    const getExitVisibility = useStableGetter(exitVisibility);
    const { GetBaseClass, GetEnterClass, GetExitClass, GetMeasureClass, GetInitClass, GetTransitionClass, GetFinalizeClass, GetDirectionClass, GetPhaseClass } = useCssClasses();
    const getMeasure = useStableGetter(measure);
    const { exclusiveTransitionReturn: { exclusivelyOpen, isExclusive, onVisibilityChange: exclusiveTransitionVisibilityChange } } = useExclusiveTransition({
        transitionParameters: { show },
        exclusiveTransitionParameters: { exclusivityKey, forceClose: useStableCallback(() => { internalOnShowChanged(false, getMeasure()); }) }
    });
    if (isExclusive) {
        show = (show && exclusivelyOpen);
    }
    const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters });
    const cssProperties = useRef({});
    const classNames = useRef(new Set([
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
    }, []);
    const otherProps = useRef({
        onTransitionEnd: (e) => {
            if (e.target == getElement() && e.elapsedTime) {
                handleTransitionFinished();
            }
        }
    });
    const hasMounted = useRef(false);
    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    const updateClasses = useCallback((element, direction, phase) => {
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
    const updateSizeProperty = useCallback((element, varName, value) => {
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
     *
     * TODO: This is only used once and could/should be inlined
     */
    const measureElementAndUpdateProperties = useCallback((element, measure) => {
        if (element) {
            let size = null;
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
    const timeoutHandle = useRef(-1);
    const timeoutClearFunction = useRef(null);
    /**
     * Any time the state changes, there's some logic we need to run:
     *
     * * If we're changing to an `init` phase, update the classes, then wait a moment and then change to the `transition` phase.
     * * If we're changing to a `transition` phase, update the classes, then wait until the transition completes, then change to the `finalize` phase.
     *
     * Any change in state or classes/styles does not implicitly cause a re-render.
     */
    const onStateChange = useCallback((nextState, prevState, _reason) => {
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
                otherProps.current.inert = true;
            else
                delete otherProps.current["inert"];
            if (element)
                element.inert = (inert || false);
        }
        const isBeingPainted = (nextDirection == "enter" || (nextDirection == "exit" && nextPhase != "finalize"));
        onVisibilityChange?.(isBeingPainted);
        exclusiveTransitionVisibilityChange?.(isBeingPainted);
        updateClasses(element, nextDirection, nextPhase);
        if (element && (nextPhase == "init" || nextPhase == "transition"))
            forceReflow(element);
        switch (nextPhase) {
            case "measure": {
                if (element)
                    measureElementAndUpdateProperties(element, true);
                updateClasses(element, nextDirection, "init");
                if (element)
                    forceReflow(element);
                // !!Intentional fall-through!!
                /* eslint-disable no-fallthrough */
            }
            case "init": {
                timeoutHandle.current = requestAnimationFrame(() => { setState(`${nextDirection}-transition`); });
                timeoutClearFunction.current = (f) => cancelAnimationFrame(f);
                break;
            }
            case "transition": {
                timeoutHandle.current = setTimeout(() => {
                    handleTransitionFinished();
                }, getTimeoutDuration(element) * 1.5);
                timeoutClearFunction.current = (f) => clearTimeout(f);
                break;
            }
            case "finalize": {
                // Nothing to do or schedule or anything -- we just update our classes and we're done.
                timeoutClearFunction.current = null; // Does this make it more or less clear?
                break;
            }
            default: {
                /* eslint-disable no-debugger */
                debugger; // Intentional
                console.log(`Invalid state used in transition: ${nextState}. Previous state was ${prevState ?? "null"}`);
                break;
            }
        }
    }, []);
    const [getState, setState] = usePassiveState(onStateChange, returnNull, runImmediately);
    // When we mount, and every time thereafter that `show` changes,
    // change our current state according to that `show` value.
    useLayoutEffect(() => internalOnShowChanged(show, measure), [measure, show]);
    // This has no dependencies and is relied on in two different areas
    function internalOnShowChanged(show, measure) {
        // If `show` is null, then we don't change anything.
        if (show == null)
            return;
        // (If `show` is true/false, we'll remove the CSS classes during `onChange`)
        const currentState = getState();
        let nextPhase = measure ? "measure" : "init";
        if (currentState) {
            const [_currentDirection, currentPhase] = parseState(currentState);
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
    }
    if (duration != null)
        cssProperties.current[`--${GetBaseClass()}-duration`] = duration + "ms";
    else
        delete cssProperties.current[`--${GetBaseClass()}-duration`];
    easingIn ??= easing;
    easingOut ??= easing;
    if (easingOut != null)
        cssProperties.current[`--${GetBaseClass()}-${GetExitClass()}-timing-function`] = easingOut;
    else
        delete cssProperties.current[`--${GetBaseClass()}-${GetExitClass()}-timing-function`];
    if (easingIn != null)
        cssProperties.current[`--${GetBaseClass()}-${GetEnterClass()}-timing-function`] = easingIn;
    else
        delete cssProperties.current[`--${GetBaseClass()}-${GetEnterClass()}-timing-function`];
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
    const childrenIsVnode = (children && children.type && children.props);
    const finalProps = useMergedProps(p, propsStable, otherProps.current, {
        className: [
            ...classNames.current,
            `${GetBaseClass()}`,
            `${GetBaseClass()}-ev-${exitVisibility}`,
            `${GetBaseClass()}-inline-direction-${"ltr"}`,
            `${GetBaseClass()}-block-direction-${"ttb"}`
        ].join(" "),
        style: cssProperties.current
    }, childrenIsVnode ? { ref: children.ref, ...children.props } : {});
    const resetContext = useRef({ getAnimateOnMount: returnFalse }).current;
    let modifiedChildren;
    if (childrenIsVnode) {
        modifiedChildren = cloneElement(children, finalProps);
    }
    else {
        modifiedChildren = jsx("span", { ...finalProps, children: children });
    }
    modifiedChildren = jsx(SwappableContext.Provider, { value: resetContext, children: modifiedChildren });
    return renderChildren ? modifiedChildren : null;
}
function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    const p = globalThis._dummy;
    globalThis._dummy = e.getBoundingClientRect();
    globalThis._dummy = e.style.opacity;
    globalThis._dummy = e.style.transform;
    globalThis._dummy = p;
    return e;
}

/**
 * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
 * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
 *
 * TODO: Still needed?
 */
function forwardElementRef(Component) {
    const ForwardedComponent = forwardRef(Component);
    return ForwardedComponent;
}
/**
 * Useful in particular for Slides with a Tab Panel --
 * if we do Math.sign(currentIndex - slideIndex), it
 * transitions nicely in the expected direction,
 * but we need to "remember" which direction to use
 * when it's the current panel (and the difference is 0)
 */
function useLastNonNullValue(value) {
    const lastNonNullValue = useRef(null);
    useEffect(() => {
        if (value != null)
            lastNonNullValue.current = value;
    }, [value]);
    return value ?? lastNonNullValue.current;
}

function useBasePropsClip({ clipParameters: { clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline } }) {
    const { GetBaseClass } = useCssClasses();
    return ({
        className: clsx(`${GetBaseClass()}-clip`),
        style: {
            [`--${GetBaseClass()}-clip-origin-inline`]: (clipOriginInline ?? clipOrigin ?? 0.5),
            [`--${GetBaseClass()}-clip-origin-block`]: (clipOriginBlock ?? clipOrigin ?? 0),
            [`--${GetBaseClass()}-clip-min-inline`]: (clipMinInline ?? clipMin ?? 1),
            [`--${GetBaseClass()}-clip-min-block`]: (clipMinBlock ?? clipMin ?? 0),
        },
    });
}
const Clip = memo(forwardElementRef(function Clip({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsClip({ clipParameters: { clipMin, clipMinInline, clipMinBlock, clipOrigin, clipOriginInline, clipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
function useBasePropsFade({ fadeParameters: { fadeMin, fadeMax } }) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-fade`,
        style: {
            [`--${GetBaseClass()}-fade-min`]: (fadeMin ?? 0),
            [`--${GetBaseClass()}-fade-max`]: (fadeMax ?? 1),
        }
    };
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Fade effect.
 *
 * Note that while it is absolutely possible to wrap another transition with `<Fade>`,
 * there will be some duplicate code run as two `<Transitionable>` components end up operating on the same element.
 * It's generally recommended to either use the components that include a combined fade effect,
 * or just directly a `<Transitionable>` on your own.
 *
 * @see `Transitionable`
 */
const Fade = memo(forwardElementRef(function Fade({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, fadeMin, fadeMax, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps({ ref, ...rest }, useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }))
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

const ClipFade = memo(forwardElementRef(function ClipFade({ delayMountUntilShown, exclusivityKey, easing, easingIn, easingOut, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsClip({ clipParameters: { clipMin, clipMinInline, clipMinBlock, clipOrigin, clipOriginInline, clipOriginBlock } }), useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 * Be sure to merge these returned props with whatever the user passed in.
 *
 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
 *
 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
 */
function useBasePropsCollapse({ collapseParameters: { minBlockSize } }) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-collapse`,
        style: {
            [`--${GetBaseClass()}-collapse-min-block`]: minBlockSize ?? 0
        }
    };
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
 *
 * *Important*: This component is *not* efficient for the browser to animate!
 * Make sure you do testing on lower power devices, or prefer a lighter
 * alternative, like `<Clip>`.
 *
 * @see `Transitionable`
 */
const Collapse = memo(forwardElementRef(function Collapse({ show, exclusivityKey, easing, easingIn, easingOut, duration, delayMountUntilShown, minBlockSize, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: true,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsCollapse({ collapseParameters: { minBlockSize } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

const CollapseFade = memo(forwardElementRef(function CollapseFade({ show, exclusivityKey, easing, easingIn, easingOut, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: true,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsCollapse({ collapseParameters: { minBlockSize } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

/**
 * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
function useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-flip`,
        style: {
            [`--${GetBaseClass()}-flip-origin-inline`]: `${(flipOriginInline ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-origin-block`]: `${(flipOriginBlock ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-angle-inline`]: `${(useLastNonNullValue(flipAngleInline) ?? 0)}deg`,
            [`--${GetBaseClass()}-flip-angle-block`]: `${(useLastNonNullValue(flipAngleBlock) ?? 0)}deg`,
            [`--${GetBaseClass()}-perspective`]: `${(flipPerspective ?? 800)}px`
        }
    };
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
 *
 * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
 * with `1` being `100%` of the element's width or height.
 *
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * exclusivityKey allows for convenient setups inside of a `SwapContainer`
 * (`flipInline={index - selectedIndex}` or similar.)
 *
 * @see `Transitionable`
 */
const Flip = memo(forwardElementRef(function Flip({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

const FlipFade = memo(forwardElementRef(function FlipFade({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return (useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsFlip({ flipParameters: { flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    }));
}));

/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
function useBasePropsSlide({ slideParameters: { slideTargetInline, slideTargetBlock } }) {
    slideTargetInline = useLastNonNullValue(slideTargetInline);
    slideTargetBlock = useLastNonNullValue(slideTargetBlock);
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-slide`,
        style: {
            [`--${GetBaseClass()}-slide-target-inline`]: `${(slideTargetInline ?? 0)}`,
            [`--${GetBaseClass()}-slide-target-block`]: `${(slideTargetBlock ?? 0)}`
        }
    };
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Slide effect.
 *
 * Provide the direction the element will travel in with `slideInline` and `slideBlock`,
 * with `1` being `100%` of the element's width or height.
 *
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * which allows for convenient setups inside of a `SwapContainer`
 * (`slideInline={index - selectedIndex}` or similar.)
 *
 * @see `Transitionable`
 */
const Slide = memo(forwardElementRef(function Slide({ duration, exclusivityKey, easing, easingIn, easingOut, onVisibilityChange, slideTargetInline, slideTargetBlock, show, animateOnMount, exitVisibility, delayMountUntilShown, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            easing,
            easingIn,
            easingOut,
            onVisibilityChange,
            propsIncoming: useMergedProps(useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

const SlideFade = memo(forwardElementRef(function SlideFade({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
function useBasePropsZoom({ zoomParameters: { zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock } }) {
    const { GetBaseClass } = useCssClasses();
    return ({
        className: `${GetBaseClass()}-zoom`,
        style: {
            [`--${GetBaseClass()}-zoom-origin-inline`]: `${(zoomOriginInline ?? zoomOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-zoom-origin-block`]: `${(zoomOriginBlock ?? zoomOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-zoom-min-inline`]: `${(zoomMinInline ?? zoomMin ?? 0)}`,
            [`--${GetBaseClass()}-zoom-min-block`]: `${(zoomMinBlock ?? zoomMin ?? 0)}`,
        },
    });
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
const Zoom = memo(forwardElementRef(function Zoom({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return (useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    }));
}));

const SlideZoomFade = memo(forwardElementRef(function SlideZoomFade({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, fadeMax, fadeMin, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

const SlideZoom = memo(forwardElementRef(function SlideZoom({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps({ ref, ...rest }, useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }))
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

/**
 * Creates a set of props that implement a swap container.
 * Be sure to merge these returned props with whatever the user passed in.
 */
function useCreateSwappableProps({ inline }, otherProps) {
    const { GetBaseClass } = useCssClasses();
    return useMergedProps({
        className: clsx(`${GetBaseClass()}-swap-container`, inline && `${GetBaseClass()}-swap-container-inline`)
    }, otherProps);
}
/**
 * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
 *
 * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
 *
 * If you pass a regular element (like a div) or other single component, then thee props and ref will be forwarded onto that element. Otherwise, all the children will be wrapped in a div or span depending on the `inline` prop.
 * @param param0
 * @returns
 */
const Swappable = memo(forwardElementRef(function Swappable({ children: c, inline, childrenAnimateOnMount, exclusivityKey, ...p }, ref) {
    let children = c;
    if (!children.type)
        children = (!inline ? jsx("div", { children: children }) : jsx("span", { children: children }));
    inline ??= typeof children.type === "string" && inlineElements.has(children.type);
    const transitionProps = useCreateSwappableProps({ inline }, { ...p, ref });
    const mergedWithChildren = useMergedProps(transitionProps, children.props);
    const animateOnMount = useRef(childrenAnimateOnMount ?? false);
    useEffect(() => {
        animateOnMount.current = true;
    }, []);
    const contextValue = useRef({ getAnimateOnMount: () => { return animateOnMount.current; } });
    let ret = cloneElement(children, mergedWithChildren);
    ret = (jsx(SwappableContext.Provider, { value: contextValue.current, children: ret }));
    if (exclusivityKey) {
        ret = (jsx(ExclusiveTransitionProvider, { exclusivityKey: exclusivityKey, children: ret }, exclusivityKey));
    }
    return ret;
}));
// If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
// Not perfect, but it's not supposed to be. `inline` is for perfect.
const inlineElements = new Set([
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr"
]);

const ZoomFade = memo(forwardElementRef(function ZoomFade({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return (useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    }));
}));

export { Clip, ClipFade, Collapse, CollapseFade, ExclusiveTransitionProvider, Fade, Flip, FlipFade, Slide, SlideFade, SlideZoom, SlideZoomFade, Swappable, Zoom, ZoomFade, useBasePropsClip, useBasePropsCollapse, useBasePropsFade, useBasePropsFlip, useBasePropsSlide, useBasePropsZoom, useCreateSwappableProps, useCssClasses, useTransition };
//# sourceMappingURL=index.js.map
