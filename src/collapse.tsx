import { h, Ref } from "preact";
import { forwardElementRef } from "./forward-element-ref";
import { useMergedProps } from "preact-prop-helpers";
import { Transitionable, TransitionableProps } from "./transitionable";

/**
 * Properties that allow adjusting the direction of the collapse effect.
 */
export interface CreateCollapseProps {
    /**
     * The smallest size the component collapses to.
     */
    minBlockSize: string | null | undefined;

    classBase: string | undefined;
}

/**
 * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
 * Be sure to merge these returned props with whatever the user passed in.
 * 
 * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
 * 
 * @example <Transitionable measure {...useCreateCollapseProps(...)} />
 */
export function useCreateCollapseProps<P extends {}>({ classBase, minBlockSize }: CreateCollapseProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E> ? E : HTMLElement;
    classBase ??= "transition";
    return useMergedProps<E>()({
        classBase,
        measure: true,
        className: `${classBase}-collapse`,
        style: {
            [`--${classBase}-collapse-min-block`]: minBlockSize ?? 0
        } as {}
    }, otherProps);
}

export interface CollapseProps<E extends HTMLElement> extends Partial<CreateCollapseProps>, TransitionableProps<E> { };

/**
 * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
 * 
 * *Important*: This component is *not* efficient for the browser to animate! 
 * Make sure you do testing on lower power devices, or prefer a lighter
 * alternative, like `<Clip>`.
 * 
 * @see `Transitionable`
 */
export const Collapse = forwardElementRef(function Collapse<E extends HTMLElement>({ classBase, show, minBlockSize, ...rest }: CollapseProps<E>, ref: Ref<E>) {
    return <Transitionable<E> show={show} {...useCreateCollapseProps({ classBase, minBlockSize }, { ...rest, ref })} />
});
