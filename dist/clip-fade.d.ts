import { Ref } from "preact";
import { UseBasePropsClipParameters } from "./clip.js";
import { UseBasePropsFadeParameters } from "./fade.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface ClipFadeProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsClipParameters<E>, "clipParameters">>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">> {
}
export declare const ClipFade: <E extends HTMLElement>({ delayMountUntilShown, exclusivityKey, easing, easingIn, easingOut, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, onVisibilityChange, ...rest }: ClipFadeProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=clip-fade.d.ts.map