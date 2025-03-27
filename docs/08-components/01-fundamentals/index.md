---
title: Fundamentals
description:
---

# Fundamentals
Components are the fundamental building blocks of applications in toddle. They let you reuse generic parts of your application and break large applications down into smaller, more manageable pieces.

# What are components in toddle
Components in toddle are self-contained, reusable elements that encapsulate structure, styling and behavior. They function like tiny web applications on their own, with the ability to:
- Render elements on a page
- Store data in variables
- Call APIs and process data
- Respond to user interactions
- Communicate with other components
- Encapsulate logic and validation
- Implement complex functionality in isolation
- Maintain their own internal state

Each component has its own structure, data model, and behavior, making them highly reusable across your project. This encapsulation of both UI and logic creates building blocks that can be combined to create increasingly complex applications.

::: info
Components combine HTML structure, CSS styling, and JavaScript behavior into reusable parts.
:::

# Benefits of using components
Breaking your application into components provides several advantages:
- **Reusability**: Build functionality once and use it many times
- **Maintainability**: Changes to a component apply everywhere it's used
- **Organization**: Divide complex applications into manageable pieces
- **Consistency**: Ensure UI elements look and behave the same throughout your application
- **Collaboration**: Different team members can work on different components simultaneously
- **Testing**: Components can be tested in isolation

::: tip
A well-designed component library can accelerate development and ensure scalability and maintainability as projects grow through component reuse.
:::

# Component structure and anatomy
A component in toddle can consist of:
- **Root element**: The top-level container element
- **Element tree**: The hierarchy of elements that make up the component
- **Attributes**: The interface for passing data into the component
- **Variables**: Internal state management
- **APIs**: Connections to external services and data sources
- **Events**: The interface for communicating out from the component
- **Formulas**: Calculations and data transformations
- **Workflows**: Internal logic and behavior
- **Contexts**: Communication with ancestors without intermediaries

## Data encapsulation
Components in toddle encapsulate their data, meaning that variables, APIs, and other internal aspects of one component are not accessible by other components. At first, this isolation may seem limiting, but it's an essential design principle that helps maintain order as your application grows in complexity.

This encapsulation ensures that components:
- Have clear boundaries and responsibilities
- Can be modified internally without affecting other parts of the application
- Are easier to understand, as their behavior depends only on their own code and inputs

::: info
Each component is like a "black box" that hides its implementation details while exposing a clear interface.
:::

## Component composition
Components are composable, meaning they can be combined together to form more complex components, which can then be composed into full applications. This composition model allows you to:
- Create a hierarchy of increasingly complex UI elements
- Build applications from the bottom up with reusable parts
- Share functionality between different areas of your application

Components can send data to other components and pages through:
- **Attributes**: Pass data down to child components
- **Events**: Send data up to parent components
- **Contexts**: Create direct communication channels with ancestor/descendant components, bypassing intermediaries

This communication pattern enables components to work together while maintaining their independence and encapsulation.

# Working with component instances
When you add a component to a page or another component, you're creating an instance of that component. Each instance:
- Has its own set of attribute values
- Can be styled independently (affecting only the root element)
- Works independently of other instances of the same component

Understanding how components work and how they fit into the overall structure of your application is the foundation for creating maintainable, scalable applications in toddle.