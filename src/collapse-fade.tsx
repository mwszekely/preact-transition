import { h, Ref, VNode } from "preact";
import { Collapse, CollapseProps } from "./collapse";
import { FadeProps, useCreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";



export interface CollapseFadeProps<E extends HTMLElement> extends Omit<Partial<CollapseProps<E>>, "open">, FadeProps<E> { children: VNode<any> };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Collapse and Fade effects.
 * 
 * @see `Transitionable` `Collapse` `Fade`
 */
export const CollapseFade = forwardElementRef(function CollapseFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) {
    return <Collapse open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
