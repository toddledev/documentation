---
title: Proxy
description: Set up a proxy, that will map an incoming URL to another.
---

# Proxy configuration

To configure a proxy, create or select it in the [project sidebar](/the-editor/project-sidebar) in the **Page** section.

In the proxy editor, you are able to configure the proxy.

The configuration is divided into two main sections:

## Source

The source section defines the URL address that will proxy to another page. The origin of the source is the current app, and the url can be configured to include path and query parameters.

### Path

- Add path segments by clicking the [kbd]Add path[kbd] button
- For each path segment, provide a name
- Enable the [kbd]Param[kbd] checkbox to make a path dynamic
- Set a test value for development purposes
- Remove paths using the [kbd]-[kbd] button

### Query

- Add query parameters by clicking the [kbd]Add query[kbd] button
- For each query segment, provide a name
- Set a test value for development
- Remove parameters using the [kbd]-[kbd] button

::: tip
If you are not familiar with URL structure, check out the [blog post about URLs](https://blog.nordcraft.com/urls-how-do-they-really-work).
:::

## proxy

The proxy section defines the URL that will be the target of the proxy, and can be configured just like the source.

### URL

Set the origin of the proxy. Type or paste a complete URL including path, query or hash parameters into the input, and it will arrange it properly given the sections are not already filled.

### Enabled

Conditionally enable or disable the proxy. This can be used to target a proxy to only be shown to a specific type of user.

### Path

- Add path segments by clicking the [kbd]Add path[kbd] button
- For each path segment, provide a name
- Remove paths using the [kbd]-[kbd] button

### Query

- Add query parameters by clicking the [kbd]Add query[kbd] button
- For each query segment, provide a name and a value
- Remove parameters using the [kbd]-[kbd] button