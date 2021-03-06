import { default as clsx } from "clsx";
import { cloneElement, h, Ref, VNode } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { forwardElementRef } from "./forward-element-ref";

export interface SwapProps<E extends HTMLElement> extends Partial<CreateSwappableProps>, h.JSX.HTMLAttributes<E> {
    children: VNode<any>;
}

export interface CreateSwappableProps {
    /**
     * Whether this component is inline-grid or grid. 
     * If not provided, the child element is looked at. If it's a span or other inline element, inline is assumed. 
     * (A simply-fooled heuristic--provide this prop if necessary)
     */
    inline: boolean | null | undefined;

    /**
     * Allows customizing the class name used (in the format of `${classBase}-swap-container`)
     * @default "transition"
     */
    classBase: string | null | undefined;
}

/**
 * Creates a set of props that implement a swap container.
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useCreateSwappableProps<P extends {}>({ inline, classBase }: CreateSwappableProps, otherProps: P) {
    type E = P extends h.JSX.HTMLAttributes<infer E>? E : HTMLElement;
    return useMergedProps<E>()({
        className: clsx(`${classBase ?? "transition"}-swap-container`, inline && `${classBase ?? "transition"}-swap-container-inline`)
    }, otherProps);
}

/**
 * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
 * 
 * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard. 
 * 
 * Like `<Transitionable>`, *this wraps an HTMLElement (or other ref-forwarding component)*. This will be your container that holds each `<Transitionable>` (or component that uses it). Strictly speaking it could be anything, not a `<Transitionable>`, but if it doesnt't transition out then it's just going to be hanging around 100% of the time.
 * 
 * Long way of saying, if you get a cryptic error with this component, make sure it has a single `<div>` child or something.
 * @param param0 
 * @returns 
 */
export const Swappable = forwardElementRef(function Swappable<E extends HTMLElement>({ children, classBase, inline, ...p }: SwapProps<E>, ref: Ref<E>) {

    inline ??= typeof children.type === "string" && inlineElements.has(children.type);

    const transitionProps = useCreateSwappableProps({ classBase, inline }, { ...p, ref });
    const mergedWithChildren = useMergedProps<E>()(transitionProps, children.props);

    return cloneElement(children, mergedWithChildren as typeof transitionProps);
})

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
