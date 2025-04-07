---
title: Show/Hide formula
description:
---

# Show/hide formula
The show/hide formula in Nordcraft allows you to conditionally render elements based on specific conditions. This enables you to create dynamic interfaces that respond to user interactions, application state and other factors.

@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-show-hide-formula.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-show-hide-formula?canvas-width=800&rightpanel=attributes&selection=nodes.nQgi8KJ7OPxn9l5H0mML-.condition&canvas-height=800
height: 21rem

See how the show/hide formula controls the visibility of the card based on the toggle button.
@@@

The show/hide formula controls whether an element is displayed or not:
- It evaluates a `boolean` expression
- If the expression is truthy, the element is shown
- If the expression is falsy, the element is hidden
- The formula is applied by setting the `show` attribute on an element

::: dev
The truthy concept in Nordcraft is similar to JavaScript but follows a more streamlined approach. Only `false`, `null` and `undefined` are treated as **falsy**, while all other values (including empty strings, zero and empty arrays) are considered **truthy**.
:::

# Add a show/hide formula

::: danger
image to add a show/hide formula
:::

To conditionally show or hide an element:
1. Select the element you want to control
2. In the [attributes tab](/the-editor/element-panel#attributes-tab), click the [kbd]fx[kbd] button next to **Show**
3. Enter a formula that evaluates to a `boolean` value. The element will only be visible when the formula evaluates to `true`

# How show/hide differs from CSS display
Using Nordcraft's show/hide formula is fundamentally different from setting CSS `display: none` or `visibility: hidden`:
- **Show/hide formula:**
  - Completely removes the element from the DOM when hidden
  - No APIs, events or workflows run on hidden elements
  - Element is fully unmounted and remounted when toggling visibility
- **CSS display/visibility:**
  - Element remains in the DOM but is not visible
  - APIs, events and workflows continue to run
  - No unmounting/remounting occurs when toggling visibility

# Performance considerations
Because elements are unmounted and remounted when the show/hide condition changes, be aware of these performance implications:
- **Re-initialization**: When an element is shown again, all initializations, API calls and onLoad events will run anew
- **DOM updates**: Hiding and showing elements forces the browser to recreate DOM nodes, which can be costly for complex components
- **State loss**: Any internal state not stored in variables will reset when the element is hidden

For most uses, this behavior is ideal. However, if you need to toggle visibility frequently while maintaining state, consider CSS alternatives:
- Use `display: none` hides the element but preserves its state
- Use `visibility: hidden` hides the element while maintaining its layout space

::: warning
CSS approaches keep elements in the DOM, so use them only when you need to preserve state during frequent visibility changes.
:::