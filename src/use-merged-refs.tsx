import { Ref, RefCallback, RefObject } from "preact";
import { useCallback } from "preact/hooks";


function processRef<T>(instance: T | null, ref: Ref<T> | null | undefined) {
    if (typeof ref === "function") {
        ref(instance);
    } else if (ref != null) {
        (ref as RefObject<T | null>).current = instance;
    }
}

/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs 
 * @param rhs 
 * @returns 
 */
export function useMergedRefs<T>(lhs: Ref<T> | null | undefined, rhs: Ref<T> | null | undefined): RefCallback<T> {
    let ret = useCallback((current: T | null) => {
        processRef(current, lhs);
        processRef(current, rhs);
    }, [lhs, rhs]);

    return ret;
}