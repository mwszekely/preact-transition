import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsFade } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
import { useBasePropsZoom } from "./zoom.js";
;
export const ZoomFade = memo(forwardElementRef(function ZoomFade({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, onVisibilityChange, ...rest }, ref) {
    return (useTransition({
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
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsZoom({ zoomParameters: { zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    }));
}));
//# sourceMappingURL=zoom-fade.js.map