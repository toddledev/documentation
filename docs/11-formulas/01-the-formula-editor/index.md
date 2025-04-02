---
title: The formula editor
description:
---

# The formula editor
The formula editor is where you construct business logic for your application in toddle. It provides a powerful yet accessible way to transform data, perform calculations and implement conditional logic throughout your application.

::: danger
image of formula editor, full-screen of map formula?
:::

## Understanding formulas
Formulas in toddle are expressions that:
- Perform logical operations and data transformations
- Execute mathematical calculations
- Filter, search, and manipulate data
- Return consistent results for the same inputs

Formulas are [pure functions](https://www.geeksforgeeks.org/pure-functions-in-javascript), which means they:
- Have no side effects (don't modify external state)
- Always return the same output given the same input(s)
- Can be composed together to build more complex logic

::: info
A pure function always returns the same result for the same inputs and doesn't change anything outside of itself, ensuring predictability and reliability.
:::

## Working with the formula editor
The formula editor appears when editing formulas and wherever you see an `fx` button in the toddle interface:
- In the [attributes panel](/the-editor/element-panel#attributes-tab) when binding values
- In the [Show](/formulas/show-hide-formula) and [Repeat](/formulas/repeat-formula) sections
- In the [style variables](/styling/conditional-styles#style-variables) panel
- In the data panel when defining formulas
- ...

In the formula editor, you can:
- **When editing a formula**:
    - Name your formula
    - Add inputs with test values to use while developing the formula
    - Expose the formula in context to make it available to child components
    - Delete formula
- Reference variables, attributes, and other data
- Use built-in functions and operators
- Compose complex logic from simpler operations
- See live preview results as you type

### Full-screen mode
For complex formulas, toddle provides a full-screen view of the formula editor. It offers a larger canvas, better visibility of logic and easier navigation for formulas with many operations. To expand, click the icon button in the top-right corner.

## Reusable formulas
To keep your formulas efficient and maintainable, define reusable formulas that can be referenced throughout your project. If you find yourself repeating the same formula logic in multiple places, follow these steps:
1. Create a component-level formula in the data panel
2. Give it a descriptive name
3. Define its logic once
4. Reference it wherever needed

Reusable formulas provide these benefits:
- Reduce duplication in your codebase
- Improve maintainability (changes in one place affect all usages)
- Enhance performance through result caching (due to their pure function nature)

## Formula foundations
Built on the modern web platform, toddle offers many built-in formulas that closely align with similarly named JavaScript functions. Familiarity with these JavaScript concepts can help you create more effective formulas:
- [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) (map, filter, reduce, etc.)
- [Object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (keys, values, entries, etc.)

::: dev
The truthy concept in toddle is similar to JavaScript but follows a more streamlined approach. Only `false`, `null` and `undefined` are treated as **falsy**, while all other values are considered **truthy**.
:::

# Common formula examples
The formula editor supports many JavaScript-like operations, presented through toddle's visual approach. Below are some common formula examples to help you get started.

## Map formula
@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-map-formula.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-map-formula?leftpanel=design&canvas-width=800&canvas-height=800&rightpanel=style&selection=formulas.2q0_dN
height: 19rem

Check out how the map formula transforms each item in an array using a specified function, with the results displayed in a new array.
@@@