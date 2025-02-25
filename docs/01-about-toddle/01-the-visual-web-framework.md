# Markdown Syntax Test File

This file contains examples of all standard markdown syntax elements for testing purposes.

## Headers

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

### Ordered List

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Another indented item
4. Fourth item

### Unordered List

- Item 1
- Item 2
  - Nested item 1
  - Nested item 2
- Item 3

Alternative syntax:

- Dash item 1
- Dash item 2
  - Nested dash item
- Dash item 3

* Plus item 1
* Plus item 2
  - Nested plus item
* Plus item 3

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [ ] This is a task list item

## Links

[Inline-style link](https://www.example.com)

[Inline-style link with title](https://www.example.com "Example Website")

[Reference-style link][arbitrary reference text]

[Relative reference to a repository file](../blob/master/LICENSE)

[Link to a section within the page](#headers)

URLs and URLs in angle brackets will automatically get turned into links:
https://www.example.com or <https://www.example.com>

[arbitrary reference text]: https://www.example.com
[1]: https://www.example.com
[link text itself]: https://www.examplebyitself.com

## Images

Here's an example image link:

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style image:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting

Inline `code` has `back-ticks around` it.

```javascript
// JavaScript code block
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
# Python code block
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

## Tables

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

Simple tables:

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Blockquotes

> Blockquotes are very handy to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

Nested blockquotes:

> First level blockquote
>
> > Nested blockquote
> >
> > > Deeper nested blockquote

## Horizontal Rules

Three or more of the following characters create a horizontal rule:

---

Hyphens

---

Asterisks

---

Underscores

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's just a line break (in some parsers, not all).

## Escaping Characters

\*literal asterisks\*

\`literal backticks\`

## HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Footnotes

Here is a simple footnote[^1].

[^1]: My reference.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Abbreviations

The HTML specification is maintained by the W3C.

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium

## Additional Elements

### Superscript/Subscript

Superscript: 30^th^

Subscript: H~2~O

### Mark (highlight)

==highlighted text==

# Custom

::: dev
This is basically a pure JavaScript function without any fuzz:::

::: tip
Directus (_duh REKT iss_) is Latin for: _laid straight, arranged in lines_.\
The broadest goal of our platform is to present data in a simple, orderly, and intuitive way.:::

::: warning
Directus (_duh REKT iss_) is Latin for: _laid straight, arranged in lines_.\
The broadest goal of our platform is to present data in a simple, orderly, and intuitive way.
:::
