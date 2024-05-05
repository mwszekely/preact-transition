import { Context, RenderableProps } from "preact-prop-helpers/preact";
import { ExclusiveContextType, SwappableContextType, TransitionDirection, TransitionPhase } from "./types.js";
declare function getExclusiveTransitionContextPrememoization(exclusivityKey: string): Context<ExclusiveContextType | null>;
declare function getExclusiveTransitionContextPrememoization(exclusivityKey: null | undefined): null;
declare function getExclusiveTransitionContextPrememoization(exclusivityKey: string | null | undefined): Context<ExclusiveContextType | null> | null;
export declare const SwappableContext: Context<SwappableContextType>;
/**
 * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
 *
 * If
 */
export declare const GetExclusiveTransitionContext: typeof getExclusiveTransitionContextPrememoization;
interface CssClassesProviderProps {
    base: string;
    enter: string;
    exit: string;
    measure: string;
    init: string;
    transition: string;
    finalize: string;
}
export declare function CssClassesProvider({ base, enter, exit, measure, init, transition, finalize, children, ...rest }: RenderableProps<Partial<CssClassesProviderProps>>): import("react/jsx-runtime").JSX.Element;
export declare function useCssClasses(): {
    GetBaseClass: () => string;
    GetEnterClass: () => string;
    GetExitClass: () => string;
    GetMeasureClass: () => string;
    GetInitClass: () => string;
    GetTransitionClass: () => string;
    GetFinalizeClass: () => string;
    GetDirectionClass: (direction: TransitionDirection) => string;
    GetPhaseClass: (phase: TransitionPhase) => string;
};
export {};
//# sourceMappingURL=context.d.ts.map