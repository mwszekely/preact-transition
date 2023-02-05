import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade";
import { useTransition } from "./transitionable";
import { Get, TransitionParametersBase } from "./util/types";
import { forwardElementRef } from "./util/util";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom";

export interface ZoomFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">> { };

export const ZoomFade = memo(forwardElementRef(function ZoomFade<E extends HTMLElement>({ duration, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, onVisibilityChange, ...rest }: ZoomFadeProps<E>, ref: Ref<E>) {
    return (
        useTransition({
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
                    useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                    { ref, ...rest },
                )
            },
            refElementParameters: {}
        })
    );
}));
