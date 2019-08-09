---
layout: post
title: Metaballs
bgImage: /img/amoeba.gif
style: dark
---

<p data-height="400" data-theme-id="26435" data-slug-hash="RLyNEE" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="amoeba" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/RLyNEE/">amoeba</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Metaballs, not to be confused with meatballs, are organic looking squishy gooey blobs. From a mathematical perspective they are an iso-surface. They are rendered using equations such as <code class="dib b">f(x,y,z) = r / ((x - x<sub>0</sub>)<sup>2</sup> + (y - y<sub>0</sub>)<sup>2</sup> + (z - z<sub>0</sub>)<sup>2</sup>)</code>. Jamie Wong has a fantastic [tutorial](http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares) on rendering metaballs with canvas.

We can replicate the metaball effect using CSS & SVG by applying both [blur and contrast filters](https://css-tricks.com/shape-blobbing-css/) to an element. For example in Chris Gannon's Bubble Slider below.

<p data-height="300" data-theme-id="26435" data-slug-hash="GZNgLw" data-default-tab="result" data-user="chrisgannon" data-embed-version="2" data-pen-title="SVG Bubble Slider" class="codepen">See the Pen <a href="https://codepen.io/chrisgannon/pen/GZNgLw/">SVG Bubble Slider</a> by Chris Gannon (<a href="https://codepen.io/chrisgannon">@chrisgannon</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## SVG Metaball

I discovered another approach to creating this metaball effect from [Paper.js examples](http://paperjs.org/examples/meta-balls). Back in the days of Scriptographer [Hiroyuki Sato](http://shspage.com) created a script for generating gooey blobs in Adobe Illustrator. Unlike the previous techniques this does not render pixels or rely on filters. Instead it connects two circles with a membrane. Which means that the we can generate the entire blob as a path. For the Amoeba CodePen I followed exactly this technique.

<p data-height="320" data-theme-id="26435" data-slug-hash="NazWxg" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Meta balls Debug" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/NazWxg/">Meta balls Debug</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In this blog post I am going break down the steps required to generate the metaball. We are going to go through a function called `metaball` which generates the black shaded path that you see below. This consists of the connector plus a part of the second circle.

<p data-height="200" data-theme-id="8427" data-slug-hash="qPQZPN" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — the path" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/qPQZPN/">Metaballs debug — the path</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Building the Metaball

To figure out where the connector touches the two circles we start by locating two tangents that touch both circles. This is the widest the connector can be. BTW I'm focusing on the case when the circles are not overlapping first.

{% include metaball/tangents.html %}

We can calculate the maximum angle of spread using:

```js
const maxSpread = Math.acos((radius1 - radius2) / d);
```

Why? This took me a while to figure out. I could attempt to explain here, but you are probably better of seeing the step-by-step illustration in this [external tangents to two given circles](http://www.mathopenref.com/consttangentsext.html) guide.

{% include metaball/spread.html %}

This is the maximum possible spread that the connector can have. We can control spread amount by multiplying it with a factor called `v`. The Paper.js code has `v = 0.5`. That seems to work well.

<p data-height="200" data-theme-id="8427" data-slug-hash="aLQBdb" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — spread" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/aLQBdb/">Metaballs debug — spread</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The spread for the smaller circle is `(Math.PI - maxSpread) * v`. This is because the sum of the opposite angles of a polygon is 180°.

Next we need to find the location of those four points. We know the centre of the circles (`center1` & `center2`) and the radii (`radius1` & `radius2`). Therefore, we will only be dealing in terms of angles and then use polar coordinates to convert it into <code>(x, y)</code> values later.

```js
const angleBetweenCenters = angle(center2, center1);
const maxSpread = Math.acos((radius1 - radius2) / d);

// Circle 1 (left)
const angle1 = angleBetweenCenters + maxSpread * v;
const angle2 = angleBetweenCenters - maxSpread * v;
// Circle 2 (right)
const angle3 = angleBetweenCenters + (Math.PI - (Math.PI - maxSpread) * v);
const angle4 = angleBetweenCenters - (Math.PI - (Math.PI - maxSpread) * v);
```

The angles need to be measured clockwise. Therefore, for the second circle we take that into account by subtracting from `Math.PI`. We add `angleBetweenCenters` to all because the circles can be moving diagonally too. Then convert polar coords to cartesian.

```js
// Points
const p1 = getVector(center1, angle1, radius1);
const p2 = getVector(center1, angle2, radius1);
const p3 = getVector(center2, angle3, radius2);
const p4 = getVector(center2, angle4, radius2);
```

To convert the trapezium shaped connector into a curved one we need to add handles to all four points. The next part of the process is to figure out the location of the handles.

<p data-height="200" data-theme-id="8427" data-slug-hash="rGQyVJ" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — handles" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/rGQyVJ/">Metaballs debug — handles</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The handle for a particular point should be aligned to the tangent to the circle at that point. Again we'll use polar coords to locate the handle. This time however, it will be relative to the point itself.

{% include metaball/handles.html %}

The lines AB and BC are perpendicular because AB is radial and BC is a tangent to the circle. Therefore, the angle for the handle 1 is `angle1 - Math.PI / 2`. Similarly we can calculate the angles for the other three handles.

The length of the handle is relative to the radius of the circle they originate from times the factor `d2`. For example, the length of handle 1 is `radius1 * d2`. We can now calculate the location of the handles like so:

```js
const totalRadius = radius1 + radius2;
// Handle length scaling factor
const d2 = Math.min(v * handleSize, dist(p1, p3) / totalRadius);
// Handle lengths
const r1 = radius1 * d2;
const r2 = radius2 * d2;

const h1 = getVector(p1, angle1 - HALF_PI, r1);
const h2 = getVector(p2, angle2 + HALF_PI, r1);
const h3 = getVector(p3, angle3 + HALF_PI, r2);
const h4 = getVector(p4, angle4 - HALF_PI, r2);
```

We have all the points 🙌🏽 Time to construct the SVG path. The path is made of three sections: curve from `point 1` to `point 3`, arc of `radius2` from `point 3` to `point 4` and curve from `point 4` to `point 2`.

```js
function metaballToPath(p1, p2, p3, p4, h1, h2, h3, h4, escaped, r) {
  return [
    'M', p1,
    'C', h1, h3, p3,
    'A', r, r, 0, escaped ? 1 : 0, 0, p4,
    'C', h4, h2, p2,
  ].join(' ');
}
```

### Circle Overlap

We have a gooey metaball! But you'll notice that path gets all weird and twisty when the circles start to overlapping. We are going to fix this by expanding the spread in proportion to how much the circles are overlapping.

<p data-height="200" data-theme-id="8427" data-slug-hash="boQadp" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — no overlap" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/boQadp/">Metaballs debug — no overlap</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The spread expansion will be controlled using the angles `u1` and `u2`. We can calculate these using the [law of cosines](https://en.wikipedia.org/wiki/Law_of_cosines).

{% include metaball/u1-u2.html %}

```js
u1 = Math.acos(
  (radius1 * radius1 + d * d - radius2 * radius2) / (2 * radius1 * d),
);

u2 = Math.acos(
  (radius2 * radius2 + d * d - radius1 * radius1) / (2 * radius2 * d),
);
```

But what shall we do with these 🤔 To be honest I'm not entirely sure how this works. What I do know is that it expands the spread as the circles get closer and then collapses it once circle 2 is completely inside circle 1.

```js
const angle1 = angleBetweenCenters + u1 + (maxSpread - u1) * v;
const angle2 = angleBetweenCenters - (u1 + (maxSpread - u1) * v);
const angle3 = angleBetweenCenters + Math.PI - u2 - (Math.PI - u2 - maxSpread) * v;
const angle4 = angleBetweenCenters - (Math.PI - u2 - (Math.PI - u2 - maxSpread) * v);
```

<p data-height="200" data-theme-id="8427" data-slug-hash="PJxQom" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — overlap" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/PJxQom/">Metaballs debug — overlap</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

And one final change to account for overlapping circles. The length of the handles will also be proportional to the distance between the circles.

```js
// Define handle length by the distance between both ends of the curve
const totalRadius = radius1 + radius2;
const d2Base = Math.min(v * handleSize, dist(p1, p3) / totalRadius);
// Take into account when circles are overlapping
const d2 = d2Base * Math.min(1, d * 2 / (radius1 + radius2));

const r1 = radius1 * d2;
const r2 = radius2 * d2;
```

## Conclusion

And here is the final result and the entire code snippet for `metaball`. Try forking it and playing around with different values of `handleSize` and `v`. See how they impact the shape of the connector. There are so many amazing little details in these 70 lines of code. Fascinating work by Hiroyuki Sato. I learnt so much from it!

<p data-height="300" data-theme-id="26435" data-slug-hash="pWQajO" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Metaballs debug — final" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/pWQajO/">Metaballs debug — final</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

```js
/**
 * Based on Metaball script by Hiroyuki Sato
 * http://shspage.com/aijs/en/#metaball
 */
function metaball(radius1, radius2, center1, center2, handleSize = 2.4, v = 0.5) {
  const HALF_PI = Math.PI / 2;
  const d = dist(center1, center2);
  const maxDist = radius1 + radius2 * 2.5;
  let u1, u2;

  // No blob if a radius is 0
  // or if distance between the circles is larger than max-dist
  // or if circle2 is completely inside circle1
  if (radius1 === 0 || radius2 === 0 || d > maxDist || d <= Math.abs(radius1 - radius2)) {
    return '';
  }

  // Calculate u1 and u2 if the circles are overlapping
  if (d < radius1 + radius2) {
    u1 = Math.acos(
      (radius1 * radius1 + d * d - radius2 * radius2) / (2 * radius1 * d),
    );
    u2 = Math.acos(
      (radius2 * radius2 + d * d - radius1 * radius1) / (2 * radius2 * d),
    );
  } else { // Else set u1 and u2 to zero
    u1 = 0;
    u2 = 0;
  }

  // Calculate the max spread
  const angleBetweenCenters = angle(center2, center1);
  const maxSpread = Math.acos((radius1 - radius2) / d);
  // Angles for the points
  const angle1 = angleBetweenCenters + u1 + (maxSpread - u1) * v;
  const angle2 = angleBetweenCenters - u1 - (maxSpread - u1) * v;
  const angle3 = angleBetweenCenters + Math.PI - u2 - (Math.PI - u2 - maxSpread) * v;
  const angle4 = angleBetweenCenters - Math.PI + u2 + (Math.PI - u2 - maxSpread) * v;

  // Point locations
  const p1 = getVector(center1, angle1, radius1);
  const p2 = getVector(center1, angle2, radius1);
  const p3 = getVector(center2, angle3, radius2);
  const p4 = getVector(center2, angle4, radius2);

  // Define handle length by the distance between both ends of the curve
  const totalRadius = radius1 + radius2;
  const d2Base = Math.min(v * handleSize, dist(p1, p3) / totalRadius);
  // Take into account when circles are overlapping
  const d2 = d2Base * Math.min(1, d * 2 / (radius1 + radius2));

  // Length of the handles
  const r1 = radius1 * d2;
  const r2 = radius2 * d2;

  // Handle locations
  const h1 = getVector(p1, angle1 - HALF_PI, r1);
  const h2 = getVector(p2, angle2 + HALF_PI, r1);
  const h3 = getVector(p3, angle3 + HALF_PI, r2);
  const h4 = getVector(p4, angle4 - HALF_PI, r2);

  // Generate the connector path
  return metaballToPath(
    p1, p2, p3, p4,
    h1, h2, h3, h4,
    d > radius1,
    radius2,
  );
}

function metaballToPath(p1, p2, p3, p4, h1, h2, h3, h4, escaped, r) {
  return [
    'M', p1,
    'C', h1, h3, p3,
    'A', r, r, 0, escaped ? 1 : 0, 0, p4,
    'C', h4, h2, p2,
  ].join(' ');
}
```
