import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers";
import { defaultClassBase, NonIntrusiveElementAttributes, Transitionable, TransitionableProps, UseTransitionProps } from "./transitionable";
import { memo } from "preact/compat";

/**
 * Properties that allow adjusting the direction of the collapse effect.
 */
export interface CreateCollapseProps {
    /**
     * The smallest size the component collapses to.
     */
    minBlockSize: string | null | undefined;

    /**
     * Allows customizing the class name used (in the format of `${classBase}-swap-container`)
     * @default "transition"
     */
    classBase: string | undefined;

    delayMountUntilShown?: boolean;
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 * 
 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
 * 
 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
 */
export function createCollapseProps({ classBase, minBlockSize }: CreateCollapseProps) {
    classBase = defaultClassBase(classBase);
    return {
        className: `${classBase}-collapse`,
        style: {
            [`--${classBase}-collapse-min-block`]: minBlockSize ?? 0
        }
    };
}

export interface CollapseProps<E extends HTMLElement> extends Partial<CreateCollapseProps>, Omit<UseTransitionProps, "measure">, NonIntrusiveElementAttributes<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
 * 
 * *Important*: This component is *not* efficient for the browser to animate! 
 * Make sure you do testing on lower power devices, or prefer a lighter
 * alternative, like `<Clip>`.
 * 
 * @see `Transitionable`
 */
export const Collapse = memo(forwardElementRef(function Collapse<E extends HTMLElement>({ classBase, show, duration, delayMountUntilShown, minBlockSize, animateOnMount, exitVisibility, ...rest }: CollapseProps<E>, ref: Ref<E>) {
    return (
        <Transitionable<E>
            measure={true}
            show={show}
            duration={duration}
            animateOnMount={animateOnMount}
            classBase={classBase}
            exitVisibility={exitVisibility}
            delayMountUntilShown={delayMountUntilShown}
            {...useMergedProps<E>({ ref, ...rest }, createCollapseProps({ classBase, minBlockSize }))}
        />
    )
}));
