import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { useEffect, useRef } from "preact/hooks";
import { forwardElementRef } from "./forward-element-ref";
import { defaultClassBase, NonIntrusiveElementAttributes, Transitionable, TransitionableProps, UseTransitionProps } from "./transitionable";

/**
 * Properties that allow adjusting the direction and extent of the slide effect. 
 * Values are relative, with 1 or -1 being the size of the component in that direction.
 * `0.5`, for example, would slide to the right by 50% of the element's width.
 */
export interface CreateSlideProps {

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

    /**
     * Allows customizing the class name used (in the format of `${classBase}-swap-container`)
     * @default "transition"
     */
    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 */
export function createSlideProps({ classBase, slideTargetInline, slideTargetBlock }: Partial<CreateSlideProps>) {
    classBase = defaultClassBase(classBase);
    return {
        className: `${classBase}-slide`,
        style: {
            [`--${classBase}-slide-target-inline`]: `${(slideTargetInline ?? 0)}`,
            [`--${classBase}-slide-target-block`]: `${(slideTargetBlock ?? 0)}`
        } as h.JSX.CSSProperties
    };
}

// Note: CreateSlideProps is *intentionally* not made partial here.
export interface SlideProps<E extends HTMLElement> extends Partial<CreateSlideProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

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
export const Slide = forwardElementRef(function Slide<E extends HTMLElement>({ classBase, duration, slideTargetInline, slideTargetBlock, show, animateOnMount, exitVisibility, ...rest }: SlideProps<E>, ref: Ref<E>) {

    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));

    return <Transitionable<E>
        transition={{ measure: false, show, duration, animateOnMount, classBase, exitVisibility }}
        props={useMergedProps<E>({ ref, ...rest }, createSlideProps({ classBase, slideTargetBlock, slideTargetInline }))}
    />
});


// TODO: This logic was required for slides at one point to ensure that slideTargetInline={index - currentIndex} works right,
// but it works without it now, so, like, we're good then? Which I'm okay with because I can't explain the logic here honestly.

/*export function useSlideThing({ targetBlock, targetInline }: { targetInline?: number | null, targetBlock?: number | null }): { targetInline: number | undefined, targetBlock: number | undefined } {

    const lastValidTargetInline = useRef(targetInline ?? 1);
    const lastValidTargetBlock = useRef(targetBlock ?? 0);

    
    useEffect(() => { if (targetInline) lastValidTargetInline.current = targetInline; }, [targetInline]);
    useEffect(() => { if (targetBlock) lastValidTargetBlock.current = targetBlock; }, [targetBlock]);

    if (targetInline == 0)
        targetInline = lastValidTargetInline.current;
    if (targetBlock == 0)
        targetBlock = lastValidTargetBlock.current;

    targetInline ??= undefined;
    targetBlock ??= undefined;
    return { targetInline, targetBlock };
}*/
