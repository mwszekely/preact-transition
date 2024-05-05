import { memo, Ref, useMergedProps } from "preact-prop-helpers/preact";
import { useBasePropsFade, UseBasePropsFadeParameters } from "./fade.js";
import { useBasePropsFlip, UseBasePropsFlipParameters } from "./flip.js";
import { useTransition } from "./transitionable.js";
import { Get, TransitionParametersBase } from "./util/types.js";
import { forwardElementRef } from "./util/util.js";

export interface FlipFadeProps<E extends Element> extends
    TransitionParametersBase<E>,
    Partial<Get<UseBasePropsFadeParameters, "fadeParameters">>,
    Partial<Get<UseBasePropsFlipParameters, "flipParameters">> { }

export const FlipFade = memo(forwardElementRef(function FlipFade<E extends HTMLElement>({ duration, exclusivityKey, easing, easingIn, easingOut, fadeMin, fadeMax, show, animateOnMount, delayMountUntilShown, flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock, exitVisibility, onVisibilityChange, onElementChange, onMount, onUnmount, ...rest }: FlipFadeProps<E>, ref: Ref<E>) {
    return (
        useTransition({
            refElementParameters: { onElementChange, onMount, onUnmount },
            transitionParameters: {
                measure: false,
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
                    useBasePropsFlip({ flipParameters: { flipAngleInline, flipAngleBlock, flipPerspective, flipOrigin, flipOriginInline, flipOriginBlock } }),
                    { ref, ...rest },
                )
            },
            exclusiveTransitionParameters: { exclusivityKey }
        })
    );
}));
