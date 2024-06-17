import { memo, Ref, useMergedProps } from "preact-prop-helpers";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface SlideFadeProps<E extends Element> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>,
    Partial<Get<UseBasePropsSlideParameters, "slideParameters">> { }

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
