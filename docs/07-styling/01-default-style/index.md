---
title: Default Style
description: toddle docs
---

# Default Style
As default styles, a reset stylesheet is applied to elements to ensure consistency across different browsers. 

Browsers often have their own default styles, which can vary significantly and cause inconsistencies in how web pages are rendered. By neutralizing these defaults, the reset stylesheet creates a clean baseline, ensuring your project looks consistent across all browsers.

# Key Benefits
- **Cross-Browser Consistency**: Standardizes elements like headings, margins, paddings, and lists across all browsers.
- **Simplified Development**: Eliminates browser-specific quirks, making styling more predictable.
- **Cleaner Base for Custom Styles**: Allows developers to build designs from scratch without interference from browser defaults.
- **Improved Maintainability**: Reduces the need for browser-specific overrides, leading to cleaner, more manageable code.

Popular reset stylesheets like Eric Meyer’s reset.css and Normalize.css achieve these benefits. Toddle follows similar principles but introduces modern adjustments.

# Using Flexbox by Default
All elements in toddle use `display: flex` by default, offering greater flexibility and ease of use compared to traditional display types like block, inline and table. Flexbox simplifies alignment and distribution of space, making responsive layouts easier to build. It enables complex, dynamic designs with less code, ensuring consistent layouts across screen sizes.

# Custom Styles 
Any custom styles you apply to elements will always override toddle's reset styles. However, when working with external web components that include their own styles, you may need to opt out of toddle’s default reset stylesheet for compatibility.

::: tip
**Excluding from Reset Styles**: By adding the attribute `data-unset-toddle-styles` the element will be ejected from the toddle reset stylesheet entirely.
:::

# Excluding from Reset Styles
By adding the attribute `data-unset-toddle-styles` the element will be ejected from the toddle reset stylesheet entirely.
