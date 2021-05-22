import clsx from "clsx";
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { mergeStyles } from "./merge-style";

// x or y should be the direction to slide.
// This is easy to use with, for example, x={index - selectedIndex} or similar.
// x,y=0 have special handling to accomodate this (i.e. the case where index == selectedIndex)
export interface SlidePropsMin extends Pick<h.JSX.HTMLAttributes<HTMLElement>, "className" | "style"> {
    x?: number | null;
    y?: number | null;
    classBase?: string;
}

export function slideProps<P extends SlidePropsMin>(p: P) {
    let { x, y, className, style, ...props } = p;

    //x ??= 1;
    //y ??= 0;

    const lastValidX = useRef(x ?? 1);
    const lastValidY = useRef(y ?? 0);

    useEffect(() => { if (x) lastValidX.current = x;}, [x]);
    useEffect(() => { if (y) lastValidY.current = y;}, [y]);

    if (x == 0)
        x = lastValidX.current;
    if (y == 0)
        y = lastValidY.current;

    return {
        ...props,
        className: clsx("slide", className),

        style: mergeStyles(style, {
            "--transition-slide-target-x": `${(x ?? 0) * 100}%`,
            "--transition-slide-target-y": `${(y ?? 0) * 100}%`
        })
    };
}