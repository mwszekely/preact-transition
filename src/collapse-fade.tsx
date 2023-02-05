import { Ref } from "preact";
import { useMergedProps } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsCollapse, UseBasePropsCollapseParameters } from "./collapse";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade";
import { useTransition } from "./transitionable";
import { Get, TransitionParametersBase } from "./util/types";
import { forwardElementRef } from "./util/util";

export interface CollapseFadeProps<E extends Element> extends TransitionParametersBase<E>, Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>, Partial<Get<UseBasePropsCollapseParameters<E>, "collapseParameters">> { };

export const CollapseFade = memo(forwardElementRef(function CollapseFade<E extends HTMLElement>({ show, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, onVisibilityChange, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) {
    return useTransition({
        transitionParameters: {
            measure: true,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            propsIncoming: useMergedProps<E>(
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                useBasePropsCollapse({ collapseParameters: { minBlockSize } }),
                { ref, ...rest }
            )
        },
        refElementParameters: {}
    });
}));
