---
layout: post
title: Component based SVG Icon System
demo: https://react-icon.now.sh
source: https://github.com/winkerVSbecks/react-icon-system-demo
classes: bg-animate hover-bg-green
style: dark
---

![](/img/icons.png)

{% include writing/demo-source.html %}

Much has been written about [SVG Icon Systems](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) and why they are [amazing](http://jonibologna.com/svg-sprites-and-icon-systems-are-super/). In this post I want to share my workflow for creating a component based SVG icon system.

The focus here is on front-end JavaScript frameworks such as React, Angular, Vue.js, etc. These frameworks allow us to split the UI into discrete, reusable components. Which means we can create a generic icon component. And use the `type` property to render inline the appropriate icon.

```html
<!-- React -->
<Icon type="cloud-with-snow" className="f4 blue" />
<!-- Angular -->
<svg icon type="cloud-with-snow" class="f4 blue"></svg>
<!-- Vue.JS -->
<icon type="cloud-with-snow" class="f4 blue"></icon>
```


## Prepare SVG Files
Our starting point will be `.svg` files  – one per icon.  In most cases these will be generated using an app such as Illustrator or Sketch, although you can also obtain them from an icon pack, for example: [Material Design icons](https://github.com/google/material-design-icons), [iconmonstr](http://iconmonstr.com/), [SVG Icons](http://svgicons.sparkk.fr/), etc.

![folder full of SVG icon files](/img/folder-of-icons.png)

I like to start by running all the files through [GitHub - svg/svgo](https://github.com/svg/svgo) or [SVGOMG](https://jakearchibald.github.io/svgomg/). This not only optimizes the SVG but also strips out any editor artifacts and tries to reduce it to a single `<path>`.

Take a moment to visually check all your icon files. You might have to play with the SVGO settings, especially the precision setting, to ensure that the optimized version does not get distorted.

Next we are going to make a couple of modifications to all the `.svg` files.

1. Ensure that all the icons use `viewBox` and remove any `width` or `height` attributes. You can configure SVGO to do this for you automatically. This will [make it easier](https://youtu.be/af4ZQJ14yu8?t=309) to control the size of the icon.

2. Set the `fill` and `stroke` (or whichever of the two you are using) to  `currentColor`. This sets the icon colour to be the same as the surrounding text. We can then control this colour by setting the `color` property on the `icon` element.

At this point the SVG files should look something like this:

```html
<svg viewBox="0 0 20 20">
  <path fill="currentColor" d="..."/>
</svg>
```


## Generate the Sprite Sheet
One of the more popular techniques for implementing an icon system is to use `<symbol>` and `<use>` elements.

<blockquote class="mv5">
  <p>An improvement is to use the <code>&lt;symbol&gt;</code> element in SVG instead of directly referencing shapes (or a <code>&lt;g&gt;</code>), because you can define the <code>viewBox</code> directly on the <code>&lt;symbol&gt;</code> and then not need one when you <code>&lt;use&gt;</code> it later in an <code>&lt;svg&gt;</code>.</p>

  <cite>
    &mdash; Chris Coyier (<a href="https://css-tricks.com/svg-symbol-good-choice-icons/">SVG symbol a Good Choice for Icons</a>)
	</cite>
</blockquote>

The `<symbol>` element allows us to define an SVG template. It is never displayed. Therefore, we can use it to create an icon sprite sheet.

```html
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="position:absolute;width:0;height:0;visibility:hidden">
  <defs>
    <symbol id="sun" viewBox="0 0 20 20">
      <path fill="currentColor" d="..."/>
    </symbol>
    <symbol id="moon" viewBox="0 0 20 20">
      <path fill="currentColor" d="..."/>
    </symbol>
  </defs>
</svg>
```

We can then render an icon using the `<use>` element.

```html
<svg>
  <use xlink:href="moon"/>
</svg>
```


If you are working with React or Angular or Vue.js then there is a good chance that your project was setup using [webpack](https://webpack.js.org/). We will use the [svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader) for webpack to convert a folder full of SVG files into an icon sprite sheet.

```js
const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
files.keys().forEach(files);
```

To do so:

1. We are using [`require.conext`](https://webpack.js.org/guides/dependency-management/#require-context) to generate a list of SVG files in the `assets` folder.

2. We then iterate over this list and load all the files using the `svg-sprite` loader.

3. The `svg-sprite` loader then generates the sprite sheet and injects it into DOM on run-time. Similar to how [style-loader](https://github.com/webpack/style-loader) works.

![Injected sprite sheet](/img/injected-sprite-sheet.jpg)

⚠️ Not using webpack? There are also [node](https://github.com/jkphl/svg-sprite), [gulp](https://github.com/jkphl/gulp-svg-sprite) or  [grunt](https://github.com/jkphl/grunt-svg-sprite) based tools that you can use as an alternative.


## Icon Component

Time to put everything together and build the icon component. Below is the React version of the component – the [Angular](https://github.com/winkerVSbecks/ng2-icon-system-demo/blob/master/src/app/icon/icon.component.ts) and [Vue.js](https://github.com/winkerVSbecks/vue-icon-system-demo/blob/master/src/components/Icon.vue) versions are quite similar. For the `<svg>` element I have set `display` to `inline-block` and `verticalAlign` to `middle`. I am using [tachyons](http://tachyons.io/) for styling here; however, you can set those styles using any technique.

```js
import React from 'react';
const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className }) => (
  <svg className={ `dib v-mid ${ className }` }
    width="1em" height="1em">
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);

export default Icon;
```

The `width` & `height` attributes are set to `1em`. If needed, adjust the values based on the aspect ratio of your icons. This will give us more flexibility to control the size of the icon.

The component itself has two props:
1. `type`: to pick which icon needs to be rendered.
2. `className`: to allow us to add more CSS classes to `<svg>` element.

The following will render a `cloud-with-snow` icon.

```html
<Icon type="cloud-with-snow" />
```

### Colour

We can control the colour of the icon by using the `font-color`. The following will render a green `rainbow` icon.

```html
<Icon type="rainbow" className="green" />
```

### Size

We have two options for setting size of the icon:

Using `font-size`: this works great when you are rendering the icon next to some kind of text. For example, in a paragraph or a button. Because we set the `width` & `height` attributes to `1em` the icon scales to match the font size. The following will render a blue `wind` icon that is [`1.25rem`](http://tachyons.io/docs/typography/scale) tall.

```html
<Icon type="wind" className="f4 blue" />
```

In some scenarios you might want to set the size of the icon manually instead of relying on `font-size`. SVG attributes have the lowest specificity so, you can always override them using CSS. The following will render a yellow `orbit` icon that is `4rem` wide and tall.

```html
<Icon type="orbit" className="w3 h3 yellow" />
```

## Usage with Base Element

The `<base>` element specifies the base URL to use for resolving all the relative URLs in an HTML document. On some browsers this prevents the icons from rendering 😞 We can fix this by using absolute values for `xlinkHref`.

```js
const baseUrl = window.location.href.replace(window.location.hash, '');
const xlinkHref =  baseUrl + `#${ type }`;
```

<cite>&mdash; [svgfixer.js](https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2)</cite>

I recently encountered this issue when working with the Angular router. It relies on the `<base>` element being set. However, you can provide `APP_BASE_HREF` instead and still use the router and the SVG sprite sheet.

🍞 Full source for [React](https://github.com/winkerVSbecks/react-icon-system-demo), [Vue.js](https://github.com/winkerVSbecks/vue-icon-system-demo) &  [Angular](https://github.com/winkerVSbecks/ng2-icon-system-demo) versions.
