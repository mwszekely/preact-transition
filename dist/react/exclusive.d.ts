import { RenderableProps, TargetedPick, UseManagedChildParameters } from "preact-prop-helpers";
import { ExclusiveInfo, OmitStrong, UseTransitionParameters } from "./util/types.js";
export declare function ExclusiveTransitionProvider({ exclusivityKey, children }: RenderableProps<{
    exclusivityKey?: string | null | undefined;
}>): import("react/jsx-runtime").JSX.Element | import("preact-prop-helpers").JSX.Element;
export interface UseExclusiveTransitionParametersSelf {
    forceClose: () => void;
    exclusivityKey?: string | null | undefined;
}
export interface UseExclusiveTransitionParameters extends OmitStrong<UseManagedChildParameters<ExclusiveInfo>, "info" | "context">, TargetedPick<UseTransitionParameters<any>, "transitionParameters", "show"> {
    exclusiveTransitionParameters: UseExclusiveTransitionParametersSelf;
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