---
title: Issue panel
description: The Nordcraft issue panel helps you identify and resolve problems within your Nordcraft project, providing an overview of all issues, allowing you to maintain code quality and improve project stability.
---

# Issues panel

The issue panel helps you identify and resolve problems within your Nordcraft project. It provides an overview of all issues, allowing you to maintain code quality and improve project stability.

![Issues panel|16/9](issues-panel.webp){https://toddle.dev/projects/docs_examples/branches/main/components/screenshot-page?rightpanel=style&canvas-width=800&canvas-height=800&leftpanel=Problems}

::: info
The issue panel is like a code linter for traditionally coded applications, reporting on accessibility, SEO and other issues.
:::

## Accessing the issue panel

Access the issue panel by clicking the issue icon in the left sidebar of the editor.

::: tip
Regularly check the issue panel during development to catch and fix issues early.
:::

## Structure

The issue panel is split into two views:

- **Current component/page**: Displays issues specific to the component or page you're currently editing
- **Project overview**: Provides a complete list of all issues across your entire project. Issues are bundled by component or page with:
  - Expandable sections with a complete list of issues
  - A badge indicating the number of issues

## Issue details

Each issue includes:

- Severity level (info, warning, error) indicated via an icon
- Descriptive title
- Detailed description of the issue

Click on an issue to navigate directly to its location in your project.

::: info
Issues are also indicated with corresponding icons next to affected items in the editor, helping you quickly locate problem areas.
:::

## Finding specific issues

### Search functionality

Use the search bar to quickly find specific issues.

### Filtering options

Narrow down the displayed issues using filters for:

- Severity level: Filter by info, warning, or error status
- Issue type: Focus on specific categories, e.g. `No References` or `SEO`

::: info
The issue detection system is being continuously improved to identify more issues to help you build stable, performant and accessible applications.
:::

## Resolving issues

Addressing issues identified in the issue panel improves project stability, performance and maintainability. Good practice is to address issues during development rather than at the end of your project cycle.
