import { Ref } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
/**
 * Properties that allow adjusting the direction of the collapse effect.
 */
export interface UseBasePropsCollapseParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    collapseParameters: {
        /**
        * The smallest size the component collapses to.
        */
        minBlockSize: string | null | undefined;
    };
}
/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 * Be sure to merge these returned props with whatever the user passed in.
 *
 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
 *
 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
 */
export declare function useBasePropsCollapse<E extends Element>({ collapseParameters: { minBlockSize } }: UseBasePropsCollapseParameters<E>): {
    className: string;
    style: {
        [x: string]: string | number;
    };
};
export interface CollapseProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsCollapseParameters<E>, "collapseParameters">>, Partial<Get<UseRefElementParameters<E>, "refElementParameters">> {
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
 *
 * *Important*: This component is *not* efficient for the browser to animate!
 * Make sure you do testing on lower power devices, or prefer a lighter
 * alternative, like `<Clip>`.
 *
 * @see `Transitionable`
 */
export declare const Collapse: <E extends HTMLElement>({ show, exclusivityKey, easing, easingIn, easingOut, duration, delayMountUntilShown, minBlockSize, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: CollapseProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=collapse.d.ts.map