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
│   ├── _meta.json
│   ├── index.md
│   ├── quick-start.md
│   └── ...
├── features/
│   ├── _meta.json
│   ├── index.md
│   └── ...
├── open-source/
│   ├── _meta.json
│   ├── index.md
│   ├── developer-guide/
│   │   ├── _meta.json
│   │   ├── index.md
│   │   └── ...
│   └── ...
└── ...
```

### Structure Explanation

1. **\_meta.json files**:
   - The root `_meta.json` file in the `/docs` directory defines the order and structure of the main sections.
   - Each subdirectory contains its own `_meta.json` file that defines the order and structure of the articles within that section.
   - These files are used to generate the navigation and determine the order of content display.

2. **index.md files**:
   - Each section contains an `index.md` file that serves as the landing page for that section.
   - These files typically provide an overview of the section and links to the main topics within it.

3. **Content Files**:
   - Individual `.md` files in each section represent specific topics or articles.
   - The filenames should match the keys defined in the `_meta.json` file of that section.

### \_meta.json File Example

```json
{
  "index": "Introduction",
  "quick-start": "Quick Start Guide",
  "installation": "Installation",
  "configuration": "Configuration"
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