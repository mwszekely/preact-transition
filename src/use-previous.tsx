import { useEffect, useRef } from "preact/hooks";

export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>();
    useEffect(() => { ref.current = value; });
    return ref.current;
}
