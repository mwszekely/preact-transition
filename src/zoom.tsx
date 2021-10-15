import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";
import { forwardElementRef } from "./forward-element-ref";
import { Transitionable, TransitionableProps } from "./transitionable";

/**
 * Properties that allow adjusting the origin, minimum size, and direction of the zoom effect.
 */
export interface CreateZoomProps {

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

    classBase?: string | undefined;
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function useCreateZoomProps<P extends {}>({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock }: CreateZoomProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E>? E : HTMLElement;
    classBase ??= "transition";
    return (useMergedProps<E>()({
        className: `${classBase}-zoom`,
        classBase,
        style: {
            [`--${classBase}-zoom-origin-inline`]: `${(zoomOriginInline ?? zoomOrigin ?? 0.5)}`,
            [`--${classBase}-zoom-origin-block`]: `${(zoomOriginBlock ?? zoomOrigin ?? 0.5)}`,
            [`--${classBase}-zoom-min-inline`]: `${(zoomMinInline ?? zoomMin ?? 0)}`,
            [`--${classBase}-zoom-min-block`]: `${(zoomMinBlock ?? zoomMin ?? 0)}`,
        } as h.JSX.CSSProperties,
    }, otherProps));
}

export interface ZoomProps<E extends HTMLElement> extends Partial<CreateZoomProps>, TransitionableProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
export const Zoom = forwardElementRef(function Zoom<E extends HTMLElement>({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, ...rest }: ZoomProps<E>, ref: Ref<E>) {
    return <Transitionable<E> show={show} {...useCreateZoomProps({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock }, { ...rest, ref })} />
});

