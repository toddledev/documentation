---
title: Core concepts
description: Learn the fundamental principles behind Nordcraft's development platform including component architecture, reactive data flow and visual development with code. Understand key concepts before starting your first project.
---

# Core concepts
Nordcraft is built around several fundamental concepts that form the foundation of the platform. Understanding these core concepts will help you work more effectively with Nordcraft.

## Visual development with code foundation
Nordcraft combines visual development with a solid code foundation. This hybrid approach means:
- You can build visually while the system generates clean, optimized code
- Visual changes are reflected immediately in the interface
- Complex interactions can be implemented using visual development through [workflows](/workflows/overview)
- Custom code can be added when needed for specialized functionality

This approach bridges the gap between visual design tools and coding environments, eliminating many traditional handoffs. Explore [the editor](/the-editor/overview) to see how this works in practice.

## Component-based architecture
Everything in Nordcraft is built around [components](/components/overview):
- **Components** are reusable, self-contained pieces of interface and functionality
- Each component has its own structure, [styling](/styling/styles-and-layout) and behavior
- Components can be [composed together](/components/compositions) to create more complex interfaces
- Components maintain encapsulation of their internal state and logic

This component-based approach promotes reusability, maintainability and collaboration among team members. Learn how to [create your own components](/components/create-a-component) to build a modular application.

## Projects: apps and packages
Nordcraft organizes work into [two main project types](/get-started/create-a-project):
- **Apps** are complete applications with pages and functionality
- **Packages** are collections of reusable components and functions

[Packages](/packages/overview) can be published and shared across projects, making them ideal for common functionality. Learn more about [creating and launching packages](/packages/creating-and-launching) to share your work.

## Branches and version control
Nordcraft includes built-in version control through its [branching system](/get-started/branches-and-publishing):
- The `main` branch represents the live version of your project
- New branches are created for developing features or fixes
- Changes can be [previewed](/get-started/branches-and-publishing#preview-a-branch) before publishing
- Branches are [published back to main](/get-started/branches-and-publishing#publish-changes) when work is complete

This workflow enables collaboration and maintains stability in your projects. For best practices, check out our guide on [effective branching](/good-practices/branching) strategies.

## Pages and navigation
[Pages](/pages/overview) form the foundation of applications in Nordcraft:
- Each page has a unique [URL path](/pages/page-configuration#url-structure)
- Pages can accept [parameters](/pages/static-and-dynamic#dynamic-pages) for dynamic content
- Pages contain [components](/building-blocks/components) and [elements](/building-blocks/elements)
- [SEO metadata](/pages/page-configuration#metadata) is configured at the page level

The page structure creates the overall navigation framework for your application. Learn how to [create pages](/pages/create-a-page) and set up their configuration.

## Data flow and reactivity
Nordcraft uses a reactive data model built on signals:
- [Variables](/variables/overview) store state within components and pages
- [Formulas](/formulas/overview) transform data through pure functions
- [Workflows](/workflows/overview) implement interactive behavior
- [Contexts](/contexts/overview) share data between components
- When data changes, the interface updates automatically

This reactive approach ensures your interface stays in sync with underlying data. Learn about [working with variables](/variables/working-with-variables) and [creating formulas](/formulas/working-with-formulas) to implement dynamic behavior.

## Server and client rendering
Nordcraft supports both server-side rendering (SSR) and client-side rendering:
- Server rendering improves initial page load and SEO
- Client rendering enables rich interactivity after load
- The platform intelligently handles the transition between these modes

This hybrid rendering approach provides the best of both worlds for performance and user experience. When [working with APIs](/connecting-data/working-with-apis), you can [configure which requests](/connecting-data/advanced-api-features#server-side-rendering-ssr) should be processed during server-side rendering.

## API integration
External data is connected through the [API integration system](/connecting-data/overview):
- [Configure endpoints](/connecting-data/working-with-apis) to connect to any backend
- Handle [authentication](/connecting-data/authentication) securely
- Transform and use [response data](/connecting-data/call-an-api#accessing-api-data) in your interface
- Set up real-time data with [streaming connections](/connecting-data/streaming)

The API system forms the bridge between your frontend and any backend services. You can also connect to specialized backend providers through [services](/connecting-data/services).


These core concepts appear throughout the Nordcraft documentation. As you work with the platform, you will develop a deeper understanding of how these concepts interact to create a powerful web development environment. Ready to start building? Head to the [Get started](/get-started/overview) section to create your first project.