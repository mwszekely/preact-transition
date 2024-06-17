import { Ref } from "preact-prop-helpers";
import { UseBasePropsFadeParameters } from "./fade.js";
import { UseBasePropsFlipParameters } from "./flip.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface FlipFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, Partial<Get<UseBasePropsFlipParameters, "flipParameters">> {
}
export declare const FlipFade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: FlipFadeProps<E>, ref: Ref<E>) => import("preact-prop-helpers").JSX.Element | null;
//# sourceMappingURL=flip-fade.d.ts.map