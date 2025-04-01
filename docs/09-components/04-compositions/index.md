---
title: Compositions
description:
---

# Compositions
Component composition in toddle refers to combining components in various ways to create more complex interfaces. By using different composition techniques, developers can build flexible, maintainable, and reusable UI structures.

The primary composition patterns in toddle include:
- [**Nesting components**](#nesting-components): Adding components inside other components
- [**Slots**](#slots-and-content-distribution): Creating placeholders that can be filled with external content

@@@ example
componentUrl: 
editorUrl: 
height: 24rem

The left card is built with nested components and the right one with slots. Both create the same visual results but with different component architecture.
@@@

This example shows two different ways to build a card component:
**Nested component** (left):
- Uses fixed, nested image, text and button components
- Each nested component has specific attributes to configure it
- Structure and content is defined and controlled by the card component itself

**Assembled with slots** (right):
- Uses a slot for title, description and button components
- Structure is defined by the card component, that the components are below the image
- Content is controlled by the parent


# Nesting components
Nesting is the most basic form of component composition, where you add components inside other components:
1. Open a component in the editor
2. Add another component from the [element catalog](/the-editor/element-tree#element-catalog)
3. Configure the nested component's attributes as needed

Benefits of nesting include:
- Breaking complex interfaces into manageable pieces
- Reusing functionality at different levels of your application
- Creating clear relationships between UI elements

## Nesting considerations
When nesting components, consider the following:
- **Responsibility boundaries**: Each component should have a clear, focused responsibility
- **Data flow**: Parent components pass data down to child components through attributes
- **Event bubbling**: Child components send data up to parents through events
- **Styling**: Parent components can style the root element of nested components

As your application grows, you'll naturally develop deeper component hierarchies. While there's no strict limit to nesting depth, it's good practice to maintain clear boundaries of responsibility between components to ensure maintainability.

# Slots and content distribution
Slots are a powerful feature in toddle that allow components to receive and display content provided when the component is used. They act as placeholders that can be filled with elements and components passed into the component from the outside.

## Understanding slots
The slot element is a fundamental part of toddle's component specification:
- Like many core concepts in toddle, slots build upon native web standards
- Slots create areas in your component that can be filled with external content
- They allow for flexible, composable component architectures
- They help maintain component encapsulation while enabling customization

::: info
The slot element in toddle follows the web components standard. For more technical details, see the [MDN documentation on the slot element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).
:::

::: tip
When exporting a component as a web component, you can use slots like any other web component. You can insert anything, e.g. a React component, by defining the slot attribute on the element.
:::

## Adding slots to components
Slots are added to components like any other element using the [element catalog](/the-editor/element-tree#adding-elements):
1. Select where you want to add the slot in your component
2. Add a slot element from the element catalog
3. Optionally change the name attribute (the default slot name is `default`)

## Naming
Slots in toddle work with a naming system:
- **Default slot**: A slot with the name `default` (which is automatically assigned if no name is provided)
- **Named slot**: A slot with a custom name attribute that identifies it uniquely

When adding content to a component with slots:
1. Select the element you want to place in a slot
2. In the [attributes tab](/the-editor/element-panel#attributes-tab), find the slot section
3. Select which slot should contain this element
4. Elements without a specified slot are placed in the `default` slot

## Placeholder content
Slots can contain default content that appears when no content is provided. This default content:
- Is shown when no matching content is provided
- Gets replaced when matching content is provided
- Helps create components that work out-of-the-box
- Provides visual cues during development