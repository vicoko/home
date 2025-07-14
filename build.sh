#!/bin/bash
# Build script for Cloudflare Pages

# Install dependencies
npm ci

# Build the project
npm run build

# The output is already in .svelte-kit/cloudflare
echo "Build complete!"