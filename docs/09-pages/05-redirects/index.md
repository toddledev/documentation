---
title: Configure redirects
description: Learn how to set up up a redirect in Nordcraft to redirect users from one URL to another.
---

# Configure redirects

You can use redirects to redirect or forward one URL to another. When a URL that is targeted for redirection is requested, the server will respond with a redirect response, which includes a specific redirect HTTP status code as well as a URL to navigate to. When a browser receives a redirect response, it will navigate to the URL provided.
Redirects can be permanent or temporary. You may want to use permanent redirects to handle typos or synonyms in URLS, or to protect against broken links when moving to a new domain. You may want to use temporary redirects to keep links operational and discoverable during site maintenance.

Redirects are listed in the [project sidebar](/the-editor/project-sidebar) in the **Pages** section.
Create a redirect by clicking the [kbd]+[kbd] button in the **Pages** section header, and select the **Redirect** tab. You will then see configuration options divided into two main sections:

## Source

The source section defines the URL address that will redirect to another page. In this section you can also configure the URL to include path and query parameters.

### Source: path

- Add path segments by clicking the [kbd]+[kbd] button
- Provide a name for each path segment
- Enable the [kbd]Param[kbd] checkbox to make a path dynamic
  - Set a test value for development purposes
- Remove paths using the [kbd]-[kbd] button

### Source: query

- Add query parameters by clicking the [kbd]+[kbd] button
- Provide a name for each query segment
  - Set a test value for development purposes
- Remove parameters using the [kbd]-[kbd] button

::: tip
If you are not familiar with URL structure, check out the [blog post about URLs](https://blog.nordcraft.com/urls-how-do-they-really-work).
:::

## Redirect to

Use the **Redirect to** section to define the URL that will be the target of the redirect, which you can configure using path and query parameters, just like the **Source**. In this section you can also see a preview of the complete redirect URL, as well as get a preview of the content. The type of preview is determined by the content type of the URL - JSON will be shown in a tree structure, whereas HTML is shown in an iframe, if the redirect allows it.

### Enable and disable the redirect rule

Use the enabled switch input to enable or disable the redirect. You can also conditionally enable or disable the redirect using the [kbd]fx[kbd] button. There are multiple possible use cases for this:

- You could plan redirects to be enabled after a given date, or during a certain campaign period
- You could make sure that redirects are only active if a user has a certain language setting or a cookie present
- You could serve a fallback page for the same source url if a redirect was not enabled for a given request

### Status code

Set the HTTP status code of the redirect. A redirect can be either temporary or permanent, and respond with the proper status code to display that. The supported status codes include:

- 301 Moved permanently
- 302 Found
- 307 Temporary redirect
- 308 Permanent redirect

### URL

Here is where you define the URL you wish to redirect to. Type or paste a complete URL including path, query or hash parameters into the input field, and Nordcraft will arrange it properly given the sections are not already filled.

::: tip
Check out the [MDN documentation on redirections](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections) for more information about using HTTP status codes with redirects.
:::

### Destination: path

- Add path segments by clicking the [kbd]+[kbd] button
- Provide a name for each path segment
- Remove paths using the [kbd]-[kbd] button

### Destination: query

- Add query parameters by clicking the [kbd]+[kbd] button
- Provide a name and a value for each query segment
- Remove parameters using the [kbd]-[kbd] button

### Hash

Set the hash of the redirect. This can be used to target a specific fragment of the URL, such as a section of the page.

::: info
Redirects are only available on paid plans.
:::
