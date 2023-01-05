import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { createSlideProps, CreateSlideProps, Slide, SlideProps } from "./slide";
import { createFadeProps, CreateFadeProps, FadeProps } from "./fade";
import { useMergedProps } from "preact-prop-helpers";
import { NonIntrusiveElementAttributes, Transitionable, UseTransitionProps } from "./transitionable";
import { memo } from "preact/compat";


export interface CreateSlideFadeProps extends CreateFadeProps, CreateSlideProps { }
export interface SlideFadeProps<E extends HTMLElement> extends Partial<CreateSlideFadeProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const SlideFade = memo(forwardElementRef(function SlideFade<E extends HTMLElement>({ classBase, delayMountUntilShown, duration, slideTargetBlock, slideTargetInline, show, animateOnMount, fadeMin, fadeMax, exitVisibility, ...rest }: SlideFadeProps<E>, ref: Ref<E>) {
    
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));

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
                createFadeProps({ classBase, fadeMin, fadeMax }),
                createSlideProps({ classBase, slideTargetBlock, slideTargetInline })
            )}
        />
    )
}));
