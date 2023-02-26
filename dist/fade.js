import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { forwardElementRef } from "./util/util.js";
/**
 * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useBasePropsFade({ fadeParameters: { fadeMin, fadeMax } }) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-fade`,
        style: {
            [`--${GetBaseClass()}-fade-min`]: (fadeMin ?? 0),
            [`--${GetBaseClass()}-fade-max`]: (fadeMax ?? 1),
        }
    };
}
;
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Fade effect.
 *
 * Note that while it is absolutely possible to wrap another transition with `<Fade>`,
 * there will be some duplicate code run as two `<Transitionable>` components end up operating on the same element.
 * It's generally recommended to either use the components that include a combined fade effect,
 * or just directly a `<Transitionable>` on your own.
 *
 * @see `Transitionable`
 */
export const Fade = memo(forwardElementRef(function Fade({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, fadeMin, fadeMax, show, animateOnMount, exitVisibility, onVisibilityChange, ...rest }, ref) {
    return useTransition({
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            propsIncoming: useMergedProps({ ref, ...rest }, useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }))
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
//# sourceMappingURL=fade.js.map