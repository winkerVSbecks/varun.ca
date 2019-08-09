---
layout: post
title: Ellsworth Kelly Animated
source: https://github.com/winkerVSbecks/ellsworthKellyAnimated
demo: http://winkervsbecks.github.io/ellsworthKellyAnimated
bgImage: /img/orange.gif
bgPosition: center 20%
---

![](/img/orange.gif)

{% include writing/demo-source.html %}

In February 2014 Google launched it's  [DevArt](https://devart.withgoogle.com/#/about) project in partnership with  [Barbican](https://www.barbican.org.uk/). In Google's words:

> DevArt is a celebration of art made with code by artists that push the possibilities of creativity - where technology is their canvas and code is their raw material.

This was my entry and it ended up being  [shortlisted](https://devart.withgoogle.com/#/project/18198727) for the finals.

A couple of years ago I made a  [Processing](http://processing.org/) sketch with the logic described in the image below. Shortly thereafter I came across Ellsworth Kelly's  [Black Relief II](http://www.matthewmarks.com/new-york/exhibitions/2011-02-12_ellsworth-kelly/works-in-exhibition/#/images/5/). It seemed that, unknowingly, I had created an animated version of his painting.

![](/img/polygon.png)

This led me to explore more of his work. His paintings carry an immense amount of potential energy in my opinion. It's as if they are kinetic sculptures frozen in time.

This project is an attempt to animate some of his pieces using web-based technologies.

Most of the works are made using  [Box2dWeb](https://code.google.com/p/box2dweb/). A simple mouse click allows you to animate them.

In the first piece, you can grab the interface of the blue blob and the surrounding green fill and drag it around. Press `?` to see the underlying skeleton.

The project is also available as a Google Chrome App:  [Ellsworth Kelly Animated](https://chrome.google.com/webstore/detail/ellsworth-kelly-animated/mhgohnogimfoohafafblgpgonabjhlal)

## The Code
I wanted to play around with the idea of springy membranes. This was particularly inspired by the  [Red Curve Relief](http://1.bp.blogspot.com/-h8vIARrJHTI/TVgr1IHdJbI/AAAAAAAADZM/eF_8iRYRX08/s1600/43b6c106.jpg) artwork by Ellsworth Kelly.

To do so, I had two options:

- Use easing functions to replicate springy movements
- Use a physics engine to create a skeleton and add organic movements

I see these shapes as animated creatures, so I chose the latter. The skeleton is made up of particles and spring-links.

![](/img/skeleton.png)

The bottom three particles are anchors. The remaining are dynamic particles connected to the anchors and adjacent particles using springs.

An example of how the impulse is provided to the particles in order to animate the shapes:

{% highlight js %}
SpringyTriangle.prototype.impulse = function () {
	var ping = Math.random(-1,1);
	var pinger = 1;
	if (ping > 0) pinger = 1;
	if (ping <= 0) pinger = -1;
	var appliedForce = new b2Vec2(this.force.x*pinger / scale, this.force.y / (2*scale) );
	this.imp = this.a_imp.getPosition();
	this.a_imp.body.ApplyImpulse(appliedForce, this.imp);
};
{% endhighlight %}

The other pieces used similar ideas of node based skeleton with an overlaid  shape. I explain the process behind each piece in more detail on the  [project site](https://devart.withgoogle.com/#/project/18198727).

## Early Prototypes Made with Processing

![](/img/springywavybox.gif)

![](/img/springytriangles.gif)

![](/img/manypolygons.gif)
