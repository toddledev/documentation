---
title: Workflows overview
description: Distinguish workflows from formulas and actions in Nordcraft as event-driven sequences that execute operations with side effects in your application.
---

# Workflows overview

A workflow in Nordcraft is a series of actions that are executed on certain events. It can contain complex logic and trigger behaviors.

::: dev
The way workflows work in Nordcraft is very similar to functions in JavaScript.
:::

# When to use workflows

Typically, workflows are used to react to events. For example, when a user clicks on a button, you want to react to the click and do something. "Do something" is the workflow. You can create all kinds of logic to react to the click. Typical examples are setting variables, triggering events, and calling APIs. Check out [working with workflows](/workflows/working-with-workflows) to see how you can create them and how to add logic.

# Difference to formulas and actions

[Formulas](/formulas/overview) in Nordcraft are pure functions. This means that they don't have side effects. Workflows, on the other hand, are designed to have effects. They work in a "when this happens, do that" manner.

[Actions](/actions/overview) and workflows are similar, but have a few key differences:

- **Workflows** are scoped, meaning they belong to a page or a component. They can only be executed in their scope or via a [context](/contexts/overview). Workflow logic is created in Nordcraft's visual environment.
- **Actions** are global to the project. They can be called from anywhere in your project. Also, actions are written in JavaScript and are typically used to extend Nordcraft's functionality.

## Sequential execution

Workflows execute their nodes sequentially, but there's an important distinction between sequential execution and synchronous execution.

## Sequential vs Asynchronous Execution

Workflows execute nodes in the order they appear, but some nodes (like API calls) work asynchronously. This means:

- Nodes are always called in sequence (one after another)
- However, asynchronous nodes may not complete before the next node starts executing
- For asynchronous operations, you need to use callback events to handle their results

This is why some nodes have specific callback events like `On success`, `On error`, or `tick`. These callbacks allow you to define what happens after an asynchronous operation completes.
