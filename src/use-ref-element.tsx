import { h, Ref, RefCallback } from "preact";
import { useCallback, useState } from "preact/hooks";
import { useMergedRefs } from "./use-merged-refs";

export type UseRefElementPropsArgs<T extends EventTarget> = Omit<h.JSX.HTMLAttributes<T>, "ref"> & {
    ref: Ref<T> | undefined;
}

export type UseRefElementPropsReturnInfo<P extends UseRefElementPropsArgs<any>> =  Omit<P, "ref"> & {
    ref: RefCallback<P extends UseRefElementPropsArgs<infer E>? E : unknown>;
}

export interface UseRefElementReturnInfo<T extends EventTarget> {
    element: T | null;
    useRefElementProps: <P extends UseRefElementPropsArgs<T>>({ ref, ...rest }: P) => UseRefElementPropsReturnInfo<P>
}

/**
 * Allows accessing the element a ref references as soon as it does so.
 * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement, 
 * adding a RefCallback and merging it with any existing ref that existed on the props.
 * @returns The element, and the sub-hook that makes it retrievable.
 */
export function useRefElement<T extends EventTarget>(): UseRefElementReturnInfo<T> {
    // Let us store the actual (reference to) the element we capture
    const [element, setElement] = useState<T | null>(null);

    // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it
    const myRef: RefCallback<T> = useCallback((e) => {
        if (e)
            setElement(() => e);
    }, []);

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        useRefElementProps: useCallback(<P extends UseRefElementPropsArgs<T>>({ ref, ...rest }: P) => ({ ...rest, ref: useMergedRefs(ref, myRef) }), [myRef]),
        element
    }
}


