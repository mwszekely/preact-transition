import { h, Ref } from "preact";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
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
    };
}
/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export declare function useBasePropsFade<E extends Element>({ fadeParameters: { fadeMin, fadeMax } }: UseBasePropsFadeParameters<E>): {
    className: string;
    style: h.JSX.CSSProperties;
};
export interface FadeProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">> {
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
export declare const Fade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, fadeMin, fadeMax, show, animateOnMount, exitVisibility, onVisibilityChange, ...rest }: FadeProps<E>, ref: Ref<E>) => import("preact").VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=fade.d.ts.map