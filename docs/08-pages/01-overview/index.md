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
- [Element tree](/the-editor/element-tree): The hierarchy of elements and components that create the page's interface
- [Page configuration](/pages/page-configuration)
    - [URL configuration](/pages/page-configuration#url-structure): Path segments and query parameters that define the page's address
    - [Metadata](/pages/page-configuration#metadata): Title, description, language settings, and social sharing information
    - [Head assets](/pages/page-configuration#head-assets): Custom scripts, styles and other resources added to the page's `head`
- [Variables](/variables/overview): Internal state and data management
- **APIs**: Connections to external services and data sources
- [Formulas](/formulas/overview): Calculations and data transformations
- [Workflows](/workflows/overview): Internal logic and behavior triggered by events
- [Contexts](/contexts/overview): Communication channels to provide data to descendant components

These elements work together to create a complete, addressable screen in your application.

# Custom 404 page
If a user navigates to a URL that doesn't match any page in your application, toddle shows a default 404 (page not found) page.
To create a custom 404 page:
1. Add a new page
2. Name it `404`
3. Design the page as you want it to appear when users encounter invalid URLs

::: info
Custom 404 pages are only available on paid plans. Projects in organizations on the free plan will display toddle's standard 404 page.
:::