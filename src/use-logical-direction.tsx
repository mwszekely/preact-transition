import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";


export function useLogicalDirection(element: HTMLElement | null | undefined) {


    const [inlineDirection, setInlineDirection] = useState<"ltr" | "rtl" | "ttb" | "btt" | null>(null);
    const [blockDirection, setBlockDirection] = useState<"ltr" | "rtl" | "ttb" | "btt"| null>(null);
    const [lineAdvanceDirection, setLineAdvanceDirection] = useState<"ltr" | "rtl" | "ttb" | "btt"| null>(null);

    const inlineDirectionRef = useRef<"ltr" | "rtl" | "ttb" | "btt" | null>(inlineDirection);
    const blockDirectionRef = useRef<"ltr" | "rtl" | "ttb" | "btt" | null>(blockDirection);

    useLayoutEffect(() => { inlineDirectionRef.current = inlineDirection; }, [inlineDirection])
    useLayoutEffect(() => { blockDirectionRef.current = blockDirection; }, [blockDirection])

    useLayoutEffect(() => {



        if (element) {
            // Lots of elements need to know the current writing mode in order to adjust the directions they animate appropriately
            // so it makes sense to do this without being explicitly asked.
            const computedStyles = window.getComputedStyle(element);
            const w = computedStyles.writingMode;
            const d = computedStyles.direction as "ltr" | "rtl";
            switch (computedStyles.writingMode) {
                case "":
                case null:
                case undefined:
                case "horizontal-tb":
                case "lr":
                case "lr-tb":
                    setInlineDirection(d);
                    setBlockDirection("ttb");
                    setLineAdvanceDirection("ttb");
                    break;

                case "horizontal-bt":           // Doesn't exist
                    setInlineDirection(d);
                    setBlockDirection("btt");
                    setLineAdvanceDirection("ttb");   // ttb? btt?
                    break;

                case "rl":
                    setInlineDirection("rtl");
                    setBlockDirection("ttb");
                    setLineAdvanceDirection("ttb");
                    break;

                case "vertical-lr":
                    setBlockDirection("ltr");
                    setInlineDirection("ttb");
                    setLineAdvanceDirection("ltr");
                    break;

                case "vertical-rl":
                    setBlockDirection("rtl");
                    setInlineDirection("ttb");
                    setLineAdvanceDirection("rtl");
                    break;

                case "sideways-lr":
                    setBlockDirection("ltr");
                    setInlineDirection(d == "rtl" ? "ttb" : "btt");
                    setLineAdvanceDirection("ltr");
                    break;

                case "sideways-rl":
                    setBlockDirection("rtl");
                    setInlineDirection(d == "rtl" ? "btt" : "ttb");
                    setLineAdvanceDirection("rtl");
                    break;
            }
        }

    });

    return {
        inlineDirection,
        blockDirection,
        lineAdvanceDirection,
        getInlineDirection: useCallback(() => inlineDirectionRef.current, [inlineDirectionRef]),
        getBlockDirection: useCallback(() => blockDirectionRef.current, [blockDirectionRef])
    }


}
