---
title: Elements
description:
---

# Elements

testing
# Pages
Pages are fundamental building blocks in toddle applications that represent distinct views with unique URLs. Unlike components, pages are designed to function as standalone views that users can navigate to and share.

(IMAGE: Overview of a page in the toddle editor showing the canvas and data panel)

# Understanding pages
Pages in toddle are similar to components but serve a different purpose in your application architecture. They provide entry points to your application through unique URLs.

## How pages differ from components
While pages share many similarities with components, there are key differences:
- Pages have unique URLs for direct access and sharing
- Pages do not have attributes or events sections (since they don't have parent components)
- Pages include a special "Page" section in the data panel for URL and metadata configuration
- Pages can be static (content defined in toddle) or dynamic (content loaded from external sources)

::: info
At a technical level, pages are essentially specialized components with additional URL and metadata capabilities.
:::

# Page configuration
To configure a page, select it and access the data panel when no elements are selected. You'll find the Page section at the top.

(IMAGE: Page configuration panel showing URL structure and metadata fields)

## URL structure
The URL configuration allows you to define how users access your page:

1. Click on the page in the Page section to open configuration
2. View the URL preview showing how the page URL will appear
3. Add or remove path segments to customize the page path
4. Configure query parameters your page will use

::: tip
If you're unfamiliar with URL structure, check out our [blog post about how URLs work](https://toddle.dev/blog/urls-how-do-they-really-work).
:::

## Metadata
Each page should have unique metadata to improve SEO and social sharing:
- **Title**: Appears in browser tabs and search results
- **Description**: Brief summary of the page content
- **Custom meta tags**: Additional tags for SEO, social sharing, or other purposes

::: info
Custom meta tags are only rendered for applications on a paid plan.
:::

Keep titles and descriptions concise and descriptive to help users understand what content to expect.

## Custom 404 page
When a user attempts to access a non-existent URL in your app, toddle displays a default 404 (page not found) page. You can create a custom 404 page by:
1. Adding a new page to your project
2. Naming it "404"

::: info
Custom 404 pages and proper 404 handling are only available on paid plans.
:::

# Dynamic pages
Dynamic pages receive content from external sources rather than having static content defined directly in toddle.

## Using URL parameters
Dynamic pages use URL parameters to determine what content to display:
1. **Path parameters**: Define variable segments in your URL path
2. **Query parameters**: Add optional parameters after the ? in the URL

(IMAGE: URL configuration panel showing path and query parameter setup)

### Path parameters
To create a dynamic page with path parameters:
1. In the URL panel, select a path segment
2. Convert it to a parameter by clicking the parameter toggle
3. Set a test value for use in the editor
4. Access the parameter value using formulas throughout the page

For example, a blog post page might use a URL like `/blog/{slug}` where `{slug}` is a path parameter identifying which article to display.

::: info
toddle will always prioritize static pages over dynamic ones if multiple pages match the current URL.
:::

### Query parameters
Query parameters appear after the `?` in a URL and can provide additional context without affecting the main path structure:
1. Add query parameters in the URL panel
2. Specify names and test values
3. Access values using formulas throughout the page

For example, `/blog/new-features?preview=true` might show a preview version of a post.

## Updating URL parameters
When working with URL parameters, you can use specific actions in workflows:
- Update path parameters to change the URL without reloading the page
- Update query parameters to modify the current state

(IMAGE: Workflow editor showing URL parameter update actions)

## When to use URL parameters
Consider using URL parameters when you want:
- Data to persist after page reload
- Information to be shareable via links
- State to be bookmarkable

Good candidates for URL parameters include:
- Active tab selection
- Selected items in a list
- Visibility state of important UI elements

Use variables instead for temporary states like:
- Form input values
- Confirmation dialog visibility
- Ephemeral UI states

# Page assets
## Adding scripts and styles
Sometimes you need to integrate external resources into your pages:
1. Access the URL panel
2. Find the Head Assets section
3. Add `<script>`, `<link>`, or `<style>` tags to include in the page head

Common use cases include:
- Analytics tools
- Customer support widgets
- Custom fonts

::: warning
Be cautious when adding external scripts. You're granting these scripts access to all data on your page. Only add scripts from trusted sources.
:::

::: tip
While adding assets can extend functionality, each additional resource increases page load time. Be mindful of performance impacts.
:::