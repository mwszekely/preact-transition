import { h, Ref } from "preact";
import { FadeProps, useCreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { SlideZoom, SlideZoomProps } from "./slide-zoom";
import { useMergedProps } from "preact-prop-helpers/use-merged-props";


export interface SlideZoomFadeProps<E extends HTMLElement> extends SlideZoomProps<E>, FadeProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with Zoom, Slide, and Fade effects.
 * 
 * Note that this is basically just shorthand for some prop creation and prop merging functions.
 * 
 * @see `Transitionable` `Slide` `Zoom` `Fade`
 */
export const SlideZoomFade = forwardElementRef(function SlideZoomFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: SlideZoomFadeProps<E>, ref: Ref<E>) {
    return <SlideZoom open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
