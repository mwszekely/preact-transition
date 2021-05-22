import clsx from "clsx";
import { h } from "preact";
import { mergeStyles } from "./merge-style";

export interface ZoomPropsMin extends Pick<h.JSX.HTMLAttributes<HTMLElement>, "className" | "style"> {
    originX?: number;
    originY?: number;
    zoom?: "x" | "y" | "both";
    minX?: number;   // Default is 0. Values (0-1] should only be used in combination with a fade effect, or something similar.
    minY?: number;   // Default is 0. Values (0-1] should only be used in combination with a fade effect, or something similar.
}

export function zoomProps<P extends ZoomPropsMin>({ className, originX, originY, style, zoom, minX, minY, ...props }: P) {

    return {
        ...props,

        className: clsx("zoom", className),

        style: mergeStyles(style, {
            "--transition-origin-x": (originX ?? 0.5),
            "--transition-origin-y": (originY ?? 0),

            "--transition-small-x": (zoom != "y" ? (minX ?? 0) : 1),
            "--transition-small-y": (zoom != "x" ? (minY ?? 0) : 1)
        }) as never
    };
}
