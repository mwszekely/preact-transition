
import { Fragment, h, render } from "preact";
import { useCallback, useState } from "preact/hooks";
import { Clip, ZoomFade, ClipFade, Collapse, Zoom, Fade, Slide, SlideFade, Transitionable, SlideZoomFade, SlideZoom, Swappable, CollapseFade, CreateTransitionableProps, Flip } from "..";

function halfText(input: string, times: number): string {
    if (times <= 0)
        return input;
    input = input.substr(input.length / 2);
    if (times == 1)
        return input;

    return halfText(input, times - 1);
}

function Demo() {
    const [writingMode, setWritingMode] = useState<"horizontal" | "vertical">("horizontal");
    const [show1, setShow1] = useState(true);
    const [show3, setShow3] = useState(0);
    const [reflow, setReflow] = useState<"visible" | "hidden" | "removed">("hidden");
    const [duration, setDuration] = useState(175);
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    const onInput1 = useCallback((e: Event) => { setShow1(o => !o); e.preventDefault(); }, []);
    const onInput3 = useCallback((e: Event) => { setText((e.target as HTMLInputElement).value); e.preventDefault(); }, []);
    const onInput4 = useCallback((e: Event) => { setReflow("hidden"); e.preventDefault(); }, []);
    const onInput5 = useCallback((e: Event) => { setReflow("removed"); e.preventDefault(); }, []);
    const onInput5b = useCallback((e: Event) => { setReflow("visible"); e.preventDefault(); }, []);
    const onInput6 = useCallback((e: Event) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
    const onInput7 = useCallback((e: Event) => { setWritingMode("vertical"); e.preventDefault(); }, []);
    const onInput8 = useCallback((e: Event) => { setDuration((e.target as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);

    const onInputA = useCallback((e: Event) => { setShow3(0); e.preventDefault(); }, []);
    const onInputB = useCallback((e: Event) => { setShow3(1); e.preventDefault(); }, []);
    const onInputC = useCallback((e: Event) => { setShow3(2); e.preventDefault(); }, []);

    return (
        <>
            <div id="controls">
                <h1>Preact Transition</h1>
                <label><input onInput={onInput1} type="checkbox" checked={show1}></input> Card show</label>
                <div className="radiogroup">
                    <div>Visible Swappable child: </div>
                    <label className="code-mimic"><input type="radio" name="swap-index" onInput={onInputA} checked={show3 == 0} />#0</label>
                    <label className="code-mimic"><input type="radio" name="swap-index" onInput={onInputB} checked={show3 == 1} />#1</label>
                    <label className="code-mimic"><input type="radio" name="swap-index" onInput={onInputC} checked={show3 == 2} />#2</label>
                </div>

                <div className="radiogroup">
                    <div>When transitioned out:</div>
                    <label className="code-mimic"><input type="radio" name="hidden-type" onInput={onInput5b} checked={reflow == "visible"} />Do not hide (incl. focusables)</label>
                    <label className="code-mimic"><input type="radio" name="hidden-type" onInput={onInput4} checked={reflow == "hidden"} />visibility: hidden</label>
                    <label className="code-mimic"><input type="radio" name="hidden-type" onInput={onInput5} checked={reflow == "removed"} />display: none</label>
                </div>

                <div><label><input onInput={onInput8} type="number" value={duration}></input> Duration</label></div>

                <div className="radiogroup">
                    <div>Demo's writing mode: </div>
                    <label><input type="radio" name="writing-mode" onInput={onInput6} checked={writingMode == "horizontal"} />Horizontal</label>
                    <label><input type="radio" name="writing-mode" onInput={onInput7} checked={writingMode == "vertical"} />Vertical</label>
                </div>
                <textarea cols={30} rows={5} onInput={onInput3} value={text} />

            </div>
            <div id="root-body" className={`writing-mode-${writingMode}`} style={{ "--transition-duration": `${duration}ms` }} key={writingMode}>
                <FadeDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />
                <ClipDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />

                <ZoomDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />
                <SlideDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />
                <ZoomSlideDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />
                <CollapseDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />
                <FlipDemo cardShow={show1} contentIndex={show3} exitVisibility={reflow} text={text} />

            </div>
        </>
    )
}


function FadeDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1);
    const onMinInput = useCallback((e: Event) => { setMin(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMaxInput = useCallback((e: Event) => { setMax(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);


    const C = Fade;
    const CS = "Fade";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} fadeMin={min} fadeMax={max}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Fade</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Minimum fade <input onInput={onMinInput} value={min} type="number" min={0} max={1} step={0.0125} /></label>
                <label>Maximum fade <input onInput={onMaxInput} value={max} type="number" min={0} max={1} step={0.0125} /></label>
            </div>

            <C show={cardShow} exitVisibility={exitVisibility} fadeMin={min} fadeMax={max}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}}${min != 0 ? ` 
  fadeMin={${min}}` : ``}${max != 1 ? ` 
  fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${min != 0 ? ` 
        fadeMin={${min}}` : ``}${max != 1 ? ` 
        fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

type EV = CreateTransitionableProps<any>["exitVisibility"];

function ClipDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [originX, setOriginX] = useState(0.5);
    const [originY, setOriginY] = useState(0);
    const [minX, setMinX] = useState(1);
    const [minY, setMinY] = useState(0);
    const [withFade, setWithFade] = useState(true);
    const [ellipse, setEllipse] = useState(false);
    const onOriginXInput = useCallback((e: Event) => { setOriginX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onOriginYInput = useCallback((e: Event) => { setOriginY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinXInput = useCallback((e: Event) => { setMinX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinYInput = useCallback((e: Event) => { setMinY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);

    const C = withFade ? ClipFade : Clip;
    const CS = withFade ? "ClipFade" : "Clip";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} clipOriginInline={originX} clipOriginBlock={originY} clipMinInline={minX} clipMinBlock={minY}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Clip</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Origin to center the effect around on the inline-axis position (X-axis in English, etc.) <input onInput={onOriginXInput} value={originX} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  <input onInput={onOriginYInput} value={originY} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Minimum size on the inline-axis <input onInput={onMinXInput} value={minX} type="number" step={0.125} min={0} max={1} /></label>
                <label>Minimum size on the block-axis  <input onInput={onMinYInput} value={minY} type="number" step={0.125} min={0} max={1} /></label>
                <label>With fade<input checked={withFade} onInput={onWithFadeInput} type="checkbox" /></label>
            </div>

            <C show={cardShow} exitVisibility={exitVisibility} clipMinInline={minX} clipMinBlock={minY} clipOriginInline={originX} clipOriginBlock={originY}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
  clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
  clipMinX={${minX}}` : ``}${minY != 0 ? ` 
  clipMinY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
        clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
        clipMinX={${minX}}` : ``}${minY != 0 ? ` 
        clipMinY={${minY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

function ZoomSlideDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [originX, setOriginX] = useState(0.5);
    const [originY, setOriginY] = useState(0);
    const [minX, setMinX] = useState(0.75);
    const [minY, setMinY] = useState(0.75);
    const [slideX, setSlideX] = useState(0.25);
    const [slideY, setSlideY] = useState(0);
    const [withFade, setWithFade] = useState(true);
    const onSlideXInput = useCallback((e: Event) => { setSlideX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onSlideYInput = useCallback((e: Event) => { setSlideY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
    const onOriginXInput = useCallback((e: Event) => { setOriginX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onOriginYInput = useCallback((e: Event) => { setOriginY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinXInput = useCallback((e: Event) => { setMinX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinYInput = useCallback((e: Event) => { setMinY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);

    const C = withFade ? SlideZoomFade : SlideZoom;
    const CS = withFade ? "SlideZoomFade" : "SlideZoom";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} slideTargetInline={slideX * Math.sign(i - contentIndex)} slideTargetBlock={slideY * Math.sign(i - contentIndex)} zoomOriginInline={originX} zoomOriginBlock={originY} zoomMinInline={minX} zoomMinBlock={minY}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Zoom &amp; Slide</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Transform origin on the inline-axis position (X-axis in English, etc.) <input onInput={onOriginXInput} value={originX} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Transform origin on the block-axis position (Y-axis in English, etc.)  <input onInput={onOriginYInput} value={originY} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Target block-axis position (X-axis in English, etc.) <input onInput={onSlideXInput} value={slideX} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Target inline-axis position (Y-axis in English, etc.)  <input onInput={onSlideYInput} value={slideY} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Minimum size on the inline-axis <input onInput={onMinXInput} value={minX} type="number" step={0.125} min={0} max={1} /></label>
                <label>Minimum size on the block-axis  <input onInput={onMinYInput} value={minY} type="number" step={0.125} min={0} max={1} /></label>
                <label>With fade<input checked={withFade} onInput={onWithFadeInput} type="checkbox" /></label>
            </div>
            <C show={cardShow} exitVisibility={exitVisibility} slideTargetInline={slideX || null} slideTargetBlock={slideY || null} zoomMinInline={minX} zoomMinBlock={minY} zoomOriginInline={originX} zoomOriginBlock={originY}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${slideX != 0 ? ` 
  slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
  slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex.toString()}}${originX != 0.5 ? ` 
        originX={${originX} * Math.sign(0 - ${contentIndex}}` : ``}${originY != 0.5 ? ` 
        originY={${originY} * Math.sign(0 - ${contentIndex}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${slideX != 0 ? ` 
        slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
        slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex.toString()}} [...] />
      <${CS} show={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

function ZoomDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [originX, setOriginX] = useState(0.5);
    const [originY, setOriginY] = useState(0);
    const [minX, setMinX] = useState(0.75);
    const [minY, setMinY] = useState(0.75);
    const [withFade, setWithFade] = useState(true);
    const onOriginXInput = useCallback((e: Event) => { setOriginX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onOriginYInput = useCallback((e: Event) => { setOriginY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinXInput = useCallback((e: Event) => { setMinX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onMinYInput = useCallback((e: Event) => { setMinY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);

    const C = withFade ? ZoomFade : Zoom;
    const CS = withFade ? "ZoomFade" : "Zoom";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} zoomOriginInline={originX} zoomOriginBlock={originY} zoomMinInline={minX} zoomMinBlock={minY}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Zoom</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Transform origin on the inline-axis position (X-axis in English, etc.) <input onInput={onOriginXInput} value={originX} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Transform origin on the block-axis position (Y-axis in English, etc.)  <input onInput={onOriginYInput} value={originY} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Minimum size on the inline-axis <input onInput={onMinXInput} value={minX} type="number" step={0.125} min={0} max={1} /></label>
                <label>Minimum size on the block-axis  <input onInput={onMinYInput} value={minY} type="number" step={0.125} min={0} max={1} /></label>
                <label>With fade<input checked={withFade} onInput={onWithFadeInput} type="checkbox" /></label>
            </div>
            <C show={cardShow} exitVisibility={exitVisibility} zoomMinInline={minX} zoomMinBlock={minY} zoomOriginInline={originX} zoomOriginBlock={originY}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        originX={${originX}}` : ``}${originY != 0.5 ? ` 
        originY={${originY}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${exitVisibility ? ` 
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

function SlideDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [slideX, setSlideX] = useState(0.25);
    const [slideY, setSlideY] = useState(0);
    const [withFade, setWithFade] = useState(true);
    const onSlideXInput = useCallback((e: Event) => { setSlideX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onSlideYInput = useCallback((e: Event) => { setSlideY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
    //const [bare, setBare] = useState(false);
    // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);

    const C = withFade ? SlideFade : Slide;
    const CS = withFade ? "SlideFade" : "Slide";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} slideTargetInline={(slideX * Math.sign(i - contentIndex))} slideTargetBlock={slideY * Math.sign(i - contentIndex)}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Slide</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Target block-axis position (X-axis in English, etc.) <input onInput={onSlideXInput} value={slideX} type="number" step={0.125} min={-2} max={2} /></label>
                <label>Target inline-axis position (Y-axis in English, etc.)  <input onInput={onSlideYInput} value={slideY} type="number" step={0.125} min={-2} max={2} /></label>
                <label>With fade<input checked={withFade} onInput={onWithFadeInput} type="checkbox" /></label>
                {/*<label>Using boilerplate<input checked={bare} onInput={onBare} type="checkbox" /></label>*/}
            </div>
            <C show={cardShow} exitVisibility={exitVisibility} slideTargetInline={slideX || null} slideTargetBlock={slideY || null}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}} 
  slideTargetInline={${slideX}}
  slideTargetBlock={${slideY}}
  exitVisibility={${JSON.stringify(exitVisibility)}}>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex}}
        exitVisibility={${JSON.stringify(exitVisibility)}}
        slideTargetInline={${slideX} * Math.sign(0 - ${contentIndex})}
        slideTargetBlock={${slideY} * Math.sign(0 - ${contentIndex}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex}} [...] />
      <${CS} show={2 == ${contentIndex}} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

function CollapseDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [minBlockSize, setMinBlockSize] = useState("0px");
    const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
    const [withFade, setWithFade] = useState(true);
    const C = withFade ? CollapseFade : Collapse;
    const CS = withFade ? "CollapseFade" : "Collapse";
    const onMinSize = useCallback((e: Event) => { setMinBlockSize(((e.target) as HTMLInputElement).value); e.preventDefault(); }, []);

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} minBlockSize={minBlockSize}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>


    return (
        <div className="demo-section">
            <h2>Collapse</h2>
            <div className="demo">
                <div className="demo-controls">
                    <label>Minimum size: <input type="text" value={minBlockSize} onInput={onMinSize} /></label>
                    <label>With fade<input checked={withFade} onInput={onWithFadeInput} type="checkbox" /></label>
                    <div>Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized.</div>
                    <div>In general, only use this component if you <em>specifically</em> need its reflow transitioning properties. If you want a "disappear in place without zooming out", consider a Clip effect</div>
                </div>
                <C show={cardShow} exitVisibility={exitVisibility} minBlockSize={minBlockSize}>
                    <div>
                        <Swappable>
                            <div className="card">
                                {makeChild(0)}
                                {makeChild(1)}
                                {makeChild(2)}
                            </div>
                        </Swappable>
                    </div>
                </C>
                <code><pre>
                    {`<${CS} show={${cardShow.toString()}}${minBlockSize && minBlockSize != "0px" ? ` minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  {/* These cards have padding, 
      and height doesn't include that, 
      but a wrapper's would */}
  <div>
    <Swappable>
      <div className="card">
        <${CS} 
          show={${contentIndex.toString()} == 0}${minBlockSize && minBlockSize != "0px" ? ` 
          minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` 
          exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
          <div className="card-contents">
             {text}
          </div>
        </${CS}>
      </div>
    </Swappable>
  </div>
</${CS}>
<${CS} show={1 == ${contentIndex.toString()}} [...] />
<${CS} show={2 == ${contentIndex.toString()}} [...] />`}</pre></code>

            </div>
        </div>

    )
}



function FlipDemo({ cardShow, contentIndex, exitVisibility, text }: { cardShow: boolean, contentIndex: number, exitVisibility: EV, text: string }) {
    const [flipX, setFlipX] = useState(0);
    const [flipY, setFlipY] = useState(180);
    const onFlipXInput = useCallback((e: Event) => { setFlipX(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);
    const onFlipYInput = useCallback((e: Event) => { setFlipY(((e.target) as HTMLInputElement).valueAsNumber); e.preventDefault(); }, []);

    const C = Flip;
    const CS = "Flip";

    const makeChild = (i: number) => <C show={contentIndex === i} exitVisibility={exitVisibility} flipAngleInline={flipX * Math.sign(i - contentIndex)} flipAngleBlock={flipY * Math.sign(i - contentIndex)}><div className="card-contents">{halfText(text, i)}<div><button>Focusable element</button></div></div></C>

    return <div className="demo-section">
        <h2>Flip</h2>
        <div className="demo">
            <div className="demo-controls">
                <label>Rotate on inline axis <input type="number" onInput={onFlipXInput} value={flipX} /></label>
                <label>Rotate along block axis <input type="number" onInput={onFlipYInput} value={flipY} /></label>
            </div>
            <C show={cardShow} exitVisibility={exitVisibility} flipAngleInline={flipX} flipAngleBlock={flipY}>
                <Swappable>
                    <div className="card">
                        {makeChild(0)}
                        {makeChild(1)}
                        {makeChild(2)}
                    </div>
                </Swappable>
            </C>
            {<code><pre>{`<${CS} 
  show={${cardShow.toString()}} 
  flipAngleInline={${JSON.stringify(flipX)}} 
  flipAngleBlock={${JSON.stringify(flipY)}} 
  exitVisibility={${JSON.stringify(exitVisibility)}}}>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex.toString()}}
        flipAngleInline={${JSON.stringify(flipX)} * Math.sign(0 - ${contentIndex.toString()})} 
        flipAngleBlock={${JSON.stringify(flipY)} * Math.sign(0 - ${contentIndex.toString()})} 
        exitVisibility={${JSON.stringify(exitVisibility)}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex.toString()}} [...] />
      <${CS} show={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`}</pre></code>}
        </div>
    </div>
}

requestAnimationFrame(() => {
    render(<Demo />, document.getElementById("root")!);
})
