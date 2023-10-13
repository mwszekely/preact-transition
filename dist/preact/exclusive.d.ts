import { RenderableProps, UseManagedChildParameters } from "preact-prop-helpers";
import { ExclusiveInfo, OmitStrong, TransitionParametersBase } from "./util/types.js";
export declare function ExclusiveTransitionProvider({ exclusivityKey, children }: RenderableProps<{
    exclusivityKey?: string | null | undefined;
}>): import("preact-prop-helpers").JSX.Element;
export interface UseExclusiveTransitionParameters extends OmitStrong<UseManagedChildParameters<ExclusiveInfo>, "info" | "context"> {
    transitionParameters: Pick<TransitionParametersBase<any>, "show">;
    exclusiveTransitionParameters: {
        forceClose: () => void;
        exclusivityKey?: string | null | undefined;
    };
}
export declare function useExclusiveTransition({ transitionParameters: { show }, exclusiveTransitionParameters: { forceClose, exclusivityKey } }: UseExclusiveTransitionParameters): {
    exclusiveTransitionReturn: {
        isExclusive: boolean;
        exclusivelyOpen: boolean;
        setExclusivelyOpen: import("preact-prop-helpers").StateUpdater<boolean>;
        getExclusivelyOpen: () => boolean;
        onVisibilityChange: (visible: boolean) => void;
    };
};
//# sourceMappingURL=exclusive.d.ts.map