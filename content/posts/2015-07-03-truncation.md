---
layout: post
title: Truncation
demo: http://winkervsbecks.github.io/truncation
source: https://github.com/winkerVSbecks/truncation
bgImage: /img/truncation.gif
bgPosition: center 60%
style: dark
---

![](/img/truncation.gif)

{% include writing/demo-source.html %}

I recently discovered the idea of truncation. It is a fascinating concept. You rip apart a vertex to create a new facet and in turn more complex geometry. This pen by Ana Tudor shows the truncation of a tetrahedron:



<p data-height="400" data-theme-id="7569" data-slug-hash="ogeQNm" data-default-tab="result" data-user="thebabydino" class='codepen'></p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You start with a simple tetrahedron. As you execute the truncation you can create some fairly complex shapes. So, what exactly is happening here? Let us break this down step by step:

1. Each vertex is connected to some edges. In the case of a tetrahedron each vertex is connected to 3 edges.
2. We pick one vertex called **A**.
3. We start by splitting **A** three times since it is connected to 3 edges.
4. The split vertices are called: **A1**, **A2** &amp; **A3**.
5. They are connected to edges: **L1**, **L2** &amp; **L3**.
6. To execute the truncation we simply move **A1** along **L1**. Towards the mid-point of **L1**.
7. We do the same for **A2** and **A3**.

A fairly simple algorithm that can be generalise for the entire shape/solid. You can even generalize it for a set of shapes, such as 2D polygons. Which is exactly what I did for my  [demo](http://winkervsbecks.github.io/truncation).

I used React and SVG for this project too. A quick overview of the code:

1. Construct the polygon using polar coordinates &mdash; an array of points.
2. Calculate the mid-points of each side.
3. To split the vertices we create a new array with duplicates of each vertex (each vertex is only connected to 2 sides in this case).
4. Then we have to link each split vertex to a mid-point. For this we create another array where each item has two properties:
    - the split vertex
    - mid-point of the line it belongs to
5. Finally, use liner interpolation to execute the truncation.

The end result is react component that requires two properties: vertex count &amp; truncation amount.
