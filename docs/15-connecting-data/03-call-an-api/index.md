---
title: Call an API
description:
---

# Call an API
After [configuring an API](/connecting-data/working-with-apis), you need to trigger the call and access the returned data.

There are two ways to trigger API calls:
1. [Auto fetch](#using-auto-fetch): Automatically calls the API on load or when dependencies change
2. [Workflow actions](#using-workflow-actions): Manually trigger the API from workflows

## Using auto fetch

Auto fetch automatically calls your API without requiring manual triggers. This is particularly useful for data that should be loaded immediately when a component appears.

::: danger
missing image ![Auto fetch configuration|16/9](auto-fetch.webp)
:::

To enable [auto fetch](/connecting-data/working-with-apis#auto-fetch-behavior):
1. Navigate to your API in the [data panel](/the-editor/data-panel)
2. Toggle **Auto fetch** on
3. Optionally use a formula for conditional fetching

## Using workflow actions
Workflow actions give you precise control over when APIs are called, typically in response to user interactions or other events.

::: danger
missing image ![API workflow action|16/9](api-workflow-action.webp)
:::

To call an API from a [workflow](/workflows/working-with-workflows):
1. Create or edit a workflow for an event
2. Click [kbd]+[kbd] to add an action
3. Under **APIs**, select your API
4. Specify any input values you want to override, as defined in the API

## API example
The following example demonstrates how to implement a weather card that combines both API calling methods. It uses auto fetch to load weather data when the component mounts and provides a update button that manually triggers the API through a workflow action.

@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-call-an-api.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-call-an-api?rightpanel=style&canvas-width=800&selection=apis.Weather%2520API&canvas-height=800
height: 21rem

This weather card displays the current temperature, and the `Update` button allows you to manually refresh it.
@@@

# API inputs
API inputs let you customize parameters each time you call an API, giving you flexibility to reuse the same endpoint with different values depending on the context.

::: danger
missing image ![API inputs configuration|16/9](api-inputs.webp)
:::

Define inputs for your API:
1. Click [kbd]+[kbd] in the **Inputs** tab
2. Set a name
3. Set a default value, either static or dynamic using the [kbd]fx[kbd] button

When calling the API through a [workflow action](#using-workflow-actions), all defined inputs become available for overriding. 

::: info
Unlike test values which are only used during development, input values serve as actual default values when the API is called with auto-fetch enabled.
:::

# Handling API callbacks
Callbacks are events triggered by API responses, letting you execute specific workflows.

::: danger
missing image ![API callback events|16/9](api-callbacks.webp)
:::

Available callbacks:
- **On success**: For success status (2xx)
- **On error**: For error status (4xx, 5xx)
- **On message**: For streaming responses

Set up callback handling in the **Events** section of the API or workflow action.

The following example demonstrates how to configure and react to an API callback event.

@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-handle-api-callback.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-handle-api-callback?canvas-width=800&rightpanel=events&selection=workflows.AMb8F4.actions.0.onSuccess&canvas-height=800
height: 21rem

When the weather data is successfully updated, a confetti animation is triggered as feedback.
@@@

::: dev
Callback events on the API are executed just before the action-specific events.
:::

# Accessing API data
Once your API call completes, the resulting data is available for use in your application's logic and UI.

::: danger
missing image ![Accessing API data|16/9](accessing-api-data.webp)
:::

Access API response in the [formula editor](/formulas/overview#the-formula-editor):
1. In the formula editor add a new node and select the API endpoint from the **APIs** section
2. Choose desired data you need

Available API response data:
- `isLoading`: Indicates if the API call is in progress
- `data`: Contains the successful API response body
- `error`: Holds error information if the API call failed
- `response`: Provides HTTP response details:
    - `status`: HTTP status code
    - `headers`: Response headers
    - `performance`: Performance metrics

::: tip
Use `isLoading` to manage UI states during data fetching (e.g. showing loading indicators, disabling interactions).
:::