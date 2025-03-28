---
title: Page fundamentals
description:
---

# Page fundamentals
Pages are the foundation of applications in toddle. They represent distinct screens with unique URLs that users navigate to, creating the overall structure of your web application.

# What are pages in toddle
Pages in toddle are specialized components that serve as the top-level containers for your application's screens. They function as containers for all the content and functionality available at a specific URL. 
- Each page has a unique URL path
- Pages are top-level components in your application structure, not nested within other elements
- Pages do not have attributes or events since they don't have parent components
- Instead, pages have a dedicated **Page** section in the [data panel](/the-editor/data-panel)

Pages handle a variety of functions central to web applications:
- Rendering content and UI elements
- Processing URL parameters and query strings
- Defining metadata for SEO and social sharing
- Managing internal state through variables
- Connecting to external data through APIs
- Controlling user interactions and navigation flow

This combination of URL handling and component-like functionality makes pages the foundation for building complete web applications in toddle.

# Page structure
A page in toddle can consist of several key elements:
- **URL configuration**: Path segments and query parameters that define the page's address
- **Metadata**: Title, description, SEO information, and custom head assets
- **Element tree**: The hierarchy of elements and components that create the page's interface
- **Data and logic**: Variables, APIs, formulas and workflows for functionality
- **Contexts**: Communication channels that allow the page to provide data to descendant components

These elements work together to create a complete, addressable screen in your application.

# Custom 404 page
If a user navigates to a URL that doesn't match any page in your application, toddle shows a default 404 (page not found) page.
To create a custom 404 page:
1. Add a new page
2. Name it `404`
3. Design the page as you want it to appear when users encounter invalid URLs

::: info
Custom 404 pages and proper 404 handling are only available on paid plans.
:::

Projects in organizations on free plans will display toddle's standard 404 page.