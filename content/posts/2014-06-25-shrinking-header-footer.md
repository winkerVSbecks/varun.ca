---
layout: post
title: Two Level Shrinking Header and Footer with Ionic Framework
bgImage: /img/springytriangles.gif
bgSize: 300%
style: dark
---

<p data-height="600" data-theme-id="7569" data-slug-hash="ptvqJ" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/winkerVSbecks/pen/ptvqJ/'>Shrinking header and footer</a> by Varun Vachhar (<a href='http://codepen.io/winkerVSbecks'>@winkerVSbecks</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

<br/>

The  [Ionic Framework](http://ionicframework.com/) is an open source front-end framework for developing hybrid mobile apps with Cordova and AngularJS. I'm a big fan and use it a lot in my work at  [rangle.io](http://rangle.io)! We are a full-stack web and mobile app development consultancy.



One of the apps we are currently developing has an infinite stream similar to Facebook. Therefore, we decided to mimic the iOS shrinking header UI, to give the user more screen space for actual content. Ionic has had a  [demo](http://codepen.io/ionic/pen/hIzFp) for this for quite some time. However, the shrinking behaviour is limited to the top of the scroll view.

We wanted to take this one step further and allow the shrinking and expansion to happen at any point during the scroll view. Also, we have a two level header: main header and a secondary toolbar.

Since, the animation can occur at any point we have to keep a track of the scroll direction. This is done by calculating the delta:

{% highlight js %}
delta = e.detail.scrollTop - prev;
{% endhighlight %}

If delta is greater than zero then the user is scrolling up and vice versa:

{% highlight js %}
dir = delta >= 0 ? 1 : -1;
{% endhighlight %}

The shrink amount is calculated based on the scroll position:

{% highlight js %}
// If Shrinking
shrinkAmt = headerHeight + subHeaderHeight - ( (starty + headerHeight + subHeaderHeight) - e.detail.scrollTop) );

// If Expanding
shrinkAmt = prevShrinkAmt - (starty - e.detail.scrollTop);
{% endhighlight %}

This works great until the user scrolls to the top/bottom edge and the view has bounce. The bounce causes all kinds of weird glitches. To prevent these from happening we need to add max and min limits:

{% highlight js %}
// If Shrinking
shrinkAmt = headerHeight + subHeaderHeight - Math.max(0, (starty + headerHeight + subHeaderHeight) - e.detail.scrollTop);

// If Expanding
shrinkAmt = prevShrinkAmt - Math.min(threshold, (starty - e.detail.scrollTop));
{% endhighlight %}

The final step is to apply the actual CSS transforms from within the `ionic.requestAnimationFrame` function. This is also where we check to see if the shrink amount is greater than the height of the `sub-header` and only apply the transforms to the `main-header` if it is.

The `ionic.requestAnimationFrame` calls the `window.requestAnimationFrame` or a polyfill if it's not available. This helps optimize the animation updates making it much more smoother:

<blockquote>
  <p>The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.</p>

  <p>This will request that your animation function be called before the browser performs the next repaint. The number of callbacks is usually 60 times per second.</p>

  <cite>&mdash; <a href="https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame">Mozilla Developer Network</a></cite>
</blockquote>
