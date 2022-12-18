import { createFadeProps } from "./fade";
import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { createSlideProps, CreateSlideProps, Slide, SlideProps } from "./slide";
import { createZoomProps, CreateZoomProps, ZoomProps } from "./zoom";
import { useMergedProps } from "preact-prop-helpers";
import { NonIntrusiveElementAttributes, Transitionable, UseTransitionProps } from "./transitionable";


export interface CreateSlideZoomProps extends CreateZoomProps, CreateSlideProps { }
export interface SlideZoomProps<E extends HTMLElement> extends Partial<CreateSlideZoomProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const SlideZoom = forwardElementRef(function SlideZoom<E extends HTMLElement>({ classBase, slideTargetBlock, slideTargetInline, show, animateOnMount, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline, exitVisibility, ...rest }: SlideZoomProps<E>, ref: Ref<E>) {
    
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));

    return (
        <Transitionable<E>
            transition={{ measure: false, show, animateOnMount, classBase, exitVisibility }}
            props={useMergedProps<E>(
                { ref, ...rest },
                createZoomProps({ classBase, zoomMin, zoomMinBlock, zoomMinInline, zoomOrigin, zoomOriginBlock, zoomOriginInline }),
                createSlideProps({ classBase, slideTargetBlock, slideTargetInline })
            )}
        />
    )
});
