import { h, RenderableProps, VNode } from "preact";
import { UseManagedChildParameters } from "preact-prop-helpers";
import { ExclusiveInfo, TransitionParametersBase } from "./util/types.js";
export declare function ExclusiveTransitionProvider({ exclusivityKey, children }: RenderableProps<{
    exclusivityKey?: string | null | undefined;
}>): VNode<{}> | h.JSX.Element;
export interface UseExclusiveTransitionParameters extends Omit<UseManagedChildParameters<ExclusiveInfo>, "managedChildParameters" | "context"> {
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
        setExclusivelyOpen: import("preact/hooks").StateUpdater<boolean>;
        getExclusivelyOpen: () => boolean;
        onVisibilityChange: (visible: boolean) => void;
    };
};
//# sourceMappingURL=exclusive.d.ts.map