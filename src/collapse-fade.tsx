import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { createCollapseProps, CreateCollapseProps, Collapse, CollapseProps } from "./collapse";
import { createFadeProps, CreateFadeProps, FadeProps } from "./fade";
import { useMergedProps } from "preact-prop-helpers";
import { NonIntrusiveElementAttributes, Transitionable, UseTransitionProps } from "./transitionable";


export interface CreateCollapseFadeProps extends CreateFadeProps, CreateCollapseProps { }
export interface CollapseFadeProps<E extends HTMLElement> extends Partial<CreateCollapseFadeProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

export const CollapseFade = forwardElementRef(function CollapseFade<E extends HTMLElement>({ classBase, show, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) {

    return (
        <Transitionable<E>
            transition={{ measure: true, show, duration, animateOnMount, classBase, exitVisibility, delayMountUntilShown }}
            props={useMergedProps<E>(
                { ref, ...rest },
                createFadeProps({ classBase, fadeMin, fadeMax }),
                createCollapseProps({ classBase, minBlockSize })
            )}
        />
    )
});
