---
title: Connecting data overview
description: Connect Nordcraft frontend applications to external data sources through APIs, with clear separation between visual interfaces and backend systems.
---

# Connecting data
In Nordcraft, connecting to external data is accomplished through APIs. This allows your application to communicate with external services, databases, and backends, enabling dynamic and interactive experiences for your users.

Modern web applications are typically divided into two parts:
1. **Frontend (Nordcraft)**: The user interface running in the browser
2. **Backend**: Server-side systems handling data storage and business logic

This separation allows each part to focus on specific responsibilities, creating more maintainable and scalable applications.

# Why Nordcraft focuses on frontend
Nordcraft focuses on visual frontend development because frontend and backend are fundamentally different with distinct requirements, responsibilities, security implications, etc. A separation of concerns allows for more specialized tools in both areas.

Rather than competing with existing backend systems, Nordcraft embraces collaboration with tools that specialize in backend development, such as Supabase, Xano and many more.

This frontend-focused approach offers several advantages for developers and teams:
- **Specialized tooling**: Optimized tooling for visual development without backend compromises
- **Simplified development**: Clearer separation of concerns leads to more manageable projects
- **Backend flexibility**: Connect to any backend system that meets your requirements
- **Technical independence**: Teams can choose backend technologies based on their expertise or requirements

# API layer
The API layer acts as the communication bridge between your Nordcraft frontend and any backend system:
- **Request/Response Protocol**: How your application communicates with backends (usually HTTP/HTTPS)
- **Data Formatting**: How information is structured throughout the request and response
- **Endpoints**: Specific URLs that provide access to backend functionality
- **Authentication**: Security mechanisms to protect data and verify users
- **Error Handling**: How problems are communicated back to the frontend

Through Nordcraft's API capabilities, your application can perform tasks like retrieving data, saving state, authenticating users and connecting to services, while maintaining a clear separation between frontend and backend responsibilities.

# Working with data in Nordcraft
The following pages in this section cover the specific aspects of working with external data:
- [Working with APIs](/connecting-data/working-with-apis): Setting up API endpoints
- [Call an API](/connecting-data/call-an-api): Triggering requests and using data
- [Authentication](/connecting-data/authentication): Securing data access
- [Streaming](/connecting-data/streaming): Working with real-time data
- [Advanced API features](/connecting-data/advanced-features): Additional configuration options
- [Services](/connecting-data/services): Connecting to specialized backend providers

::: tip
For best performance, consider which data should be fetched during server-side rendering (SSR) and which can be loaded after the page renders.
:::

::: info
For more information about the philosophy behind this separation of concerns, check out the blog post [One Size Does Not Fit All](https://toddle.dev/blog/one-size-does-not-fit-all).
:::