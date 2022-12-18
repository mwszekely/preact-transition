import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { forwardElementRef } from "./forward-element-ref";
import { defaultClassBase, NonIntrusiveElementAttributes, Transitionable, TransitionableProps, UseTransitionProps } from "./transitionable";

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

    /**
     * Allows customizing the class name used (in the format of `${classBase}-swap-container`)
     * @default "transition"
     */
    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function createZoomProps({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock }: Partial<CreateZoomProps>) {
    classBase = defaultClassBase(classBase);
    return ({
        className: `${classBase}-zoom`,
        style: {
            [`--${classBase}-zoom-origin-inline`]: `${(zoomOriginInline ?? zoomOrigin ?? 0.5)}`,
            [`--${classBase}-zoom-origin-block`]: `${(zoomOriginBlock ?? zoomOrigin ?? 0.5)}`,
            [`--${classBase}-zoom-min-inline`]: `${(zoomMinInline ?? zoomMin ?? 0)}`,
            [`--${classBase}-zoom-min-block`]: `${(zoomMinBlock ?? zoomMin ?? 0)}`,
        } as h.JSX.CSSProperties,
    });
}

export interface ZoomProps<E extends HTMLElement> extends Partial<CreateZoomProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
 * @see `Transitionable` `ZoomFade`
 */
export const Zoom = forwardElementRef(function Zoom<E extends HTMLElement>({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock, show, animateOnMount, exitVisibility, ...rest }: ZoomProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            transition={{ measure: false, show, animateOnMount, classBase, exitVisibility }}
            props={useMergedProps<E>(createZoomProps({ classBase, zoomOrigin, zoomOriginInline, zoomOriginBlock, zoomMin, zoomMinInline, zoomMinBlock }), { ...rest, ref })}
        />
    );
});

