import clsx from "clsx";
import { h } from "preact";
import { mergeStyles } from "./merge-style";

export interface ClipPropsMin extends Pick<h.JSX.HTMLAttributes<HTMLElement>, "className" | "style"> {
    originX?: number;
    originY?: number;
    classBase?: string;
}

export function clipProps<P extends ClipPropsMin>(p: P) {
    const { className, originX, originY, style, ...props } = p;

    return {
        ...props,

        className: clsx("clip", className),

        style: mergeStyles(style, {
            "--transition-origin-x": (originX ?? 0.5),
            "--transition-origin-y": (originY ?? 0.5)
        }) as {},
    };
}
