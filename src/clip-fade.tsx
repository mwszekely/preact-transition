import { h, Ref } from "preact";
import { NonIntrusiveElementAttributes, Transitionable, UseTransitionProps } from "./transitionable";
import { Clip, ClipProps, createClipProps, CreateClipProps } from "./clip";
import { FadeProps, createFadeProps, CreateFadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers"
import { memo } from "preact/compat";



export interface CreateClipFadeProps extends CreateClipProps, CreateFadeProps { }
export interface ClipFadeProps<E extends HTMLElement> extends Partial<CreateClipFadeProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const ClipFade = memo(forwardElementRef(function ClipFade<E extends HTMLElement>({ delayMountUntilShown, classBase, duration, fadeMin, fadeMax, show, animateOnMount, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline, exitVisibility, ...rest }: ClipFadeProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            measure={false}
            show={show}
            duration={duration}
            animateOnMount={animateOnMount}
            classBase={classBase}
            exitVisibility={exitVisibility}
            delayMountUntilShown={delayMountUntilShown}
            {...useMergedProps<E>(
                { ref, ...rest },
                createClipProps({ classBase, clipMin, clipMinBlock, clipMinInline, clipOrigin, clipOriginBlock, clipOriginInline }),
                createFadeProps({ classBase, fadeMax, fadeMin })
            )}
        />
    )
}));
