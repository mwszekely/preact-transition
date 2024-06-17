import { Ref } from "preact-prop-helpers";
import { UseBasePropsFadeParameters } from "./fade.js";
import { UseBasePropsSlideParameters } from "./slide.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface SlideFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, Partial<Get<UseBasePropsSlideParameters, "slideParameters">> {
}
export declare const SlideFade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: SlideFadeProps<E>, ref: Ref<E>) => import("preact-prop-helpers").JSX.Element | null;
//# sourceMappingURL=slide-fade.d.ts.map