import { JSX, memo, Ref, useMergedProps } from "preact-prop-helpers";
import { useTransition } from "./transitionable.js";
import { useCssClasses } from "./util/context.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef, useLastNonNullValue } from "./util/util.js";

export interface UseBasePropsFlipParametersSelf {
    /**
     * The target angle (in degrees) to rotate towards on the inline axis (X axis for horizontal writing modes)
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    flipAngleInline: number | null | undefined;

    /**
     * The target angle (in degrees) to rotate towards on the block axis (X axis for horizontal writing modes)
     * When 0, the last non-zero value will be used. Pass null/undefined to actually use 0.
     */
    flipAngleBlock: number | null | undefined;

    /**
     * Since this is a 3D effect, a perspective value is needed.
     * @default 800px
     */
    flipPerspective: string | number | undefined;

    /**
     * The origin for both block and inline at once
     */
    flipOrigin: number | null | undefined;

    /**
     * The block-level transform origin
     */
    flipOriginBlock: number | null | undefined;

    /**
     * The inline-level transform origin
     */
    flipOriginInline: number | null | undefined;
}

/**
 * Properties that allow adjusting the direction and extent of the flip effect. 
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would flip to the right by 50% of the element's width.
 */
export interface UseBasePropsFlipParameters {
    flipParameters: UseBasePropsFlipParametersSelf;
}

/**
 * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
 */
export function useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }: UseBasePropsFlipParameters) {
    const { GetBaseClass } = useCssClasses();
    return {
        className: `${GetBaseClass()}-flip`,
        style: {
            [`--${GetBaseClass()}-flip-origin-inline`]: `${(flipOriginInline ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-origin-block`]: `${(flipOriginBlock ?? flipOrigin ?? 0.5)}`,
            [`--${GetBaseClass()}-flip-angle-inline`]: `${(useLastNonNullValue(flipAngleInline) ?? 0)}deg`,
            [`--${GetBaseClass()}-flip-angle-block`]: `${(useLastNonNullValue(flipAngleBlock) ?? 0)}deg`,
            [`--${GetBaseClass()}-perspective`]: `${(flipPerspective ?? 800)}px`
        } as JSX.CSSProperties
    }
}

export interface FlipProps<E extends HTMLElement> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFlipParameters, "flipParameters">> { }

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
 * 
 * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
 * with `1` being `100%` of the element's width or height.
 * 
 * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
 * exclusivityKey allows for convenient setups inside of a `SwapContainer` 
 * (`flipInline={index - selectedIndex}` or similar.) 
 * 
 * @see `Transitionable`
 */
export const Flip = memo(forwardElementRef(function Flip<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, show, animateOnMount, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: FlipProps<E>, ref: Ref<E>) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: false,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps<E>(
                useBasePropsFlip({ flipParameters: { flipAngleBlock, flipAngleInline, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }),
                { ref, ...rest },
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
