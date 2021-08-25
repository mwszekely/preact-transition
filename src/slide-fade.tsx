import { h, Ref, VNode } from "preact";
import { FadeProps, useCreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { Slide, SlideProps } from "./slide";



export interface SlideFadeProps<E extends HTMLElement> extends Omit<Partial<SlideProps<E>>, "open">, FadeProps<E> { children: VNode<any> };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Fade effects. 
 * 
 * `slideInline={(index - selectedIndex) / 10}` would make the element look like it fades out before it travels to its target destination.
 * 
 * @see `Transitionable` `Zoom`
 */
export const SlideFade = forwardElementRef(function SlideFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: SlideFadeProps<E>, ref: Ref<E>) {
    return <Slide open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
