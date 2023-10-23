import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsCollapse } from "./collapse.js";
import { useBasePropsFade } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { forwardElementRef } from "./util/util.js";
export const CollapseFade = memo(forwardElementRef(function CollapseFade({ show, exclusivityKey, easing, easingIn, easingOut, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: true,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps(useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }), useBasePropsCollapse({ collapseParameters: { minBlockSize } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=collapse-fade.js.map