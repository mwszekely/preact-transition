import { Ref } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";
import { UseBasePropsFadeParameters } from "./fade.js";
import { UseBasePropsSlideParameters } from "./slide.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { UseBasePropsZoomParameters } from "./zoom.js";
export interface SlideZoomFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters<E>, "zoomParameters">>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>, Partial<Get<UseRefElementParameters<E>, "refElementParameters">> {
}
export declare const SlideZoomFade: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, fadeMax, fadeMin, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: SlideZoomFadeProps<E>, ref: Ref<E>) => import("preact").VNode<import("preact").JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=slide-zoom-fade.d.ts.map