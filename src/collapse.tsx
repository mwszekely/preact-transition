import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

/**
 * Properties that allow adjusting the direction of the collapse effect.
 */
export interface UseBasePropsCollapseParameters<E extends Element> extends UseBasePropsBaseParameters<E> {

    collapseParameters: {
        /**
        * The smallest size the component collapses to.
        */
        minBlockSize: string | null | undefined;
    }
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 * 
 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
 * 
 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
 */
export function useBasePropsCollapse<E extends Element>({ collapseParameters: { minBlockSize } }: UseBasePropsCollapseParameters<E>) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-collapse`,
        style: {
            [`--${GetBaseClass()}-collapse-min-block`]: minBlockSize ?? 0
        }
    };
}

export interface CollapseProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsCollapseParameters<E>, "collapseParameters">> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
 * 
 * *Important*: This component is *not* efficient for the browser to animate! 
 * Make sure you do testing on lower power devices, or prefer a lighter
 * alternative, like `<Clip>`.
 * 
 * @see `Transitionable`
 */
export const Collapse = memo(forwardElementRef(function Collapse<E extends HTMLElement>({ show, exclusivityKey, easing, easingIn, easingOut, duration, delayMountUntilShown, minBlockSize, animateOnMount, exitVisibility, onVisibilityChange, ...rest }: CollapseProps<E>, ref: Ref<E>) {

    return useTransition({
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
            propsIncoming: useMergedProps<E>(
                useBasePropsCollapse({ collapseParameters: { minBlockSize } }),
                { ref, ...rest },
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
