# Preact Transitions

Easy management of CSS transition classes and inplace swappable content. Designed to be simple, small, and to prefer plain CSS for the actual transition animations.

This project is unlicensed into the public domain -- just take anything you see that's useful. It's also not any sort of an "official" Preact library -- it's just not a particularly creative name.

To use a transition, simply wrap the content you want to transition in/out:

```tsx
// The div will receive a bunch of props from the parent Fade,
// like CSS classes and an event handler.
<Fade show={show}><div>Some text content</div></Fade>

// A <span> will be created, then the same rules apply as above
<Fade show={show}>Some text content</Fade>

// All those props are merged. This is also fine!
<Fade show={show} className="some-class">
    <div className="another-class" style={{ background: "red" }}>Some text content</div>
</Fade>
```

![An animation showing examples of a card and its contents transitioning in and out](collapse.gif?raw=true "Collapse demo image")

## Basics

This library comes with a number of built-in transitions that are all made using the `useTransition` hook.

`useTransition` simply adds a set of CSS classes, styles, and event handlers to some props that you specify so that they properly render a transition.

For example, this is how `Fade` is implemented:
```tsx
// Incoming arguments to control where the fade starts/stops
const fadeMin = 0;
const fadeMax = 1;

// The CSS we wrote for the fade 
// references these class names and custom properties,
// but they're not used directly by `useTransition`.
const fadeProps = {
    className: `ptl-fade`,
    style: {
        [`--ptl-fade-min`]: fadeMin,
        [`--ptl-fade-max`]: fadeMax,
    }
}

// Finally, implement the transition logic
return useTransition({ transitionParameters: {
    measure: false,     // Only `true` used for `Collapse`, basically
    show,
    duration,
    animateOnMount,
    exitVisibility,
    delayMountUntilShown,
    onVisibilityChange,
    propsIncoming: useMergedProps(fadeProps, anyOtherPropsIfYouGotEm)
}});
```

Use this pattern to easily implement custom transitions based on CSS properties.


## `Swappable`

The `Swappable` component allows you to transition between one of a set of child elements. Extremely useful for tab panels, icons that swap between each other, etc.

All children in the `Swappable` overlap each other, so only one should have `show={true}` at any given time.

```tsx
<Swappable>
  <div>
    <Fade show><div>Content A</div></Fade>
    <Fade     ><div>Content B</div></Fade>
    <Fade     ><div>Content C<br />and Content D</div></Fade>
  </div>
</Swappable>
```

Also, `Swappable` manipulates the default value of child `useTransition`s' `animateOnMount` so that all components *do not* animate on mount, but once after `Swappable` has mounted, then the children *do* animate when mounted. The end result is that the child transitions will appear (or be hidden) instantly on mount, but if a visible child mounts afterwards, it will animate in (this does not carry over to sub-descendants -- just the first "generation" of children). You can control this behavior with `childrenAnimateOnMount` (default: `null`).

`Swappable` uses `display: grid` internally, so you can control whether it uses `grid` or `inline-grid` either by using a `span` instead of a `div` (or any other HTML element that's inline by default), or by passing `inline={true|false}`.

The `Slide` and `Fade` components this library come with special handling for sliding to/from `null` that allows it to work well with scenarios like the following:

````tsx
const [selectedIndex, setSelectedIndex] = useState(0);

<Swappable>
    <span>
        {(Array.from((function*() {
            // Generate 5 <Slide> elements,
            // each of which is only shown if it matches selectedIndex.
            // The slideBlock prop is used to determine the direction, so that
            // the content slides left/right depending on where it is
            // in relation to selectedIndex.
            // In addition, those props on `useCreateSlideProps` has special
            // handling for 0 that remembers the previous valid position
            // so it animates correctly.
            for (let index = 0; index < 5; ++index)
                yield (
                    <Slide show={selectedIndex == index} slideBlock={(index - selectedIndex) || null}>
                        <div>{randomContent[index]}</div>
                    </Slide>
                );
        })()))}
    </span>
</Swappable>
````


## Built-ins

|Component|Props|Description|
|---|---|---|
|`Fade`|<ul><li>`fadeMin`</li><li>`fadeMax`</li></ul>|Simple opacity-based transition. `fadeMin` and `fadeMax` are, like the rest of all these props, are simply forwarded on as CSS variables.|
|`Clip`|<ul><li>`clipOrigin{\|Inline\|Block}`</li><li>`clipMin{\|Inline\|Block}`</li></ul>|Use `clip-path` to animate in/out. Note that `Inline` and `Block` are used instead of `X` and `Y` so the effect is consistent regardless of `writing-mode`. In some cases, this can be a more performant alternative to `<Collapse />` if you're not picky about border styles.|
|`Slide`|<ul><li>`slide{Inline\|Block}`</li></ul>|Slide the element out to the target position. A value of `null` for `slideInline` or `slideBlock` has the special meaning of "transition in from the last non-zero value" so that you don't need to keep track of what that was for each.|
|`Zoom`|<ul><li>`zoomOrigin{\|Inline\|Block}`</li><li>`zoomMin{\|Inline\|Block}`</li></ul>|Simple `transform: scale`-based transition.|
|`Collapse`|<ul><li>`minBlockSize`</li></ul>|Animate `height` (in horizontal languages, or `width` in vertial languages, or just `block-size` regardless) between `auto` and `0` (or some custom `minBlockSize`, like `10em`). Be sure to use caution, as animating these sorts of properties is *not* cheap for the browser to do and you may drop below 60fps on lower-powered devices.|
|`Flip`|<ul><li>`flipAngle{\|Inline\|Block}`</li><li>`perspective`</li></ul>|A 3D card-flipping effect. If you make the timing function linear (or symmetrical), then by taking advantage of the fact that the back face is not visible, it can work well in a `Swappable` with a `flipAngle` of 180.|

Note that `Slide` and `Flip` can be easily animated to slide to the left or right depending on if they should appear "before" or "after. For example, if a given `Slide` is the 3rd out of 10 in a TabPanel (or similar construction), an easy way to animate it would be `slideTargetInline={(index - currentIndex) || null}`.

In addition, `useTransition` and all built-ins listed above provide the following options:

|Prop name|Description|Default|
|---|---|---|
|`show`|Controls if the content is visible or not. Passing `null` is the same as passing `false`, except when `animateOnMount` is `true`; in that case, `null` tells `animateOnMount` to wait for a non-`null` value to actually do that animation.|`false`|
|`animateOnMount`|By default, on mount, all components appear pre-transitioned (except within a `Swappable`&mdash;see above). This prop will allow mounted components to animate themselves appearing/disappearing on mount instead.  Note that if `show` is `null` instead of `false`, the "first mount" (and subsequent avoiding of that first animation) won't occur until it's actually  `true` or `false`. This lets you "delay" that logic if need be.|`false`|
|`measure`|Whether a set of CSS variables corresponding to the current and/or final size of the content should be provided. May cause jank when the animation starts, be sure to test on older hardware. Only used by `Collapse` and its ilk here.|`false`|
|`exitVisibility`|Controls how components are hidden when their exit transition completes: <ul><li>"hidden": `visibility: hidden`</li><li>"removed": `display: none`</li><li>"inert": No additional styling is applied, but the [`inert`](https://caniuse.com/mdn-api_htmlelement_inert) attribute is applied to the element.</li><li>"visible": No changes are made. __You are responsible for making sure this content is hidden from the tab order, assistive technologies, etc.__ An example is a Tooltip, which must be reachable even before/after it's shown.</li></ul>|`hidden`|

In addition, combinations of the built-ins also exist purely for convenience.

* `ClipFade`
* `CollapseFade`
* `SlideFade`
* `ZoomFade`
* `SlideZoom`
* `SlideZoomFade`

These are trivial to implement; for example, `CollapseFade` is simply:
```tsx
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
    }
});
```

`<ZoomFade minBlockSize={0.8} minInlineSize={0.8}>{children}</ZoomFade>` is an easy way to create a Zoom effect that's much more subtle and arguably less distracting for large components, as there's less net movement on-screen.


(Prefer using, e.g., `<SlideZoom />` over `<Slide><Zoom /></Slide>`. When wrapped like the latter, the two components are *unaware* of each other, and each independently run their own `useTransition` logic that modifes the same child. Not *wrong*, but a touch wasteful.)

## The algorithm

Firstly, note that we keep track of some internal state: `direction` and `phase`.
* `direction` can be `"enter"` or `"exit"`. It's whether we're transitioning towards visible (`"enter"`) or hidden (`"exit"`)
* `phase` can be `"init"`, `"transition"`, or `"finalize"`, changing from one to the next as the transition plays.
    * `"init"` is the first frame of the animation. It has `transition: none` applied to ensure that we "snap" to this position when applicable. (The measurement class also has this property.)
    * `"transition"` is every subsequent frame until the transition ends
    * `"finalize"` is after the transition has played to completion (or an emergency timeout fires).

Now for the actual algorithm:

1. Whenver `show` is changed to be `true` or `false`:
    * `direction` is set to `"enter"` if `show` is `true`, and `"exit"` otherwise.
    * `phase` becomes `"init"`. **EXCEPTIONS:**
        * `phase` snaps straight to `"finalize"` if we just mounted and `animateOnMount` is `false` (the default).
        * `phase` stays as `"transition"` if we're still in the middle of a transition currently.
    * Notably, when `show` is `null` (i.e. *not* `true` or `false`), these steps are skipped entirely.
2. Whenver the `direction` or `phase` changes (either from step 1 or recursively from a reason below):
    * If `measure` is `true`, perform the following steps:
        * Add the classes used for measurement
        * Pretend `direction` is `"enter"` and `phase` is `"finalize"` and apply those classes to the element
        * Measure the element's dimensions, and record them as custom CSS properties
        * Remove the measurement classes
    * Apply the classes that correspond to the requested `direction` and `phase`
    * Force a reflow
    * The `inert` attribute is applied or removed as requested by `exitVisibility`.
    * Clear any of the "waits" below.
    * Do something different based on the new phase:
        * `"init"`:
            * Wait one frame
            * Change the phase to `"transition"` (implicitly running step 2 again).
        * `"transition"`:
            * Wait until the transition ends
                * `onTransitionEnd` is used, with `setTimeout` as an emergency backup
            * Change the phase to `"finalize"` (implicitly running step 2 again).
        * `"finalize"`:
            * Nothing additional needs to be done.
    

## CSS Classes
// TODO: Outdated class names

Something like a fade transition would be created like this:
````scss
.fade {
    &.transition-enter-init, 
    &.transition-exit-transition, 
    &.transition-exit-finalize { 
        opacity: 0; 
    }

    &.transition-exit-init, 
    &.transition-enter-transition, 
    &.transition-enter-finalize { 
        opacity: 1; 
    }
}
````

<hr />

When the user has enabled `prefers-reduced-motion`, only a basic fade animation is ever used. 
