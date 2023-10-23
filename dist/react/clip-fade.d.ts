import { Ref } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";
import { UseBasePropsClipParameters } from "./clip.js";
import { UseBasePropsFadeParameters } from "./fade.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface ClipFadeProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsClipParameters, "clipParameters">>, Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, Partial<Get<UseRefElementParameters<E>, "refElementParameters">> {
}
export declare const ClipFade: <E extends HTMLElement>({ delayMountUntilShown, exclusivityKey, easing, easingIn, easingOut, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ClipFadeProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=clip-fade.d.ts.map