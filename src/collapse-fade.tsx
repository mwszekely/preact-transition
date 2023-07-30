import { Ref } from "preact";
import { useMergedProps, UseRefElementParameters } from "preact-prop-helpers";
import { memo } from "preact/compat";
import { useBasePropsCollapse, UseBasePropsCollapseParameters } from "./collapse.js";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface CollapseFadeProps<E extends Element> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFadeParameters<E>, "fadeParameters">>,
    Partial<Get<UseBasePropsCollapseParameters<E>, "collapseParameters">>,
    Partial<Get<UseRefElementParameters<E>, "refElementParameters">> { };

export const CollapseFade = memo(forwardElementRef(function CollapseFade<E extends HTMLElement>({ show, exclusivityKey, easing, easingIn, easingOut, duration, animateOnMount, delayMountUntilShown, fadeMin, fadeMax, exitVisibility, minBlockSize, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: CollapseFadeProps<E>, ref: Ref<E>) {
    return useTransition({
        refElementParameters: { onElementChange, onMount, onUnmount },
        transitionParameters: {
            measure: true,
            show,
            duration,
            animateOnMount,
            exitVisibility,
            delayMountUntilShown,
            onVisibilityChange,
            easing,
            easingIn,
            easingOut,
            propsIncoming: useMergedProps<E>(
                useBasePropsFade({ fadeParameters: { fadeMax, fadeMin } }),
                useBasePropsCollapse({ collapseParameters: { minBlockSize } }),
                { ref, ...rest }
            )
        },
        exclusiveTransitionParameters: { exclusivityKey }
    });
}));
