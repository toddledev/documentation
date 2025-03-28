---
title: Variables
description:
---

# Variables
Variables provide a way to store temporary data within components and pages. They enable interactive behavior and dynamic content by maintaining state during a user's session while offering fast data access in toddle.

Variables in toddle are containers for temporary data that:
- Store values that can change during user interaction
- Persist only while the component or page is mounted
- Reset to their initial values when the page reloads
- Are scoped to the component or page where they're defined
- Provide optimal performance for state management

Variables are ideal for managing temporary states like:
- UI state (expanded/collapsed, selected tabs)
- Performance-sensitive interactions
- Form input values
- Temporary calculation results
- User preferences for the current session

# Creating variables
::: danger
image of creating a variable
:::

To create a variable:
1. Open the [data panel](/the-editor/data-panel) with no element selected
2. In the **Variables** section, click the [kbd]+[kbd] button
3. Enter a name for your variable
4. Set an initial value (can be a static value or formula)

::: info
When using a formula to set the initial value, you can reference attributes but not API data. This is because API data won't be available when the variable initializes.
:::

::: tip
For API-dependent variables, set an initial value like `null` and update the variable after the API call completes.
:::

# Using variables
Variables can be used throughout the component or page:
- **In formulas**: Reference variables directly by name
- **In workflows**: Use variables in conditions and actions
- **In elements**: Bind element properties to variables
- **In styling**: Create dynamic styles based on variable values

# Updating variables
Variables can be updated through workflows or events:
1. In a workflow or event add a new action by clicking the [kbd]+[kbd] button
2. Select in "Variables" the `Set: variable` action for desired variable 
3. Specify the new value (static or formula)

::: danger
image or example???
:::

## Input field binding
For `input` elements, toddle provides a convenient shortcut to create two-way binding with variables:
1. Select an input element in the element tree
2. In the Attributes tab, find the 'Bind to variable` dropdown
3. Choose an existing variable or create a new one

This is a shortcut that automatically sets up:
- A binding of the variable to the input's `value` attribute
- An event handler on the `input` event that updates the variable when the user types

::: danger
image or example for input binding???
:::

# Variable scope
Variables in toddle follow strict scoping rules. They are only accessible within the component or page where they are defined. This means, parent and child components cannot access each other's variables.

This encapsulation provides significant benefits:
- Prevents unexpected side effects
- Makes component behavior more predictable
- Simplifies debugging and maintenance
- Enables component reuse without variable conflicts

As your application grows, this scoping simplifies data flow management and ensures components function reliably in any context.

# Good practices
To use variables effectively:
- Give variables descriptive names that indicate their purpose
- Limit the number of variables to what's necessary
- Use variables to represent the minimal state needed

Following these practices helps maintain clean, predictable component behavior as your application grows.