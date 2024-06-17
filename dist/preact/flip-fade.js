import { memo, useMergedProps } from "preact-prop-helpers";
import { useBasePropsFade } from "./fade.js";
import { useBasePropsFlip } from "./flip.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
export const FlipFade = memo(forwardElementRef(function FlipFade({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return (useTransition({
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
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsFlip({ flipParameters: { flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    }));
}));
//# sourceMappingURL=flip-fade.js.map