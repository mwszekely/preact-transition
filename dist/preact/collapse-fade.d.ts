import { Ref } from "preact-prop-helpers";
import { UseBasePropsCollapseParameters } from "./collapse.js";
import { UseBasePropsFadeParameters } from "./fade.js";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface CollapseFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, Partial<Get<UseBasePropsCollapseParameters, "collapseParameters">> {
}
export declare const CollapseFade: <E extends HTMLElement>({ show, exclusivityKey, easing, easingIn, easingOut, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) => import("preact-prop-helpers").JSX.Element | null;
//# sourceMappingURL=collapse-fade.d.ts.map