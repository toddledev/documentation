---
title: Project sidebar
description:
---

# Project sidebar
The project sidebar provides access to all files and resources in your toddle project. Access it by clicking the folder icon on the left side of the editor.

::: warning
missing project sidebar image
:::

::: info
Open the project sidebar with [kbd]Cmd/Ctrl[kbd] + [kbd]K[kbd] and close it with [kbd]Escape[kbd].
:::

# Structure
## Search
Find files quickly by typing in the search field at the top of the sidebar.

## Recent
Displays files you have recently accessed for quick navigation between components, pages and other files.

## Content sections
Each section can be expanded or collapsed and includes a [kbd]+[kbd] button to create new items (except for themes and settings):
- **Pages**: View and manage all [pages](/building-blocks/pages) in your project.
- **Components**: Access all reusable [components](/building-blocks/components) in your project.
- **Services**: Configure API connections to external services like Xano, Supabase or any OpenAPI service.
- **Actions**: Create and manage global [actions](/actions/general) that can be used throughout your entire project.
- **Formulas**: Define global [formulas](/formulas/the-formula-editor) for calculations and logic that can be accessed from any page or component.
- **Media**: Upload and manage images and other media files for your project.
- **Themes**: Configure design tokens including colors, spacing, typography and z-index values.
- **Settings**: Manage project configurations including favicon, robots.txt, sitemap, app manifest and service worker.

# Project settings
At the bottom of the panel you will find following settings for your project:
- **Favicon**: Upload a [favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) for your project - available at `https://yourproject.toddle.site/favicon.ico`
- **Robots.txt**: Target a custom [robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt) document (with a URL) - available at `https://yourproject.toddle.site/robots.txt`
- **Sitemap.xml**: Target a custom [sitemap.xml](https://en.wikipedia.org/wiki/Sitemaps) document (with a URL) - available at `https://yourproject.toddle.site/sitemap.xml`
- **App Manifest**: Target a custom [manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) JSON file (with a URL) - available at `https://yourproject.toddle.site/manifest.json`
- **Service Worker**: Target a custom [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) file (with a URL) - available at `https://yourproject.toddle.site/serviceWorker.js`

::: info
Settings are only available with a paid plan.
:::