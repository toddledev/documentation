---
title: Configure proxies
description: Learn how to set up up a proxy in Nordcraft to map one URL to another.
---

# Configure proxies

Proxies provides a way of mapping a URL to another. It will hide the path of the destination on the server, so that it appears that the location does not change.
You can use proxies to serve content from domains that are no longer in use, but where the content is still relevant. You may also want to use proxies to serve utility content like sitemaps, robot.txt and ads.txt files.

Proxies are listed in the [project sidebar](/the-editor/project-sidebar) in the **Pages** section.
Create a proxy by clicking the [kbd]+[kbd] button in the **Pages** section header, and select the **Proxy** tab. You will then see configuration options divided into two main sections:

## Source

The source section defines the URL address that will proxy to another page. In this section you can also configure the URL to include path and query parameters.

### Source: path

- Add path segments by clicking the [kbd]+[kbd] button
- For each path segment, provide a name
- Enable the [kbd]Param[kbd] checkbox to make a path dynamic
  - Set a test value for development purposes
- Remove paths using the [kbd]-[kbd] button

### Source: query

- Add query parameters by clicking the [kbd]+[kbd] button
- For each query segment, provide a name
  - Set a test value for development purposes
- Remove parameters using the [kbd]-[kbd] button

::: tip
If you are not familiar with URL structure, check out the [blog post about URLs](https://blog.nordcraft.com/urls-how-do-they-really-work).
:::

## Proxy to

Use the **Proxy to** section to define the URL that will be the target of the proxy, which you can configure using path and query parameters, just like the **Source**. In this section you can also see a preview of the complete proxy URL, as well as get a preview of the content. The type of preview is determined by the content type of the URL - JSON will be shown in a tree structure, whereas HTML is shown in an iframe, if the proxy allows it.

### URL

Here is where you define the URL you wish to proxy. Type or paste a complete URL including path, query or hash parameters into the input field, and Nordcraft will arrange it properly given the sections are not already filled.

### Destination: path

- Add path segments by clicking the [kbd]+[kbd] button
- For each path segment, provide a name
- Remove paths using the [kbd]-[kbd] button

### Destination: query

- Add query parameters by clicking the [kbd]Add query[kbd] button
- For each query segment, provide a name and a value
- Remove parameters using the [kbd]-[kbd] button

::: info
Proxies are only available on paid plans.
:::
