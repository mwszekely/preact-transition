import clsx from "clsx";
import { h } from "preact";
import { mergeStyles } from "./merge-style";

export interface CollapsePropsMin extends Pick<h.JSX.HTMLAttributes<HTMLElement>, "className" | "style"> {
    direction: "x" | "y" | "both"
}

export function collapseProps<P extends CollapsePropsMin>({ className, direction, style, ...props }: P) {

    return {
        ...props,
        measure: true,
        className: clsx("collapse", className),
        style: mergeStyles(style, {
            ["--transition-small-width"] : (direction != "y" ? 0 : "var(--transition-surface-width)"),
            ["--transition-small-height"] : (direction != "x" ? 0 : "var(--transition-surface-height)")
        }) as never
    };
}
