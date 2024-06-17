import { JSX, Ref } from "preact-prop-helpers";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface UseBasePropsZoomParametersSelf {
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
}
/**
 * Properties that allow adjusting the origin, minimum size, and direction of the zoom effect.
 */
export interface UseBasePropsZoomParameters {
    zoomParameters: UseBasePropsZoomParametersSelf;
}
/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export declare function useBasePropsZoom({ zoomParameters: { zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock } }: UseBasePropsZoomParameters): {
    className: string;
    style: JSX.CSSProperties;
};
export interface ZoomProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters, "zoomParameters">> {
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
export declare const Zoom: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ZoomProps<E>, ref: Ref<E>) => JSX.Element | null;
//# sourceMappingURL=zoom.d.ts.map