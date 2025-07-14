# GitHub Workflows

This directory contains GitHub Actions workflows for CI/CD.

## Workflows

### CI (`ci.yml`)
- Runs on every push to main and pull requests
- Tests on Node.js 18.x and 20.x
- Runs type checking
- Builds the project and Storybook
- Uploads build artifacts

### Deploy Storybook (`deploy-storybook.yml`)
- Deploys Storybook to GitHub Pages
- Runs on push to main
- Available at: `https://[username].github.io/home`

### Deploy to Cloudflare Pages (`deploy-cloudflare.yml`)
- Deploys the main app to Cloudflare Pages
- Runs on push to main and pull requests
- Requires secrets:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

### Release (`release.yml`)
- Creates GitHub releases when tags are pushed
- Generates changelog automatically
- Attaches build artifacts

## Configuration Files

### `dependabot.yml`
- Automatically updates npm dependencies weekly
- Updates GitHub Actions weekly
- Groups updates for easier review

### `renovate.json`
- Alternative to Dependabot (choose one)
- Groups minor/patch updates
- Groups Svelte and Storybook packages

### `pull_request_template.md`
- Template for pull request descriptions
- Includes checklist for contributors

### `FUNDING.yml`
- GitHub Sponsors configuration

## Required Secrets

For Cloudflare deployment:
1. Go to Settings > Secrets and variables > Actions
2. Add:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## Enabling GitHub Pages

For Storybook deployment:
1. Go to Settings > Pages
2. Set Source to "GitHub Actions"