import { h } from "preact";
import { UseRefElementParameters } from "preact-prop-helpers";

export type ExitVisibility = "inert" | "removed" | "hidden" | "visible"

export type TransitionPhase = 'measure' | 'init' | 'transition' | 'finalize';
export type TransitionDirection = 'enter' | 'exit';
export type TransitionState = `${TransitionDirection}-${TransitionPhase}`;

export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export type PseudoRequired<T> = { [P in keyof T]-?: T[P] | undefined; };
export type PseudoPartial<T> = { [P in keyof T]: T[P] | undefined; };

// Needed for `extends` statements for some reason??
export type Get<T, K extends keyof T> = Pick<T, K>[K];

/**
 * The hooks that create the base props have parameters that inherit from this.
 * 
 * All of them need the transition's `classBase`, and some also inspect `show`.
 */
export interface UseBasePropsBaseParameters<E extends Element> /*extends UseRefElementParameters<E>*/ {
    //transitionParameters: Pick<UseTransitionParameters<E>["transitionParameters"], Needed>;
}

export interface UseTransitionParameters<E extends Element> extends UseRefElementParameters<E> {
    transitionParameters: {

        /**
         * These props will be merged with whatever's necessary to provide transitions (CSS classes, styles, events, etc.)
         * and returned as a separate object.
         * 
         */
        propsIncoming: h.JSX.HTMLAttributes<E>;

        /**
         * 
         * If true, this element should make itself visible.
         */
        show: boolean | null;

        /**
         * Controls whether or not the element mounts in an already-transitioned appearance or not.
         */
        animateOnMount?: boolean;

        /**
         * Certain types of transitions require measuring the size of the element (e.g. `Collapse`).
         * 
         * It incurs a reflow-based performance penalty every time `visible` changes when used.
         * 
         * Most interfaces that inherit this one will pick a value for `measure` and omit it as an option.
         */
        measure: boolean;

        /**
         * Allows customizing the class name used by all transition-relevant CSS classes.
         * 
         * This should match the Sass variable `$transition-class-base`, which is `"ptl"` by default.
         * 
         * Cannot change while the element is mounted; it **MUST** remain stable throughout the component's lifetime.
         * 
         * @default "ptl"
         */
        //classBase?: string;

        /**
         * Can also be provided via CSS properties (but this will match whatever `classBase` you use for you)
         */
        duration?: number;

        /**
         * After the element has finished its exit animation, what happens to it?
         * 
         * * `"removed"`: `display: none` is applied.
         * * `"hidden"`: `visibility: none` is applied.
         * * `"visible"`: No additional styling is applied.
         * * `"inert"`: No additional styling is applied, but the `inert` attribute is applied. You will likely need a polyfill to make this work on older browsers (read: not-that-old iOS devices).
         */
        exitVisibility?: ExitVisibility;

        /**
         * By default, this component does not re-render when its visibility changes,
         * it only updates CSS classes and does some other bookkeeping.
         * 
         * If you want to re-render when the component becomes visible/hidden,
         * you can set some state here.
         * 
         * This is usually synced up with your `show` prop, so it's not necessarily always useful.
         * 
         * @param visible 
         * @returns 
         */
        onVisibilityChange?: (visible: boolean) => void;


        /**
         * 
         */
        delayMountUntilShown?: boolean | undefined;
    }
}

//export interface UseTransitionReturnType<E extends Element> extends UseRefElementReturnType<E> {
//    transitionReturn: {
/**
 * Whether or not this component's children should be rendered.
 * 
 * Once this value is `true`, it is guaranteed to never become `false` again
 * to prevent wasting repeated work on repeatedly mounting/unmounting over and over.
 */
//      renderChildren: boolean;
//  }

/**
 * The child to render for this component, created from merging `propsIncoming`, its children, and any necessary event handlers, CSS classes, etc.
 */
////   child: VNode<h.JSX.HTMLAttributes<E>> | null;
//props: h.JSX.HTMLAttributes<E>;
//}


/**
 * All attributes are merged, but autocomplete becomes really noisy trying to find the props that are relevant to the `Transitionable` itself. 
 * To avoid wading through a sea of event handlers and attributes no one ever uses, only the most common ones are shown.
 * 
 * Again, though, **all props are merged and forwarded, not just these ones!** You can use any/all of the usual attributes, including `onTransitionEnd`.
 */
export interface NonIntrusiveElementAttributes<E extends Element> extends Pick<h.JSX.HTMLAttributes<E>, "children" | "ref" | "style" | "class" | "className"> { }

/**
 * Full components can inherit from this to get a useful default of props for consumers to use as an interface
 */
export interface TransitionParametersBase<E extends Element> extends OmitStrong<Get<UseTransitionParameters<E>, "transitionParameters">, "measure" | "propsIncoming">, NonIntrusiveElementAttributes<E> { }

