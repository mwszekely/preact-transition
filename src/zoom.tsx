import { h, Ref } from "preact";
import { useMergedProps, UseRefElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

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
    }
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export function useBasePropsZoom<E extends Element>({ zoomParameters: { zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock } }: UseBasePropsZoomParameters<E>) {
    const { GetBaseClass } = useCssClasses();
    return ({
        className: `${GetBaseClass()}-zoom`,
        style: {
            [`--${GetBaseClass()}-zoom-origin-inline`]: `${(zoomOriginInline ?? zoomOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-zoom-origin-block`]: `${(zoomOriginBlock ?? zoomOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-zoom-min-inline`]: `${(zoomMinInline ?? zoomMin ?? 0)}`,
            [`--${GetBaseClass()}-zoom-min-block`]: `${(zoomMinBlock ?? zoomMin ?? 0)}`,
        } as h.JSX.CSSProperties,
    });
}

export interface ZoomProps<E extends HTMLElement> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">>,
    Partial<Get<UseRefElementParameters<E>, "refElementParameters">> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
export const Zoom = memo(forwardElementRef(function Zoom<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ZoomProps<E>, ref: Ref<E>) {

    return (
        useTransition({
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
                propsIncoming: useMergedProps<E>(
                    useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                    { ref, ...rest },
                )
            },
            exclusiveTransitionParameters: { exclusivityKey }
        })
    );
}));

