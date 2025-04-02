---
title: Working with formulas
description:
---

# Working with formulas
Some intro

## Create a formula 
::: danger
image for create a formula
:::

In the formula editor, you can:
- **When creating or editing a formula**:
    - Name your formula
    - Add inputs with test values to use while developing the formula
    - Expose the formula in context to make it available to child components
    - Delete formula


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

@@@ example
componentUrl: 
editorUrl: 
height: 20rem

Example for nested formula
@@@

# Common formula examples
The formula editor supports many JavaScript-like operations, presented through toddle's visual approach. Below are some common formula examples to help you get started.

## Map formula
@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-map-formula.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-map-formula?leftpanel=design&canvas-width=800&canvas-height=800&rightpanel=style&selection=formulas.2q0_dN
height: 19rem

Check out how the map formula transforms each item in an array using a specified function, with the results displayed in a new array.
@@@