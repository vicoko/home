# Personal Homepage - Agent Guide

## Project Info

**Name**: home (personal-homepage)

## Architecture

**Framework**: SvelteKit with TypeScript
**Styling**: Tailwind CSS
**Build Tool**: Vite 6
**Package Manager**: npm
**Component Development**: Storybook 9

### Project Structure
```
src/
├── app.html          # Main HTML template
├── app.css           # Global styles with Tailwind directives
├── app.d.ts          # TypeScript app declarations
├── routes/           # File-based routing
│   ├── +layout.svelte    # Root layout with navigation
│   ├── +page.svelte      # Home page
│   └── profile/
│       └── +page.svelte  # Profile page
├── lib/              # Reusable components
│   └── components/
│       ├── SkillBar.svelte     # Skill progress component
│       ├── ProjectCard.svelte  # Project showcase component
│       └── ContactLink.svelte  # Contact link component
├── stories/          # Storybook stories
│   ├── SkillBar.stories.ts
│   ├── ProjectCard.stories.ts
│   ├── ContactLink.stories.ts
│   └── Pages.stories.ts
└── static/           # Static assets
    └── favicon.ico
```

### Configuration Files
```
.storybook/           # Storybook configuration
├── main.ts
└── preview.ts       # Imports Tailwind CSS
tailwind.config.js   # Tailwind configuration
postcss.config.js    # PostCSS with Tailwind
vite.config.js       # Vite with SvelteKit plugin
tsconfig.json        # TypeScript configuration
wrangler.toml        # Cloudflare Pages config
```

## Development Commands

### Setup
```bash
npm install           # Install dependencies
```

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Quality Checks
```bash
npm run check        # Type checking with svelte-check
npm run check:watch  # Watch mode for type checking
```

### Storybook
```bash
npm run storybook    # Start Storybook dev server (http://localhost:6006)
npm run build-storybook  # Build static Storybook
```

## Pages and Routes

### Home Page (`/`)
- Welcome message
- Link to profile page

### Profile Page (`/profile`)
- About Me section with avatar placeholder
- Skills section with visual progress bars
- Projects showcase with technology tags
- Contact information with social links

## Components

### SkillBar
- Props: `name: string`, `level: number`
- Displays skill with progress bar

### ProjectCard
- Props: `name: string`, `description: string`, `tech: string[]`, `link?: string`
- Displays project information in a card format

### ContactLink
- Props: `href: string`, `icon: string`, `label: string`
- Displays a contact link with icon

## Deployment

### Build
```bash
npm run build        # Creates build/ directory
```

### Deployment Options
- **Cloudflare Workers**: Configured with wrangler.toml
- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **Static hosting**: Upload build/ directory contents

### Environment Variables
Create `.env` file for local development:
```
# Add environment variables here
```

## Code Style

- Use TypeScript for type safety
- Follow Svelte conventions for component structure
- Use Tailwind CSS for styling
- Keep components small and focused
- Create Storybook stories for all components
- Extract reusable components when appropriate

## Dependencies

### Main Dependencies
- @sveltejs/adapter-cloudflare: ^4.7.4
- @sveltejs/kit: ^2.8.5
- @sveltejs/vite-plugin-svelte: ^5.0.0
- svelte: ^5.14.2
- vite: ^6.0.5

### Styling
- tailwindcss: ^3.4.17
- autoprefixer: ^10.4.20
- postcss: ^8.4.49

### Development Tools
- typescript: ^5.7.2
- svelte-check: ^4.0.8
- storybook: ^9.0.16
- @storybook/sveltekit: ^9.0.16
