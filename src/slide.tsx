import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase, UseBasePropsBaseParameters } from "./util/types.js";
import { forwardElementRef, useLastNonNullValue } from "./util/util.js";

/**
 * Properties that allow adjusting the direction and extent of the slide effect. 
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would slide to the right by 50% of the element's width.
 */
export interface UseBasePropsSlideParameters<E extends Element> extends UseBasePropsBaseParameters<E> {
    slideParameters: {
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
}

/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function useBasePropsSlide<E extends Element>({ slideParameters: { slideTargetInline, slideTargetBlock } }: UseBasePropsSlideParameters<E>) {
    slideTargetInline = useLastNonNullValue(slideTargetInline);
    slideTargetBlock = useLastNonNullValue(slideTargetBlock);

    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-slide`,
        style: {
            [`--${GetBaseClass()}-slide-target-inline`]: `${(slideTargetInline ?? 0)}`,
            [`--${GetBaseClass()}-slide-target-block`]: `${(slideTargetBlock ?? 0)}`
        } as h.JSX.CSSProperties
    };
}

export interface SlideProps<E extends HTMLElement> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsSlideParameters<E>, "slideParameters">> { };

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
export const Slide = memo(forwardElementRef(function Slide<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, onVisibilityChange, slideTargetInline, slideTargetBlock, show, animateOnMount, exitVisibility, delayMountUntilShown, ...rest }: SlideProps<E>, ref: Ref<E>) {
    return useTransition({
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            easing,
            easingIn,
            easingOut,
            onVisibilityChange,
            propsIncoming: useMergedProps<E>(
                useBasePropsSlide({ slideParameters: { slideTargetBlock, slideTargetInline } }),
                { ref, ...rest },
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
