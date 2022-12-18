import { h, Ref } from "preact";
import { NonIntrusiveElementAttributes, Transitionable, UseTransitionProps } from "./transitionable";
import { Clip, ClipProps, createClipProps, CreateClipProps } from "./clip";
import { FadeProps, createFadeProps, CreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers"



export interface CreateClipFadeProps extends CreateClipProps, CreateFadeProps { }
export interface ClipFadeProps<E extends HTMLElement> extends Partial<CreateClipFadeProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const ClipFade = forwardElementRef(function ClipFade<E extends HTMLElement>({ classBase, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, ...rest }: ClipFadeProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            transition={{ measure: false, show, animateOnMount, classBase, exitVisibility }}
            props={useMergedProps<E>(
                { ref, ...rest },
                createClipProps({ classBase, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline }),
                createFadeProps({ classBase, fadeMax, fadeMin })
            )}
        />
    )
});
