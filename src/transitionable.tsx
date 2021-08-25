import { default as clsx } from "clsx";
import { cloneElement, ComponentChildren, h, Ref, VNode } from "preact";
import { useLogicalDirection } from "preact-prop-helpers/use-logical-direction";
import { MergedProps, useMergedProps } from "preact-prop-helpers/use-merged-props";
//import { mergeStyles } from "./merge-style";
import { useRefElement } from "preact-prop-helpers/use-ref-element";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
//import mergeProps from "merge-props";

export type TransitionPhase = 'init' | 'transition' | 'finalize';
export type TransitionDirection = 'enter' | 'exit';
type TransitionState = `${TransitionDirection}-${TransitionPhase}`;

export interface CreateTransitionableProps<E extends HTMLElement> {

    /**
     * Whether the content is visible or not. True transitions the content in, otherwise it's transitioned out.
     */
    open: boolean | undefined;

    /**
     * The prefix string for all class names used in this library
     * @default "transition"
     */
    classBase?: string | undefined;

    /**
     * If true, the following CSS variables are provided on the element:
     * 
     * (assuming `classBase == "transition"`)
     * 
     * * `--${classBase}-surface-x`
     * * `--${classBase}-surface-y`
     * * `--${classBase}-surface-width`
     * * `--${classBase}-surface-height`
     * * `--${classBase}-surface-inline-inset`
     * * `--${classBase}-surface-block-inset`
     * * `--${classBase}-surface-inline-size`
     * * `--${classBase}-surface-block-size`
     * * `--${classBase}-transitioning-x`
     * * `--${classBase}-transitioning-y`
     * * `--${classBase}-transitioning-width`
     * * `--${classBase}-transitioning-height`
     * * `--${classBase}-transitioning-inline-inset`
     * * `--${classBase}-transitioning-block-inset`
     * * `--${classBase}-transitioning-inline-size`
     * * `--${classBase}-transitioning-block-size`
     */
    measure?: boolean | undefined;
    ref?: Ref<E> | undefined;


    /**
     * If true, an element that mounts with open=true will animate that opening.
     * 
     * Otherwise it won't.
     */
    animateOnMount?: boolean | undefined;

    /**
     * How long (in ms) the transition should last.
     * Default is whatever is provided via CSS.
     * 
     * This also controls the "emergency default timeout" just in case
     * onTransitionEnd never fires, in which case the default is 1000.
     * Use the CSS variable `--#{$transition-class-name}-duration` 
     * to just control the former.
     */
    duration?: number | undefined;

    /**
     * Whether hidden content should be styled as
     * * display: none
     * * visibility: hidden
     * * (no change, still visible)
     */
    exitVisibility?: "hidden" | "removed" | "visible" | undefined;

    /**
     * Callback that is called any time any part of the transition state changes.
     * Does not need to be constant between renders.
     */
    onTransitionUpdate?: ((direction: TransitionDirection, phase: TransitionPhase) => void) | undefined;
}


function getClassName<D extends TransitionDirection, P extends TransitionPhase>(classBase: string, open: D, phase?: P): string {
    if (phase)
        return `${classBase || "transition"}-${open}-${phase}` as const;
    else
        return `${classBase || "transition"}-${open}` as const;
}

let dummy: any;
function forceReflow<E extends Element>(e: E) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    dummy = e.getBoundingClientRect();
    return e;
}

/**
 * A hook that adds & removes class names in a way that facilitates proper transitions.
 * 
 * The first argument contains the props related directly to the transition.
 * 
 * The second argument contains any other props you might want merged into the final product (these are not read or manipulated or anything -- it's purely shorthand and can be omitted with `{}` and then your own `useMergedProps`).
 */
export function useCreateTransitionableProps<E extends HTMLElement, P extends {}>({ measure, animateOnMount, classBase, onTransitionUpdate, exitVisibility, duration, open, ref }: CreateTransitionableProps<E>, otherProps: P) {

    classBase ??= "transition";

    const { element, useRefElementProps } = useRefElement<E>();
    const [phase, setPhase] = useState<TransitionPhase | null>(animateOnMount ? "init" : null);
    const [direction, setDirection] = useState<TransitionDirection>(open ? "enter" : "exit");

    const [surfaceWidth, setSurfaceWidth] = useState<string | null>(null);
    const [surfaceHeight, setSurfaceHeight] = useState<string | null>(null);
    const [surfaceX, setSurfaceX] = useState<string | null>(null);
    const [surfaceY, setSurfaceY] = useState<string | null>(null);

    const [transitioningWidth, setTransitioningWidth] = useState<string | null>(null);
    const [transitioningHeight, setTransitioningHeight] = useState<string | null>(null);
    const [transitioningX, setTransitioningX] = useState<string | null>(null);
    const [transitioningY, setTransitioningY] = useState<string | null>(null);

    const { getLogicalDirection } = useLogicalDirection(element);
    const logicalDirection = getLogicalDirection();

    const onTransitionUpdateRef = useRef<typeof onTransitionUpdate>(onTransitionUpdate);
    const phaseRef = useRef<TransitionPhase | null>(phase);
    //const directionRef = useRef<TransitionDirection | null>(direction);
    const durationRef = useRef<number | null | undefined>(duration);

    const tooEarlyTimeoutRef = useRef<number | null>(null);
    const tooEarlyValueRef = useRef<boolean>(true);
    const tooLateTimeoutRef = useRef<number | null>(null);


    const onTransitionEnd = useCallback((e: TransitionEvent) => {
        if (e.target === element && tooEarlyValueRef.current == false) {
            setPhase("finalize");
        }
    }, [element]);

    useLayoutEffect(() => { onTransitionUpdateRef.current = onTransitionUpdate; }, [onTransitionUpdate]);
    useLayoutEffect(() => { phaseRef.current = phase; }, [phase]);
    //useLayoutEffect(() => { directionRef.current = direction; }, [direction]);
    useLayoutEffect(() => { durationRef.current = duration; }, [duration]);

    useLayoutEffect(() => {
        if (phase)
            onTransitionUpdateRef.current?.(direction, phase);
    }, [direction, phase])


    // Every time the phase changes to "transition", add our transition timeout timeouts
    // to catch any time onTransitionEnd fails to report for whatever reason to be safe
    useLayoutEffect(() => {
        if (phase == "transition") {
            const timeoutDuration = durationRef.current ?? 1000;

            tooEarlyTimeoutRef.current = window.setTimeout(() => {
                tooEarlyValueRef.current = false;
                tooEarlyTimeoutRef.current = null;
            }, 50);
            tooLateTimeoutRef.current = window.setTimeout(() => {
                tooEarlyValueRef.current = true;
                tooLateTimeoutRef.current = null;
                setPhase("finalize");
            }, timeoutDuration);
        }

        return () => {
            if (tooEarlyTimeoutRef.current) clearTimeout(tooEarlyTimeoutRef.current);
            if (tooLateTimeoutRef.current) clearTimeout(tooLateTimeoutRef.current);
        }
    }, [phase]);

    // Any time "open" changes, update our direction and phase.
    // In addition, measure the size of the element if requested.
    useLayoutEffect(() => {

        if (element) {
            const previousPhase = phaseRef.current;

            // Swap our direction
            if (open)
                setDirection("enter");
            else
                setDirection("exit");


            setPhase(previousPhase === null ? "finalize" : "init");

            if (measure) {

                let currentSizeWithTransition = element.getBoundingClientRect(); {
                    const { x, y, width, height } = currentSizeWithTransition;
                    setTransitioningX(x + "px");
                    setTransitioningY(y + "px");
                    setTransitioningWidth(width + "px");
                    setTransitioningHeight(height + "px");
                }

                if (previousPhase === "finalize") {

                    // We're going to be messing with the actual element's class, 
                    // so we'll want an easy way to restore it later.
                    const backup = element.className;
                    element.classList.add(`${classBase}-measure`);
                    element.classList.remove(
                        `${classBase}-enter`, `${classBase}-enter-init`, `${classBase}-enter-transition`, `${classBase}-enter-finalize`,
                        `${classBase}-exit`, `${classBase}-exit-init`, `${classBase}-exit-transition`, `${classBase}-exit-finalize`
                    );
                    forceReflow(element);

                    const sizeWithoutTransition = element.getBoundingClientRect();
                    const { x, y, width, height } = sizeWithoutTransition;
                    setSurfaceX(x + "px");
                    setSurfaceY(y + "px");
                    setSurfaceWidth(width + "px");
                    setSurfaceHeight(height + "px");


                    element.className = backup;
                    forceReflow(element);

                }
            }
        }

    }, [open, element, measure, classBase]);

    // Any time the phase changes to init, immediately before the screen is painted,
    // change the phase to "transition" and re-render ().
    useLayoutEffect(() => {
        if (element) {
            classBase ??= "transition";

            if (phase === "init") {
                // Preact just finished rendering init
                // Now set our transition style.
                setPhase("transition");

                if (measure) {
                    forceReflow(element);
                }
            }
        }

    }, [phase, measure, element]);

    const inlineDirection = logicalDirection?.inlineDirection;
    const blockDirection = logicalDirection?.blockDirection;
    const writingModeIsHorizontal = (inlineDirection == "rtl" || inlineDirection == "ltr");
    const surfaceInlineInset = writingModeIsHorizontal ? surfaceX : surfaceY;
    const surfaceBlockInset = writingModeIsHorizontal ? surfaceY : surfaceX;
    const surfaceInlineSize = writingModeIsHorizontal ? surfaceWidth : surfaceHeight;
    const surfaceBlockSize = writingModeIsHorizontal ? surfaceHeight : surfaceWidth;
    const transitioningInlineInset = writingModeIsHorizontal ? transitioningX : transitioningY;
    const transitioningBlockInset = writingModeIsHorizontal ? transitioningY : transitioningX;
    const transitioningInlineSize = writingModeIsHorizontal ? transitioningWidth : transitioningHeight;
    const transitioningBlockSize = writingModeIsHorizontal ? transitioningHeight : transitioningWidth;

    let almostDone = useRefElementProps({
        ref,
        style: removeEmpty({
            [`--${classBase}-duration`]: duration,
            [`--${classBase}-surface-x`]: surfaceX,
            [`--${classBase}-surface-y`]: surfaceY,
            [`--${classBase}-surface-width`]: surfaceWidth,
            [`--${classBase}-surface-height`]: surfaceHeight,
            [`--${classBase}-surface-inline-inset`]: surfaceInlineInset,
            [`--${classBase}-surface-block-inset`]: surfaceBlockInset,
            [`--${classBase}-surface-inline-size`]: surfaceInlineSize,
            [`--${classBase}-surface-block-size`]: surfaceBlockSize,

            [`--${classBase}-transitioning-x`]: transitioningX,
            [`--${classBase}-transitioning-y`]: transitioningY,
            [`--${classBase}-transitioning-width`]: transitioningWidth,
            [`--${classBase}-transitioning-height`]: transitioningHeight,
            [`--${classBase}-transitioning-inline-inset`]: transitioningInlineInset,
            [`--${classBase}-transitioning-block-inset`]: transitioningBlockInset,
            [`--${classBase}-transitioning-inline-size`]: transitioningInlineSize,
            [`--${classBase}-transitioning-block-size`]: transitioningBlockSize
        }) as h.JSX.CSSProperties,
        onTransitionEnd,
        ...({ "aria-hidden": open ? undefined : "true" }) as {},
        className: clsx(
            getClassName(classBase, direction),
            phase && getClassName(classBase, direction, phase),
            exitVisibility == "removed" && `${classBase}-removed-on-exit`,
            exitVisibility == "visible" && `${classBase}-visible-on-exit`,
            `${classBase}-inline-direction-${inlineDirection ?? "ltr"}`,
            `${classBase}-block-direction-${blockDirection ?? "ttb"}`
        ),
    });

    return useMergedProps<E>()(almostDone, otherProps);
}

export interface TransitionableProps<E extends HTMLElement> extends MergedProps<E, h.JSX.HTMLAttributes<E>, CreateTransitionableProps<E>> {
    //children: ComponentChildren; // TODO: This should be VNode<any> | h.JSX.Element;
    //ref?: Ref<E>;
    //className?: string | undefined;
    //"class"?: string | undefined;
}

function removeEmpty<T>(obj: T): T {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null)) as T;
}

/**
 * A component that *wraps an HTMLElement or other ref-forwarding component* and allows it to use CSS to transition in/out.
 * Combines the props passed to it, the props its child has, and the props needed for the CSS transition, and passes them
 * all to the child element you provide.
 * 
 * This is the most general component that others use as a base. By default, this component by itself doesn't actually add any CSS classes that animate anything (like opacity, for example).
 * It adds classes like `transition-enter-finalize`, but you need to provide the additional e.g. `fade` class that reacts to it. 
 * 
 * Use this if the other, more specialized Transition components don't fit your needs.
 * 
 * @example `<Transitionable open={open} {...useCreateFadeProps(...)}><div>{children}</div></Transitionable>`
 * @example `<Transitionable open={open}><div {...useCreateFadeProps(...)}>{children}</div></Transitionable>`
 */
export const Transitionable = forwardElementRef(function Transition<E extends HTMLElement>({ children: child, duration, classBase, measure, exitVisibility, open, onTransitionUpdate, animateOnMount, ...props }: TransitionableProps<E>, r: Ref<E>) {

    if (!childIsVNode(child)) {
        throw new Error("A Transitionable component must have exactly one component child (e.g. a <div>, but not \"a string\").");
    }

    const transitionProps = useCreateTransitionableProps({ classBase, duration, measure, open, animateOnMount, onTransitionUpdate, ref: r, exitVisibility }, props);
    const mergedWithChildren = useMergedProps<E>()(transitionProps, { ...child.props, ref: child.ref });

    return cloneElement(child, mergedWithChildren as typeof transitionProps);
});

function childIsVNode(child: ComponentChildren): child is VNode<any> {
    if (!child)
        return false;

    if (Array.isArray(child)) {
        return false;
    }
    if (typeof child != "object")
        return false;

    return ("props" in child);
}
