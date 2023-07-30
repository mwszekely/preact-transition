import { Ref } from "preact";
import { useMergedProps, UseRefElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsClip, UseBasePropsClipParameters } from "./clip.js";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";


export interface ClipFadeProps<E extends HTMLElement> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsClipParameters<E>, "clipParameters">>,
    Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>,
    Partial<Get<UseRefElementParameters<E>, "refElementParameters">> { };

export const ClipFade = memo(forwardElementRef(function ClipFade<E extends HTMLElement>({ delayMountUntilShown, exclusivityKey, easing, easingIn, easingOut, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ClipFadeProps<E>, ref: Ref<E>) {
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
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                { ref, ...rest }
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));

