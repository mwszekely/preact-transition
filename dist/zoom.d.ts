import { h, Ref } from "preact";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
/**
 * Properties that allow adjusting the origin, minimum size, and direction of the zoom effect.
 */
export interface UseBasePropsZoomParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    zoomParameters: {
        /**
         * The target point to zoom out of/into (with X & Y components identical)
         * @default 0.5
         */
        zoomOrigin: number | null | undefined;
        /**
         * The target point to zoom out of/into (X component)
         * @default 0.5
         */
        zoomOriginInline: number | undefined | null;
        /**
         * The target point to zoom out of/into (Y component)
         * @default 0.5
         */
        zoomOriginBlock: number | undefined | null;
        /**
         * The minimum size to shrink to/from, from 0 to 1 (with X & Y components identical).
         * @default 0
         */
        zoomMin: number | null | undefined;
        /**
         * The minimum size to shrink to/from, from 0 to 1 (X component in horizontal writing modes).
         * @default 0
         */
        zoomMinInline: number | undefined | null;
        /**
         * The minimum size to shrink to/from, from 0 to 1 (Y component in horizontal writing modes).
         * @default 0
         */
        zoomMinBlock: number | undefined | null;
    };
}
/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export declare function useBasePropsZoom<E extends Element>({ zoomParameters: { zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock } }: UseBasePropsZoomParameters<E>): {
    className: string;
    style: h.JSX.CSSProperties;
};
export interface ZoomProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">> {
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
export declare const Zoom: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, ...rest }: ZoomProps<E>, ref: Ref<E>) => import("preact").VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=zoom.d.ts.map