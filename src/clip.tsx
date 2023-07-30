import { clsx } from "clsx";
import { h, Ref } from "preact";
import { useMergedProps, UseRefElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface UseBasePropsClipParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    clipParameters: {
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
    }
}

export function useBasePropsClip<E extends Element>({ clipParameters: { clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline } }: UseBasePropsClipParameters<E>) {
    const { GetBaseClass } = useCssClasses();
    return (
        {
            className: clsx(`${GetBaseClass()}-clip`),
            style: {
                [`--${GetBaseClass()}-clip-origin-inline`]: (clipOriginInline ?? clipOrigin ?? 0.5),
                [`--${GetBaseClass()}-clip-origin-block`]: (clipOriginBlock ?? clipOrigin ?? 0),
                [`--${GetBaseClass()}-clip-min-inline`]: (clipMinInline ?? clipMin ?? 1),
                [`--${GetBaseClass()}-clip-min-block`]: (clipMinBlock ?? clipMin ?? 0),
            } as h.JSX.CSSProperties,
        }
    )
}

export interface ClipProps<E extends HTMLElement> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsClipParameters<E>, "clipParameters">>,
    Partial<Get<UseRefElementParameters<E>, "refElementParameters">> { };

export const Clip = memo(forwardElementRef(function Clip<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ClipProps<E>, ref: Ref<E>) {

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
            propsIncoming: useMergedProps<E>(
                useBasePropsClip({ clipParameters: { clipMin, clipMinInline, clipMinBlock, clipOrigin, clipOriginInline, clipOriginBlock } }),
                { ref, ...rest }
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}))
