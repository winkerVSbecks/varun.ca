---
layout: post
title: Vector Field
demo: http://winkervsbecks.github.io/material-vector-field
source: https://github.com/winkerVSbecks/material-vector-field
bgImage: /img/vector-field.gif
style: dark
---

<p data-height="268" data-theme-id="7569" data-slug-hash="GCulK" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/winkerVSbecks/pen/GCulK/'>Vector Field</a> by Varun Vachhar (<a href='http://codepen.io/winkerVSbecks'>@winkerVSbecks</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

{% include writing/demo-source.html %}

While going through the Google  [Material Design handbook](https://static.googleusercontent.com/media/www.google.com/en//design/material-design.pdf) the illustration in the *Users Initiate Change* caught my eye. Around the same time  [p5js](http://p5js.org/reference/) was announced, so I figured it would be fun replicating this with Canvas.



My first attempt was to build a grid of vectors and then rotate them towards the mouse location. The rotation would be scaled down based on the distance from the mouse location, i.e: `rotation = angle * scale(0, 1, 0, width-of-the-canvas)`. This gave an interesting result but, it wasn't quite the same spiral effect.

The next step was to look into how vector fields work. With a bit of help from  [Paul's Online Math Notes](http://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields.aspx),  [Wolfram Alpha](http://www.wolframalpha.com/share/clip?f=d41d8cd98f00b204e9800998ecf8427e8rdj53cf6e) and  [math.stackexchange.com](http://math.stackexchange.com/questions/896356/equation-for-a-vector-field-spiraling-to-a-point) I discovered that: `f(x,y) =  [(y−5)-(x−5), -(x−5)-(y−5)]` produces the exact spiralling effect.

![](/img/vector-field.png)

Building this with p5js was fairly straightforward. Processing has an awesome drawing API and p5js brings it to the web. If you are interested in getting started with p5js I have built a  [seed project](https://github.com/winkerVSbecks/p5js-seed). There are some great  [tutorials](http://p5js.org/learn/) on the project site and Daniel Shiffman has ported his amazing  [The Nature of Code Examples](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js) to p5js too.

{% highlight js %}
for (var i = locs.length - 1; i >= 0; i--) {
  var h = calcVec( locs[i].x - mouseX, locs[i].y - mouseY);
  line(
    locs[i].x,
    locs[i].y,
    locs[i].x + 15*cos(h.heading()),
    locs[i].y + 15*sin(h.heading())
  );
}
{% endhighlight %}
