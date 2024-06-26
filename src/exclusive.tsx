import { Context, RenderableProps, TargetedPick, UseManagedChildParameters, VNode, useCallback, useChildrenFlag, useContext, useEnsureStability, useLayoutEffect, useManagedChild, useManagedChildren, useMemo, useMemoObject, usePassiveState, useState } from "preact-prop-helpers";
import { GetExclusiveTransitionContext } from "./util/context.js";
import { ExclusiveContextType, ExclusiveInfo, OmitStrong, TransitionParametersBase, UseTransitionParameters } from "./util/types.js";



let globalCount = -1;

export function ExclusiveTransitionProvider({ exclusivityKey, children }: RenderableProps<{ exclusivityKey?: string | null | undefined }>) {
    useEnsureStability("ExclusiveTransitionProvider", exclusivityKey);

    const [getNextIndexInLine, setNextIndexInLine] = usePassiveState<string | null, never>(null);

    const { 
        context,
        managedChildrenReturn: { getChildren } 
    } = useManagedChildren<ExclusiveInfo>({ managedChildrenParameters: {} });
    const { changeIndex, getCurrentIndex } = useChildrenFlag<ExclusiveInfo, never>({
        getChildren,
        closestFit: false,
        initialIndex: null,
        onIndexChange: null,
        setAt: useCallback((m, v) => { m.setExclusivelyOpen(v); }, []),
        getAt: useCallback((m) => m.getExclusivelyOpen(), []),
        isValid: useCallback((_m) => { return true }, []),
        onClosestFit: null
    })

    const onVisibilityChange = useCallback((index: string, visible: "show" | "hidden") => {
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
            else {
                changeIndex(null);
            }
        }
    }, [])

    const context2: ExclusiveContextType = useMemoObject({
        ...context,
        exclusiveTransitionContext: useMemoObject({
            exclusivityKey,
            onVisibilityChange,
        })
    });

    const ExclusiveTransitionContext: Context<ExclusiveContextType | null> | null = GetExclusiveTransitionContext(exclusivityKey);

    return (ExclusiveTransitionContext == null) ? ((children as VNode) ?? null) : <ExclusiveTransitionContext.Provider value={context2}>{children}</ExclusiveTransitionContext.Provider>;
}



export interface UseExclusiveTransitionParametersSelf { forceClose: () => void; exclusivityKey?: string | null | undefined; }

export interface UseExclusiveTransitionParameters extends 
    OmitStrong<UseManagedChildParameters<ExclusiveInfo>, "info" | "context">,
    TargetedPick<UseTransitionParameters<any>, "transitionParameters", "show"> {
    exclusiveTransitionParameters: UseExclusiveTransitionParametersSelf;
}

export function useExclusiveTransition({ transitionParameters: { show }, exclusiveTransitionParameters: { forceClose, exclusivityKey } }: UseExclusiveTransitionParameters) {
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c? useContext(c) : null;

    const index = useMemo(() => { globalCount += 1; return (globalCount).toString() }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState<boolean>(!!show);
    const {
        managedChildReturn: { getChildren: _getChildren }
    } = useManagedChild<ExclusiveInfo>({ context, info: { index, getExclusivelyOpen, setExclusivelyOpen, forceClose } });

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


