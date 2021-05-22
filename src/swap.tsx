import clsx from "clsx";
import { cloneElement, h, VNode } from "preact";

export interface SwapProps {
    children: VNode<any>;
    classBase?: string;
    inline?: boolean;
}


export function SwapContainer({ children, classBase, inline, ...props }: SwapProps) {
    inline ??= typeof children.type === "string" && inlineElements.has(children.type);

    return cloneElement(children, { className: clsx(children.props.className, `${classBase ?? "transition"}-swap-container`, inline && `${classBase ?? "transition"}-swap-container-inline`) });
}

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
