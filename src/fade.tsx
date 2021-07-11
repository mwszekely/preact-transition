import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "./use-merged-props";
import { Transitionable, TransitionableProps } from "./transitionable";

/**
 * Properties that allow adjusting the minimum or maximum opacity values to use for the fade effect.
 */
export interface CreateFadeProps {
    /**
     * The opacity to use when faded out.
     * @default 0
     */
    fadeMin: number | null | undefined;

    /**
     * The opacity to use when faded in.
     * @default 1
     */
    fadeMax: number | null | undefined;

    classBase: string | null | undefined;
}

/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useCreateFadeProps<P extends {}>({ classBase, fadeMin, fadeMax }: CreateFadeProps, otherProps: P) {
    classBase ??= "transition";
    return useMergedProps({
        className: `${classBase}-fade`,
        classBase,
        style: {
            [`--${classBase}-fade-min`]: (fadeMin ?? 0),
            [`--${classBase}-fade-max`]: (fadeMax ?? 1),
        } as h.JSX.CSSProperties
    }, otherProps);
}

export interface FadeProps<E extends HTMLElement> extends Partial<CreateFadeProps>, TransitionableProps<E> { };

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
export const Fade = forwardElementRef(function Fade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: FadeProps<E>, ref: Ref<E>) {
    return <Transitionable<E> open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
