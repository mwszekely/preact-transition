import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom.js";

export interface SlideZoomProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">> { };

export const SlideZoom = memo(forwardElementRef(function SlideZoom<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, ...rest }: SlideZoomProps<E>, ref: Ref<E>) {
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
                { ref, ...rest },
                useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
