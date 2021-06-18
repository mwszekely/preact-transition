import clsx from "clsx";
import { cloneElement, h, Ref, VNode } from "preact";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
import { mergeStyles } from "./merge-style";
import { useRefElement } from "./use-ref-element";
import mergeProps from "merge-props";

export type TransitionPhase = 'init' | 'transition' | 'finalize';
export type TransitionDirection = 'enter' | 'exit';
type TransitionState = `${TransitionDirection}-${TransitionPhase}`;

export interface TransitionPropsMin<E extends HTMLElement> /*extends Pick<h.JSX.HTMLAttributes<E>, "className" | "style" | "onTransitionEnd">*/ {
    open: boolean;
    classBase?: string;
    measure?: boolean;
    ref?: Ref<E>;
    animateOnMount?: boolean;
    onTransitionUpdate?: (direction: TransitionDirection, phase: TransitionPhase) => void;
}


function getClassName<D extends TransitionDirection, P extends TransitionPhase>(classBase: string, open: D, phase?: P): string {
    if (phase)
        return `${classBase || "transition"}-${open}-${phase}` as const;
    else
        return `${classBase || "transition"}-${open}` as const;
}


/**
 * A hook that adds & removes class names in a way that facilitates proper transitions.
 * The format of the class names is `${classBase}-${direction}` or `${classBase}-${direction}-${phase}`.
 * By default it's just "transition".
 * 
 * @param element 
 * @param param1 
 */
export function useTransitionProps<P extends TransitionPropsMin<any>>({ measure, animateOnMount, classBase, onTransitionUpdate, open, ...props }: P) {
    type E = P extends TransitionPropsMin<infer E> ? E : HTMLElement;

    classBase ??= "transition";

    const { element, useRefElementProps } = useRefElement<E>();
    const [phase, setPhase] = useState<TransitionPhase | null>(animateOnMount ? "init" : null);
    const [direction, setDirection] = useState<TransitionDirection>(open ? "enter" : "exit");
    const [transitionSurfaceWidth, setTransitionSurfaceWidth] = useState<string | null>(null);
    const [transitionSurfaceHeight, setTransitionSurfaceHeight] = useState<string | null>(null);
    const [transitionSurfaceX, setTransitionSurfaceX] = useState<string | null>(null);
    const [transitionSurfaceY, setTransitionSurfaceY] = useState<string | null>(null);

    const onTransitionUpdateRef = useRef<typeof onTransitionUpdate>(onTransitionUpdate);
    const phaseRef = useRef<TransitionPhase | null>(phase);
    const directionRef = useRef<TransitionDirection | null>(direction);

    const tooEarlyTimeoutRef = useRef<number | null>(null);
    const tooEarlyValueRef = useRef<boolean>(true);
    const tooLateTimeoutRef = useRef<number | null>(null);

    useLayoutEffect(() => { onTransitionUpdateRef.current = onTransitionUpdate; }, [onTransitionUpdate]);
    useLayoutEffect(() => { phaseRef.current = phase; }, [phase]);
    useLayoutEffect(() => { directionRef.current = direction; }, [direction]);

    /*if (transitionSurfaceWidth)
        (style as any)[`--${classBase}-surface-width`] = transitionSurfaceWidth;
    if (transitionSurfaceHeight)
        (style as any)[`--${classBase}-surface-height`] = transitionSurfaceHeight;*/

    useLayoutEffect(() => {
        if (phase)
            onTransitionUpdateRef.current?.(direction, phase);
    }, [direction, phase])


    useLayoutEffect(() => {
        if (phase == "transition") {
            tooEarlyTimeoutRef.current = window.setTimeout(() => {
                tooEarlyValueRef.current = false;
                tooEarlyTimeoutRef.current = null;
            }, 50);
            tooLateTimeoutRef.current = window.setTimeout(() => {
                tooEarlyValueRef.current = true;
                tooLateTimeoutRef.current = null;
                setPhase("finalize");
            }, 1000);
        }

        return () => {
            if (tooEarlyTimeoutRef.current) clearTimeout(tooEarlyTimeoutRef.current);
            if (tooLateTimeoutRef.current) clearTimeout(tooLateTimeoutRef.current);
        }
    }, [phase])

    useLayoutEffect(() => {
        const previousPhase = phaseRef.current;
        const previousDirection = directionRef.current;

        //const element = RootProps?.ref.current;

        if (element) {
            classBase ??= "transition"

            const [nextDirection, nextInverseDirection] = open ?
                ["enter", "exit"] as const :
                ["exit", "enter"] as const;

            let nextPhase: TransitionPhase;
            if (previousPhase == null)
                nextPhase = "finalize";
            else
                nextPhase = "transition";  // Briefly set to "init", then measured, but this is the final phase.

            // This will be synced with the VDOM on re-render, 
            // but it's just to make sure the CSS works right when we're measuring stuff.
            element.classList.add(getClassName(classBase, nextDirection));
            element.classList.remove(getClassName(classBase, nextInverseDirection));
            element.classList.remove(getClassName(classBase, nextInverseDirection, "init"));
            element.classList.remove(getClassName(classBase, nextInverseDirection, "transition"));
            element.classList.remove(getClassName(classBase, nextInverseDirection, "finalize"));

            // Some transitions require knowing the size of the element.
            // If this transition requests a measurement, then get the current size 
            // of whatever we're animating by measuring it at its final/initial state
            if (measure) {

                const tempClass = (nextDirection === "enter" ? getClassName(classBase, nextDirection, "finalize") : getClassName(classBase, nextDirection, "init"));

                element.classList.add(tempClass);
                void (element.offsetTop);
                const { x, y, width, height } = element.getBoundingClientRect();

                // Now remove the class and force a reflow again.
                // Yes, we're about to set it anyway the next time we render,
                // but it's necessary to allow exit-finalize to be display: none
                element.classList.remove(tempClass);
                void (element.offsetTop);


                setTransitionSurfaceX(x + "px");
                setTransitionSurfaceY(y + "px");
                setTransitionSurfaceWidth(width + "px");
                setTransitionSurfaceHeight(height + "px");
            }
            else {
                setTransitionSurfaceWidth(null);
                setTransitionSurfaceHeight(null);
            }


            if (nextPhase == "finalize") {
                element.classList.add(getClassName(classBase, nextDirection, "finalize"));
                setDirection(nextDirection);
                setPhase(nextPhase);
            }
            else {
                element.classList.add(getClassName(classBase, nextDirection, 'init'));
                void (element.offsetTop);
                element.classList.add(getClassName(classBase, nextDirection, 'transition'));
                element.classList.remove(getClassName(classBase, nextDirection, 'init'));
                void (element.offsetTop);
                setDirection(nextDirection);
                setPhase(nextPhase);
            }



        }


    }, [classBase, open, measure, element]);



    return useRefElementProps({
        ...props,
        style: {
            [`--${classBase}-surface-x`]: transitionSurfaceX,
            [`--${classBase}-surface-y`]: transitionSurfaceY,
            [`--${classBase}-surface-width`]: transitionSurfaceWidth,
            [`--${classBase}-surface-height`]: transitionSurfaceHeight
        } as {},
        onTransitionEnd: useCallback((e: TransitionEvent) => {
            if (e.target === element && tooEarlyValueRef.current == false) {
                setPhase("finalize");
            }
        }, [element]),
        className: clsx(getClassName(classBase, direction), phase && getClassName(classBase, direction, phase)),
    });



}

export interface TransitionProps<E extends HTMLElement> extends TransitionPropsMin<E> {
    children: VNode<any>;
    className?: string;
    style?: h.JSX.CSSProperties;
    ref?: Ref<E>;
}

/**
 * A component that causes its child to add & remove class names in a way that facilitates proper transitions.
 * The name of the class is controlled with "classBase"--you'll still need to provide the additional 
 * class names/CSS variables needed to control how it looks based on the class names this adds.
 */
export const Transition = forwardElementRef(function Transition<E extends HTMLElement>({ children: child, classBase, measure, open, onTransitionUpdate, animateOnMount, ...props }: TransitionProps<E>, r: Ref<E>) {
    const transitionProps = useTransitionProps({ classBase, measure, open, animateOnMount, onTransitionUpdate, ref: r });
    const childProps = child.props;
    const mergedProps = mergeProps(mergeClassName(transitionProps), mergeClassName(props), mergeClassName(childProps));

    return cloneElement(child, mergedProps);
});

// mergeProps doesn't like className and class both existing, 
// so this can quickly clean any object with "class" in it up.
function mergeClassName<T extends { class?: string, className?: string }>({ className, "class": clasz, ...rest }: T) {
    return {
        ...rest,
        className: clsx(className, clasz)
    }
}
