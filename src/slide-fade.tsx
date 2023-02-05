import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide";
import { useTransition } from "./transitionable";
import { Get, TransitionParametersBase } from "./util/types";
import { forwardElementRef } from "./util/util";

export interface SlideFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">> { };

export const SlideFade = memo(forwardElementRef(function SlideFade<E extends HTMLElement>({ duration, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, ...rest }: SlideFadeProps<E>, ref: Ref<E>) {
    return useTransition({
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            propsIncoming: useMergedProps<E>(
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
                { ref, ...rest }
            )
        },
        refElementParameters: {}
    });
}));
