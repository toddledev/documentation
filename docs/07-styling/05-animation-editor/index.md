---
title: Animation editor
description: 
---

# Animation editor

The animation editor in Nordcraft allows you to create and manage animations for your components. You can define keyframes and set animation properties such as duration, delay, and easing functions. 

Animations are rendered to the DOM as CSS animations, which means they are tiny, performant and can be used in any web project without additional dependencies and will run smoothly across all modern browsers.

## Creating animations

To create an animation, follow these steps:
1. Select an element in the [element panel](/the-editor/element-panel).
2. Locate the **Animations** section in the style panel.
3. Click the **Add animation** button to open the animation editor.
4. You can now add keyframes or start from one of the preset templates available in the editor.

## Keyframes

Keyframes define the stages of an animation. They specify what should change at specific points in time during the animation.

## Animation properties

In the bottom bar of the animation editor, you can set various properties for your animation. Properties specifies how animations behave, while keyframes define what changes. Properties include:

- **Duration**: The total time the animation takes to complete.
- **Delay**: The time before the animation starts. Setting a negative delay will cause the animation to start immediately, but at a specific point in time, effectively skipping the initial frames.
- **Easing**: The timing function that controls the speed of the animation at different points. You can choose from predefined easing functions or create a custom one.
- **Iteration count**: How many times the animation should repeat. You can set it to a specific number or use `infinite` for continuous animations.
- **Direction**: The direction in which the animation plays. Options include `normal`, `reverse`, `alternate`, and `alternate-reverse`.
- **Fill mode**: Determines how the animation applies styles to its target before and after it is executing. Options include `none`, `forwards`, `backwards`, and `both`.

::: info
You can control an animation's exact time by binding a negative delay to a variable. This allows you to start the animation at a specific point in time, effectively skipping the initial frames.
:::

## Using animations

Once you have created an animation, it will automatically play when the style is applied to the element. If it is set to loop, it will continue to play indefinitely. You can control when the animation plays by adding the animation to a specific selector, such as `:hover`, `:focus`, or when a class is added to the element.

::: info
You can inspect how the animation keyframe data looks by opening the raw style editor on your element. Notice how the auto-generated name of the animation maps to the `@keyframes` rule.
:::

## Composing animations

An element can have multiple animations applied to it. You can add multiple animations in the style panel, and they will play in sequence or simultaneously, depending on their properties. Creating complex animations often involves combining multiple animations and multiple elements within other elements to make one cohesive animation.

For example, to make this duck move naturally, each section is animated separately, and the logical hierarchy of the elements is used to make sure that the eyes move together with the head, and the head moves together with the body, etc.

:::info
Transforms are one of the most powerful tools in animation, allowing you to manipulate elements in 2D and 3D space. They can be used to scale, rotate, translate, and skew elements, providing a wide range of creative possibilities. Use transform-offset to make an element rotate or scale around a specific point, rather than its center. This is used to make the duck's beak open and close around the point where it connects to the head instead of its center like a scissor would.
:::