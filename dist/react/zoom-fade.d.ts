import { Ref } from "preact";
import { UseBasePropsFadeParameters } from "./fade.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { UseBasePropsZoomParameters } from "./zoom.js";
export interface ZoomFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>, Partial<Get<UseBasePropsZoomParameters, "zoomParameters">> {
}
export declare const ZoomFade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ZoomFadeProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=zoom-fade.d.ts.map