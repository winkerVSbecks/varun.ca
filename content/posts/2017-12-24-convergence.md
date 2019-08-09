---
layout: post
title: "JavaScript Frameworks: The Year of Convergence"
classes: bg-animate hover-bg-hot-pink
style: dark
---

If 2016 was the year of JavaScript fatigue then 2017 was most certainly the year of convergence. Most JavaScript frameworks have converged towards using similar tooling and concepts.

In this post, I am going to focus on some of the similarities between JavaScript frameworks. I want to show how knowledge of one framework transfers quite well to the others.

## Component Based Architecture

If there is one thing _everyone_ can agree on, it is that components are awesome. Designers love them because it allows them to create a shared language with developers and roll out design systems. Developers love them because it means they can focus on building small, self-contained and reusable features, then composing them to build larger views and the entire application itself. Product managers love them because they enable sharing code across multiple apps.

React popularized the component model for modern front-end development. In the 1.x days, some people in the Angular community started writing [Component-Based Directives](https://www.airpair.com/angularjs/posts/component-based-angularjs-directives#1-component-based-directives-in-angularjs). Then Angular 1.6 introduced `angular.component()` which made it easier to write those directive components. In 2016, with Angular 2.0 we got real components. Meanwhile, Vue was launched with components as one of its core features.

Below are examples of how you would write components with all three frameworks. You’ll notice a lot of similarities.

```js
// React Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

```js
// Angular Component
@Component({
  selector: 'greet',
  template: '<h1>Hello, {{ name }}</h1>',
})
export class WelcomeComponent {
  @Input() name: string;
}
```

```js
// Vue Component
Vue.component('greet', {
  props: ['name'],
  template: '<h1>Hello, {{ name }}</h1>',
});
```

There are variations available. For example, in React you can write components as functions. Angular and Vue allow you to reference templates defined in HTML files. Vue also allows you to write single-file components where HTML, CSS and JS for your component are all in one `.vue` file (more on that later). However, the core idea of what constitutes a component is the same in all three frameworks.

## Defining the View

The _view_ part of a component is what we want the framework to render when we use the component somewhere in our application. With Angular we define the _view_ as templates. These are HTML partials that use a mustache/handlebars-like syntax to bind to data — two curly braces wrapping a [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions). These templates also support several built-in components and directives, which allow you to define template logic such as conditional and list rendering.

React uses [JSX](https://facebook.github.io/jsx/), which allows you to define views in JavaScript using XML-like syntax. Bindings work pretty much like templates — single curly brace wrapping an expression. The biggest difference is how we add control statements and template logic. With templates you need to use built-in components and directives; with JSX, however, you just use JavaScript features such as `if` statements, ternary operator or `Array.map`. There is a bit of a learning curve to it, but you’ll be surprised by how much of your knowledge of working with templates translates to JSX.

Vue supports both! Templates in Vue were inspired by Angular. They use pretty much the same components and directives for template logic and the double curly brace syntax for bindings. You can also use JSX with Vue by defining a [render function](https://vuejs.org/v2/guide/render-function.html#Basics), instead of using the template property.

One of the major benefits of JSX is that it allows you to write all the code for a component in one file. That is the view, the JavaScript logic and even styles. Vue supports [Single File Components](https://vuejs.org/v2/guide/single-file-components.html), which allow you to write all the component code in one file. However, you are not limited to using just JavaScript. You can write your view in an HTML template or Pug or just use a render function. Styles can be written in CSS or SCSS or PostCSS, etc.

```html
<template>
  <h1 class="f1">Hello, {{ name }}</h1>
</template>

<script>
export default {
  props: { name: String }
};
</script>

<style>
  .f1 { font-size: 3rem; }
</style>
```

## Styling & Encapsulation

Styling of components generally comes in three different flavours:

* **Classic:** all your CSS is available globally and the components can use any styles.
* **Encapsulated:** each component has styles scoped to itself. It doesn’t use any global styles and none of the component styles leak out.
* **Mix:** your components rely mostly on scoped styles, but there are also some globally defined defaults that cascade down.

Do you prefer one approach over the others? Good news! All three frameworks support all three approaches. Global CSS just works out of the box. You can use the `class` attribute in templates or the `className` prop in JSX.

Angular also has built-in support for scoping. You can choose from one of three [encapsulation](https://angular.io/api/core/ViewEncapsulation) strategies and styles can be run through pre-processors, such as Sass or PostCSS, before loading them in a component.

```js
// Angular Component
@Component({
  selector: 'greet',
  template: '<h1 class="f1">Hello, {{ name }}</h1>',
  styleUrls: ['./welcome.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class WelcomeComponent {
  @Input() name: string;
}
```

Vue supports scoping through the single file component syntax. Just add the `scoped` attribute to the `style` tag. And similar to Angular, you can set up your build tool to pre-process the CSS before loading it.

```html
<template>
  <h1 class="f1">Hello, {{ name }}</h1>
</template>

<script>
export default {
  props: { name: String }
};
</script>

<style scoped>
  .f1 { font-size: 3rem; }
</style>
```

[CSS Modules](https://github.com/css-modules/css-modules) is another popular system for modularizing and scoping CSS. To use CSS Modules with Vue you can add the `module` attribute to the `style` tag.

```html
<template>
  <h1 :class="$style.f1">
    {% raw %}Hello, {{ name }}{% endraw %}
  </h1>
</template>

<style module>
  .f1 { font-size: 3rem; }
</style>
```

React does not have built in scoping support. However, the React community has many vibrant and innovative solutions for writing component scoped CSS. You can of course, use CSS Modules.

```js
import React from 'react';
import styles from './welcome.css';

class Welcome extends React.Component {
  render() {
    return <h1 className={styles.f1}>Hello, {this.props.name}</h1>;
  }
}
```

More often though, scoped CSS in React is achieved using CSS-in-JS based solutions such as [styled-components](https://www.styled-components.com), [glamorous](https://glamorous.rocks/), [emotion](https://emotion.sh/), and [many more](https://github.com/MicheleBertoli/css-in-js).

If you prefer the CSS-in-JS approach, some popular CSS-in-JS libraries support Vue too, e.g. [styled-components/vue-styled-components](https://github.com/styled-components/vue-styled-components) and [emotion — vue styled](https://github.com/emotion-js/emotion/blob/d5d34c0df2be5bae19d21da4e950b03fae03a1b7/README.md#vue-styled).

## Passing Data Into a Component

Each instance of a component is isolated. It can, however, receive data from its parent. In React and Vue this concept is known as props. In Angular this is referred to as inputs.

Props and inputs are read-only data that can be used by a component in its view or further pass down to its children. They flow unidirectionally down the component hierarchy. When these props or inputs update, they trigger the components that are receiving them to re-render.

The child component must explicitly declare the props or inputs it expects to receive. We can also specify the types for these props. The [PropTypes](https://www.npmjs.com/package/prop-types) library is one way of specifying prop types in React. For example:

```js
MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  requiredFunc: PropTypes.func.isRequired,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  customProp: function(props, propName, componentName) {...},
};
```

Vue provides similar support for prop validation.

```js
Vue.component('example', {
  props: {
    propA: Number,
    propB: [String, Number],
    propC: { type: String, required: true },
    propD: {
      validator: function (value) { ... }
    },
  },
});
```

Angular 2+ was created to use with TypeScript primarily. Therefore, it relies on the TypeScript for validating input types. You just need to annotate the input properties with a type.

```js
@Component({ ... })
export class WelcomeComponent {
  @Input() inputA: string;
  @Input() inputB: number;
  @Input() inputC: MyModelClass;
  @Input() inputC: MyFunctionInterface;
}
```

This idea of using static type checkers is quite powerful. They generally improve developer workflow by identifying certain issues even before the code is executed. This can be extremely beneficial for larger apps. Therefore, in early 2017 `PropTypes` was moved out of React core. The current official [recommendation](https://reactjs.org/docs/static-type-checking.html#flow) (for larger apps) is to use Flow or TypeScript.

TypeScript support for Vue is not as robust as that for Angular and React, but it is improving fast. Microsoft maintains a [TypeScript-Starter](https://github.com/Microsoft/TypeScript-Vue-Starter) and there is even an [official library](https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components) that allows you to use class style syntax to write a Vue component.

```js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: {% raw %}'<h1>Hello, {{ name }}</h1>',{% endraw %}
})
export default class MyComponent extends Vue {
  name: string;
}
```

## Events

All three frameworks allow you to specify event handlers on components. This allows us to listen to DOM events and execute some JavaScript when they are triggered.

```js
// React
<button onClick={this.handleClick}>Action</button>
```

```html
<!-- Angular -->
<button (click)="handleClick($event)">Action</button>
```

```html
<!-- Vue -->
<button @click="handleClick($event)">Action</button>
```

Props and Inputs allow data to flow down into a component, but we quite often want to propagate changes back up the component hierarchy. Angular and Vue allow us to do that by emitting custom events. Components can then bind onto these custom events.

With Vue we can trigger a custom event by using `$emit`.

```js
Vue.component('counter', {
  template: `
    <button @click="increment">
      {% raw %}{{ count }}{% endraw %}
    </button>`,
  data: function() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count += 1;
      this.$emit('increment');
    },
  },
});
```

With Angular custom events are instances of `EventEmitter` annotated with an `@Output` decorator. To trigger a custom event we call the event emitter’s emit method.

```js
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="increment()">
      {% raw %}{{ count }}{% endraw %}
    </button>`,
})
class CounterComponent {
  private count: number = 0;
  @Output() increment = new EventEmitter<number>();

  increment() {
    this.count += 1;
    this.increment.emit('increment');
  }
}
```

React takes a slightly different approach here. Instead of bubbling up custom events we can pass handlers down as props and call those handlers at the appropriate time.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        this.props.handleIncrement(this.state.count);
      },
    );
  }

  render() {
    return <button onClick={() => this.increment()}>{this.state.count}</button>;
  }
}
```

## Conclusion

I’ve focused primarily on the idea of components here but, similarities extend beyond that. Bundling, state management, reactivity and CLIs are other concepts where frameworks have learnt from each other and ended up picking not too dissimilar solutions. There is even [hope](https://github.com/TheLarkInn/unity-component-specification) that someday we will be able to share components across frameworks.

The past few years have been a bit stressful because there seemed to be a new framework to learn every month. People were worried about investing time in the “wrong” framework. Now that things have converged, I am excited to say that investment in any one of those frameworks will pay off. Your knowledge and learning from one framework applies just about everywhere.

_This post was first published on [blog.rangle.io](http://blog.rangle.io/javascript-frameworks-the-year-of-convergence)_
