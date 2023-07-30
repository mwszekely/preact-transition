import { Ref } from "preact";
import { useMergedProps, UseRefElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface SlideFadeProps<E extends Element> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>,
    Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">>,
    Partial<Get<UseRefElementParameters<E>, "refElementParameters">> { };

export const SlideFade = memo(forwardElementRef(function SlideFade<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: SlideFadeProps<E>, ref: Ref<E>) {
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
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
                { ref, ...rest }
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
