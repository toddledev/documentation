---
title: Authentication
description:
---

# Authentication
Authentication enables users to verify their identity, allowing you to control access to specific data and features in your application.

A typical authentication flow consists of these key steps:
1. User provides credentials
2. Server validates and issues an access token
3. Client stores the token securely
4. Client includes the token with API requests
5. Server validates the token and grants access

This approach lets you implement secure authentication while keeping sensitive verification logic on your backend server.

In Nordcraft, authentication is handled through API connections, allowing you to:
- Choose your preferred authentication system
- Integrate with existing providers
- Follow security best practices
- Support various authentication methods

::: info
Authentication should always be handled by your backend service. Nordcraft focuses on frontend development and provides secure ways to handle tokens received from authentication providers.
:::

## Storing access tokens
Access tokens represent user authorization and must be protected from unauthorized access. Store tokens in HTTP-only cookies for security:
- Cannot be accessed by client-side JavaScript
- Protected against cross-site scripting (XSS) attacks
- Automatically included with requests via the Nordcraft proxy

There are two approaches for storing access tokens securely in Nordcraft:

### Set HTTP-only cookie directly

::: danger
missing image ![Set Session Cookies action|16/9](set-session-cookies.webp)
:::

For login flows where users enter credentials directly in your application:
1. Create a backend API endpoint to validate credentials and return an access token
2. In your Nordcraft application, create a workflow to call this API
3. Add the **Set Session Cookies** action to the `On success` callback event to set an HTTP-only cookie
4. Set the returned access token and expiration time in their respective inputs

### Use redirect authentication
For OAuth or third-party authentication providers that use redirects (like Supabase, Auth0 or Firebase):
1. Redirect users to the authentication provider
2. Configure the provider to redirect back to your application at `/.nordcraft?access_token=<Your access token>`
3. Nordcraft automatically stores this token in a secure HTTP-only cookie
4. Optionally redirect users to a specific page after authentication using the query parameter `redirect_to=<URL>`

## Adding authentication to API requests
Once you have stored an access token, you will need to include it in your API requests to authenticate the user:

::: danger
missing image ![Adding authorization header|16/9](auth-header.webp)
:::

For bearer token authentication:
1. Select your API in the [data panel](/the-editor/data-panel)
2. In the **Headers** tab of the API panel, click the [kbd]+[kbd] button to add a new header
3. Select `Authorization` as the header name
4. The value is set by default to output `Bearer <access_token>`, using `Concatenate` and `Get Http-Only Cookie` formulas  

::: info
API requests must be proxied through Nordcraft's Edge network for HTTP-only cookies to be included. This is enabled by default in the **Advanced** tab of your API configuration.
:::

# Browser plugin for development
For authentication to work correctly in the Nordcraft editor during development, you must install the Nordcraft browser extension:
- Install [Chrome extension](https://chromewebstore.google.com/detail/toddle/hfhgjncckomifajhndceigiaiojhlllp)
- Install [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/toddle/)

::: info
The extension is only needed for development in the Nordcraft editor. Users of your published application won't need to install anything.
:::

# Security guidelines
Follow these security guidelines when implementing authentication:
- **Short token lifetimes**: Keep access tokens short-lived (hours, not days)
- **Use refresh tokens**: Implement refresh tokens for seamless token renewal
- **Enforce HTTPS**: Use HTTPS for all authentication-related traffic
- **Secure token storage**: Store tokens in HTTP-only, secure cookies
- **Backend token validation**: Ensure backend validates tokens for every request
- **Proper logout**: Clear tokens on both client and server upon logout
- **Avoid client-side storage**: Never store sensitive data in `localStorage` or `sessionStorage`
- **Secure redirects**: Ensure `redirect_uri` is secure and properly configured