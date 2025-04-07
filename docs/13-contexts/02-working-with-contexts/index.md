---
title: Working with contexts
description:
---

# Working with contexts
This page covers the practical aspects of creating and using contexts in toddle applications. Contexts enable direct communication between ancestor and descendant components without going through intermediate components.

# Create a context provider
To create a context provider, you need to expose either formulas or workflows from a component:

## Expose a formula in context

::: danger
image formula expose in context
:::

1. In the component navigate to the **Formulas** section in the [data panel](/the-editor/data-panel)
3. [Create a new formula](/formulas/working-with-formulas#create-a-formula) or select an existing one
4. Check the [kbd]Expose in context[kbd] checkbox in the [formula-editor](/formulas/overview#the-formula-editor)

The formula will now be available to all descendant components through context.

## Expose a workflow in context

::: danger
image workflow expose context
:::

1. In the component navigate to the **Workflows** section in the [data panel](/the-editor/data-panel)
2. [Create a new workflow](/workflows/working-with-workflows) or select an existing one
3. Check the [kbd]Expose context[kbd] checkbox next to the workflow name in the details panel

The workflow can now be triggered directly by any descendant component.

::: tip
To share a variable's value through context, create a formula that returns the variable and expose that formula in context. If you want descendants to be able to modify the variable, create a workflow that updates the variable and expose it in context.
:::

# Using contexts in components
Components can only access contexts from ancestors in the component tree. The context provider must be higher in the hierarchy than the component using the context.

::: danger
image using context
:::

For a component to use context from an ancestor:
1. In selected component navigate to the **Contexts** section in the [data panel](/the-editor/data-panel)
2. Click the [kbd]+[kbd] button to add a context reference
3. Select the ancestor component that provides the context (Only components that expose context will appear in the list)
4. Check the specific formulas and workflows you need to access

Once added, the selected formulas and workflows become available in the component:
- Context formulas can be used in any formula editor within the component
- Context workflows can be triggered from any workflow or event handler within the component

::: info
When multiple ancestor components provide the same context, the nearest ancestor takes precedence.
:::