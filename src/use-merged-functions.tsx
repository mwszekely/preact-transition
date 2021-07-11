import { useCallback, useImperativeHandle, useRef } from "preact/hooks";

type NotAFunction = (...args: any[]) => any;

// In order of lhs, rhs, mergedCallback
const callbacksThatHaveMergedBefore = new Map<NotAFunction | null | undefined, Map<NotAFunction | null | undefined, NotAFunction | null | undefined>>();

/**
 * Given two functions (usually event handlers), returns a function that calls both.
 * Return values are not handled.
 * The returned callback is stable *regardless* of its inputs.
 * Also not a *true* hook, since it has to be able to accomodate a variable number of event handlers, but could be in the future.
 * @param lhs 
 * @param rhs 
 * @returns 
 */
export function useMergedFunctions<T extends (...args: any[]) => void, U extends (...args: any[]) => void>(lhs: T | null | undefined, rhs: U | null | undefined): (...args: Parameters<T> & Parameters<U>) => void {
    let callbacksLhsHasMergedWithBefore = callbacksThatHaveMergedBefore.get(lhs);

    if (!callbacksLhsHasMergedWithBefore) {
        // We've actually never merged *anything* with lhs yet.
        // Start keeping records.
        callbacksLhsHasMergedWithBefore = new Map();
        callbacksThatHaveMergedBefore.set(lhs, callbacksLhsHasMergedWithBefore);
    }

    // See if lhs has ever merged with rhs, and return the result if so
    let mergedCallback = callbacksLhsHasMergedWithBefore.get(rhs);
    if (mergedCallback && callbacksLhsHasMergedWithBefore.has(mergedCallback)) {
        return mergedCallback;
    }

    // First time merging these two, so do so and save it for later.
    mergedCallback = mergedFunctions(lhs, rhs);
    callbacksLhsHasMergedWithBefore.set(rhs, mergedCallback);
    return mergedCallback;
}

function mergedFunctions<T extends (...args: any[]) => void, U extends (...args: any[]) => void>(lhs: T | null | undefined, rhs: U | null | undefined) {
    return (...args: Parameters<T> & Parameters<U>) => {
        lhs?.(...args);
        rhs?.(...args);
    }
}

// Uh, typeof X === "Function" actually isn't the same or even similar for some reason??
export function isFunction(obj: any): obj is ((...args: any[]) => void) {
    return typeof obj === "function";
}


// Better useCallback() which always returns the same (wrapped) function reference and does not require deps array.
// DO NOT USE IN useLayoutEffect!!
// Source: https://github.com/facebook/react/issues/14099#issuecomment-659298422
function useStableCallback<T extends (...args: any[]) => any>(fn: T): T {
    const ref = useRef<T>()
    useImperativeHandle(ref, () => fn) // Assign fn to ref.current (currentFunc) in async-safe way

    return useRef(((...args: any[]) => {
        const currentFunc = ref.current
        if (!currentFunc) {
            throw new Error('Callback retrieved from useStableCallback() cannot be called from useLayoutEffect().')
        }
        return currentFunc(...args)
    }) as T).current
}