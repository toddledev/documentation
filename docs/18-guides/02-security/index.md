---
title: App Security Guide
description: Secure your Nordcraft app by avoiding frontend secrets and using a backend to handle sensitive API operations safely
---

# How to Keep Your Nordcraft App Secure

If you're building with **Nordcraft**, it's important to understand that it's a **front-end only** tool. That means everything you add—every bit of logic, config, or data—is visible to anyone using your app.

This guide covers the key things you should know (and avoid) to keep your Nordcraft app safe, especially when working with APIs or anything remotely sensitive.

---

## First Things First: What “Front-End Only” Really Means

Nordcraft runs **entirely in the browser**. There’s no backend, no secret layer, and nothing hidden from users. So when we say front-end only, we mean:

* Users can see **everything** — your UI logic, network requests, and any data you embed
* There’s **no built-in way** to protect API keys or hide sensitive operations
* It’s fantastic for rapid development and sharing ideas, but it’s not a secure place to put private stuff

---

## Don’t Store Secrets in Your App

This is the big one. **Never** put secrets—like API keys, tokens, or credentials—directly into your Nordcraft project. If it’s in your project, it’s exposed.

### Things you absolutely shouldn’t include:

* API keys (e.g., OpenAI, Google Maps, Firebase...)
* Backend service credentials (like Supabase service roles)
* Secret tokens (OAuth, JWTs, ...)
* Private endpoints or anything involving sensitive user data

If you do add something like this by mistake, remove it immediately and rotate the key.

---

## Use a Backend to Handle Sensitive Stuff

Need to work with APIs that require secrets? Or want to protect access to certain features? That’s where a **backend** comes in. Nordcraft doesn’t stop you from building full apps—it just means **you’ll need a separate server or service to do the secure work.**

Your backend should:

* Store and manage API keys
* Handle user authentication and permissions
* Rate-limit usage and protect against abuse
* Proxy API requests so the front-end never sees your keys

### Popular options that work well with Nordcraft:

| Platform               | Why use it                                        |
| ---------------------- | ------------------------------------------------- |
| **Xano**               | Great for no-code or low-code backend needs       |
| **Supabase**           | Ideal for devs, open-source, works like Firebase  |
| **Cloudflare Workers** | Lightweight, fast, and scalable for handling APIs |

Even if your backend just forwards requests to another API, it’s a massive improvement over exposing secrets in the browser.

---

## A Few More Tips for Security

Here are a few best practices that are worth following no matter what kind of app you're building:

### 1. Don’t trust the front-end

This is true for any web app, but especially here: **don’t rely on front-end logic to protect anything.** Users can bypass checks, modify code in the browser, and access anything the front-end touches.

Always enforce permissions and checks on the backend.

### 2. Be smart about authentication

If your app has users, logins, or restricted features:

* Handle sign-ins through your backend
* Use secure cookies or access tokens (preferably HTTP-only)
* Make sure every sensitive route checks permissions

Don't let your front-end “guess” if a user is allowed to do something—have the backend confirm it.

### 3. Watch your API usage

If your app talks to an API:

* Make sure your backend is rate-limiting requests
* Avoid overexposing third-party APIs in the browser
* Monitor logs for abuse if your app starts to grow

### 4. Don’t leak metadata or environment details

Even small things like debug flags, API base URLs, or project structure can help attackers understand your setup. Keep it clean and minimal.

---

## What About Future Nordcraft Features?

Right now, Nordcraft doesn’t support features like:

* Secret storage
* Built-in API protection or rate-limiting
* Secure server-side logic

Those things **might** come in future updates, but for now, the safest route is to assume everything is public and handle any secure logic outside the app.

---

## Summary: What to Do and What to Avoid

| Do this                                | Avoid this                                          |
| -------------------------------------- | --------------------------------------------------- |
| Use Nordcraft for front-end UI         | Putting API keys directly in your app               |
| Set up a backend to call APIs          | Authenticating or authorising only on the front-end |
| Use cookies or tokens from the backend | Sharing links to apps with secrets inside           |
| Proxy sensitive requests securely      | Assuming your app is private—it’s not               |

---

## Final Thoughts: Don’t Share Secrets. Ever.

One last reminder: **everything in a Nordcraft project is public by design.** Even if you’re just testing or sharing with teammates, treat it like it’s live and open.

If you need to work with protected data or secure APIs, always build that logic outside the app. Nordcraft’s job is to handle the UI—and it does that really well—but security is still in your hands.
