import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useCssClasses } from "./util/context";
import { useTransition } from "./transitionable";
import { Get, PseudoPartial, TransitionParametersBase, UseBasePropsBaseParameters, UseTransitionParameters } from "./util/types";
import { forwardElementRef } from "./util/util";

/**
 * Properties that allow adjusting the minimum or maximum opacity values to use for the fade effect.
 */
export interface UseBasePropsFadeParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    fadeParameters: {
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
    }
}

/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useBasePropsFade<E extends Element>({ fadeParameters: { fadeMin, fadeMax } }: UseBasePropsFadeParameters<E>) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-fade`,
        style: {
            [`--${GetBaseClass()}-fade-min`]: (fadeMin ?? 0),
            [`--${GetBaseClass()}-fade-max`]: (fadeMax ?? 1),
        } as h.JSX.CSSProperties
    };
}

export interface FadeProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">> { };

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
export const Fade = memo(forwardElementRef(function Fade<E extends HTMLElement>({ duration, delayMountUntilShown, fadeMin, fadeMax, show, animateOnMount, exitVisibility, onVisibilityChange, ...rest }: FadeProps<E>, ref: Ref<E>) {
    return useTransition({ transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps<E>({ ref, ...rest }, useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }))
    }, refElementParameters: {} });
}));
