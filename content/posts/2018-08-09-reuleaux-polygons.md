---
layout: post
title: "Reuleaux Polygons"
bgImage: /img/reuleaux-polygons.gif
bgPosition: 75% 50%
bgSize: 400px 300px
bgColor: '#A1D1FB'
style: light
---

{% include diagrams/reuleaux-polygons.html %}

I have always been fascinated by the Reuleaux triangle. It is a shape formed by the intersection of three circles. Sort of like a ballooned up equilateral triangle.

Reuleaux polygons are a generalization of the Reuleaux triangle. They are a curvilinear polygons i.e., made up of circular arcs and have an odd number of sides.

## Construction

The Reuleaux triangle is constructed by drawing circles from each vertex of an equilateral triangle. Where the radius of these circles equals the side length of the triangle.

<p data-height="650" data-theme-id="26435" data-slug-hash="vrLmPq" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Reuleaux Polygon Construction" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/vrLmPq/">Reuleaux Polygon Construction</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Reuleaux polygons are constructed using a similar process. Group three consecutive vertices to form a triangle. Then draw a circle from each vertex. The radius of this circle is the distance between the first and the third vertex. Then move onto the next three vertices and so on. Try changing the **side count** slider, in the demo above, to see this visualized.

### SVG Arc Command

To draw these circular arcs in SVG we can use the arc command.

```
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
```

Where `rx` is the x-radius of the ellipse and `ry` is the y-radius. Keep `rx` equal to `ry` to create circular arcs.

Given these radii, there are two ellipses that can connect any two points. On those ellipses there are two possible paths to connect the points. In total, there are four possible arcs connecting any two points.

The `large-arc-flag` allows you to pick an arc greater than or less than 180 degrees. The `sweep-flag` controls if the arc should move clockwise or anti-clockwise.

<p data-height="600" data-theme-id="26435" data-slug-hash="QxyKVX" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="SVG Arc Command" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/QxyKVX/">SVG Arc Command</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Reuleaux Polygons With SVG

The first step is to get the location of each vertex of the polygon. In a previous blog post, I [explained](/polar-coords/#polygon-generator) how you can use polar coordinates to generate the vertices of a regular polygon. You can follow the same process to get the vertices of a Reuleaux polygon. The only difference is that instead of connecting those vertices with a line you need to connect them with arcs.

<ol>
  <li>
    Compute the vertices of the polygon using the <a href="/polar-coords/#polygon-generator">polygon generator</a>.
    <pre class="mt3"><code>const pts = polygon([cx, cy], sideCount, radius);</code></pre>
  </li>
  <li>
    The radius of the arcs will be the distance between the first and the third vertex.
    <pre class="mt3"><code>const r = dist(pts[0], pts[2]);</code></pre>
  </li>
  <li>
    Draw the path. For Reuleaux polygons we need the arc to be less than 180 degrees and the <code>sweep-flag</code> direction should match the direction you define your points in (clockwise or anti-clockwise).

    <div class="language-js highlighter-rouge">
      <pre class="highlight"><code><span class="kd">function</span> <span class="nx">reuleauxPolygonConstruction</span><span class="p">([</span><span class="nx">cx</span><span class="p">,</span> <span class="nx">cy</span><span class="p">],</span> <span class="nx">radius</span><span class="p">,</span> <span class="nx">sideCount</span><span class="p">)</span> <span class="p">{</span>
  <span class="kr">const</span> <span class="nx">pts</span> <span class="o">=</span> <span class="nx">polygon</span><span class="p">([</span><span class="nx">cx</span><span class="p">,</span> <span class="nx">cy</span><span class="p">],</span> <span class="nx">sideCount</span><span class="p">,</span> <span class="nx">radius</span><span class="p">);</span>
  <span class="kr">const</span> <span class="nx">r</span> <span class="o">=</span> <span class="nx">dist</span><span class="p">(</span><span class="nx">pts</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">pts</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span>
  <span class="kr">const</span> <span class="p">[</span><span class="nx">head</span><span class="p">,</span> <span class="p">...</span><span class="nx">tail</span><span class="p">]</span> <span class="o">=</span> <span class="nx">pts</span><span class="p">;</span>

  <span class="k">return</span> <span class="p">[</span>
    <span class="c1">// move to the first vertex</span>
    <span class="s1">'M'</span><span class="p">,</span> <span class="nx">head</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">head</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span>
    <span class="c1">// Connect adjacent vertices with an arc</span>
    <span class="p">...</span><span class="nx">tail</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">p</span> <span class="o">=&gt;</span> <span class="err">`</span><span class="nx">A</span> <span class="nx">$</span><span class="p">{</span><span class="nx">r</span><span class="p">}</span> <span class="nx">$</span><span class="p">{</span><span class="nx">r</span><span class="p">}</span> <span class="mi">0</span> <span class="mi">0</span> <span class="mi">1</span> <span class="nx">$</span><span class="p">{</span><span class="nx">p</span><span class="p">[</span><span class="mi">0</span><span class="p">]}</span> <span class="nx">$</span><span class="p">{</span><span class="nx">p</span><span class="p">[</span><span class="mi">1</span><span class="p">]}</span><span class="err">`</span><span class="p">),</span>
    <span class="c1">// Connect the last and the first vertices with an arc</span>
    <span class="err">`</span><span class="nx">A</span> <span class="nx">$</span><span class="p">{</span><span class="nx">r</span><span class="p">}</span> <span class="nx">$</span><span class="p">{</span><span class="nx">r</span><span class="p">}</span> <span class="mi">0</span> <span class="mi">0</span> <span class="mi">1</span> <span class="nx">$</span><span class="p">{</span><span class="nx">head</span><span class="p">[</span><span class="mi">0</span><span class="p">]}</span> <span class="nx">$</span><span class="p">{</span><span class="nx">head</span><span class="p">[</span><span class="mi">1</span><span class="p">]}</span><span class="err">`</span><span class="p">,</span>
    <span class="c1">// Close the shape</span>
    <span class="s1">'Z'</span><span class="p">,</span>
  <span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">' '</span><span class="p">);</span>
<span class="p">}</span>
</code></pre>
    </div>
  </li>
</ol>


## Curve Of Constant Width

Although it is possible to construct curvilinear polygons with even number of sides. Reuleaux polygons always have an odd number of sides because they are constant-width shapes. Therefore, every vertex must be able to associate an opposite arc. This is possible only if we have an odd number of arcs.

> A curve of constant width is a convex planar shape whose width (defined as the perpendicular distance between two distinct parallel lines each having at least one point in common with the shape's boundary but none with the shape's interior) is the same regardless of the orientation of the curve.
>
> — <cite><a href="https://en.wikipedia.org/wiki/Curve_of_constant_width">wikipedia</a></cite>

Any curve of constant width can rotate within a square while staying within it at all times. Notice, how as it rotates, its axis does not stay fixed at a single point. It follows a curve around the center of the square.

<p data-height="420" data-theme-id="26435" data-slug-hash="wXMbzb" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Reuleaux Triangle Rotating in a Square" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/wXMbzb/">Reuleaux Triangle Rotating in a Square</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This property of being able to rotate within a square is leveraged to create [bits that drill a nearly square hole](https://youtu.be/L5AzbDJ7KYI). The drill bit itself is a Reuleaux triangle and is mounted in a chuck that allows for the bit to rotate without having a fixed centre of rotation.

## Morphing
Lastly, just for fun, here are some polygons morphing between their regular form and Reuleaux form using [flubber](https://github.com/veltman/flubber).

<p data-height="400" data-theme-id="26435" data-slug-hash="oyLOvr" data-default-tab="result" data-user="winkerVSbecks" data-embed-version="2" data-pen-title="Morphing Reuleaux Polygons" class="codepen">See the Pen <a href="https://codepen.io/winkerVSbecks/pen/oyLOvr/">Morphing Reuleaux Polygons</a> by Varun Vachhar (<a href="https://codepen.io/winkerVSbecks">@winkerVSbecks</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### References

* [Wikiwand](http://www.wikiwand.com/en/Reuleaux_triangle)
* [Wolfram MathWorld](http://mathworld.wolfram.com/ReuleauxTriangle.html)
* [Whistler Alley Mathematics](http://whistleralley.com/reuleaux/reuleaux.htm)
