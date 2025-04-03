---
title: Workflows overview
description: toddle docs
---

# Workflows overview
A workflow in toddle is a series of actions that are executed on certain events. It can contain complex logic and trigger behaviors.

::: dev
The way workflows work in toddle is very similar to functions in JavaScript.
:::

# When to use workflows
Typically, workflows are used to react to events. For example, when a user clicks on a button, you want to react to the click and do something. "Do something" is the workflow. You can create all kinds of logic to react to the click. Typical examples are setting variables, triggering events, and calling APIs. Check out [working with workflows](/workflows/working-with-workflows) to see how you can create them and how to add logic.

# Difference to formulas and actions
[Formulas](/formulas/overview) in toddle are pure functions. This means that they don't have side effects. Workflows, on the other hand, are designed to have effects. They work in a "when this happens, do that" manner. 

[Actions](/actions/overview) and workflows are similar, but have a few key differences:
- **Workflows** are scoped, meaning they belong to a page or a component. They can only be executed in their scope or via a [context](/contexts/overview). Workflow logic is created in toddle's visual environment.
- **Actions** are global to the project. They can be called from anywhere in your project. Also, actions are written in JavaScript and are typically used to extend toddle's functionality.