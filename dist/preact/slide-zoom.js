import { memo, useMergedProps } from "preact-prop-helpers/preact";
import { useBasePropsSlide } from "./slide.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom } from "./zoom.js";
export const SlideZoom = memo(forwardElementRef(function SlideZoom({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
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
            propsIncoming: useMergedProps({ ref, ...rest }, useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }))
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=slide-zoom.js.map