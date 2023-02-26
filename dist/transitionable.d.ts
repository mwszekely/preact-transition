import { h, VNode } from "preact";
import { UseTransitionParameters } from "./util/types.js";
/**
 * Provide props that can be used to animate a transition.
 *
 * @param param0
 * @returns
 */
export declare function useTransition<E extends HTMLElement>({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, easing, easingIn, easingOut, onVisibilityChange }, exclusiveTransitionParameters: { exclusivityKey } }: UseTransitionParameters<E>): VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=transitionable.d.ts.map