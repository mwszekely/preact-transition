import { ComponentChildren, JSX, Ref } from "preact-prop-helpers/preact";
import { NonIntrusiveElementAttributes } from "./util/types.js";
export interface SwapProps<E extends HTMLElement> extends Partial<CreateSwappableProps>, NonIntrusiveElementAttributes<E> {
    children: ComponentChildren;
    /**
     * By default, each child transitions in/out at the same time, in sync with each other.
     *
     * If you want to guarantee that, no matter what, only one is ever visible at all,
     * pass a string to `exclusivityKey`, and all transitions that use that same
     * `exclusivityKey` will coordinate this behavior among themselves.
     *
     * This is also available as a separate component (`ExclusiveTransitionProvider`)
     * if you need this behavior in unrelated circumstances.
     */
    exclusivityKey?: string | null | undefined;
}
export interface CreateSwappableProps {
    /**
     * Whether this component is inline-grid or grid.
     * If not provided, the child element is looked at. If it's a span or other inline element, inline is assumed.
     * (A simply-fooled heuristic--provide this prop if necessary)
     */
    inline: boolean | null | undefined;
    /**
     * Provides default values to `useTransition`'s `animateOnMount`. If null, the default value provided will be `false` initially, then `true` after the `Swappable` itself has mounted.
     */
    childrenAnimateOnMount?: boolean | null | undefined;
}
/**
 * Creates a set of props that implement a swap container.
 * Be sure to merge these returned props with whatever the user passed in.
 */
export declare function useCreateSwappableProps<P extends {}>({ inline }: CreateSwappableProps, otherProps: P): import("preact-prop-helpers").ElementProps<(P extends JSX.HTMLAttributes<infer E extends EventTarget> ? E : HTMLElement) & Element>;
/**
 * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
 *
 * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
 *
 * If you pass a regular element (like a div) or other single component, then thee props and ref will be forwarded onto that element. Otherwise, all the children will be wrapped in a div or span depending on the `inline` prop.
 * @param param0
 * @returns
 */
export declare const Swappable: <E extends HTMLElement>({ children: c, inline, childrenAnimateOnMount, exclusivityKey, ...p }: SwapProps<E>, ref: Ref<E>) => import("preact").VNode<any>;
//# sourceMappingURL=swappable.d.ts.map