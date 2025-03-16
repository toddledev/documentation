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
To configure a page, select it in the [project sidebar](/the-editor/project-sidebar) and click on it in the **Page** section of the [data panel](/the-editor/data-panel).

::: warning
missing pages configuration image
:::

## URL structure
At the top of the page configuration panel, you will see a URL preview showing how your page's URL will appear, including domain, path segments and query parameters.

The URL configuration is divided into two main sections:
### Path
- Add path segments by clicking the [kbd]Add path[kbd] button
- For each path segment, provide a name
- Enable the [kbd]Param[kbd] checkbox to make a path dynamic
- Set a test value for development purposes 
- Remove paths using the [kbd]-[kbd] button
### Query
- Add query parameters by clicking the [kbd]Add query[kbd] button
- Name your parameters
- Set a test value for development
- Enable [kbd]Set to null[kbd] option when appropriate
- Remove parameters using the [kbd]-[kbd] button

::: tip
If you are not familiar with URL structure, check out the [blog post about URLs](https://toddle.dev/blog/urls-how-do-they-really-work).
:::

## Metadata
Each page in your application should have unique metadata to improve user experience and search engine visibility:
- **Title**: Appears in browser tabs and search results
- **Language**: Specify the language of your page content
- **Description**: Provides additional context for search engines and social media shares
- **Add meta**: Add additional specialized metadata as needed

Make sure your titles and descriptions are concise and clearly describe the page content.

You can bind any metadata value to formulas by clicking the formula button next to each field.

::: info
Custom meta tags are only rendered for applications on a paid plan.
:::

## Head assets
Sometimes you need to add external resources to your page, such as third-party scripts or custom fonts.

In the URL panel under **Head assets**, you can:
1. Choose the resource type from the dropdown (script, link or style)
2. Provide content or reference external resources
3. Set additional attributes for the resource
4. Add multiple resources by clicking [kbd]Add external resource[kbd]

::: warning
Be extremely cautious when adding external scripts. Only add scripts from trusted sources as they will have full access to your page data.
:::

::: tip
When adding custom fonts or other resources, consider the impact on page load time. Each additional asset increases loading time and may affect user experience.
:::

# Static pages
Static pages contain content defined directly within toddle that remains consistent unless you publish updates. They:
- Have fixed content created directly in the editor
- Display the same information to all users
- Use predetermined URLs without variable path segments
- Don't require API calls to render content

Static pages are the default page type in toddle, ideal for content that doesn't need to change based on user input or external data.

# Dynamic pages
Dynamic pages display content based on data received from APIs or URL parameters rather than having static content defined directly in toddle. They use URL parameters to determine what content to display:
-  **Path parameters**: Define variable segments in your URL path
-  **Query parameters**: Add optional parameters after the `?` in the URL

::: warning
missing image for setting path and query parameters
:::

## Path parameters
To create a dynamic page:
1. Set a path as a parameter in the URL configuration
2. The parameter becomes available in the formula editor throughout the page
3. Set a test value to simulate different parameter values in the editor

For example, a blog page might use `/blog/:slug` where `:slug` is a parameter that determines which article to display.

::: info
toddle prioritizes **static** pages over **dynamic** ones when multiple pages match the current URL.
:::

## Query parameters
In addition to path parameters, you can define query parameters to pass additional information in the URL:
- Query parameters appear after a `?` in the URL (e.g., `?preview=true`)
- They don't trigger browser navigation history when changed
- They're useful for optional settings or filters

## Working with URL parameters
When you create URL parameters, specific actions become available in the workflow editor:
- Update path parameters to change the URL without reloading the page
- Update query parameters to modify the current state

# When to use URL parameters
## Path vs. query parameters
- **Path parameters**: Use for essential page identification that affects navigation history
- **Query parameters**: Use for optional filters or settings that don't represent distinct navigation states

## URL parameters vs. variables
- **URL parameters**: Use when data should persist through page reloads and be shareable via links
- **Variables**: Use for temporary state or sensitive information not appropriate for URLs

Examples of data appropriate for **URL parameters**:
- Active tab selection
- Selected item in a list
- Visibility state of important UI elements

Examples better suited for **variables**:
- Form input values
- Confirmation dialog states

# Custom 404 page
If a user navigates to a URL that doesn't match any page in your application, toddle shows a default 404 (page not found) page.
To create a custom 404 page:
1. Add a new page
2. Name it `404`
3. Design the page as you want it to appear when users encounter invalid URLs

::: info
Custom 404 pages and proper 404 handling are only available on paid plans.
:::