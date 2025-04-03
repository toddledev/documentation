---
title: Working with workflows
description: toddle docs
---

# Create a workflow
A workflow can be created on any event in toddle. This can be a standard Javascript event on an element, a custom [event on a component](/components/interface-and-liefcycle/#setting-up-events) or lifecyle events like `On load` or `On attribute change`.

::: danger
Image of workflow on an event
:::

To create a workflow on an event:
1. Select the event. This can be any event in toddle
2. Add nodes(#nodes) to create your logic

# Reusable workflows
If you have logic in your component that you need multiple times or if the logic tree is complex, you can create a reusable workflow from the [data panel](/the-editor/data-panel#workflows). 

::: danger
Image of workflow from the data panel
:::

To create a reusable workflow:
1. Make sure you have no element selected so that you can see the data panel. Click the [kbd]+[kbd] button in the workflows section.
2. Add nodes(#nodes) to create your logic

## Parameters and Events
When a workflow is triggered by an event, you have access to the event's data within the formulas of the workflow. That way you can react to the data of the event.

::: danger
Image of workflow event data
:::

In reusable workflows, you can define parameters. Those are the inputs of the workflow. You can use them in any formula in the workflow. By defining parameters, you can create workflows that can cover multiple scenarios.

::: danger
Image of workflow parameters
:::

## Nodes
Nodes are the core of workflows. A node is an action or a piece of logic that are executed sequentially. Node are the visual language in toddle that you use to compose the desired logic. There are several built-in node like `Set: variable`, `Set session cookies` or `Switch`. But you can also call custom [actions](/actions/overview) or reusable workflows.

To add a node:
1. Click on a [kbd]+[kbd] icon in the workflow
2. Pick a node from the list and click on it

::: info
You can copy and paste nodes in a workflow or between workflows via the context menu or [kbd]Cmd/Crtl + C[kbd] and [kbd]Cmd/Crtl + V[kbd].
:::

::: danger
Image of node creation
:::