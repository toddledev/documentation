---
title: Contributing to Nordcraft Documentation
description: Learn how to create well-structured, consistent documentation pages for Nordcraft, following formatting guidelines and content best practices.
---

# Contributing to Nordcraft Documentation
This guide helps you understand how to contribute to the Nordcraft documentation. Whether you're adding a completely new page or updating existing content, following these guidelines ensures consistency across the documentation.

# Documentation structure
The Nordcraft documentation is organized into sections and individual pages:
- **Sections**: Main categories like "Get started," "Components," or "Styling"
- **Pages**: Individual documents that can be either within sections or standalone (like "About" page)

Each section and page corresponds to a folder in the [GitHub repository](https://github.com/toddledev/documentation):
- Sections and pages are numbered (01, 02, 03...) to determine their order in the side menu
- The content of each page is stored in an `index.md` markdown file
- All related images are placed in the same folder as the page's `index.md` file

# Creating a new page
## File setup
1. Identify which section your page belongs to
2. Create a new folder with the appropriate number (to maintain order) and name
   - For example: `05-the-editor` for the main section
   - Or `05-the-editor/03-bottom-bar` for a page within a section
3. Create an `index.md` file within this folder

## Required structure
Each documentation page needs:
1. **YAML frontmatter** at the top of the file with:
   - `title`: Page title in sentence case (used for SEO metadata)
   - `description`: Brief overview of the page's content (helps with SEO)

2. **Main content** with properly structured headings and content, starting with an H1 heading that matches the title

# Formatting requirements
## Frontmatter
Each page must begin with YAML frontmatter at the very top of the file between triple dashes:

`---

title: Page title

description: Brief description explaining what this page covers.

---`

- The **title** is used for SEO metadata and should be in **Sentence case**
- The **description** should be a brief overview (1-2 sentences) that helps with SEO
- After the frontmatter, your content should start with an H1 heading that matches the title

## Heading hierarchy
- **H1 (#)**: Main title (should match the frontmatter title)
- **H2 (##)**: Major sections
- **H3 (###)**: Subsections
- **H4 (####)**: Sub-subsections (use sparingly)

All headings use sentence case (only first word capitalized).

## Text formatting
- Use **bold** to emphasize important terms
- Use *italics* sparingly for emphasis
- Keep paragraphs short (3-5 sentences maximum)
- Use present tense and active voice
- Use American English

## Code and UI elements
- Use backticks for inline code: `variable`
- Use `[kbd]` For UI buttons and keyboard shortcuts: [kbd]Button Name[kbd]

## Links
- Internal documentation links: `[Page Name](/path/to/page#section)`
- External links: `[Resource Name](https://example.com)`

## Lists
- Use bullet points for non-sequential items
- Use numbered lists for sequential steps
- Keep list items parallel in structure

## Callouts
Callouts highlight important information. Use them in this format:

::: info
General information notes
:::

::: tip
Helpful practices and advice
:::

::: dev
Developer-specific technical details
:::

::: warning
Caution information
:::

::: danger
Critical warnings
:::

## Images
Include images with an image title and aspect ratio:

`![Image title|16/9](image-name.webp)`

For screenshots that link to the Nordcraft editor (allowing readers to see it live in the editor):

`![Image title|16/9](image-name.webp){https://toddle.dev/projects/docs_examples/branches/main/...}`

Image requirements:
- All images should be in `WebP` format
- Images should have a 16/9 aspect ratio
- Create two versions of each image:
  - Standard version: 800px width (e.g., `image-name.webp`)
  - Large version: 3200px width with "-large" suffix (e.g., `image-name-large.webp`)
- Place all images in the same folder as the page's `index.md` file
- If a link is included, ensure that it points to the `main` branch

## Examples
For component examples, use the following format:

`@@@ example
componentUrl: `https://docs_examples.toddle.site/.toddle/custom-element/example-name.js`
editorUrl: `https://toddle.dev/projects/docs_examples/branches/main/components/example-name...`
height: `18rem`

Description of what this example demonstrates.
@@@`

Example requirements:
- Examples must be built in the `docs_examples` Nordcraft project first
- Each example is implemented as a separate web component
- Always link to the `main` branch in the `editorUrl`
- Set an appropriate `height` value in `rem` units
- Add a description after the height (separated by a new line) that will be displayed within the example window

# Content guidelines
## Branding consistency
- Always write "Nordcraft" with a capital "N"
- Use consistent terminology for features and concepts
- Avoid marketing language and unnecessary superlatives like "powerful" or "best"
- Don't include version information that will become outdated

## Page structure
1. **Introduction**: Begin with a brief explanation of the feature or concept
2. **Main content**: Explain key concepts with clear examples or images
3. **Related information**: Link to relevant documentation throughout the page where appropriate

Each page should be self-contained and understandable on its own, while still connecting to the broader documentation through relevant links.

## Writing style
- **Clear and concise**: Use simple, direct language
- **Formal but approachable**: Professional but not academic
- **Action-oriented**: Focus on how to use features
- **User-focused**: Address the reader directly ("you")

## Common sections
Depending on the page type, consider including:
- **Definition**: What is this feature?
- **Purpose**: Why would someone use it?
- **Example**: How does it work in practice?
- **Steps**: How to implement it
- **Best practices**: Tips for optimal usage
- **Common issues**: Troubleshooting guidance

# Common mistakes to avoid
- Using unnecessary words or marketing language
- Including placeholder text or TODOs
- Embedding personal opinions or subjective assessments
- Creating circular references or linking to non-existent pages
- Including screenshots that reveal user data
- Using inconsistent formatting or terminology


Following these guidelines will help ensure that the Nordcraft documentation remains consistent, clear and helpful for all users.

# Contributing via GitHub
Since the Nordcraft documentation is hosted on [GitHub](https://github.com/toddledev/documentation), you will need to follow standard Git workflows to contribute:
1. **Fork the repository**: Create your own copy of the documentation repository
2. **Clone locally**: Download your fork to your local machine
3. **Create a branch**: Make a new branch for your contribution
4. **Make changes**: Edit or add files following the guidelines in this document
5. **Test your changes**: 
    - Use the [preview](#previewing-documentation) feature to verify your documentation looks correct
    - Test all links to ensure they point to valid pages
    - Review your content for clarity, accuracy, and completeness
    - Check that images display properly and have appropriate title
    - Verify that all examples work correctly, demonstrate the intended functionality and have working links to the editor
    - Ensure all formatting is consistent with the documentation guidelines
6. **Commit and push**: Save your changes and upload them to your fork
7. **Create a pull request**: Submit your changes from your fork to the main repository

## Pull request process
When submitting a pull request (PR):
1. **Ensure relevance**: PRs should address an existing issue or have been discussed with the team beforehand
2. **Provide a clear title**: Summarize what your changes accomplish
3. **Add a detailed description**: Explain the purpose of your changes
4. **Reference issues**: If your changes address an existing issue, reference it
5. **Be responsive**: Watch for comments or requests for changes from reviewers

After submitting your pull request, the Nordcraft team will review your contribution. They may suggest changes or improvements before merging your work into the main documentation.

## Previewing documentation
To preview documentation pages while you're working on them:
1. Add the query parameter `?mode=preview` to the URL of any documentation page
2. A preview configuration panel will appear at the bottom of the page
3. Enter the following information in the input fields:
   - Repository owner (e.g., `nordcraftdev`)
   - Repository name (e.g., `documentation`)
   - Branch name (e.g., `main` or your feature branch)
4. Click the [kbd]Update[kbd] button to load and preview the documentation from your specified source

This preview feature allows you to see how your changes will look before they're published, making it easier to identify and fix formatting issues.

# Code of conduct
By participating in the Nordcraft documentation project, you agree to abide by the project's [Code of Conduct](https://github.com/toddledev/documentation/blob/main/CODE_OF_CONDUCT.md). This ensures a welcoming and inclusive environment for all contributors.

# Questions and support
If you have questions about contributing to the documentation or need assistance with your contributions:
- Open an issue in the documentation repository for discussion
- Contact the Nordcraft team through the official channels
- Ask in the community forums or discussion areas

The Nordcraft team is committed to helping new contributors and appreciates your efforts to improve the Nordcraft documentation.