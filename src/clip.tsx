import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers";
import { defaultClassBase, NonIntrusiveElementAttributes, Transitionable, TransitionableProps, UseTransitionProps } from "./transitionable";
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

    /**
     * Allows customizing the class name used (in the format of `${classBase}-clip`)
     * @default "transition"
     */
    classBase: string | undefined;
}

export interface ClipProps<E extends HTMLElement> extends Partial<CreateClipProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export function createClipProps({ classBase, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline }: Partial<CreateClipProps>) {
    classBase = defaultClassBase(classBase);
    return (
        {
            className: clsx(`${classBase}-clip`),
            style: {
                [`--${classBase}-clip-origin-inline`]: (clipOriginInline ?? clipOrigin ?? 0.5),
                [`--${classBase}-clip-origin-block`]: (clipOriginBlock ?? clipOrigin ?? 0),
                [`--${classBase}-clip-min-inline`]: (clipMinInline ?? clipMin ?? 1),
                [`--${classBase}-clip-min-block`]: (clipMinBlock ?? clipMin ?? 0),
            } as h.JSX.CSSProperties,
        }
    )
}

export const Clip = forwardElementRef(function Clip<E extends HTMLElement>({ classBase, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, ...rest }: ClipProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            transition={{ measure: false, show, animateOnMount, classBase, exitVisibility }}
            props={useMergedProps<E>({ ref, ...rest }, createClipProps({ classBase, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline }))}
        />
    )
});
