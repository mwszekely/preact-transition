import clsx from "clsx";
import { cloneElement, h, Ref, VNode } from "preact";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
import { mergeStyles } from "./merge-style";
import { useRefElement } from "./use-ref-element";

type TransitionPhase = 'init' | 'transition' | 'finalize';
type TransitionDirection = 'enter' | 'exit';
type TransitionState = `${TransitionDirection}-${TransitionPhase}`;

export interface TransitionPropsMin<E extends HTMLElement> extends Pick<h.JSX.HTMLAttributes<E>, "className" | "style" | "onTransitionEnd"> {
    open: boolean;
    classBase?: string;
    measure?: boolean;
    ref?: Ref<E>;
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
export function useTransitionProps<E extends HTMLElement, P extends TransitionPropsMin<E>>({ measure, classBase, open, style, className, onTransitionEnd, ...props }: P) {

    classBase ??= "transition";

    const { element, useRefElementProps } = useRefElement<E>();
    const [phase, setPhase] = useState<TransitionPhase | null>(null);
    const [direction, setDirection] = useState<TransitionDirection>(open ? "enter" : "exit");
    const [transitionSurfaceWidth, setTransitionSurfaceWidth] = useState<string | null>(null);
    const [transitionSurfaceHeight, setTransitionSurfaceHeight] = useState<string | null>(null);

    const phaseRef = useRef<TransitionPhase | null>(phase);
    const directionRef = useRef<TransitionDirection | null>(direction);

    const tooEarlyTimeoutRef = useRef<number | null>(null);
    const tooEarlyValueRef = useRef<boolean>(true);
    const tooLateTimeoutRef = useRef<number | null>(null);

    useLayoutEffect(() => { phaseRef.current = phase; }, [phase]);
    useLayoutEffect(() => { directionRef.current = direction; }, [direction]);

    /*if (transitionSurfaceWidth)
        (style as any)[`--${classBase}-surface-width`] = transitionSurfaceWidth;
    if (transitionSurfaceHeight)
        (style as any)[`--${classBase}-surface-height`] = transitionSurfaceHeight;*/




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
                const { width, height } = element.getBoundingClientRect();

                // Now remove the class and force a reflow again.
                // Yes, we're about to set it anyway the next time we render,
                // but it's necessary to allow exit-finalize to be display: none
                element.classList.remove(tempClass);
                void (element.offsetTop);


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
                //debugger;
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
        style: typeof style === "string" ? `${style};` : {
            ...style,
            ...({
                [`--${classBase}-surface-width`]: transitionSurfaceWidth,
                [`--${classBase}-surface-height`]: transitionSurfaceHeight
            } as {})
        },
        onTransitionEnd: useCallback((e: TransitionEvent) => {

            if (e.target === element && tooEarlyValueRef.current == false) {
                setPhase("finalize");
            }

            onTransitionEnd?.bind(e.target as E, e as TransitionEvent & { readonly currentTarget: E; });
        }, [element, onTransitionEnd]),
        className: clsx(getClassName(classBase, direction), phase && getClassName(classBase, direction, phase), className),
    });



}

export interface TransitionProps<E extends HTMLElement> extends TransitionPropsMin<E> {
    children: VNode<any>;
    ref?: Ref<E>;
}

/**
 * A component that causes its child to add & remove class names in a way that facilitates proper transitions.
 * The name of the class is controlled with "classBase"--you'll still need to provide the additional 
 * class names/CSS variables needed to control how it looks based on the class names this adds.
 */
export const Transition = forwardElementRef(function Transition<E extends HTMLElement>({ children: child, style, ...props }: TransitionProps<E>, ref: Ref<E>) {
    const childProps = useTransitionProps<E, TransitionProps<E>>({ ...props, ...child.props, style: mergeStyles(child.props.style, style as any), ref });
    
    return cloneElement(child, childProps);
})

