---
layout: post
title: Custom Easing with Sass
citation: patakk.tumblr.com
citation-link: http://patakk.tumblr.com/post/88602945835/heres-a-simple-function-you-can-use-for-easing
bgImage: /img/spring.gif
bgPosition: center 40%
---

[patakk](http://patakk.tumblr.com/) is an insanely talented GIF artist and on his tumblr blog he shared this simple yet amazing easing function:

The `time` variable goes from `0` to `1` and `g` adjusts the amount of easing.

{% highlight js %}
x = 300 * ease(time, g);

float ease(float p, float g){
  if (p < 0.5)
    return 0.5 * pow(2*p, g);
  else
    return 1 - 0.5 * pow(2*(1 - p), g);
}
{% endhighlight %}

3D animation has this concept of *[baking an animation](http://softimage.wiki.softimage.com/xsidocs/ani_proc_PlottingAnimation.htm)*. The same idea can be extended to *baking an easing effect* with Sass. The `easingGenerator` generates keyframe animations using this custom easing function.

{% highlight scss %}
@function ease($time, $g) {
  @if $time < 50 {
    @return 0.5 * pow(2 * $time/100, $g);
  } @else {
    @return 1 - (0.5 * pow(2 * (1 - $time/100), $g));
  }
}

@mixin easingGenerator($g) {
  @for $i from 0 through 100 {
    // calculate
    $percent: 0% + $i;
    $left: 0% + 100 * ease($i, $g);
    // set position
    #{$percent} { left: $left; }
  }
}
{% endhighlight %}

<p data-height="500" data-theme-id="7569" data-slug-hash="Cihkr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/winkerVSbecks/pen/Cihkr/'>Sass Mixin for Generating a Custom Easing Function</a> by Varun Vachhar (<a href='http://codepen.io/winkerVSbecks'>@winkerVSbecks</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

{% include writing/citation.html %}
