---
layout: post
title: Flattening Deep Hierarchies of Components
bgImage: /img/splash.gif
bgPosition: center 75%
bgSize: 400px 300px
bgColor: '#231F20'
style: dark
---

Components are an awesome tool for building interfaces. They allow you to break down the UI into distinct reusable elements. These can then be composed to build complex applications in a more sustainable way.

Each component has its own well defined public API. In React this is defined by the component props. Where as, in Angular 2 it's inputs and outputs. The choice of this API can have a drastic impact on your application. Consider the following example of a `Card` component.

![Basic card with a title](/img/card-with-title.png)

It has one job: display an image with a title. You might be tempted to build it out such that it abstracts away all the logic for its constituent parts: image, title, etc.

```
<Card img={ 'img/rotary-phone.png' }
  title={ 'Choosing the Right Antique Rotary Phone for You.' }
  contentPaddingX={ 2 }
  contentPaddingY={ 2 } />
```

As the complexity of your app grows you might introduce other scenarios for this `Card` component. The card should now be able to display a caption or an icon with a click action?



![Card with other requirements such as caption and icon](/img/cards-with-other-requirements.png)

```
// Card with title and caption
<Card img={ 'img/rotary-phone.png' }
      title={ 'Choosing the Right Antique Rotary Phone for You.' }
      caption={ '21 hours ago' }
      contentPaddingX={ 2 }
      contentPaddingY={ 2 } />

// Card with title, caption and icon
<Card img={ 'img/rotary-phone.png' }
      title={ 'Choosing the Right Antique Rotary Phone for You.' }
      caption={ '21 hours ago' }
      contentPaddingX={ 2 }
      contentPaddingY={ 2 }
      icon={ 'add-to-cart' }
      iconAction={ addToCart } />
```

You now have to add more logic to this component. It has to account for all these permutations and combinations of its constituent parts. You can probably see the issue here. What started as a simple component has bloated into something that is hard to maintain, hard to test and not at all flexible.

We can write better components by adopting an approach similar to function composition.

## Function Composition

Function composition is the act of combining simple functions to build more complicated ones.

```js
f(g(h(x)) = compose(f, g, h)(x);
```

Consider the following example:

```js
function complexFunction(x) {
  const a = 2 * x;
  const b = a + 5;
  const c = b / 2;
  const d = c * 12;
  return d;
}
```

Here the `complexFunction` is very similar to what we attempted with the `Card` component. This one function is trying to do too much. We can achieve the same behaviour using `compose` instead:

```js
function add(r, x)      { return x + r; }
function multiply(r, x) { return x * r; }
function divideBy(r, x) { return x / r; }

const complexFunction = compose(
  multiply(12),
  divideBy(2),
  compose(add(5), multiply(2))
);
```

Here we have broken out the various math operations into pure functions. We can now `compose` these functions to create the `complexFunction` or any other type of combination.

Instead of having one massive function which accounts for various scenarios we have created a toolbox of smaller single responsibility functions. Testing this is much easier since you don't have to account for the different scenarios.


## Applying Function Composition to Components

Let us apply this same principle to the `Card` component. We start by breaking out its sub-components:

- `Media`: a generic image component
- `Body`: body container for the card
- `Title`: the card title
- `Caption`: card caption
- `Icon`: a generic icon component

![example of a basic card](/img/card-example.png)

Now, instead of passing all data into the `Card` component we instead use `children` (React) or `ng-content` (known as projection in Angular 2, and transclusion in Angular 1). The card on the right will now look something like this:

```
// Card with title, caption and icon
<Card>
  <Media source={ 'img/rotary-phone.png' } />

  <Body paddingX={ 2 } paddingY={ 2 }>
    <Title>
      Choosing the Right Antique Rotary Phone for You.
    </Title>

    <Caption>
      { '21 hours ago' }
      <Icon name="add-to-cart"
            handleClick={ addToCart }
      />
    </Caption>
  </Body>
</Card>
```

This is much better. Let's observe some benefits:

- The `Card` is now agnostic to what content goes inside it. This flattens our component tree. There is less data that needs to be passed through the various levels of the component hierarchy.

- Each component has one responsibility which makes testing trivial.

- We gain a lot more flexibility. Developers can compose different types of cards or even create new ones since they have full control over the content of the card.


## Highly Reusable Components

We can improve this further. You might notice that `Body`, `Title` and `Caption` all seem like specialized components. They are somewhat tied to the `Card` component. We can instead replace them with a few generic components:

- `Block`: a generic box with visual styling
- `Heading`: a heading component with size based on a font scale
- `Button`: a generic button component with various styles

Notice the `muted` property for `Heading`. Instead of creating a `Caption` component we are reusing the `Heading` component and simply passing in a boolean with applies the muted colours.

```
// Card with title, caption and icon
<Card>
  <Media source={ 'img/rotary-phone.png' } />

  <Block paddingX={ 2 } paddingY={ 2 }>

    <Heading size={ 2 }>
      Choosing the Right Antique Rotary Phone for You.
    </Heading>

    <Block>
      <Heading size={ 3 } muted>21 hours ago</Heading>
      <Button style="clear"
              handleClick={ addToCart }>
        <Icon name="add-to-cart" />
      </Button>
    </Block>

  </Block>
</Card>
```

And here is the final version in Angular 2:

```
<!-- Card with title, caption and icon -->
<Card>
  <Media  [source]="'img/rotary-phone.png'"></Media>

  <Block paddingX="2" paddingY="2">

    <Heading size="2">
      Choosing the Right Antique Rotary Phone for You.
    </Heading>

    <Block>
      <Heading size="3" muted>21 hours ago</Heading>
      <Button style="clear"
              (handleClick)="addToCart($event)">
        <Icon name="add-to-cart" />
      </Button>
    </Block>

  </Block>
</Card>
```
