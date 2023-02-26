import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade } from "./fade.js";
import { useBasePropsSlide } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom } from "./zoom.js";
;
export const SlideZoomFade = memo(forwardElementRef(function SlideZoomFade({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, fadeMax, fadeMin, exitVisibility, onVisibilityChange, ...rest }, ref) {
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
            propsIncoming: useMergedProps(useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=slide-zoom-fade.js.map