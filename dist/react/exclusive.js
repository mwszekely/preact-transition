import { jsx as _jsx } from "preact/jsx-runtime";
import { useChildrenFlag, useEnsureStability, useManagedChild, useManagedChildren, useMemoObject, usePassiveState, useState } from "preact-prop-helpers";
import { useCallback, useContext, useLayoutEffect, useMemo } from "preact/hooks";
import { GetExclusiveTransitionContext } from "./util/context.js";
let globalCount = -1;
export function ExclusiveTransitionProvider({ exclusivityKey, children }) {
    useEnsureStability("ExclusiveTransitionProvider", exclusivityKey);
    const [getNextIndexInLine, setNextIndexInLine] = usePassiveState(null);
    const { context, managedChildrenReturn: { getChildren } } = useManagedChildren({ managedChildrenParameters: {} });
    const { changeIndex, getCurrentIndex } = useChildrenFlag({
        getChildren,
        closestFit: false,
        initialIndex: null,
        onIndexChange: null,
        setAt: useCallback((m, v) => { m.setExclusivelyOpen(v); }, []),
        getAt: useCallback((m) => m.getExclusivelyOpen(), []),
        isValid: useCallback((_m) => { return true; }, []),
        onClosestFit: null
    });
    const onVisibilityChange = useCallback((index, visible) => {
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
    }, []);
    const context2 = useMemoObject({
        ...context,
        exclusiveTransitionContext: useMemoObject({
            exclusivityKey,
            onVisibilityChange,
        })
    });
    const ExclusiveTransitionContext = GetExclusiveTransitionContext(exclusivityKey);
    return (ExclusiveTransitionContext == null) ? (children ?? null) : _jsx(ExclusiveTransitionContext.Provider, { value: context2, children: children });
}
export function useExclusiveTransition({ transitionParameters: { show }, exclusiveTransitionParameters: { forceClose, exclusivityKey } }) {
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c ? useContext(c) : null;
    const index = useMemo(() => { globalCount += 1; return (globalCount).toString(); }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState(!!show);
    const { managedChildReturn: { getChildren: _getChildren } } = useManagedChild({ context, info: { index, getExclusivelyOpen, setExclusivelyOpen, forceClose } });
    const parentOnVisChange = context?.exclusiveTransitionContext.onVisibilityChange;
    const onVisibilityChange = useCallback((visible) => {
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
//# sourceMappingURL=exclusive.js.map