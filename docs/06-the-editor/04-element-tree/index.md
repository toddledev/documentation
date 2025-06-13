---
title: Element tree
description: Understand the Nordcraft element tree for structural editing, element selection, context menus, and adding new elements to your project hierarchy.
---

# Element tree

The element tree provides a structural overview of your project, displaying all HTML elements and Nordcraft componenents in your page or component hierarchically.

![Element tree|16/9](element-tree.webp){https://editor.nordcraft.com/projects/docs_examples/branches/main/components/screenshot-page?canvas-width=800&canvas-height=800}

## Navigation and selection

- Elements are named according to their HTML tag or component name
- Toggle visibility of child elements using the triangle icon to collapse sections
- Select elements by clicking on them, just as in the canvas
- Drag elements to reorder them within the structure

::: info
HTML element names always correspond to their actual HTML element tag.
:::

::: tip
Hold the [kbd]Alt[kbd] key while dropping a dragged element to copy it instead of moving it.
:::

## Context menu

Right-clicking an element opens a context menu with several actions.

![Element context menu|16/9](element-context-menu.webp){https://editor.nordcraft.com/projects/docs_examples/branches/main/components/card?canvas-width=800&canvas-height=800&selection=nodes.tf08THxvDvD2p9w3y5zhh&rightpanel=style}

1. **Add element**: Opens the element catalog
2. **Wrap in element**: Place the element inside a new parent element
3. **Extract as component**: Convert the element into a reusable component
4. [Show/hide](/formulas/show-hide-formula): Set a formula to control element visibility
5. [Repeat](/formulas/repeat-formula): Apply a formula to create multiple instances from an array
6. **Standard operations**: Duplicate, cut, copy, paste and delete

## Add a new element

Add a new element in one of three ways:

- select [kbd]Add element[kbd] from the context menu
- click the [kbd]+[kbd] button in the sidebar header
- use the shortcut [kbd]I[kbd] to open the element catalog

## Element catalog

![Element catalog|16/9](element-catalog.webp){https://editor.nordcraft.com/projects/docs_examples/branches/main/components/screenshot-page?rightpanel=style&canvas-width=800&canvas-height=800&selection=nodes.m6MApQ1ZZSiZ5iH6kAUWE&elementCatalog=true}

The element catalog provides all HTML elements and components in your project organized by category. This makes it easy to find exactly what you need for your project. The catalog allows you to:

- Browse different element types grouped by functionality
- Search for specific elements and components by tag name and aliases
- View components from installed packages

Select an element to add it to your project. The element will be added as a child of the currently selected element or as the first child of the root element if no element is selected.

::: tip
If you need to change the tag name of an HTML element, edit its `Tag` under `Attributes` in the right panel. This saves you having to delete and re-add elements.
:::
