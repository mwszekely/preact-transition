import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useEffect, useRef } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
import { Transitionable, TransitionableProps } from "./transitionable";

/**
 * Properties that allow adjusting the direction and extent of the slide effect. 
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would slide to the right by 50% of the element's width.
 */
export interface CreateSlideProps {

    /**
     * The target point to slide to/from (X component in horizontal writing modes).
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    slideTargetInline: number | null | undefined;

    /**
     * The target point to slide to/from (Y component in horizontal writing modes).
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    slideTargetBlock: number | null | undefined;

    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function useCreateSlideProps<P extends {}>({ classBase, slideTargetInline, slideTargetBlock }: CreateSlideProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E>? E : HTMLElement;
    classBase ??= "transition";
    const lastValidTargetInline = useRef(slideTargetInline ?? 1);
    const lastValidTargetBlock = useRef(slideTargetBlock ?? 0);

    useEffect(() => { if (slideTargetInline) lastValidTargetInline.current = slideTargetInline; }, [slideTargetInline]);
    useEffect(() => { if (slideTargetBlock) lastValidTargetBlock.current = slideTargetBlock; }, [slideTargetBlock]);

    if (slideTargetInline == 0)
        slideTargetInline = lastValidTargetInline.current;
    if (slideTargetBlock == 0)
        slideTargetBlock = lastValidTargetBlock.current;

    return useMergedProps<E>()({
        className: `${classBase}-slide`,
        classBase,
        style: {
            [`--${classBase}-slide-target-inline`]: `${(slideTargetInline ?? 0)}`,
            [`--${classBase}-slide-target-block`]: `${(slideTargetBlock ?? 0)}`
        } as h.JSX.CSSProperties
    }, otherProps);
}

// Note: CreateSlideProps is *intentionally* not made partial here.
export interface SlideProps<E extends HTMLElement> extends Partial<CreateSlideProps>, TransitionableProps<E> { };

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
export const Slide = forwardElementRef(function Slide<E extends HTMLElement>({ classBase, slideTargetInline, slideTargetBlock, show, ...rest }: SlideProps<E>, ref: Ref<E>) {
    return <Transitionable<E> show={show} {...useCreateSlideProps({ classBase, slideTargetInline, slideTargetBlock }, { ...rest, ref })} />
});
