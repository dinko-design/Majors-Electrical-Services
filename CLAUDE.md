# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Majors Electrical Services** website built with React, TypeScript, and Vite. The project was originally designed in Figma and exported as a code bundle. It's a multi-page business website for an electrical services company featuring service listings, locations, offers, team information, and contact forms.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build
```

Note: This project uses `npm` as the package manager.

## Architecture

### Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion fork)
- **Forms**: React Hook Form

### Project Structure

```
src/
├── main.tsx                  # Application entry point
├── app/
│   ├── App.tsx              # Main app with route definitions
│   ├── components/
│   │   ├── ui/              # Reusable UI components (shadcn-style)
│   │   ├── layout/          # Layout components (Navbar, Footer, MobileBottomNav)
│   │   ├── forms/           # Form components (QuickServiceForm)
│   │   └── figma/           # Figma-specific components (ImageWithFallback)
│   ├── data/                # Static data (navigation, services, locations, offers, team)
│   └── pages/               # Route pages (Home, Services, About, etc.)
├── assets/                   # Static image assets
└── styles/                   # Global styles (index.css, fonts.css, theme.css)
```

### Routing Structure

The application uses React Router with a shared `<Layout>` wrapper that provides:
- Navbar (desktop navigation)
- Footer
- MobileBottomNav (mobile bottom navigation)
- Auto-scroll to top on route changes

**Key Routes:**
- `/` - Home page
- `/services` - Services listing
- `/services/:serviceId` - Individual service pages
- `/locations` - Locations listing
- `/locations/:city` - Individual location pages
- `/who-we-serve` - Customer segments overview
- `/who-we-serve/:segmentId` - Segment-specific pages
- `/offers` - Special offers listing
- `/offers/:slug` - Individual offer details
- `/about`, `/careers`, `/contact`, `/privacy`, `/terms`, `/sitemap`

### Data Architecture

Static content is organized in `src/app/data/`:
- `navigation.ts` - Service categories with icons and descriptions (5 categories: essential, safety, lighting, tech, commercial)
- `locations.ts` - Service area locations
- `offers.ts` - Special offers and promotions
- `team.ts` - Team member information
- `segmentData.tsx` - Customer segment data (residential, commercial, etc.)

Service categories use Lucide icons and follow a consistent structure with id, title, icon, description, and items.

### Component Patterns

**UI Components** (`src/app/components/ui/`):
- Built with Radix UI primitives and styled with Tailwind CSS
- Follow the shadcn/ui pattern (class-variance-authority for variants)
- Utility function `cn()` from `utils.ts` for conditional class names
- `use-mobile.ts` hook for responsive breakpoints

**Layout Components**:
- `Layout.tsx` - Main layout wrapper with scroll-to-top effect
- `Navbar.tsx` - Desktop navigation
- `Footer.tsx` - Site footer
- `MobileBottomNav.tsx` - Fixed bottom navigation for mobile devices

### Path Aliases

The project uses two path aliases configured in both `vite.config.ts` and `tsconfig.json`:
- `@/*` → `./src/*`
- `asset/*` → `./src/assets/*`

Always use these aliases for imports instead of relative paths.

### Styling

- **Tailwind CSS 4.1.12** with Vite plugin
- Custom theme variables in `src/styles/theme.css`
- Global styles in `src/styles/index.css`
- Font declarations in `src/styles/fonts.css`
- Never add `.css`, `.tsx`, or `.ts` files to `assetsInclude` in Vite config

### Important Notes

1. **Do Not Remove Required Plugins**: Both React and Tailwind Vite plugins are required for the Figma Make integration, even if Tailwind doesn't appear to be actively used.

2. **Asset Handling**: SVG and CSV files are configured for raw imports via `assetsInclude` in Vite config. Never add CSS or TypeScript files to this array.

3. **Mobile-First Design**: The layout includes special handling for mobile devices with a bottom navigation bar and extra padding to prevent content overlap.

4. **Type Safety**: The project uses strict TypeScript settings including `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.

5. **Figma Integration**: This project was generated from a Figma design. The original design is at https://www.figma.com/design/Q1rAWW3U7xyXV6tKHk1tjt/Majors-Electrical-Services
