import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers";
import { Transitionable, TransitionableProps } from "./transitionable";
import { default as clsx } from "clsx";


export interface CreateClipProps {

    /**
     * The target point to clip around (with X & Y components identical)
     * @default 0.5
     */
    clipOrigin: number | null | undefined;

    /**
     * The target point to clip around (X component in horizontal writing modes)
     * @default 0.5
     */
    clipOriginInline: number | undefined | null;

    /**
     * The target point to clip around (Y component in horizontal writing modes)
     * @default 0
     */
    clipOriginBlock: number | undefined | null;

    /**
     * The minimum size to clip to/from, from 0 to 1 (with X & Y components identical).
     * @default 0
     */
    clipMin: number | null | undefined;

    /**
     * The minimum size to clip to/from, from 0 to 1 (X component in horizontal writing modes).
     * @default 1
     */
    clipMinInline: number | undefined | null;

    /**
     * The minimum size to clip to/from, from 0 to 1 (Y component in horizontal writing modes).
     * @default 0
     */
    clipMinBlock: number | undefined | null;

    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Clip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useCreateClipProps<P extends {}>({ classBase, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock }: CreateClipProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E> ? E : HTMLElement;
    classBase ??= "transition";
    return useMergedProps<E>()({
        className: clsx(`${classBase}-clip`),
        classBase,
        style: {
            [`--${classBase}-clip-origin-inline`]: (clipOriginInline ?? clipOrigin ?? 0.5),
            [`--${classBase}-clip-origin-block`]: (clipOriginBlock ?? clipOrigin ?? 0),
            [`--${classBase}-clip-min-inline`]: (clipMinInline ?? clipMin ?? 1),
            [`--${classBase}-clip-min-block`]: (clipMinBlock ?? clipMin ?? 0),
        } as h.JSX.CSSProperties,
    }, otherProps);
}

export interface ClipProps<E extends HTMLElement> extends Partial<CreateClipProps>, TransitionableProps<E> { };

export const Clip = forwardElementRef(function Clip<E extends HTMLElement>({ classBase, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, ...rest }: ClipProps<E>, ref: Ref<E>) {
    return <Transitionable<E> show={show!} {...useCreateClipProps({ classBase, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock }, { ...rest, ref })} />
});
