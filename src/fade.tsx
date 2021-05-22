import clsx from "clsx";
import { h } from "preact";

export interface FadePropsMin extends Pick<h.JSX.HTMLAttributes<HTMLElement>, "className"> {
    classBase?: string;
}

export function fadeProps<P extends FadePropsMin>({ className, ...props }: P) {
    return {
        ...props,
        className: clsx("fade", className)
    };
}