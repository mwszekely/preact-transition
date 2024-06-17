import { memo, useMergedProps } from "preact-prop-helpers";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { forwardElementRef, useLastNonNullValue } from "./util/util.js";
/**
 * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export function useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-flip`,
        style: {
            [`--${GetBaseClass()}-flip-origin-inline`]: `${(flipOriginInline ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-origin-block`]: `${(flipOriginBlock ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-angle-inline`]: `${(useLastNonNullValue(flipAngleInline) ?? 0)}deg`,
            [`--${GetBaseClass()}-flip-angle-block`]: `${(useLastNonNullValue(flipAngleBlock) ?? 0)}deg`,
            [`--${GetBaseClass()}-perspective`]: `${(flipPerspective ?? 800)}px`
        }
    };
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
 *
 * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
 * with `1` being `100%` of the element's width or height.
 *
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * exclusivityKey allows for convenient setups inside of a `SwapContainer`
 * (`flipInline={index - selectedIndex}` or similar.)
 *
 * @see `Transitionable`
 */
export const Flip = memo(forwardElementRef(function Flip({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }, ref) {
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
            propsIncoming: useMergedProps(useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=flip.js.map