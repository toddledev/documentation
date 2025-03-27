---
title: Creation guide
description:
---

# Creation guide
Creating well-designed components is key to building efficient, maintainable applications in toddle. This guide helps you determine when to create components and explains the process for creating them.

# When to create components
Knowing when to turn parts of your application into components is an important skill. Here are key situations where creating a component makes sense:

## Identifying reusable patterns
Create a component when you notice the same UI pattern appearing in multiple places:
- Navigation bars or menus that appear on multiple pages
- Card layouts used to display different types of content
- Form input groups with labels and validation
- Buttons with consistent styling and behavior

If you find yourself copying and pasting the same group of elements, it's a strong indication that you should create a component.

## Reducing duplication
Components help eliminate duplication in your codebase. Benefits include:
- Changes only need to be made in one place
- Bugs fixed in the component are fixed everywhere it's used
- Consistent user experience throughout your application

## Encapsulating complex functionality
Components excel at encapsulating complex logic and UI into manageable, self-contained units:
- Interactive widgets like date pickers, sliders, or toggles
- Data visualization elements like charts or graphs
- Elements that manage their own state and behavior

## Component size and granularity
Creating well-structured components involves finding the right level of granularity:
- **Focus on purpose**: Each component should serve a clear, specific function
- **Consistency matters**: Even simple elements like buttons benefit from being components when they appear throughout your application
- **Watch for complexity signs**: Components with more than 15-20 elements or numerous attributes may benefit from being divided
- **Consider separation of concerns**: If a component handles multiple distinct tasks or visual areas, it might work better as separate components
- **Prioritize maintainability**: Components should be easy to understand and modify without affecting unrelated functionality

The ideal component size depends on your specific application needs, but aiming for focused, **single-responsibility** components generally leads to more maintainable code.

::: tip
Follow the single-responsibility principle: each component should do one thing well, making it easier to understand, test and reuse across your application.
:::

# Create a component
There are two primary ways to create components in toddle:
- [Create from scratch](#cerate-from-scratch)
- [Extract existing elements](#extract-existing-elements)

## Create from scratch
::: danger
image create a component
:::

To create a new component:
1. Open the [project sidebar](/the-editor/project-sidebar) by clicking the folder icon or using [kbd]Cmd/Ctrl[kbd] + [kbd]K[kbd]
2. Find the "Components" section and click the [kbd]+[kbd] button next to it
3. Enter a name for your component

## Extract existing elements
::: danger
image extract as component
:::

To convert existing elements into a component:
1. Select the element you want to convert in the [element tree](/the-editor/element-tree)
2. Right-click and select [kbd]Extract as component[kbd] from the context menu
3. Enter a name for the new component

This method automatically:
- Creates a new component with the selected element's structure
- Replaces the original elements with an instance of the new component
- Preserves the original appearance and behavior

::: warning
If the extracted elements depend on variables or formulas from the original component/page, these connections will break after extraction. You will need to rearrange these dependencies.
:::

# Component creation workflow
When creating components, follow these steps for best results:
1. **Plan the component interface**: Determine what attributes and events the component will need
2. **Build the element structure**: Create the HTML structure that makes up your component
3. **Style the component**: Apply CSS to make the component visually appealing
4. **Add internal logic**: Set up variables, workflows, and event handlers
5. **Test with different attribute values**: Ensure the component works correctly with various inputs
6. **Test in context**: Place your component in its intended parent element or application to verify it works as expected in real usage scenarios

Creating well-designed components takes practice, but pays dividends in maintainability and development speed as your application grows.