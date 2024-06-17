import { memoize } from "lodash-es";
import { Context, createContext, RenderableProps, useCallback, useContext, useMemo } from "preact-prop-helpers";
import { ExclusiveContextType, SwappableContextType, TransitionDirection, TransitionPhase } from "./types.js";

function getExclusiveTransitionContextPrememoization(exclusivityKey: string): Context<ExclusiveContextType | null>;
function getExclusiveTransitionContextPrememoization(exclusivityKey: null | undefined): null;
function getExclusiveTransitionContextPrememoization(exclusivityKey: string | null | undefined): Context<ExclusiveContextType | null> | null;
function getExclusiveTransitionContextPrememoization(exclusivityKey: string | null | undefined): Context<ExclusiveContextType | null> | null {
    if (exclusivityKey == null)
        return null;
    return createContext<ExclusiveContextType | null>(null);
}

export const SwappableContext = createContext<SwappableContextType>({ getAnimateOnMount: () => false });

/**
 * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
 * 
 * If 
 */
export const GetExclusiveTransitionContext: typeof getExclusiveTransitionContextPrememoization = memoize(getExclusiveTransitionContextPrememoization);

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

