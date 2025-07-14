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

## Cloudflare Workers Configuration

Cloudflare automatically builds and deploys from the GitHub repository when changes are pushed to main.

### Setup in Cloudflare Dashboard
1. Connect your GitHub repository to Cloudflare
2. Cloudflare will use `wrangler.toml` for configuration
3. Automatic deployments trigger on push to main

### Local Development
```bash
npm run build
npx wrangler dev  # Test locally
npm run deploy    # Deploy manually if needed
```

## Enabling GitHub Pages

For Storybook deployment:
1. Go to Settings > Pages
2. Set Source to "GitHub Actions"