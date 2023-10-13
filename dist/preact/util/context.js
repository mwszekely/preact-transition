import { jsx as _jsx } from "preact/jsx-runtime";
import { memoize } from "lodash-es";
import { createContext } from "preact";
import { useCallback, useContext, useMemo } from "preact/hooks";
function getExclusiveTransitionContextPrememoization(exclusivityKey) {
    if (exclusivityKey == null)
        return null;
    return createContext(null);
}
export const SwappableContext = createContext({ getAnimateOnMount: () => false });
/**
 * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
 *
 * If
 */
export const GetExclusiveTransitionContext = memoize(getExclusiveTransitionContextPrememoization);
const CssClassContext = createContext({
    GetBaseClass: () => "ptl",
    GetEnterClass: () => "n",
    GetExitClass: () => "x",
    GetMeasureClass: () => "m",
    GetInitClass: () => "i",
    GetTransitionClass: () => "t",
    GetFinalizeClass: () => "f",
});
export function CssClassesProvider({ base, enter, exit, measure, init, transition, finalize, children, ...rest }) {
    const contextObject = useCssClassContextValue({ base, enter, exit, measure, init, transition, finalize });
    return (_jsx(CssClassContext.Provider, { value: contextObject, ...rest, children: children }));
}
export function useCssClasses() {
    const { GetBaseClass, GetEnterClass, GetExitClass, GetMeasureClass, GetInitClass, GetTransitionClass, GetFinalizeClass } = useContext(CssClassContext);
    const GetDirectionClass = useCallback((direction) => { switch (direction) {
        case "enter": return GetEnterClass();
        case "exit": return GetExitClass();
    } }, []);
    const GetPhaseClass = useCallback((phase) => { switch (phase) {
        case "measure": return GetMeasureClass();
        case "init": return GetInitClass();
        case "transition": return GetTransitionClass();
        case "finalize": return GetFinalizeClass();
    } }, []);
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
    };
}
function useCssClassContextValue(newValues) {
    const oldValues = useContext(CssClassContext);
    const base = (newValues?.base ?? oldValues.GetBaseClass());
    const enter = (newValues?.enter ?? oldValues.GetEnterClass());
    const exit = (newValues?.exit ?? oldValues.GetExitClass());
    const measure = (newValues?.measure ?? oldValues.GetMeasureClass());
    const init = (newValues?.init ?? oldValues.GetInitClass());
    const transition = (newValues?.transition ?? oldValues.GetTransitionClass());
    const finalize = (newValues?.finalize ?? oldValues.GetFinalizeClass());
    return useMemo(() => ({
        GetBaseClass: () => base,
        GetEnterClass: () => enter,
        GetExitClass: () => exit,
        GetMeasureClass: () => measure,
        GetInitClass: () => init,
        GetTransitionClass: () => transition,
        GetFinalizeClass: () => finalize,
    }), [base, enter, exit, init, transition, finalize]);
}
//# sourceMappingURL=context.js.map