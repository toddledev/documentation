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