import { jsx as _jsx } from "preact/jsx-runtime";
import { clsx } from "clsx";
import { cloneElement, memo, useEffect, useMergedProps, useRef } from "preact-prop-helpers";
import { ExclusiveTransitionProvider } from "./exclusive.js";
import { SwappableContext, useCssClasses } from "./util/context.js";
import { forwardElementRef } from "./util/util.js";
/**
 * Creates a set of props that implement a swap container.
 * Be sure to merge these returned props with whatever the user passed in.
 */
export function useCreateSwappableProps({ inline }, otherProps) {
    const { GetBaseClass } = useCssClasses();
    return useMergedProps({
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
export const Swappable = memo(forwardElementRef(function Swappable({ children: c, inline, childrenAnimateOnMount, exclusivityKey, ...p }, ref) {
    let children = c;
    if (!children.type)
        children = (!inline ? _jsx("div", { children: children }) : _jsx("span", { children: children }));
    inline ??= typeof children.type === "string" && inlineElements.has(children.type);
    const transitionProps = useCreateSwappableProps({ inline }, { ...p, ref });
    const mergedWithChildren = useMergedProps(transitionProps, children.props);
    const animateOnMount = useRef(childrenAnimateOnMount ?? false);
    useEffect(() => {
        animateOnMount.current = true;
    }, []);
    const contextValue = useRef({ getAnimateOnMount: () => { return animateOnMount.current; } });
    let ret = cloneElement(children, mergedWithChildren);
    ret = (_jsx(SwappableContext.Provider, { value: contextValue.current, children: ret }));
    if (exclusivityKey) {
        ret = (_jsx(ExclusiveTransitionProvider, { exclusivityKey: exclusivityKey, children: ret }, exclusivityKey));
    }
    return ret;
}));
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
//# sourceMappingURL=swappable.js.map