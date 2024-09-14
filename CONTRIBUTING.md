# Contributing to Toddle Documentation

We're thrilled that you're interested in contributing to Toddle's documentation! This document outlines the process for contributing, some guidelines to follow, and explains our documentation structure.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your contribution
4. Make your changes
5. Push your changes to your fork
6. Submit a pull request

## Documentation Structure

Our documentation follows a specific structure to ensure consistency and ease of navigation. Understanding this structure is crucial for contributing effectively.

### Directory Structure

```
docs/
├── _meta.json
├── getting-started/
│ ├── _meta.json
│ ├── index.md
│ ├── quick-start/
│ │ └── index.md
│ └── ...
├── features/
│ ├── _meta.json
│ ├── index.md
│ └── ...
├── open-source/
│ ├── _meta.json
│ ├── index.md
│ ├── developer-guide/
│ │ ├── _meta.json
│ │ ├── index.md
│ │ └── ...
│ └── ...
└── ...
```


### Structure Explanation

1. **Master _meta.json file**:
   - A single `_meta.json` file in the root `/docs` directory defines the entire structure of the documentation.
   - This file contains a nested structure that represents all sections and pages.
   - Each item in the structure has `title`, `slug`, `link`, and optionally `children` properties.
   - The order of items in this structure determines the order of navigation items.
   - This file is used to generate the entire navigation structure for the documentation.

2. **index.md files**:
   - Each section and subsection contains an `index.md` file that serves as the content for that section or page.
   - For main sections (e.g., `getting-started/`), the `index.md` file typically provides an overview of the section and links to the main topics within it.
   - For specific pages (e.g., `quick-start/`), the `index.md` file contains the actual content for that page.

3. **Content Structure**:
   - Each page or detail has its own folder (e.g., `quick-start/`) containing an `index.md` file.
   - This structure allows for better organization and the potential to include additional resources (like images) specific to each page in the future.

4. **Naming Convention**:
   - Folder names should be kebab-case and match the keys defined in the parent `_meta.json` file.
   - Always use `index.md` for the main content file within each folder.

### **Master _meta.json File Example**:

```json
{
  "nav": [
    {
       "title": "Home",
       "slug": "index",
       "link": "/"
    },
    {
      "title": "Getting Started",
      "slug": "getting-started",
      "link": "/getting-started",
      "children": [
        {
          "title": "Quick Start Guide",
          "slug": "quick-start",
          "link": "/getting-started/quick-start"
        }
      ]
    }
  ]
}
```

This structure allows for easy reorganization of content and addition of new topics without changing the content files themselves.

## Writing Style Guidelines

- Use clear, concise language
- Write in the present tense
- Be respectful
- Use sentence case for headings

## Formatting Guidelines

- Use Markdown for all documentation files
- Follow the templates provided in the `/_templates/` directory
- Use appropriate heading levels (H1 for page title, H2 for main sections, etc.)
- Use code blocks for code snippets, do not use screenshots of code.
- Use relative links for internal documentation references

## Content Structure Guidelines
- Each page or detail should have its own folder containing an `index.md` file
  - For example, `docs/getting-started/quick-start/index.md` instead of `docs/getting-started/quick-start.md`
- Folder names should be in kebab-case and match the keys in the parent `_meta.json` file
- Always name the main content file `index.md` within each folder
- This structure allows for better organization and the potential to include additional page-specific resources in the future

## Pull Request Process

1. Ensure your PR addresses an existing issue or has been discussed with the team
2. Update the README.md with details of changes if applicable
3. Update any relevant documentation
4. Your PR will be reviewed by at least one maintainer
5. Address any comments or requested changes
6. Once approved, your PR will be merged

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Questions?

If you have any questions, please feel free to contact the documentation team or open an issue for discussion.

Thank you for your contributions to making Toddle's documentation better for everyone!