
import { Ref, VNode, forwardRef, useEffect, useRef } from "preact-prop-helpers";

/**
 * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
 * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
 * 
 * TODO: Still needed?
 */
export function forwardElementRef<C extends <E extends HTMLElement>(p: any, ref: Ref<E>) => (VNode | null)>(Component: C) {
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
