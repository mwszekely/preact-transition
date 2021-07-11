import { default as clsx } from "clsx";

/**
 * Given two sets of props, merges their `class` and `className` properties.
 * Duplicate classes are removed (order doesn't matter anyway).
 * 
 * @param lhs Classes of the first component
 * @param rhs Classes of the second component
 * @returns A string representing all combined classes from both arguments.
 */
export function useMergedClasses(lhs: MergeClassesProps, rhs: MergeClassesProps) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.

    return mergeClasses(lhs, rhs);
}


function mergeClasses({ class: lhsClass, className: lhsClassName }: MergeClassesProps, { class: rhsClass, className: rhsClassName }: MergeClassesProps) {
    let lhsClasses = new Set(clsx(lhsClass, lhsClassName).split(" "));
    let rhsClasses = new Set(clsx(rhsClass, rhsClassName).split(" "));

    return [...Array.from(lhsClasses), ...Array.from(rhsClasses)].join(" ");
}

interface MergeClassesProps {
    "class"?: string | null | undefined;
    "className"?: string | null | undefined;
}
