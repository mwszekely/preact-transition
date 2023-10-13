import { h, VNode } from "preact";
import { UseTransitionParameters } from "./util/types.js";
/**
 * Provide props that can be used to animate a transition.
 *
 * @compositeParams
 */
export declare function useTransition<E extends HTMLElement>({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, easing, easingIn, easingOut, onVisibilityChange, ...void2 }, exclusiveTransitionParameters: { exclusivityKey, ...void3 }, refElementParameters, ...void1 }: UseTransitionParameters<E>): VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=transitionable.d.ts.map