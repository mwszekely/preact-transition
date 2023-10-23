
import { Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";

//type ForwardedFunctionalComponentProps<P, E> = Omit<P, "ref"> & { ref?: Ref<E> }
//type ForwardedFunctionalComponent<P, E> = (p: ForwardedFunctionalComponentProps<P, E>) => VNode<ForwardedFunctionalComponentProps<P, E>>

//type ElementFromProps<P extends h.JSX.HTMLAttributes<any>> = P extends h.JSX.HTMLAttributes<infer E> ? E : EventTarget;
//type PropsFromComponent<C extends FunctionalComponent<any>> = C extends FunctionalComponent<infer P> ? P : unknown;

/**
 * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
 * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
 * 
 * TODO: Still needed?
 */
export function forwardElementRef<C extends <E extends HTMLElement>(p: any, ref: Ref<E>) => (VNode<any> | null)>(Component: C) {
    const ForwardedComponent = forwardRef(Component);
    return ForwardedComponent as C;
}

/**
 * Useful in particular for Slides with a Tab Panel --
 * if we do Math.sign(currentIndex - slideIndex), it
 * transitions nicely in the expected direction,
 * but we need to "remember" which direction to use
 * when it's the current panel (and the difference is 0)
 */
export function useLastNonNullValue<T>(value: T | null | undefined): T | null {
    const lastNonNullValue = useRef<T | null>(null);
    useEffect(() => {
        if (value != null)
            lastNonNullValue.current = value;
    }, [value]);

    return value ?? lastNonNullValue.current;
}
