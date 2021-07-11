import { Ref, h } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "./use-merged-props";

import { FadeProps, useCreateFadeProps } from "./fade";
import { Zoom, ZoomProps } from "./zoom";


export interface ZoomFadeProps<E extends HTMLElement> extends ZoomProps<E>, FadeProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Zoom and Fade effects. 
 * 
 * This is an ideal time to use the minimum size Zoom properties.
 * 
 * @see `Transitionable` `Zoom`
 */
export const ZoomFade = forwardElementRef(function ZoomFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: ZoomFadeProps<E>, ref: Ref<E>) {
    return <Zoom open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
