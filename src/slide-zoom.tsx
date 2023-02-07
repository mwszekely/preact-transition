import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsSlide, UseBasePropsSlideParameters } from "./slide";
import { useTransition } from "./transitionable";
import { Get, TransitionParametersBase } from "./util/types";
import { forwardElementRef } from "./util/util";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom";

export interface SlideZoomProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">> { };

export const SlideZoom = memo(forwardElementRef(function SlideZoom<E extends HTMLElement>({ duration, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, ...rest }: SlideZoomProps<E>, ref: Ref<E>) {
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
                { ref, ...rest },
                useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
            )
        }
    });
}));
