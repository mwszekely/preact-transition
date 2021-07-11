import { Ref, h } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "./use-merged-props";

import { ZoomProps, useCreateZoomProps } from "./zoom";
import { Slide, SlideProps } from "./slide";


export interface SlideZoomProps<E extends HTMLElement> extends SlideProps<E>, ZoomProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Zoom effects. 
 * 
 * Probably best combined with `useCreateFadeProps` (or just using a `SlideZoomFade`?).
 * 
 * @see `Transitionable` `SlideFadeZoom` `Zoom` `Fade`
 */
export const SlideZoom = forwardElementRef(function SlideZoom<E extends HTMLElement>({ classBase, zoomMin, zoomMinInline, zoomMinBlock, zoomOrigin, zoomOriginInline, zoomOriginBlock, open, ...rest }: SlideZoomProps<E>, ref: Ref<E>) {
    return <Slide open={open} {...useCreateZoomProps({ classBase, zoomMin, zoomMinInline, zoomMinBlock, zoomOrigin, zoomOriginInline, zoomOriginBlock }, { ...rest, ref })} />
});
