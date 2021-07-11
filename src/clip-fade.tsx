import { Ref, h } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "./use-merged-props";

import { FadeProps, useCreateFadeProps } from "./fade";
import { Clip, ClipProps } from "./clip";


export interface ClipFadeProps<E extends HTMLElement> extends ClipProps<E>, FadeProps<E> { };

export const ClipFade = forwardElementRef(function ClipFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, open, ...rest }: ClipFadeProps<E>, ref: Ref<E>) {
    return <Clip open={open} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
