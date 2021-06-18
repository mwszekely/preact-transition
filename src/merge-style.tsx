import { h } from "preact";

export function mergeStyles(style: h.JSX.HTMLAttributes<HTMLElement>["style"], obj: Record<string, string | number | undefined>): h.JSX.CSSProperties {
    return typeof style === "string" ? `;${Object.entries(obj).map(([name, value]) => `name: ${value}`).join(";")}` as any : {
        ...obj,
        ...style
    }
}
