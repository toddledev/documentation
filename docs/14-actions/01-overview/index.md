---
title: Actions
description: Extend Nordcraft with custom JavaScript actions that provide global functionality, handle asynchronous operations and integrate external libraries.
---

# Actions
Actions in Nordcraft are reusable JavaScript functions that allow you to extend the platform's functionality. Unlike workflows that are scoped to specific components or pages, actions are global and can be used anywhere in your project.

Actions serve as a powerful extension mechanism in Nordcraft:
- They are written in JavaScript and can access browser APIs
- They can import and use external libraries
- They can perform asynchronous operations
- They allow you to create custom functionality not available through built-in features
- They are globally accessible throughout your project

::: info
While workflows are created visually and scoped to components or pages, actions are written in JavaScript and available project-wide.
:::

::: tip
Most common tasks can be accomplished using Nordcraft's built-in formulas and workflows without writing code. Consider exploring these options before creating custom actions.
:::

# Difference to workflows and formulas
Understanding the differences between these three concepts helps you choose the right tool:
- **Actions**: JavaScript functions that can have side effects, are globally accessible, and can perform asynchronous operations
- **Workflows**: Visual sequences of operations scoped to components or pages, designed to respond to events and have side effects
- **Formulas**: Pure functions without side effects that transform data and return consistent results for the same inputs

::: dev
Actions in Nordcraft are essentially JavaScript modules with a specific entry point function that matches the action name.
:::

# Key characteristics of actions
## Arguments
Actions can accept arguments that serve as inputs:
- Arguments are passed to the action when it's called from a workflow
- Each argument has a name and type
- Arguments provide flexibility to reuse the same action with different inputs

## Events
Actions can trigger events that call back to workflows:
- Events enable actions to communicate back to the component that called them
- An action can trigger multiple events at different times
- Events can pass data back to the workflow that will handle them
- This creates a two-way communication channel between actions and workflows

## Asynchronous execution
Actions can perform asynchronous operations:
- Use `async/await` or Promises for asynchronous code
- Trigger events after asynchronous operations complete
- Create timers, animation loops, or other time-based behaviors

## Cleanup
Actions can return a cleanup function that runs when a component unmounts:
- A cleanup function is a JavaScript function returned by your action
- Automatically called when the component that triggered the action is unmounted
- Useful for clearing timers, removing event listeners or disposing of resources
- Helps prevent memory leaks when components are removed from the page