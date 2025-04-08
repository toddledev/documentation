---
title: Variables
description:
---

# Variables
Variables provide a way to store temporary data within components and pages. They enable interactive behavior and dynamic content by maintaining state during a user's session while offering fast data access in Nordcraft.

Variables in Nordcraft are containers for temporary data that:
- Store values that can change during user interaction
- Persist only while the component or page is mounted
- Reset to their initial values when the page reloads
- Are scoped to the component or page where they're defined
- Provide optimal performance for state management

## Using variables
Variables can be used throughout the component or page:
- **In formulas**: Reference variables directly by name
- **In workflows**: Use variables in conditions and actions
- **In elements**: Bind element properties to variables
- **In styling**: Create dynamic styles based on variable values

This makes variables ideal for managing temporary states like:
- UI state (expanded/collapsed, selected tabs)
- Performance-sensitive interactions
- Form input values
- Temporary calculation results
- User preferences for the current session

## Variable scope
Variables in Nordcraft follow strict scoping rules to maintain component independence. They are only accessible within the component or page where they are defined. This means parent and child components cannot access each other's variables.

This encapsulation provides significant benefits:
- Prevents unexpected side effects
- Makes component behavior more predictable
- Simplifies debugging and maintenance
- Enables component reuse without variable conflicts

As your application grows, this scoping simplifies data flow management and ensures components function reliably in any context.