import { createContext, h, RenderableProps } from "preact";
import { useCallback, useContext, useMemo } from "preact/hooks";
import { ExclusiveContextType, SwappableContextType, TransitionDirection, TransitionPhase } from "./types";

export const SwappableContext = createContext<SwappableContextType>({ getAnimateOnMount: () => false });
export const ExclusiveTransitionContext = createContext<ExclusiveContextType | null>(null);


/*
const CssClasses = {
    base: "ptl",
    enter: "n",
    exit: "x",
    init: "i",
    transition: "t",
    finalize: "f"
}*/

interface CssClassesProviderProps {
    base: string;
    enter: string;
    exit: string;
    measure: string;
    init: string;
    transition: string;
    finalize: string;
}

interface CssClassContextType {
    GetBaseClass: () => string;
    GetEnterClass: () => string;
    GetExitClass: () => string;
    GetMeasureClass: () => string;
    GetInitClass: () => string;
    GetTransitionClass: () => string;
    GetFinalizeClass: () => string;
}

const CssClassContext = createContext<CssClassContextType>({
    GetBaseClass: () => "ptl",
    GetEnterClass: () => "n",
    GetExitClass: () => "x",
    GetMeasureClass: () => "m",
    GetInitClass: () => "i",
    GetTransitionClass: () => "t",
    GetFinalizeClass: () => "f",
})

export function CssClassesProvider({ base, enter, exit, measure, init, transition, finalize, children, ...rest }: RenderableProps<Partial<CssClassesProviderProps>>) {
    const contextObject = useCssClassContextValue({ base, enter, exit, measure, init, transition, finalize });
    return (<CssClassContext.Provider value={contextObject}  {...rest} children={children} />)
}

export function useCssClasses() {
    const {
        GetBaseClass,
        GetEnterClass,
        GetExitClass,
        GetMeasureClass,
        GetInitClass,
        GetTransitionClass,
        GetFinalizeClass
    } = useContext(CssClassContext);
    const GetDirectionClass = useCallback((direction: TransitionDirection): string => { switch (direction) { case "enter": return GetEnterClass(); case "exit": return GetExitClass(); } }, []);
    const GetPhaseClass = useCallback((phase: TransitionPhase): string => { switch (phase) { case "measure": return GetMeasureClass(); case "init": return GetInitClass(); case "transition": return GetTransitionClass(); case "finalize": return GetFinalizeClass(); } }, []);
    return {
        GetBaseClass,
        GetEnterClass,
        GetExitClass,
        GetMeasureClass,
        GetInitClass,
        GetTransitionClass,
        GetFinalizeClass,
        GetDirectionClass,
        GetPhaseClass
    }
}

function useCssClassContextValue(newValues: Partial<CssClassesProviderProps>): CssClassContextType {
    const oldValues = useContext(CssClassContext);
    const base = (newValues?.base ?? oldValues.GetBaseClass());
    const enter = (newValues?.enter ?? oldValues.GetEnterClass());
    const exit = (newValues?.exit ?? oldValues.GetExitClass());
    const measure = (newValues?.measure ?? oldValues.GetMeasureClass());
    const init = (newValues?.init ?? oldValues.GetInitClass());
    const transition = (newValues?.transition ?? oldValues.GetTransitionClass());
    const finalize = (newValues?.finalize ?? oldValues.GetFinalizeClass());

    return useMemo<CssClassContextType>(() => ({
        GetBaseClass: () => base!,
        GetEnterClass: () => enter!,
        GetExitClass: () => exit!,
        GetMeasureClass: () => measure!,
        GetInitClass: () => init!,
        GetTransitionClass: () => transition!,
        GetFinalizeClass: () => finalize!,
    }), [base, enter, exit, init, transition, finalize])
}

/*
export function getCssClass(): string
export function getCssClass(direction: TransitionDirection): string
export function getCssClass(direction: TransitionDirection, phase: TransitionPhase): string
export function getCssClass(direction?: TransitionDirection, phase?: TransitionPhase): string {
    const phasePart = `${phase == null ? "" : `-${CssClasses[phase]}`}`;
    const directionPart = `${direction == null ? "" : `-${CssClasses[direction]}${phasePart}`}`;
    return `${CssClasses.base}${directionPart}`
}

export function setCssClass(which: keyof typeof CssClasses, value: string) {
    CssClasses[which] = value;
}
*/
