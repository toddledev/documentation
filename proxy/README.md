# Nordcraft Documentation Proxy

This directory contains the proxy service that powers the Nordcraft documentation site. 

## Key Features

- **Content Handling**: Fetches and serves documentation content from GitHub or local filesystem
- **Menu Generation**: Builds and serves the documentation navigation structure
- **Contributor Tracking**: Retrieves and displays page contributors via GitHub API
- **Reference Generation**: Dynamically generates formula and action reference documentation from the [Nordcraft repository](https://github.com/nordcraftengine/nordcraft)
- **Search Capability**: Provides documentation search functionality
- **Image Processing**: Handles image thumbnails and optimizations
- **CORS Management**: Controls cross-origin access to documentation resources

## Core Components

### Routes

- `fetchContent.ts`: Handles retrieving documentation page content
- `fetchMenu.ts`: Serves the documentation navigation structure
- `search.ts`: Provides search functionality across documentation
- `handleThumbnail.ts`: Processes documentation images

### Utilities

- `fetchMenuItems.ts`: Logic for building menu structure from repository files
- `fetchPageData.ts`: Retrieves individual page content
- `helpers.ts`: Common utility functions
- `cors.ts`: CORS configuration and management
- `jsonLoader.ts`: Loads and processes JSON data
- `markdownLoader.ts`: Loads and processes Markdown content

### Build Scripts

- `buildAssets.ts`: Generates static assets for the documentation site
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
- `/thumbnail/:path`: Serves optimized images

## Development Workflow

## Prerequisites

You'll need to install [bun for your operating system](https://bun.sh/docs/installation).

### `bun run dev`

In the `proxy` directory, run `bun run dev` to start the proxy service in development mode. This does the following:

1. Launches the server with hot-reloading enabled
2. Watches for file changes in the source code
3. Automatically rebuilds and restarts the server when changes are detected
4. Enables detailed logging for debugging purposes
5. Uses local environment variables from `.env.local` (if present)
6. Runs the asset generation scripts:
   - Generates static reference documentation
   - Builds the initial sitemap
   - Pre-fetches contributor information (if `COMMITS_KEY` is available)
7. Content can be served directly from the local filesystem for rapid testing

### `bun run build`

The `bun run build` command prepares the proxy for production deployment:

1. Compiles TypeScript code to optimized JavaScript
2. Bundles dependencies for improved performance
3. Creates a production-ready distribution in the `dist` directory
4. Optimizes for performance and reduces bundle size

After building, the proxy can be deployed to a hosting environment or started locally with `bun run start`.

## Integration with Documentation

The proxy works with the Nordcraft documentation site to provide a seamless experience for users, while enabling contributors to preview their changes using the `?mode=preview` URL parameter.
