import { Fragment, h, RenderableProps, VNode } from "preact";
import { useChildrenFlag, useEnsureStability, useManagedChild, UseManagedChildParameters, useManagedChildren, usePassiveState, useStableObject, useState } from "preact-prop-helpers";
import { useCallback, useContext, useLayoutEffect, useMemo } from "preact/hooks";
import { GetExclusiveTransitionContext } from "./util/context.js";
import { ExclusiveContextType, ExclusiveInfo, TransitionParametersBase } from "./util/types.js";



let globalCount = -1;

export function ExclusiveTransitionProvider({ exclusivityKey, children }: RenderableProps<{ exclusivityKey?: string | null | undefined }>) {
    useEnsureStability("ExclusiveTransitionProvider", exclusivityKey);

    const [getNextIndexInLine, setNextIndexInLine] = usePassiveState<string | null, never>(null);

    const { context, managedChildrenReturn, managedChildrenReturn: { getChildren } } = useManagedChildren<ExclusiveInfo>({ managedChildrenParameters: {} });
    const { changeIndex, getCurrentIndex } = useChildrenFlag<ExclusiveInfo, never>({
        getChildren,
        closestFit: false,
        initialIndex: null,
        onIndexChange: null,
        setAt: useCallback((m, v) => { m.setExclusivelyOpen(v); }, []),
        getAt: useCallback((m) => m.getExclusivelyOpen(), []),
        isValid: useCallback((m) => { return true }, []),
    })

    const onVisibilityChange = useCallback((index: string, visible: "show" | "hidden") => {
        debugger;
        const nextInLine = getNextIndexInLine();
        const currentInLine = getCurrentIndex();

        if (visible == "show" && index != currentInLine) {
            /**
             * When a child transition shows itself initially
             * (i.e. requests itself to be the exclusive transition)
             * we either let it open immediately if there's no one finishing their exit,
             * or wait until that aforementioned exit has finished.
             */
            if (currentInLine == null) {
                changeIndex(index);
            }
            else {
                getChildren().getAt(currentInLine)?.forceClose?.();
                setNextIndexInLine(index);
            }
        }
        else if (visible == "hidden") {
            /**
             * When a child transition has finished its exit transition,
             * make sure that if someone requested to be shown in the meantime
             * that we do so.
             */
            if (nextInLine != null) {
                changeIndex(nextInLine);
                setNextIndexInLine(null);
            }
        }
    }, [])

    const context2: ExclusiveContextType = useStableObject({
        ...context,
        exclusiveTransitionContext: useStableObject({
            exclusivityKey,
            onVisibilityChange,
        })
    });

    const ExclusiveTransitionContext = GetExclusiveTransitionContext(exclusivityKey);

    return (ExclusiveTransitionContext == null) ? ((children as VNode) ?? null) : <ExclusiveTransitionContext.Provider value={context2}>{children}</ExclusiveTransitionContext.Provider>;
}



export interface UseExclusiveTransitionParameters extends Omit<UseManagedChildParameters<ExclusiveInfo>, "managedChildParameters" | "context"> {
    transitionParameters: Pick<TransitionParametersBase<any>, "show">;
    exclusiveTransitionParameters: { forceClose: () => void; exclusivityKey?: string | null | undefined; }
}

export function useExclusiveTransition({ transitionParameters: { show }, exclusiveTransitionParameters: { forceClose, exclusivityKey } }: UseExclusiveTransitionParameters) {
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c? useContext(c) : null;

    //const index = useMemo(() => generateRandomId(), []);
    const index = useMemo(() => { globalCount += 1; return (globalCount).toString() }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState<boolean>(!!show);
    const {
        managedChildReturn: { getChildren }
    } = useManagedChild<ExclusiveInfo>({ context, managedChildParameters: { index } }, { index, getExclusivelyOpen, setExclusivelyOpen, forceClose });

    const parentOnVisChange = context?.exclusiveTransitionContext.onVisibilityChange;

    const onVisibilityChange = useCallback<NonNullable<TransitionParametersBase<any>["onVisibilityChange"]>>((visible) => {
        parentOnVisChange?.(index, visible == false ? "hidden" : "show");
    }, [parentOnVisChange, index]);

    useLayoutEffect(() => {
        if (show)
            parentOnVisChange?.(index, "show");
    }, [show, parentOnVisChange, index]);

    return {
        exclusiveTransitionReturn: {
            isExclusive: (context != null),
            exclusivelyOpen,
            setExclusivelyOpen,
            getExclusivelyOpen,
            onVisibilityChange
        }
    };
}


