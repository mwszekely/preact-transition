import { h, Ref } from "preact";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
export interface UseBasePropsClipParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    clipParameters: {
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
    };
}
export declare function useBasePropsClip<E extends Element>({ clipParameters: { clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline } }: UseBasePropsClipParameters<E>): {
    className: string;
    style: h.JSX.CSSProperties;
};
export interface ClipProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsClipParameters<E>, "clipParameters">> {
}
export declare const Clip: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, clipOrigin, clipOriginInline, clipOriginBlock, clipMin, clipMinInline, clipMinBlock, show, animateOnMount, exitVisibility, onVisibilityChange, ...rest }: ClipProps<E>, ref: Ref<E>) => import("preact").VNode<h.JSX.HTMLAttributes<E>> | null;
//# sourceMappingURL=clip.d.ts.map