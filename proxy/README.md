# Nordcraft Documentation Proxy

This directory contains the proxy service that powers the Nordcraft documentation site.

The proxy works with the Nordcraft documentation site to provide a seamless experience for users, while enabling contributors to preview their changes using the `?mode=preview` URL parameter.

## Key Features

- **Content Handling**: Fetches and serves documentation content from GitHub or local filesystem
- **Menu Generation**: Builds and serves the documentation navigation structure
- **Contributor Tracking**: Retrieves and displays page contributors via GitHub API
- **Reference Generation**: Dynamically generates formula and action reference documentation from the [Nordcraft repository](https://github.com/nordcraftengine/nordcraft)
- **Search Capability**: Provides documentation search functionality
- **Image Processing**: Handles GDPR-friendly image thumbnails

## Core Components

### Routes

- `fetchContent.ts`: Handles retrieving documentation page content
- `fetchMenu.ts`: Serves the documentation navigation structure
- `search.ts`: Provides search functionality across documentation
- `handleThumbnail.ts`: Proxies video thumbnails without setting cookies


### Build Scripts

- `buildAssets.ts`: Generates static assets for the documentation site (e.g. copies markdown files and generates the menu structure)
- `buildContributors.ts`: Retrieves contributor information for all pages
- `buildSitemap.ts`: Creates a sitemap.xml file for search engines
- `fetchContributors.ts`: Retrieves contributor data from GitHub API
- `libReferences`: Templates for generating reference documentation

## Environment Variables

- `COMMITS_KEY`: GitHub API token for accessing contributor information (optional)

## API Endpoints

- `/content/:owner/:repository/:branch/:path?`: Retrieves page content
- `/menu/:owner/:repository/:branch`: Retrieves navigation structure
- `/contributors/:path?`: Retrieves contributor information for a page
- `/search/:owner/:repository/:branch/:query`: Searches across documentation content
- `/thumbnail/:path`: Serves proxied images

## Development Workflow

You'll need to install [bun for your operating system](https://bun.sh/docs/installation).

### Install dependencies

In the `proxy` directory, run `bun run install` to install dependencies for local development.

### Local development

In the `proxy` directory, run `bun run dev` to start the proxy service in development mode. This does the following:

1. Launches the server (after making changes in md/ts files, you will need to restart the server to see your changes)
2. Uses local environment variables from `.env` (if present) for build scripts
3. Uses local environment variables from `.dev.vars` (if present) for the wrangler application
4. Runs the asset generation scripts:
   - Generates static reference documentation
   - Builds the initial sitemap
   - Pre-fetches contributor information (if `COMMITS_KEY` is available)
5. Content can be served directly from the local filesystem for rapid testing

