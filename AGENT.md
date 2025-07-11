# Personal Homepage - Agent Guide

## Architecture

**Framework**: SvelteKit with TypeScript
**Styling**: Tailwind CSS
**Build Tool**: Vite
**Package Manager**: npm

### Project Structure
```
src/
├── app.html          # Main HTML template
├── routes/           # File-based routing
│   ├── +layout.svelte
│   └── +page.svelte
├── lib/              # Reusable components
└── static/           # Static assets
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
npm run check        # Type checking and linting
npm run check:watch  # Watch mode for type checking
```

## Deployment

### Build
```bash
npm run build        # Creates build/ directory
```

### Deployment Options
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
