import { memo, useMergedProps } from "preact-prop-helpers/preact";
import { useBasePropsFade } from "./fade.js";
import { useBasePropsSlide } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom } from "./zoom.js";
export const SlideZoomFade = memo(forwardElementRef(function SlideZoomFade({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, fadeMax, fadeMin, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
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
            propsIncoming: useMergedProps(useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=slide-zoom-fade.js.map