---
layout: post
title: "What is a Design System?"
bgImage: /img/design-system.png
bgPosition: 100% 60%
bgSize: 499px 499px
bgColor: '#e3e5e6'
style: light
---

Defining what a Design System is and what it means for an organization can be tricky. In this post, we'll take the conversation of Design Systems past style guides and component libraries and get into breaking down silos between development and design.

> This post was co-authored with [Catherine Maritan](http://www.catherinemaritan.com) and originally published on the [Rangle.io Blog](https://rangle.io/blog/what-is-a-design-system).


## The Hand-Off Problem

From our experience, most organizations treat websites as a collection of pages. Pages provide a holistic view of the design problem — what content are we displaying, what is its purpose, how are we going to display this content and how is the user going to interact with it. This ideology is what drives the design and development process. Designers create designs for each page, followed by a hand-off to developers who then work with a product manager to divide the mock-ups into tickets for developers.

![A lot of chaos is introduced when changes are made during the design & development process](/img/catherine-process-image.png)

The page-based approach, while popular, poses a lot of challenges. Applications are highly dynamic. The interface has to account for many different application states and responsive variants. It's tedious to describe all of these states in static mock-ups. Also, as the development process begins the requirements often change. You discover new states which were previously not considered or there might be implementation challenges. Meanwhile, the designs continue to iterate. Due to the siloed nature of this approach, it makes it hard to resolve pressures coming from either side. Over time, the team starts to experience a number of symptoms:

### Developers Become Blocked By Designers
As requirements change and we uncover new design considerations, designers will inevitably need to update the pages that they had previously designed. This leads to two scenarios: the developers are constantly blocked having to wait for design iterations or the development team forges ahead without designs and delivers inconsistent or off-brand user experiences.

### Poor Product Decisions Are Made
Traditionally, designers have only been responsible for thinking about the holistic experience, leaving developers to break down that design into small, implementable chunks.

How the developer breaks-down that design has implications for how the design can be changed at a later date, or how new types of content can fit into what has already been built. A developer may or may not have the context necessary to make informed decisions about this structure, and the resulting product implementation may not be flexible enough for all business scenarios.

Similarly, if a designer is not aware of how a developer has implemented a design, they may make design decisions that cause huge headaches for developers, potentially causing a lot of unnecessary rework.

### The Design Of The Site Becomes Inconsistent
We've all seen those websites that include 36 different button styles, and asked ourselves "how could anyone let this happen?"

It can happen quicker than you may think. When we are creating and iterating on products one page at the time, it is likely that the same UI element will be designed and implemented more than once. Not only does this mean that there might be inconsistencies from the get-go, but it also increases the chances that an instance of a button is missed when updates are made in the future.

There is a lot of wasted time re-solving the same problems
Whenever there is a new request, a designer (often times) will open a new file and starts the design process from scratch. For all the time solving the holistic problem at-hand, there is also just as much time defining all the nitty-gritty design details. What does this dropdown look like on hover? How about this button? These are time-consuming tasks.

Now, these detailed-design nitty-gritty questions are important but aren't unique problems. Most likely, another designer on the team has already thought about it, or maybe it's something that has already been designed on another page. Once that dropdown hover state has been defined once, the designer shouldn't have to think about it or document it again.

### Maintenance Becomes A Nightmare
Documenting a product one page-at-a-time isn't exactly maintainable. This approach doesn't allow designers to easily revisit previous design decisions. Suddenly, even the smallest change in design direction requires a designer to update in 12 design files, 6 hand-off documents, and 22 places in code. Inevitably, someone will forget to update a document, and these inconsistencies will leave developers scratching their head and asking for the “source of truth”.

As time goes on, and a product (and its documentation!) gets larger, the cost for feature changes gets larger, too. The design and tech debt accrue. Fast forward 3 years down the road, and now nobody wants to touch the product.

## Component-based Design & Development

There was clearly the need for a better approach. Both designers and developers were looking for techniques to improve and optimize their workflow.

As a result, designers started adopting style guides — a set of standards for designing the product often. These would include typographic scales, color palette, and UI patterns, and was published as a static document. Design tools evolved into a symbol based model. This made it easier to maintain states and compose more complex interfaces.

Meanwhile, JavaScript UI frameworks adopted a component-based architecture. This allowed developers create component libraries — a collection of reusable UI elements that can be used to build the application.

This was exciting. For the first time, both designers and developers were working off the same mental model. User interfaces are both designed and built as isolated extensible slices that are composed to create entire pages. Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design) pattern provided a good model for how to approach component-based design and extend those practices to development.

By focusing on isolated, extensible and reusable components we can surface implementation challenges much sooner in the process. It allowed for greater collaboration between designers and developers, and previously-siloed teams began to speak the same language. Design or development iterations could be more targeted and isolated. It was easier to see what UI components already exist which reduced a lot of duplicated effort.

## What is a Design System?

The component-based model was a massive step in the right direction. There was a reduced need for hand-off, however, there were now multiple sources of truth — in design tools, in code and sometimes in documentation. There were reusable components, but usually no governance model of how to iterate. Which again lead to inconsistent UI or a need for constant design oversight.

There's a common misconception that a Design System is just a Style Guide or a Component Library, terms people often use interchangeably. However, in our opinion, those are both sub-components of a Design System.

![A design system includes design language, design kit, component library, developer sandbox and a documentation site](/img/design-system.svg)

A Design System is a systematic approach to product development — complete with guidelines, principles, philosophies, and code. It shines a spotlight on _how_ a team designs, making it a fantastic tool for scaling your design practice, reducing the need for hand-off and promoting more collaboration. As [Nathan Curtis](https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935) says, a “Design System isn't a project, it's a product serving products”. Our approach to a Design System includes:

1. **Design Language:** The overall visual design of a digital product. This foundation defines characteristics such as typography, colors, icons, spacing and information architecture. The essence of your brand in a digital context. It is maintained as [Design Tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) in code.

2. **Design Kit:** A library of shared styles, symbols or components that can be used by product teams to design or prototype new experiences. These symbols mirror the JavaScript components from the component library and are updated to be always kept in sync.
Component Library: A set of JavaScript components that are version controlled and are composed to build one or more products.

3. **Sandbox:** A tool for developing components in isolation, document use cases and write structural or visual tests. This is for the Design System developers.

4. **Documentation:** Tying everything together it has guidelines on how to consume the Design System, design and dev considerations and detailed documentation for each component. The documentation site often includes a [live playground](https://react-live.kitten.sh/) which is aimed at the consumers to try out the Design System in the browser.

5. **A Governance model** for how we can continue to evolve the Design System and how others can contribute to it.
A Design System enables your product teams to share learnings across silos, avoid duplicate work and focus more on user experience problems rather than UI problems.

A Design System enables your product teams to share learnings across silos, avoid duplicate work and focus more on user experience problems rather than UI problems.


## What does a Design System Look like in Practice?

Though we believe that each Design System should include the six pillars described above, the exact details or structure of every Design System will be slightly different. What is the structure of your team or organization? Will your Design System service multiple brands, products, or regions? Will there be a dedicated team available to govern the system? All of these questions will inform how a Design System will best support your goals.

Regardless of the exact implementation, we've seen that the impact of a Design System is relatively universal.

### Team Members From Different Disciplines Establish A Shared Understanding
In a Design System, the same set of components is shared by both designers and developers.  The governance process ensures that both disciplines agree upon the exact requirements of a component and ensure it meets the needs of all parties, without those assumptions it can lead to painful rework later on. The capabilities and usage guidelines of these components are then documented in a centralized place so that everyone has a shared source of truth.

Suddenly, everyone is speaking the same language. When a designer is creating a page, they can now make use of these existing building blocks by grabbing from the UI kit, and can confidently point to those existing building blocks when implementation begins. There are no lengthy hand-off documents needed. The developer can then grab those same components from the component library. No more surprises or broken telephone.

### Teams Can Iterate Faster
By implementing a Design System, you unlock the ability to release new designs in smaller chunks and shorter feedback loops, with fewer resources. It's like if you already have the lego blocks manufactured for you, it takes a lot less time to build that castle, compared to if you had to spec and build blocks from scratch.

### Multiple Teams Can Start Leveraging Each Others' Work
Because Design Systems can be shared across multiple teams, efficiencies can be extended between multiple teams or multiple products. When one team has spent time and effort to solve a design problem, then why shouldn't another team in your company also benefit from this work? Multiple teams, locales, or even separate brands can now make use of each other's innovations and avoid reinventing the wheel.

### The Role Of A Designer Changes
When a Design System is built, a designer's role will change in one of two ways:

1. For designers building or contributing to the Design System, designing UI becomes a more technical job. It is their responsibility to ensure that they are designing things in a reusable and systematic way to ensure that their designs mimic the world of development.
Components and design decisions (like spacing, colors, typography) don't happen in a vacuum, and every decision has cascading effects. Because of this, designers are required to have an extra level of discipline to build and adhere to the system.

2. Designers using the system, however, are alleviated from thinking about these nitty-gritty UI interactions and instead get to focus on the holistic experience, the user flows, and the content. Because the nuances are already defined by the Design System, the creativity shifts from "How should I design this button" to "How do I create the most impactful experience?". Now, the real innovation can begin.


## Evolution of the Design System
It's important to keep in mind that a Design System is never really "done"; it will grow and evolve just like any other product. As a website or product changes over time, there will be needs for new UI patterns to be created. By ensuring that the right governance processes are in place, teams can understand when and how to best introduce new elements into the system.

