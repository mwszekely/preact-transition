import { Ref } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";
import { UseBasePropsFadeParameters } from "./fade.js";
import { UseBasePropsFlipParameters } from "./flip.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface FlipFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>, Partial<Get<UseBasePropsFlipParameters<E>, "flipParameters">>, Partial<Get<UseRefElementParameters<E>, "refElementParameters">> {
}
export declare const FlipFade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: FlipFadeProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=flip-fade.d.ts.map