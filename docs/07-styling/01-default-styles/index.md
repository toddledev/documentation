---
title: Default styles
description:
---

# Default styles
A **reset stylesheet** is applied to elements by default, ensuring consistent rendering across different browsers.

Browsers have their own default styles that can vary significantly, causing inconsistencies in how web pages are rendered. By neutralizing these defaults, the reset stylesheet creates a clean baseline, ensuring your project looks consistent across all browsers.

# Key benefits
- **Cross-Browser consistency**: Elements like headings, margins, paddings and lists appear the same across all browsers
- **Simplified development**: Browser-specific quirks are eliminated, making styling more predictable
- **Cleaner base for custom styles**: Allows developers to build designs without interference from browser defaults
- **Improved maintainability**: Reduces the need for browser-specific overrides, leading to cleaner code

# Flexbox by default
All elements in Nordcraft use `display: flex` by default, offering several advantages over traditional display types:
- Simplified alignment of elements and distribution of space
- Easier implementation of responsive layouts
- Creation of complex, dynamic designs with less code

# Custom styles 
Any custom styles you apply to elements will always override the reset styles. However, when working with external web components that include their own styles, you may need to opt out of Nordcraft’s default reset stylesheet for compatibility.

::: tip
**Excluding from reset styles**: By adding the attribute `data-unset-nordcraft-styles` the element will be ejected from the Nordcraft reset stylesheet entirely.
:::