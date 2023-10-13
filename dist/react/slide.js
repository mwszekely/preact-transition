import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { forwardElementRef, useLastNonNullValue } from "./util/util.js";
/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export function useBasePropsSlide({ slideParameters: { slideTargetInline, slideTargetBlock } }) {
    slideTargetInline = useLastNonNullValue(slideTargetInline);
    slideTargetBlock = useLastNonNullValue(slideTargetBlock);
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-slide`,
        style: {
            [`--${GetBaseClass()}-slide-target-inline`]: `${(slideTargetInline ?? 0)}`,
            [`--${GetBaseClass()}-slide-target-block`]: `${(slideTargetBlock ?? 0)}`
        }
    };
}
;
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Slide effect.
 *
 * Provide the direction the element will travel in with `slideInline` and `slideBlock`,
 * with `1` being `100%` of the element's width or height.
 *
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * which allows for convenient setups inside of a `SwapContainer`
 * (`slideInline={index - selectedIndex}` or similar.)
 *
 * @see `Transitionable`
 */
export const Slide = memo(forwardElementRef(function Slide({ duration, exclusivityKey, easing, easingIn, easingOut, onVisibilityChange, slideTargetInline, slideTargetBlock, show, animateOnMount, exitVisibility, delayMountUntilShown, onElementChange, onMount, onUnmount, ...rest }, ref) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            easing,
            easingIn,
            easingOut,
            onVisibilityChange,
            propsIncoming: useMergedProps(useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }), { ref, ...rest })
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=slide.js.map