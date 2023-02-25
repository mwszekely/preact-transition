import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom.js";

export interface SlideZoomFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">> { };

export const SlideZoomFade = memo(forwardElementRef(function SlideZoomFade<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, fadeMax, fadeMin, exitVisibility, onVisibilityChange, ...rest }: SlideZoomFadeProps<E>, ref: Ref<E>) {
    return useTransition({
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
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                { ref, ...rest }
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
