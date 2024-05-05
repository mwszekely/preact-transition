import { memo, Ref, useMergedProps } from "preact-prop-helpers/preact";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom, UseBasePropsZoomParameters } from "./zoom.js";

export interface ZoomFadeProps<E extends Element> extends 
TransitionParametersBase<E>, 
Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, 
Partial<Get<UseBasePropsZoomParameters, "zoomParameters">> { }

export const ZoomFade = memo(forwardElementRef(function ZoomFade<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ZoomFadeProps<E>, ref: Ref<E>) {
    return (
        useTransition({
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
                    useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }),
                    { ref, ...rest },
                )
            },
            exclusiveTransitionParameters: { exclusivityKey }
        })
    );
}));
