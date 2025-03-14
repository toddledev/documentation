---
title: Pages
description:
---

# Pages
Pages are foundational building blocks in toddle applications, representing distinct screens with unique URLs. They allow users to navigate through your application and share links to specific content.

**Pages** in toddle are essentially specialized components with additional URL-related capabilities:
- Each page has a unique URL path
- Pages are top-level elements in your application structure
- Pages do not have attributes or events since they don't have parent components
- Instead, pages have a special **Page** section in the data panel for configuration

# Page configuration
To configure a page, select it in the element tree or click on it in the Page section of the data panel.

::: warning
missing pages configuration image
:::

## URL structure
At the top of the page configuration panel, you'll see a URL preview showing how your page's URL will appear, including domain, path segments, and query parameters.

The URL configuration is divided into two main sections:
### Path
- Add path segments by clicking the "Add path" button
- For each path segment, provide a name (e.g., `test-path`)
- Set a test value for development purposes
- Enable the "Param" checkbox to make a segment dynamic
- Remove segments using the minus button
### Query
- Add query parameters by clicking the "Add query" button
- Name your parameters (e.g., `test-query-parameter`)
- Set test values for development
- Enable "Set to null" option when appropriate
- Remove parameters using the minus button

::: info
If you're not familiar with URL structure, we recommend reading our [blog post about URLs](https://toddle.dev/blog/urls-how-do-they-really-work).
:::

## Meta
Each page in your application should have unique metadata to improve user experience and search engine visibility:
- **Title**: Appears in browser tabs and search results (with character count indicator)
- **Language**: Specify the language of your page content
- **Description**: Provides additional context for search engines and social media shares (with character count indicator)
- **Add meta**: Add additional specialized metadata as needed

You can bind any metadata value to formulas by clicking the formula button next to each field.

::: info
Custom meta tags are only rendered for applications on a paid plan.
:::

Make sure your titles and descriptions are concise and clearly describe the page content.

# Dynamic pages
Dynamic pages display content based on data received from APIs or URL parameters, rather than being hardcoded.

## Path parameters
To create a dynamic page:
1. Set a path segment as a parameter in the URL configuration
2. The parameter becomes available in the formula editor throughout the page
3. Set a test value to simulate different parameter values in the editor

For example, a blog page might use `/blog/:slug` where `:slug` is a parameter that determines which article to display.

::: info
toddle prioritizes static pages over dynamic ones when multiple pages match the current URL.
:::

## Query parameters
In addition to path parameters, you can define query parameters to pass additional information in the URL:
- Query parameters appear after a `?` in the URL (e.g., `?preview=true`)
- They don't trigger browser navigation history when changed
- They're useful for optional settings or filters

## Using parameters in workflows
When you create URL parameters, special actions become available in your workflow editor:
- Update parameter values without triggering full page reloads
- Access parameter values in formulas and conditions

# When to use different parameter types
## Path vs. query parameters
- **Path parameters**: Use for essential page identification that affects navigation history
- **Query parameters**: Use for optional filters or settings that don't represent distinct navigation states

## URL parameters vs. variables
- **URL parameters**: Use when data should persist through page reloads and be shareable via links
- **Variables**: Use for temporary state or sensitive information not appropriate for URLs

Examples of data appropriate for URL parameters:
- Active tab selection
- Selected item in a list
- Whether to show an edit modal

Examples better suited for variables:
- Form input values
- Confirmation dialog states
- Authentication tokens

# Head assets
Sometimes you need to add external resources to your page, such as third-party scripts or custom fonts.

In the URL panel under "Head assets", you can:
1. Choose the resource type from the dropdown (script, link, or style)
2. Provide content or reference external resources
3. Set additional attributes for the resource
4. Add multiple resources by clicking "Add external resource"

::: warning
Be extremely cautious when adding external scripts. Only add scripts from trusted sources as they will have full access to your page data.
:::

::: tip
When adding custom fonts or other resources, consider the impact on page load time. Each additional asset increases loading time and may affect user experience.
:::

# Custom 404 pages
If a user navigates to a URL that doesn't match any page in your application, toddle shows a default 404 (page not found) page.
To create a custom 404 page:
1. Add a new page
2. Name it "404"
3. Design the page as you want it to appear when users encounter invalid URLs

::: info
Custom 404 pages and proper 404 handling are only available on paid plans.
:::