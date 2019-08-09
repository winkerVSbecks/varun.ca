---
layout: post
title: Draggable Elements with RxJS
bgImage: /img/napoleon-theorem.gif
style: light
---

<p data-height="600" data-theme-id="26435" data-slug-hash="yoRBMj" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Curves and Handles" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/yoRBMj/">Curves and Handles</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I've written previously about making DOM elements draggable using a combination of [mouse and touch events](/touch-and-mouse-together). Recently I discovered a more elegant way to achieve this using RxJS and Hammer.

## Tools

[Hammer JS](http://hammerjs.github.io) needs no introduction. It is the go to library for supporting touch gestures. Plus it provides an abstraction over the browser events allowing us to handle mouse and touch at the same time.

[RxJS](https://github.com/reactivex/rxjs) is a reactive programming library for JavaScript. We will use it to convert events into an observable stream and for animations.

I've been using RxJS for a couple of years now. Mostly for state management with Angular and with [redux-observable](https://redux-observable.js.org). I love working with observables. It allows me to write succinct and declarative code.

A few months ago [David Khourshid](https://twitter.com/davidkpiano) introduced me to his library [RxCSS](https://github.com/davidkpiano/RxCSS) and to the idea of using observables to create reactive animations. Reactive programming makes it really easy to convert events into data and drive animations. This pushed me to learn more about observables and discover lots of new patterns. In this post I am going to share one of those patterns.

⚠️ I am going to assume a basic understanding of RxJS. If you are new to RxJS then I would highly recommend reading David's [animated intro to RxJS](https://css-tricks.com/animated-intro-rxjs) first.

## Drag Gesture
The drag gesture can be broken down into three stages: start, move & end. On start we grab the current location of the element. The move event provides the delta which we can use to move the element. Lastly, the end event provides us with a hook to do any kind of cleanup once the gesture has ended. Hammer's [Pan Recognizer](http://hammerjs.github.io/recognizer-pan/) provides us with `panstart`, `panmove` & `panend` events which work perfectly for the drag gesture.

### Events to Observable
We start by creating a Hammer manager and configure it to handle pan in all directions. `Rx.Observable.fromEvent` allows us to convert events into an observable sequence. This one observable stream – `pan$` – will allow us to subscribe to events for pan-start, pan-move and pan-end.

```js
// Create a new Hammer Manager
const hammerPan = new Hammer(element, {
  direction: Hammer.DIRECTION_ALL,
});

hammerPan.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// Convert hammer events to an observable
const pan$ = Rx.Observable.fromEvent(hammerPan, 'panstart panmove panend');
```

### Composing the Drag Observable
For the drag gesture we want to create an observable stream such that it emits values from the the pan-move event once the pan-start event has been triggered and then stops emitting those values once the pan-end event is triggered.

<figure class="center ma0 tc">
  {% include diagrams/drag.svg %}
  <figcaption class="f6 mt3">
    Visualization of the drag observables. Generated using <a href="https://rxviz.com/">rxviz.com</a>
  </figcaption>
</figure>


The [`filter`](https://www.learnrxjs.io/operators/filtering/filter.html) operator allows us to filter values based on a provided condition. We can use this to target specific events. For example, `pan$.filter(e => e.type === 'panstart')` to subscribe only to pan-start events. Then to generate the `drag$` observable we then need to combine `panstart$`, `panmove$` & `panend$` in the following pattern:

```js
const drag$ = panstart$
  .switchMap(() =>
    panmove$
      .map(calculateNewPosition)
      .takeUntil(panend$)
  );
```

Let's break this down step by step. `panstart$` is the observable that is driving the whole thing. When it emits the first value it _switches_ to the `panmove$` observable. This switching is done using the [`switchMap`](https://www.learnrxjs.io/operators/transformation/switchmap.html) operator. The `panmove$` observable then starts emitting the location values. We can tell it to stop when `panend$` emits a value by chaining on the [`takeUntil`](https://www.learnrxjs.io/operators/filtering/takeuntil.html) operator. Therefore, all subscribers to `drag$` only ever receive location values. You can see a simulated visualization of this setup [here](https://rxviz.com/v/A8DdXm8d).

Now that we understand the basic structure we can flush out the details. The `panmove` event only provides delta values. To calculate the absolute position we need to start by getting the initial location. In this example I am getting that information from the element itself. To provide a cleanup hook we can subscribe to the `move$` observable and handle it via the `onComplete` callback.

```js
// Generates the drag$ observable
const drag = ({ element, pan$ }) => {
  const panStart$ = pan$.filter(e => e.type === 'panstart');
  const panMove$ = pan$.filter(e => e.type === 'panmove');
  const panEnd$ = pan$.filter(e => e.type === 'panend');

  panstart$
    .switchMap(() => {
      // Get the starting point on pan-start
      const start = {
        x: +element.getAttribute('cx'),
        y: +element.getAttribute('cy'),
      };

      // Create observable to handle pan-move and stop on pan-end
      const move$ = panmove$
        .map(pmEvent => ({
          x: start.x + pmEvent.deltaX,
          y: start.y + pmEvent.deltaY,
        }))
        .takeUntil(panend$);

      // We can subscribe to move$ and handle cleanup in the onComplete callback
      move$.subscribe(null, null, () => { /* Handle cleanup when pan ends */ });

      return move$;
    });
};
```

The pattern I shared above is based on the [dragndrop example](https://github.com/Reactive-Extensions/RxJS/blob/8fa95ac884181fb6cbff8ce7c1d669ffb190f5e4/examples/dragndrop/dragndrop.js) from the RxJS documentation.

### Scaling to Canvas
Quite often I end up having to limit the element to a parent container. For example, a `<circle>` that can only be dragged within the `<svg>` container where the `cx` and `cy` values need to be calculated in the `viewBox` coordinate system.

This is essentially a global to local coordinate transform. With SVG this can get slightly tricky depending on how you want the SVG to scale. I generally prefer `preserveAspectRatio="xMidYMid slice"`. This makes the SVG grow until it entirely covers the container – very similar to `background-size: cover`.

{% include diagrams/svg-scaling.html %}

Therefore, we can figure out how much the SVG has scaled using the aspect ratio of the container. Then use that value to map the viewport based coordinates to the SVG coordinate system.

```js
function scaleToCanvas({ start: { x, y }, w, h }) {
  const svgW = w > h ? VIEWBOX_SIZE.W : VIEWBOX_SIZE.W * w / h;
  const svgH = w > h ? VIEWBOX_SIZE.H * h / w : VIEWBOX_SIZE.H;

  return e => ({
    x: x + mapFromToRange(e.deltaX, 0, w, 0, svgW),
    y: y + mapFromToRange(e.deltaY, 0, h, 0, svgH)
  });
}

function mapFromToRange(x, x1, x2, y1, y2) {
  return (x - x1) * ((y2 - y1) / (x2 - x1)) + y1;
}
```

And here's the complete example:

<p data-height="400" data-theme-id="26435" data-slug-hash="RZeNRE" data-default-tab="js,result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Drag Gesture with RxJS & Hammer – without smooth motion" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/RZeNRE/">Drag Gesture with RxJS & Hammer – without smooth motion</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Smooth Motion
In the example above you'll notice that the motion is somewhat rigid. The circle is stuck to the pointer and instantly stops wherever the pointer stops. We can make this better by adding smooth motion. This will also provide a bit of momentum to the circle.

For smooth motion I am using the LERP-ing technique. It is described in detail by David Khourshid in the [An Animated Intro to RxJS](https://css-tricks.com/animated-intro-rxjs/#article-header-id-3) article I mentioned earlier. The gist of it is that instead of using the `drag$` observable directly we combine it with an animation timer. This allows us to smooth out the motion by using linear interpolation. However, we still have the possibility to subscribe to `drag$` if we want access to the raw location.

Here's the final version with smooth motion.

<p data-height="500" data-theme-id="26435" data-slug-hash="QMVymp" data-default-tab="js,result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Drag Gesture with RxJS & Hammer" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/QMVymp/">Drag Gesture with RxJS & Hammer</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Conclusion
You can see the power of RxJS here. We were able to convert events into observable streams. Then we composed those streams to create the `drag$` observable. And finally we added the animation layer to smooth out the motion. The code is quite declarative. Each layer that we created is modular and can be easily composed to create complex scenarios – for example see the demo below and the one at the top of the page. Looking for more inspiration? Checkout CodePen for many more [examples](https://codepen.io/search/pens/?q=rxcss).

<p data-height="400" data-theme-id="26435" data-slug-hash="yoVQbp" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Napoleon's Theorem" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/yoVQbp/">Napoleon's Theorem</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
