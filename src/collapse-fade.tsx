import { Ref, h, VNode } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "./use-merged-props";

import { FadeProps, useCreateFadeProps } from "./fade";
import { Collapse, CollapseProps } from "./collapse";


export interface CollapseFadeProps<E extends HTMLElement> extends Partial<CollapseProps<E>>, FadeProps<E> { children: VNode<any> };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with both Collapse and Fade effects.
 * 
 * @see `Transitionable` `Collapse` `Fade`
 */
export const CollapseFade = forwardElementRef(function CollapseFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) {
    return <Collapse open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
