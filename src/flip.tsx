import { h, Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { Transitionable, TransitionableProps } from "./transitionable";

/**
 * Properties that allow adjusting the direction and extent of the flip effect. 
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would flip to the right by 50% of the element's width.
 */
export interface CreateFlipProps {

    /**
     * The target angle (in degrees) to rotate towards on the inline axis (X axis for horizontal writing modes)
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    flipAngleInline: number | null | undefined;

    /**
     * The target angle (in degrees) to rotate towards on the block axis (X axis for horizontal writing modes)
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    flipAngleBlock: number | null | undefined;

    /**
     * Since this is a 3D effect, a perspective value is needed.
     * @default 800px
     */
    perspective: string | number | undefined;

    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function useCreateFlipProps<P extends {}>({ classBase, flipAngleInline, flipAngleBlock, perspective }: CreateFlipProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E> ? E : HTMLElement;
    classBase ??= "transition";
    const lastValidTargetInline = useRef(flipAngleInline ?? 180);
    const lastValidTargetBlock = useRef(flipAngleBlock ?? 0);

    useEffect(() => { if (flipAngleInline) lastValidTargetInline.current = flipAngleInline; }, [flipAngleInline]);
    useEffect(() => { if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock; }, [flipAngleBlock]);

    if (flipAngleInline == 0)
        flipAngleInline = lastValidTargetInline.current;
    if (flipAngleBlock == 0)
        flipAngleBlock = lastValidTargetBlock.current;

    return useMergedProps<E>()({
        className: `${classBase}-flip`,
        classBase,
        style: {
            [`--${classBase}-flip-angle-inline`]: `${(flipAngleInline ?? 0)}deg`,
            [`--${classBase}-flip-angle-block`]: `${(flipAngleBlock ?? 0)}deg`,
            [`--${classBase}-perspective`]: `${(perspective ?? 800)}px`
        } as h.JSX.CSSProperties
    }, otherProps);
}

// Note: CreateFlipProps is *intentionally* not made partial here.
export interface FlipProps<E extends HTMLElement> extends Partial<CreateFlipProps>, TransitionableProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
 * 
 * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
 * with `1` being `100%` of the element's width or height.
 * 
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * which allows for convenient setups inside of a `SwapContainer` 
 * (`flipInline={index - selectedIndex}` or similar.) 
 * 
 * @see `Transitionable`
 */
export const Flip = forwardElementRef(function Flip<E extends HTMLElement>({ classBase, flipAngleInline, flipAngleBlock, perspective, show, ...rest }: FlipProps<E>, ref: Ref<E>) {
    return <Transitionable<E> show={show} {...useCreateFlipProps({ classBase, flipAngleInline, flipAngleBlock, perspective }, { ...rest, ref })} />
});
