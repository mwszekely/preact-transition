import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";

export type BlockFlowDirection = "downwards" | "leftwards" | "rightwards";
export type LogicalDirection = "ltr" | "rtl" | "ttb" | "btt";
export type LineOrientation = "upright" | "leftright" | "downright" | "rightright";

type WritingMode = "horizontal-tb" | "vertical-lr" | "sideways-rl" | "vertical-rl" | "sideways-lr";
type Direction = "ltr";
type TextOrientation = "mixed" | "upright" | "sideways";


/**
 * Inspects the element's style and determines the logical direction that text flows.
 * 
 * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
 * But `transform`, `clip`, etc. don't.
 * 
 * This is provided so that transitions can consistently use those logical properties.
 * 
 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
 * 
 * @returns A function that, when called, retrieves the current state of the element. (Function is constant between renders)
 */
export function useLogicalDirection(element: HTMLElement | null | undefined) {


    const [writingMode, setWritingMode] = useState<WritingMode | null>(null);
    const [direction, setDirection] = useState<Direction | null>(null);
    const [textOrientation, setTextOrientation] = useState<TextOrientation | null>(null);

    const writingModeRef = useRef<WritingMode | null>(writingMode);
    const directionRef = useRef<Direction | null>(direction);
    const textOrientationRef = useRef<TextOrientation | null>(textOrientation);

    useLayoutEffect(() => { writingModeRef.current = writingMode; }, [writingMode]);
    useLayoutEffect(() => { directionRef.current = direction; }, [direction]);
    useLayoutEffect(() => { textOrientationRef.current = textOrientation; }, [textOrientation]);

    useLayoutEffect(() => {
        if (element) {
            const computedStyles = window.getComputedStyle(element);
            const w = computedStyles.writingMode as WritingMode;
            const t = computedStyles.textOrientation as TextOrientation;
            const d = computedStyles.direction as Direction;

            setWritingMode(w || "horizontal-tb");
            setDirection(d || "rtl");
            setTextOrientation(t || "mixed");
        }

    });

    const getLogicalDirection = useCallback((): Complete | null => {
        let writingMode = writingModeRef.current;
        let direction = directionRef.current;
        let textOrientation = textOrientationRef.current;

        if (!writingMode || !direction || !textOrientation)
            return null;

        if (textOrientation == "upright")
            direction = "ltr";

        return {
            ...WritingModes[writingMode ?? "horizontal-tb"][direction ?? "ltr"]
        }

    }, [writingModeRef, directionRef, textOrientationRef]);

    return { getLogicalDirection };
}



type LogicalSide = "top" | "bottom" | "left" | "right";
type LogicalSize = "width" | "height";

interface Complete {
    inlineDirection: LogicalDirection;
    blockDirection: LogicalDirection;

    inlineSize: LogicalSize;
    blockSize: LogicalSize;

    over: LogicalSide;
    under: LogicalSide;
    lineLeft: LogicalSide;
    lineRight: LogicalSide;
};

const HorizontalTbLtr: Complete = {
    inlineDirection: "ltr",
    blockDirection: "ttb",

    inlineSize: "width",
    blockSize: "height",

    over: "top",
    under: "bottom",
    lineLeft: "left",
    lineRight: "right"
};

const HorizontalTbRtl: Complete = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl",
};

const VerticalRlLtr: Complete = {
    inlineDirection: "ttb",
    blockDirection: "rtl",

    inlineSize: "height",
    blockSize: "width",

    over: "right",
    under: "left",
    lineLeft: "top",
    lineRight: "bottom"
};

const VerticalRlRtl: Complete = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
};


const SidewaysRlLtr: Complete = { ...VerticalRlLtr };
const SidewaysRlRtl: Complete = { ...VerticalRlRtl };

const VerticalLrLtr: Complete = {
    ...VerticalRlLtr,
    blockDirection: "ltr",
};

const VerticalLrRtl: Complete = {
    ...VerticalRlRtl,
    blockDirection: "ltr",
};

const SidewaysLtLtr: Complete = {
    ...VerticalLrLtr,
    inlineDirection: "btt",
    over: "left",
    under: "right",
    lineLeft: "bottom",
    lineRight: "top",
};

const SidewaysLtRtl: Complete = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
};



const HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
} as const;

const VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
} as const;

const VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
} as const;

const SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
} as const;

const SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
} as const;

const WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
} as const;


