import { jsx as _jsx } from "preact/jsx-runtime";
import { cloneElement } from "preact";
import { assertEmptyObject, returnFalse, returnNull, runImmediately, useEnsureStability, useMergedProps, usePassiveState, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { useExclusiveTransition } from "./exclusive.js";
import { SwappableContext, useCssClasses } from "./util/context.js";
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
export function useTransition({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, easing, easingIn, easingOut, onVisibilityChange, ...void2 }, exclusiveTransitionParameters: { exclusivityKey, ...void3 }, refElementParameters, ...void1 }) {
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
    const onStateChange = useCallback((nextState, prevState, reason) => {
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
                //setState(`${nextDirection}-init`);
                updateClasses(element, nextDirection, "init");
                if (element)
                    forceReflow(element);
                // !!Intentional fall-through!!
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
    // This has no dependences and is relied on in two different areas
    function internalOnShowChanged(show, measure) {
        // If `show` is null, then we don't change anything.
        if (show == null)
            return;
        // (If `show` is true/false, we'll remove the CSS classes during `onChange`)
        const currentState = getState();
        let nextPhase = measure ? "measure" : "init";
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
    const childrenIsVnode = (children && children.type && children.props);
    const finalProps = useMergedProps(p, propsStable, otherProps.current, {
        className: [
            ...classNames.current,
            `${GetBaseClass()}`,
            `${GetBaseClass()}-ev-${exitVisibility}`,
            `${GetBaseClass()}-inline-direction-${inlineDirection ?? "ltr"}`,
            `${GetBaseClass()}-block-direction-${blockDirection ?? "ttb"}`
        ].join(" "),
        style: cssProperties.current
    }, childrenIsVnode ? { ref: children.ref, ...children.props } : {});
    const resetContext = useRef({ getAnimateOnMount: returnFalse }).current;
    let modifiedChildren;
    if (childrenIsVnode) {
        modifiedChildren = _jsx(SwappableContext.Provider, { value: resetContext, children: cloneElement(children, finalProps) });
    }
    else {
        modifiedChildren = _jsx(SwappableContext.Provider, { value: resetContext, children: _jsx("span", { ...finalProps, children: children }) });
    }
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
//# sourceMappingURL=transitionable.js.map