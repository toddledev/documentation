---
title: Authentication
description: Implement secure authentication with HTTP-only cookies, token handling and request authorization for protected resources in Nordcraft apps.
---

# Authentication

Authentication enables users to verify their identity, allowing you to control access to specific data and features in your application.

A typical authentication flow consists of these key steps:

1. User provides credentials
2. Server validates and issues an access token
3. Client stores the token securely
4. Client includes the token with API requests
5. Server validates the token and grants access

This approach lets you implement secure authentication while keeping sensitive verification logic on your backend.

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
- Automatically available in requests via the Nordcraft proxy

There are two approaches for storing access tokens securely in Nordcraft:

### Set HTTP-only cookie directly

![Set HTTP-only cookie|16/9](set-http-only-cookie.webp)

For login flows where users enter credentials directly in your application:

1. Create a workflow to call your authentication endpoint
2. Add the **Set Session Cookies** action to the `On success` callback event to set an HTTP-only cookie
3. Set the returned access token and expiration time in their respective inputs

::: warning
If you want to execute actions after the cookies were set (e.g. redirect to your main app), make sure that those actions are executed `On success` of the `Set Sessions Cookie` action to make sure the cookies were actually set.
:::

### Use redirect authentication

For OAuth or third-party authentication providers that use redirects (like Supabase, Auth0 or Firebase):

1. Redirect users to the authentication provider
2. Configure the provider to redirect back to your application at `/.nordcraft?access_token=<Your access token>`
3. Nordcraft automatically stores this token in a secure HTTP-only cookie
4. Optionally redirect users to a specific page after authentication using the query parameter `redirect_to=<URL>`

## Adding authentication to API requests

Once you have stored an access token, you will need to include it in your API requests to authenticate the user:

![Add authorization header|16/9](add-authorization-header.webp)

For bearer token authentication:

1. Select your API in the [data panel](/the-editor/data-panel)
2. In the **Headers** tab of the API panel, click the [kbd]+[kbd] button to add a new header
3. Select `Authorization` as the header name
4. The value is set by default to output `Bearer {{cookies.access_token}}`, using `Concatenate` and `Get Http-Only Cookie` formulas. The value for the `access_token` will be replaced in the Nordcraft proxy with the actual token.

::: info
API requests must be proxied through Nordcraft's Edge network for HTTP-only cookies to be included. This is enabled by default in the **Advanced** tab of your API configuration.
:::

# Authentication in the editor environment

Working with authenticated features in the Nordcraft editor requires a specific setup to securely share authentication between preview and editor environments.

Follow these steps to develop authenticated features:

1. **Install browser extension**

   - [Chrome extension](https://chromewebstore.google.com/detail/toddle/hfhgjncckomifajhndceigiaiojhlllp)
   - [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/toddle/)

2. **Log in through preview page**

   - Authentication must first occur in the preview environment. You can open the preview through the [Bottom Bar](/the-editor/bottom-bar)
   - With the extension installed, your authentication cookies are securely copied to the editor

3. **Develop in the editor**
   - Once authenticated, you can build and test protected features directly in the editor
   - No need to log in separately for the editor environment

::: info
The browser extension is only required for development in the Nordcraft editor. Users of your published application will not need to install anything.
:::

# Security guidelines

Follow these security guidelines when implementing authentication:

- **Short token lifetimes**: Keep access tokens short-lived (hours, not days)
- **Use refresh tokens**: Implement refresh tokens for seamless token renewal. Most BaaS providers support this out of the box
- **Secure token storage**: Store tokens in HTTP-only, secure cookies
- **Backend token validation**: Ensure backend validates tokens for every request
- **Proper logout**: Clear tokens on both client and server upon logout
- **Avoid client-side storage**: Never store sensitive data in `localStorage` or `sessionStorage`
- **No hardcoded tokens**: Never store sensitive API keys or tokens in Nordcraft. Just store keys that are safe to store in a browser.
