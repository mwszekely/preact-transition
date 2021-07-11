# Preact Transitions

Easy management of CSS transition classes and inplace swappable content. Designed to be simple, small, and to prefer plain CSS for the actual animation whenever possible.

![Alt text](collapse.gif?raw=true "Title")

## Basics

The `Transitionable` component (or `Zoom`, `Fade`, etc.) manages everything--you just tell it when it should show or hide its content, and give it a single HTML element as a child (or a component that properly forwards a ref to one).


By default, the base CSS classes, things like `transition-enter-init`, don't do anything by themselves, but you can use them in combination with other classes to easily implement CSS-based transitions.

This library includes a number of components that do this. All they are are a wrapper around `<Transitionable>` that pass in some extra classes or styles.

|Component|Props|Description|
|---|---|---|
|`Fade`|<ul><li>`fadeMin`</li><li>`fadeMax`</li></ul>|Simple opacity-based transition.|
|`Clip`|<ul><li>`clipOrigin{\|Inline\|Block}`</li><li>`clipMin{\|Inline\|Block}`</li></ul>|Use `clip-path` to animate in/out. Note that `Inline` and `Block` are used instead of `X` and `Y` so the effect is consistent regardless of `writing-mode`. In some cases, this can be a more performant alternative to `<Collapse /`> if you're not picky about border styles.|
|`Slide`|<ul><li>`slide{Inline\|Block}`</li></ul>|Slide the element out to the target position. A value of `0` for `slideInline` or `slideBlock` has the special meaning of "transition in from the last non-zero value" so that you don't need to keep track of what that was for each.|
|`Zoom`|<ul><li>`zoomOrigin{\|Inline\|Block}`</li><li>`zoomMin{\|Inline\|Block}`</li></ul>|Simple `transform: scale`-based transition.|
|`Collapse`|<ul><li>`minBlockSize`</li></ul>|Animate `height` (in horizontal languages, or `width` in vertial languages, or just `block-size` regardless) between `auto` and `0` (or some custom `minBlockSize`, like `10em`). Be sure to use caution, as animating these sorts of properties is *not* cheap for the browser to do and you may drop below 60fps on lower-powered devices.|

In addition, any `<Transitionable>` or component that uses it, like `<Zoom>`, provides the following options:

|Prop name|Description|Default|
|---|---|---|
|`open`|Controls if the content is visible or not.|`false`|
|`classBase`|Allows you to change the names of the CSS classes used. Corresponds to the `$transition-class-name` Sass variable|`"transition"`|
|`measure`|Whether a set of CSS variables corresponding to the current or final size of the content should be provided.|`false`|
|`animateOnMount`|Allows you to change the names of the CSS classes used.|`false`|
|`exitVisibility`|The behavior of hidden components. Can be either <ul><li>"hidden": `visibility: hidden`</li><li>"removed": `display: none`</li><li>"visible": (nothing set)</li></ul> If you use "visible", __be aware that the content will remain visible to tab order, screen readers, etc.__|`false`|
|`onTransitionUpdate`|A function that will be called any time the direction or phase changes. Does not need to remain constant between renders (you don't need to use `useCallback`).|`false`|


To use a transition, simply pass a single HTML element as its child:

```tsx
// The div will receive a bunch of props from the parent Fade,
// like CSS classes and an event handler.
<Fade open={open}><div>Some text content</div></Fade>

// All those props are merged. This is also fine!
<Fade open={open}><div className="some-class" style={{ ...something }}>Some text content</div></Fade>
```


In addition, combinations of the above also exist.
These are extremely easy to compose, and are simply provided for convenience. Even the interaction between `Zoom`'s `transform: scale` and `Slide`'s `transform: translate` is handled just by the CSS, not these components.

* `ClipFade`
* `CollapseFade`
* `SlideFade`
* `ZoomFade`
* `SlideZoom`
* `SlideZoomFade`

`<ZoomFade minBlockSize={0.8} minInlineSize={0.8}>{children}</ZoomFade>` is an easy way to create a Zoom effect that's much more subtle and arguably less distracting for large components, as there's less net movement on-screen.


(Prefer using, e.g., `<SlideZoom />` or `<Transitionable {...bothProps} />` over `<Slide><Zoom /></Slide>`. In `<Slide><Zoom /></Slide>`, the two components are *unaware* of each other, and each independently create their own `<Transitionable>` that modify the same child. Not *wrong*, but a touch wasteful.)



## `Swappable`

The `Swappable` component allows you to transition between one of a set of child elements. Extremely useful for tab panels, icons that swap between each other, etc.

All children in the `Swappable` overlap each other, so only one should have `open={true}` at any given time.

```tsx
<Swappable>
  <div>
    <Transitionable open><div>Content A</div></Transitionable>
    <Transitionable     ><div>Content B</div></Transitionable>
    <Transitionable     ><div>Content C<br />and Content D</div></Transitionable>
  </div>
</Swappable>
```

`Swappable` uses `display: grid` internally, so you can control whether it uses `grid` or `inline-grid` either by using a `span` instead of a `div` (or any other HTML element that's inline by default), or by passing `inline={true|false}`.

The `Slide` component this library comes with has special handling for sliding to/from 0 that allows it to work well with scenarios like the following:

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
                    <Slide open={selectedIndex == index} slideBlock={index - selectedIndex}>
                        <div>{randomContent[index]}</div>
                    </Slide>)
        })()))}
    </span>
</Swappable>
````


## CSS Classes

The `<Transition>` component adds/removes classes in the following order. In all cases, the current class name is built with the following formula:

`${classBase}-${direction}-${phase}`.  For example, `transition-enter-init`.

1. When the `open` state is updated, change the direction and set the phase to "init".
    * *If this is the first time rendering*, then unless `animateOnMount` is given we set the phase to "finalize" instead.
2. If measuring is requested, measure the current size of our content at whatever point in the transition we're at and provide this as a set of CSS variables.
    * In addition, if we're transitioning away from a "finalize" phase, measure the current size of our content at its "auto" size.
3. The change in phase causes a re-render immediately (before the browser paints).
4. Now that the phase is "init", set the phase to "transition".
5. The change in phase causes a re-render immediately (before the browser paints).
6. Now that the phase is "transition", wait for a "transitionEnd" event.
7. Finally, with no more changes, yield control and let the browser paint. 
8. When `transitionend` is fired, set the phase to "finalize" (which causes a re-render).

<hr />

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

By default, approx. the following styles are provided: (simplified, see base.scss for the full definitions)
````scss
// Because transitions don't inherit well at all, 
// we just set almost everything to transition by default.
// You can override this, but then you'll need to
// make your own, e.g. .fade-zoom classes with transitions
// that affect just those two properties
.transition-enter, .transition-exit { 
  transition: all 175ms ease-in-out, 
              visibility 0ms linear, 
              transform-origin 0ms linear; 
  }

// Make sure we don't animate when switching to these states
.transition-enter.transition-enter-init { transition: none; }
.transition-exit.transition-exit-init  { transition: none; }

// Make sure nothing is visible on the accessability tree
// (including disabling focus to anything inside)
.transition-exit-finalize  { visibility: hidden; }

@media (prefers-reduced-motion) { 
    // Usually some additional CSS is also needed
    // for any individual transition for it to undo itself,
    // but the basic idea is to just disable all transitions except opacity,
    // at least to start with.
    .transition-enter { transition: opacity 175ms ease-in-out; }
    .transition-exit  { transition: opacity 175ms ease-in-out; }

    // Provide a basic fade transition, no matter what was there before.
    .transition-enter-init, .transition-exit-transition, .transition-exit-finalize { opacity: 0; }
    .transition-exit-init, .transition-enter-transition, .transition-enter-finalize { opacity: 1; }
}
````

## Custom Transitions and useCreateTransitionableProps

You generally won't need to care about `useCreateTransitionableProps` or the other `useCreate*Props` hooks -- to build a custom Transition, the following is usually enough:

````tsx
function CustomTransition(props) {
    const transitionableProps: CreateTransitionableProps = { 
        // Configure "measure" or other props if you need them
        ... 
    };

    // All you additionally need is just a class name,
    // maybe some styles based on props passed in.
    const mergedProps = useMergedProps({ className: "my-custom-transition" }, props);
    return <Transitionable {...useCreateTransitionableProps(transitionableProps, mergedProps)} />
}
````

That said,

Every component, like `<Zoom>`, comes with a corresponding hook, `useCreateZoomProps`, that takes the same props as its component.  These functions return a set of relatively bare props to send to an HTMLElement (and any additional props to send to the `<Transitionable>`, like `measure`).  For example, `useCreateZoomProps` simply returns the following:



````tsx
{
    className: `${classBase}-zoom`,
    classBase,
    style: { /* CSS variables */ } as h.JSX.CSSProperties,
};
````

Before returning, however, the hook will merge those props with any you might have passed in as a second argument. This is a shorthand provided because it's *always* required to merge the transition's props with the user's props anyway, but it's not required to use.

````tsx
 // If you're forwarding a ref (which you should) use { ...props, ref } instead of props.
const userProps = props;   
const zoomProps = useMergedProps({ className: `transition-zoom`, [...] }, props);
````

Finally, simply send the merged props into your `<Transitionable>`, which will take those props, props from the child, and its own `useCreateTransitionableProps` props, merge them all, and pass them to the child.

````tsx
return <Transitionable {...zoomProps} />;
````


To merge two transitions, like zoom and fade, simply take a `<Zoom>` transition and pass it props from `useCreateFadeProps`:

````tsx
const userProps = props;
const fadeProps = useCreateFadeProps({  }, userProps);

// We don't even need useCreateZoomProps, because Zoom does that already.
return <Zoom {...fadeProps} />;
````

Please note that, unlike a `<Transitionable>` component, which will take in unknown props and pass them along, `useCreateTransitionableProps` is *purely* a starting point and will not pass through any unknown props.

However, because you must always merge its result with incoming user props regardless, each of these hooks accepts a second argument, which is a bag of properties to additionally merge with.

