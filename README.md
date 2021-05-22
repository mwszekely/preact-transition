# Preact Transitions

Easy management of CSS transition classes and inplace swappable content.

## How to use

The `Transition` component manages everything--you just tell it when it should show or hide its content.

This library also comes with some default CSS classes to implement some default transitions.

To use one of these transition, there are a number of functions provided that modify any props that will be forwarded onto a component child.

```tsx
/**
 * Here, the child div will have a className of "passed-through-to-div" AND
 * whatever additional transition classes needed to animate a transition.
 * For example, className="passed-through-to-div transition-enter-finalize".
 */
<Transition open={open} {...fadeProps({ className: "passed-through-to-div" })}>
  <div>This content fades in/out depending on the "open" prop.</div>
</Transition>
```

You can abstract this out into its own component, a few of which are provided:

```tsx
// This example is a more generic solution
function Fade({ open, ...rest }: FadeProps) {
  return (
    <Transition open={open} {...fadeProps(rest)}>
      <div>This content fades in/out depending on the "open" prop.</div>
    </Transition>
  );

  // Or even just
  return (
    <Transition {...fadeProps(rest)}>
      <div>This content fades in/out depending on the "open" prop.</div>
    </Transition>
  );
  // because all props are forwarded to the Transition component, which handles "open".
}
```

You can combine these however you like, too:

```tsx
/**
 * The zoomProps function consumes originX and originY and passes everything else
 * to fadeProps, which consumes nothing and passes everything to Transition,
 * which consumes/modifies a few things and hands them off to the child div
 */
<Transition
  open={open}
  {...fadeProps(zoomProps({ ...props, originX: 0, originY: 0.5 }))}
>
  <div>This content fades in/out depending on the "open" prop.</div>
</Transition>
```

## `SwapContainer`

The `SwapContainer` component allows you to transition between one of a set of child elements. Extremely useful for tab panels, icons that swap between each other, etc.

```tsx
/**
 * Only the first element in the <span> is shown.
 * This <SwapContainer> will be inline because it wraps a <span> element,
 * but you can force a specific behavior by passing "inline".
 * Assuming the CSS you're using for transitions uses visability: hidden,
 * The <span> will be the size of the largest element.
 */
<SwapContainer>
  <span>
    <Transition open>
      <div>Content A</div>
    </Transition>
    <Transition>
      <div>Content B</div>
    </Transition>
    <Transition>
      <div>
        Content C<br />
        and Content D
      </div>
    </Transition>
  </span>
</SwapContainer>
```

The `Slide` component this library comes with has special handling that allows it to work well with scenarios like the following:

````tsx

const [selectedIndex, setSelectedIndex] = useState(0);

<SwapContainer>
    <span>
        {(Array.from((function*() {
            // Generate 5 <Transition> elements,
            // each of which is only shown if it matches selectedIndex.
            // The x prop is used to determine the direction, so that
            // the content slides left/right depending on where it is
            // in relation to selectedIndex.
            // In addition, the x prop of the slideProps function has special
            // handling for 0 that remembers the previous valid position
            // so it animates correctly.
            for (let index = 0; index < 5; ++index)
                yield (
                    <Transition open={selectedIndex == index} {...fadeProps(slideProps({ x: Math.sign(index - selectedIndex) }))}>
                        <div>{randomContent[index]}</div>
                    </Transition>)
        })()))}
    </span>
</SwapContainer>
````


## CSS Classes

The `<Transition>` component adds/removes classes in the following way:

1. When the `open` state changes, `transition-[enter/exit]-init` is added.  `enter` is added if `open` is true and `exit` otherwise, but otherwise it's exactly the same.  I'll just be using `enter` from here on out.
2. The element's `offsetTop` is measured to force a reflow. This "snaps" the element to the style in `transition-enter-init` and guarantees it always looks correct.
3. `transition-enter-init` is removed and `transition-enter-transition` is added.
4. After this the component waits for a `transitionEnd` event, at which point `transition-enter-finalize` is added.

By default, the following styles are provided:
````scss
// Because transitions don't inherit well at all, 
// we just set everything to transition by default.
// You can override this, but then you'll need to
// make your own, e.g. .fade-zoom classes with transitions
// that affect just those two properties
.transition-enter,
.transition-exit { 
    transition: all, 175ms ease-in-out; 
}

.transition-enter-init,
.transition-exit-init { 
    transition: none; 
}

.transition-exit-finalize { visibility: hidden; }
.transition-enter-finalize { }
````

And something like a fade transition would be created like this:
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


You can modify the `"transition-"` part of the class name (in Preact, not in Sass) with the `classBase` prop. 


## Components

The following components (and their prop-modifying functions that you can use to efficiently combine them) are provided by default:
* `<Clip>` & `clipProps()`: Animate a clipping effect towards `originX` and `originY` (both are 0.5 by default).
* `<Collapse>` & `collapseProps()`: Shrink the element's `height` or `width` to/from 0 and auto. Note that animating these properties is pretty inefficient for the browser to do.
* `<Fade>` & `fadeProps()`: Change the `opacity` to/from 0 and 1.
* `<Slide>` & `slideProps()`: Slides the element to the target `x`% or `y`% value. You can use values -1 >= x <= 0, but you'd want to combine it with `fadeProps`.
* `<Zoom>` & `zoomProps()`: Zoom in/out around `originX` and `originY` to/from 100% and `minX`% and `minY`%. `minX` and `minY` can be > 0, but you'd want to combine it with `fadeProps`.

Finally,
* `<SwapContainer>` isn't itself a transition, but places all child components in the same box so when they transition in/out it looks smooth.


