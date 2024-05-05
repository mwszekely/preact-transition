import { memo, useMergedProps } from "preact-prop-helpers/preact";
import { useBasePropsClip } from "./clip.js";
import { useBasePropsFade } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
export const ClipFade = memo(forwardElementRef(function ClipFade({ delayMountUntilShown, exclusivityKey, easing, easingIn, easingOut, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
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
            propsIncoming: useMergedProps(useBasePropsClip({ clipParameters: { clipMin, clipMinInline, clipMinBlock, clipOrigin, clipOriginInline, clipOriginBlock } }), useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=clip-fade.js.map