---
title: Project sidebar
description: Manage files through the project sidebar to access pages, components, APIs, actions, media, themes and project-wide configuration settings.
---

# Project sidebar

The project sidebar provides access to all files and resources in your Nordcraft project. Access it by clicking the folder icon on the left side of the editor.

![Project sidebar|16/9](project-sidebar.webp){https://toddle.dev/projects/docs_examples/branches/main/components/screenshot-page?rightpanel=style&canvas-width=800&canvas-height=800&leftpanel=Files}

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

- [Pages](/pages/overview): View and manage all pages in your project.
- [Components](/components/overview): Access all reusable components in your project.
- [Services](/connecting-data/services): Configure API connections to external services like Xano, Supabase or any service with an OpenAPI specification.
- [Actions](/actions/overview): Create and manage global actions that can be used throughout your entire project.
- [Formulas](/formulas/global-formulas): Define global formulas for calculations and logic that can be accessed from any page or component.
- **Media**: Upload and manage images and other media files for your project.
- [Themes](/styling/theme): Configure design tokens including colors, spacing, typography and z-index values.
- **Settings**: Manage project configurations like favicon, robots.txt, sitemap, app manifest and service worker.

# Project settings

At the bottom of the panel you will find the following settings for your project:

- **Favicon**: Upload a [favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) for your project - available at `/favicon.ico`
- **Robots.txt**: Target a custom [robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/Robots.txt) document (with a URL) - available at `/robots.txt`
- **Sitemap.xml**: Target a custom [sitemap.xml](https://en.wikipedia.org/wiki/Sitemaps) document (with a URL) - available at `/sitemap.xml`
- **App Manifest**: Target a custom [manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) JSON file (with a URL) - available at `/manifest.json`
- **Service Worker**: Target a custom [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) file (with a URL) - available at `/serviceWorker.js`

::: info
Project settings are only available on paid plans.
:::
