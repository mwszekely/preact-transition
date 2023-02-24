import { default as clsx } from "clsx";
import { cloneElement, ComponentChildren, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import { GetExclusiveTransitionContext, SwappableContext, useCssClasses } from "./util/context";
import { forwardElementRef } from "./util/util";
import { NonIntrusiveElementAttributes } from "./util/types";
import { ExclusiveTransitionProvider } from "./exclusive";

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
export function useCreateSwappableProps<P extends {}>({ inline }: CreateSwappableProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E> ? E : HTMLElement;
    const { GetBaseClass } = useCssClasses();
    return useMergedProps<E>({
        className: clsx(`${GetBaseClass()}-swap-container`, inline && `${GetBaseClass()}-swap-container-inline`)
    }, otherProps);
}

/**
 * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
 * 
 * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
 * 
 * If you pass a regular element (like a div) or other single component, then thee props and ref will be forwarded onto that element. Otherwise, all the children will be wrapped in a div or span depending on the `inline` prop.
 * @param param0 
 * @returns 
 */
export const Swappable = memo(forwardElementRef(function Swappable<E extends HTMLElement>({ children: c, inline, childrenAnimateOnMount, exclusivityKey, ...p }: SwapProps<E>, ref: Ref<E>) {
    let children = c as VNode;
    if (!(children as VNode).type)
        children = (!inline ? <div>{children}</div> : <span>{children}</span>)
    inline ??= typeof children.type === "string" && inlineElements.has(children.type);

    const transitionProps = useCreateSwappableProps({ inline }, { ...p, ref });
    const mergedWithChildren = useMergedProps<E>(transitionProps, children.props);

    const animateOnMount = useRef(childrenAnimateOnMount ?? false);
    useEffect(() => {
        animateOnMount.current = true;
    }, [])
    const contextValue = useRef({ getAnimateOnMount: () => { return animateOnMount.current; } });
    let ret = cloneElement(children, mergedWithChildren as typeof transitionProps);
    ret = (<SwappableContext.Provider value={contextValue.current}>{ret}</SwappableContext.Provider>)
    if (exclusivityKey) {
        ret = (<ExclusiveTransitionProvider key={exclusivityKey} exclusivityKey={exclusivityKey}>{ret}</ExclusiveTransitionProvider>)
    }
    return ret;
}))

// If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
// Not perfect, but it's not supposed to be. `inline` is for perfect.
const inlineElements = new Set([
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr"
]);
