---
title: "Your Article Title Here (50-60 characters)"
slug: "your-article-slug-here"
description: "Your article description here (150-160 characters)"
category: "Getting Started"
date: "2024-08-06"
author: "John Doe"
contributors: ["Jane Smith", "Bob Johnson"]
---

# Your Article Title Here

Brief introduction to the topic.

## Main Content Section

Your main content goes here. Use headings, paragraphs, lists, and other Markdown formatting as needed to structure your content.

### Subsection

Content for subsection...

## Callouts

We can use markdown-based callouts for different types of information:

> #### Note
>
> This is an informational callout. Use it for general notes and information.

> #### Warning
>
> This is a warning callout. Use it to warn users about potential issues or important considerations.

> #### Error
>
> This is an error callout. Use it to highlight critical issues or errors that users must avoid.

## Examples

Here's a basic example using JavaScript:

```javascript
/**
 * @param {Args} args
 * @param {Ctx} ctx
 */
function test(args, ctx) {
  const { param1, param2 } = args;

  if (param1 && param2) {
    ctx.triggerActionEvent("bothParametersProvided", { param1, param2 });
  } else {
    ctx.triggerActionEvent("missingParameters", { param1, param2 });
  }
}
```

Remember to explain your code examples and how they relate to the topic being discussed.

## Images

If you need to include images, use the following format:

![Alt text for image](https://docs.toddle.dev/path/to/image.webp)

Note: Always use .webp format for images. Before adding images to the documentation, compress them using [squoosh.app](https://squoosh.app) to ensure optimal performance.

## Related Topics

- [Link to Related Topic 1](https://docs.toddle.dev/path/to/related-topic-1)
- [Link to Related Topic 2](https://docs.toddle.dev/path/to/related-topic-2)

## Further Reading

Provide links to additional resources or documentation pages that might be helpful for readers who want to dive deeper into the topic.

Examples:

- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN Web Docs: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

---

Last updated: {DATE}
