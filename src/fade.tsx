import { JSX, memo, Ref, useMergedProps } from "preact-prop-helpers";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface UseBasePropsFadeParametersSelf {
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

/**
 * Properties that allow adjusting the minimum or maximum opacity values to use for the fade effect.
 */
export interface UseBasePropsFadeParameters {
    fadeParameters: UseBasePropsFadeParametersSelf;
}

/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useBasePropsFade({ fadeParameters: { fadeMin, fadeMax } }: UseBasePropsFadeParameters) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-fade`,
        style: {
            [`--${GetBaseClass()}-fade-min`]: (fadeMin ?? 0),
            [`--${GetBaseClass()}-fade-max`]: (fadeMax ?? 1),
        } as JSX.CSSProperties
    };
}

export interface FadeProps<E extends HTMLElement> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFadeParameters, "fadeParameters">> { }

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
export const Fade = memo(forwardElementRef(function Fade<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, fadeMin, fadeMax, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: FadeProps<E>, ref: Ref<E>) {
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
            propsIncoming: useMergedProps<E>({ ref, ...rest }, useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }))
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
