import { JSX, Ref } from "preact-prop-helpers";
import { Get, TransitionParametersBase } from "./util/types.js";
export interface UseBasePropsSlideParametersSelf {
    /**
     * The target point to slide to/from (X component in horizontal writing modes).
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    slideTargetInline: number | null | undefined;
    /**
     * The target point to slide to/from (Y component in horizontal writing modes).
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    slideTargetBlock: number | null | undefined;
}
/**
 * Properties that allow adjusting the direction and extent of the slide effect.
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would slide to the right by 50% of the element's width.
 */
export interface UseBasePropsSlideParameters {
    slideParameters: UseBasePropsSlideParametersSelf;
}
/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export declare function useBasePropsSlide({ slideParameters: { slideTargetInline, slideTargetBlock } }: UseBasePropsSlideParameters): {
    className: string;
    style: JSX.CSSProperties;
};
export interface SlideProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsSlideParameters, "slideParameters">> {
}
/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Slide effect.
 *
 * Provide the direction the element will travel in with `slideInline` and `slideBlock`,
 * with `1` being `100%` of the element's width or height.
 *
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * which allows for convenient setups inside of a `SwapContainer`
 * (`slideInline={index - selectedIndex}` or similar.)
 *
 * @see `Transitionable`
 */
export declare const Slide: <E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, onVisibilityChange, slideTargetInline, slideTargetBlock, show, animateOnMount, exitVisibility, delayMountUntilShown, onElementChange, onMount, onUnmount, ...rest }: SlideProps<E>, ref: Ref<E>) => JSX.Element | null;
//# sourceMappingURL=slide.d.ts.map