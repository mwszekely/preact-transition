
import { FunctionalComponent, h, Ref, VNode } from "preact";
import { forwardRef } from "preact/compat";

type ForwardedFunctionalComponentProps<P, E> = Omit<P, "ref"> & { ref?: Ref<E> }
type ForwardedFunctionalComponent<P, E> = (p: ForwardedFunctionalComponentProps<P, E>) => VNode<ForwardedFunctionalComponentProps<P, E>>

type ElementFromProps<P extends h.JSX.HTMLAttributes<any>> = P extends h.JSX.HTMLAttributes<infer E> ? E : EventTarget;
type PropsFromComponent<C extends FunctionalComponent<any>> = C extends FunctionalComponent<infer P>? P : unknown;

/**
 * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
 * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
 */
export function forwardElementRef<C extends <E extends HTMLElement>(p: any, ref: Ref<E>) => (VNode<any> | null)>(Component: C) {
    type P = PropsFromComponent<C>;

    
    const ForwardedComponent = forwardRef(Component);
    return ForwardedComponent as C;
}

