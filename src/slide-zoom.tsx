import { memo, Ref, useMergedProps } from "preact-prop-helpers";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom.js";

export interface SlideZoomProps<E extends Element> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsZoomParameters, "zoomParameters">>,
    Partial<Get<UseBasePropsSlideParameters, "slideParameters">> { }

export const SlideZoom = memo(forwardElementRef(function SlideZoom<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: SlideZoomProps<E>, ref: Ref<E>) {
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
                { ref, ...rest },
                useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
