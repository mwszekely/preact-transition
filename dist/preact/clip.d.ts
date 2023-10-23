import { h, Ref } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
export interface UseBasePropsClickParametersSelf {
    /**
     * The target point to clip around (with X & Y components identical)
     * @default 0.5
     */
    clipOrigin: number | null | undefined;
    /**
     * The target point to clip around (X component in horizontal writing modes)
     * @default 0.5
     */
    clipOriginInline: number | undefined | null;
    /**
     * The target point to clip around (Y component in horizontal writing modes)
     * @default 0
     */
    clipOriginBlock: number | undefined | null;
    /**
     * The minimum size to clip to/from, from 0 to 1 (with X & Y components identical).
     * @default 0
     */
    clipMin: number | null | undefined;
    /**
     * The minimum size to clip to/from, from 0 to 1 (X component in horizontal writing modes).
     * @default 1
     */
    clipMinInline: number | undefined | null;
    /**
     * The minimum size to clip to/from, from 0 to 1 (Y component in horizontal writing modes).
     * @default 0
     */
    clipMinBlock: number | undefined | null;
}
export interface UseBasePropsClipParameters extends UseBasePropsBaseParameters {
    clipParameters: UseBasePropsClickParametersSelf;
}
export declare function useBasePropsClip({ clipParameters: { clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline } }: UseBasePropsClipParameters): {
    className: string;
    style: h.JSX.CSSProperties;
};
export interface ClipProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsClipParameters, "clipParameters">>, Partial<Get<UseRefElementParameters<E>, "refElementParameters">> {
}
export declare const Clip: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: ClipProps<E>, ref: Ref<E>) => import("preact").VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=clip.d.ts.map