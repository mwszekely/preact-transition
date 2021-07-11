import { h } from "preact";

/**
 * Merges two style objects, returning the result.
 * 
 * @param style The user-given style prop for this component
 * @param obj The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export function useMergedStyles(lhs: h.JSX.HTMLAttributes<any>["style"] | null | undefined, rhs: h.JSX.HTMLAttributes<any>["style"] | null | undefined): h.JSX.HTMLAttributes<any>["style"] {
    
    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined;
        
    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs;
        if (!lhs && rhs)
            return rhs;

        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
            if (typeof lhs == "string")
                return useMergedStyles(Object.fromEntries(lhs.split(";").map(statement => statement.split(":"))) as any, rhs);
            if (typeof rhs == "string")
                return useMergedStyles(lhs, Object.fromEntries(rhs.split(";").map(statement => statement.split(":"))) as any);
        }

        // Logic???
        return undefined;
    }

    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs}`;
    }

    // They're both objects, just merge them.
    return {
        ...lhs as h.JSX.CSSProperties,
        ...rhs as h.JSX.CSSProperties
    };
}
