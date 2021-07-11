import { h, Ref, RefCallback } from "preact";
import { useRef } from "preact/hooks";
import { useMergedClasses } from "./use-merged-classes";
import { isFunction, useMergedFunctions } from "./use-merged-functions";
import { useMergedRefs } from "./use-merged-refs";
import { useMergedStyles } from "./use-merged-styles";

let log: typeof console["log"] | undefined = undefined;
export function enableLoggingPropConflicts(log2: typeof console["log"]) {
    log = log2
}

type ElementFromAttributes<A> = A extends h.JSX.HTMLAttributes<infer E> ? E : EventTarget;

type MergedProps<T extends h.JSX.HTMLAttributes<any>, U extends h.JSX.HTMLAttributes<any>> = Omit<T, "class" | "ref" | "className" | "style"> & Omit<U, "class" | "ref" | "className" | "style"> & {
    //ref?: Ref<T extends h.JSX.HTMLAttributes<infer E>? E : EventTarget>;
    className?: string | undefined;
    style?: h.JSX.HTMLAttributes<any>["style"] | undefined;
    ref: Ref<ElementFromAttributes<T> & ElementFromAttributes<U>>;
}

/**
 * Given two sets of props, merges them and returns the result.
 * @param lhs2 
 * @param rhs2 
 * @returns 
 */
export function useMergedProps<T extends h.JSX.HTMLAttributes<any>, U extends h.JSX.HTMLAttributes<any>>(lhs2: T, rhs2: U): MergedProps<T, U> {


    // First, put in all the properties that are easy to reason about
    // and all lhs props. We're going to merge in rhs just after.
    const { class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
    const { class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;

    let ret: MergedProps<T, U> = {
        ...lhs,
        ...({} as typeof rhs),  // We manually handle all of these, but it's needed for correct typing.
        ref: useMergedRefs(lhsRef, rhsRef),
        style: useMergedStyles(lhsStyle, rhsStyle),
        className: useMergedClasses({ class: lhsClass, className: lhsClassName }, { class: rhsClass, className: rhsClassName })
    };


    // Now, do *everything* else
    // Merge every remaining existing entry in lhs with what we've already put in ret.
    //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];
    const rhsEntries = Object.entries(rhs) as [keyof U, U[keyof U]][];

    for (const [rhsKey, rhsValue] of rhsEntries) {

        const lhsValue = lhs[rhsKey as keyof typeof lhs];

        if (isFunction(lhsValue) || isFunction(rhsValue)) {
            // They're both functions that can be merged (or one's a function and the other's null).
            // Not an *easy* case, but a well-defined one.
            const merged = useMergedFunctions(lhsValue as never, rhsValue as never);
            ret[rhsKey as keyof MergedProps<T, U>] = merged as never;
        }
        else {
            // Uh...we're here because one of them's null, right?
            if (lhsValue == null)
                ret[rhsKey as keyof MergedProps<T, U>] = rhsValue as never;
            else if (rhsValue == null)
                ret[rhsKey as keyof MergedProps<T, U>] = lhsValue as never;
            else {
                // Ugh.
                // Good strategies here, just log it if requested
                log?.(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
                ret[rhsKey as keyof MergedProps<T, U>] = rhsValue as never
            }
        }
    }

    return ret;
}

type PickKeysOfType<T, U> = { [P in keyof T]: NonNullable<T[P]> extends U ? P : never; }[keyof T];
type PickKeysOfName<T, U> = { [P in keyof T]: P extends U ? P : never; }[keyof T];

type PickByType<T, U> = Pick<T, PickKeysOfType<T, U>>;
type PickByName<T, U> = Pick<T, PickKeysOfName<T, U>>;
// This can't be composed of the above two for *some* reason???
type PickEventHanderKeys<T> = {
    [P in keyof T]:
    P extends `on${string}` ? NonNullable<T[P]> extends h.JSX.EventHandler<any> ? P :
    never : never;
}[keyof T];


