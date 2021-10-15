import { h, Ref } from "preact";
import { Clip, ClipProps } from "./clip";
import { FadeProps, useCreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";



export interface ClipFadeProps<E extends HTMLElement> extends ClipProps<E>, FadeProps<E> { };

export const ClipFade = forwardElementRef(function ClipFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, show, ...rest }: ClipFadeProps<E>, ref: Ref<E>) {
    return <Clip show={show} {...useCreateFadeProps({ classBase, fadeMin, fadeMax }, { ...rest, ref })} />
});
