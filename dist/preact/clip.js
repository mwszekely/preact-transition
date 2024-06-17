import { clsx } from "clsx";
import { memo, useMergedProps } from "preact-prop-helpers";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { forwardElementRef } from "./util/util.js";
export function useBasePropsClip({ clipParameters: { clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline } }) {
    const { GetBaseClass } = useCssClasses();
    return ({
        className: clsx(`${GetBaseClass()}-clip`),
        style: {
            [`--${GetBaseClass()}-clip-origin-inline`]: (clipOriginInline ?? clipOrigin ?? 0.5),
            [`--${GetBaseClass()}-clip-origin-block`]: (clipOriginBlock ?? clipOrigin ?? 0),
            [`--${GetBaseClass()}-clip-min-inline`]: (clipMinInline ?? clipMin ?? 1),
            [`--${GetBaseClass()}-clip-min-block`]: (clipMinBlock ?? clipMin ?? 0),
        },
    });
}
export const Clip = memo(forwardElementRef(function Clip({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
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
            propsIncoming: useMergedProps(useBasePropsClip({ clipParameters: { clipMin, clipMinInline, clipMinBlock, clipOrigin, clipOriginInline, clipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=clip.js.map