import { Ref } from "preact-prop-helpers";
import { UseBasePropsSlideParameters } from "./slide.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { UseBasePropsZoomParameters } from "./zoom.js";
export interface SlideZoomProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsZoomParameters, "zoomParameters">>, Partial<Get<UseBasePropsSlideParameters, "slideParameters">> {
}
export declare const SlideZoom: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, show, animateOnMount, delayMountUntilShown, slideTargetBlock, slideTargetInline, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: SlideZoomProps<E>, ref: Ref<E>) => import("preact-prop-helpers").JSX.Element | null;
//# sourceMappingURL=slide-zoom.d.ts.map