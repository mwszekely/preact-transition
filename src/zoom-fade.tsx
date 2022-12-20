import { h, Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { UseTransitionProps, NonIntrusiveElementAttributes, Transitionable } from "./transitionable";
import { CreateFadeProps, createFadeProps, FadeProps } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { CreateZoomProps, createZoomProps, Zoom, ZoomProps } from "./zoom";


export interface CreateZoomFadeProps extends CreateZoomProps, CreateFadeProps { }
export interface ZoomFadeProps<E extends HTMLElement> extends Partial<CreateZoomFadeProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const ZoomFade = forwardElementRef(function ZoomFade<E extends HTMLElement>({ classBase, duration, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, ...rest }: ZoomFadeProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            transition={{ measure: false, show, duration, animateOnMount, classBase, exitVisibility, delayMountUntilShown }}
            props={useMergedProps<E>(
                { ref, ...rest },
                createZoomProps({ classBase, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline }),
                createFadeProps({ classBase, fadeMax, fadeMin })
            )}
        />
    )
});
