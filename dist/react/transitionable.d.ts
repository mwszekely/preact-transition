import { VNode } from "preact-prop-helpers/preact";
import { UseTransitionParameters } from "./util/types.js";
/**
 * Provide props that can be used to animate a transition.
 *
 * @compositeParams
 */
export declare function useTransition<E extends HTMLElement>({ transitionParameters: { propsIncoming: { children, ...p }, show, animateOnMount, measure, exitVisibility, duration, delayMountUntilShown, easing, easingIn, easingOut, onVisibilityChange, ...void2 }, exclusiveTransitionParameters: { exclusivityKey, ...void3 }, refElementParameters, ...void1 }: UseTransitionParameters<E>): VNode | null;
export declare function forceReflow<E extends HTMLElement>(e: E): E;
//# sourceMappingURL=transitionable.d.ts.map