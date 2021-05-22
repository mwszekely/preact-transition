import { h, Ref, VNode } from "preact";
import { ClipPropsMin , clipProps, } from "./clip";
import { CollapsePropsMin, collapseProps } from "./collapse";
import { fadeProps, FadePropsMin } from "./fade";
import { forwardElementRef } from "./forward-element-ref";
import { slideProps, SlidePropsMin } from "./slide";
import { Transition } from "./use-transition";
import { zoomProps, ZoomPropsMin } from "./zoom";
import { SwapContainer } from "./swap"

export {
    clipProps,
    collapseProps,
    fadeProps,
    slideProps,
    zoomProps,

    SwapContainer
}


export interface ZoomProps extends ZoomPropsMin { open: boolean; children: VNode<any> };
export interface SlideProps extends SlidePropsMin { open: boolean; children: VNode<any> };
export interface FadeProps extends FadePropsMin { open: boolean; children: VNode<any> };
export interface CollapseProps extends CollapsePropsMin { open: boolean; children: VNode<any> };
export interface ClipProps extends ClipPropsMin { open: boolean; children: VNode<any> };
export interface SlideFadeProps extends SlideProps, FadeProps { };
export interface ZoomFadeProps extends ZoomProps, FadeProps { };
export interface ClipFadeProps extends ClipProps, FadeProps { };
export interface CollapseFadeProps extends CollapseProps, FadeProps { };

export const Zoom = forwardElementRef(function <E extends HTMLElement>(p: ZoomProps, ref: Ref<E>) {
    return <Transition {...zoomProps({ ...p, ref })}></Transition>
});
export const Slide = forwardElementRef(function <E extends HTMLElement>(p: SlideProps, ref: Ref<E>) {
    return <Transition {...slideProps({ ...p, ref })}></Transition>
});
export const Fade = forwardElementRef(function <E extends HTMLElement>(p: FadeProps, ref: Ref<E>) {
    return <Transition {...fadeProps({ ...p, ref })}></Transition>
});
export const SlideFade = forwardElementRef(function <E extends HTMLElement>(p: SlideFadeProps, ref: Ref<E>) {
    return <Transition {...slideProps(fadeProps({ ...p, ref }))}></Transition>
});
export const ZoomFade = forwardElementRef(function <E extends HTMLElement>(p: ZoomFadeProps, ref: Ref<E>) {
    return <Transition {...zoomProps(fadeProps({ ...p, ref }))}></Transition>
});
export const ClipFade = forwardElementRef(function <E extends HTMLElement>(p: ClipFadeProps, ref: Ref<E>) {
    return <Transition {...clipProps(fadeProps({ ...p, ref }))}></Transition>
});
export const CollapseFade = forwardElementRef(function <E extends HTMLElement>(p: CollapseFadeProps, ref: Ref<E>) {
    return <Transition {...collapseProps(fadeProps({ ...p, ref }))}></Transition>
});

/*
const randomContent = [
    "✔️","❌",<>Content C<br />and Content D</>,"A", "ZYX"
]

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>

        <div>
            <input value={selectedIndex} type="number" onInput={e => setSelectedIndex((e.target as HTMLInputElement).valueAsNumber)} />
        </div>
        <div>
            Current emoji:
            <SwapContainer>
                <span>
                    {(Array.from((function*() {
                        for (let index = 0; index < 5; ++index)
                            yield <Transition open={index == selectedIndex} {...fadeProps(slideProps({ x: (index - selectedIndex) * 0.1 }))}><div>{randomContent[index]}</div></Transition>
                    })()))}
                </span>
            </SwapContainer>
            And this comes later.
        </div>
    </div>
}

render(<App />, document.body!);
*/
