# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DalBot AI Trading System Landing Page** - A production-ready SaaS landing page for an AI-powered crypto futures trading platform built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The site follows Apple/Stripe design principles with bilingual support (Korean/English) and conversion-focused messaging.

## Common Development Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:3000
npm run build           # Create production build
npm start               # Run production server
npm run lint            # ESLint code quality check

# Testing (Manual)
# Open http://localhost:3000 in browser
# Use test-checklist.html for comprehensive manual testing
# Test responsive design using browser DevTools device toolbar
```

## Architecture & Code Structure

### Entry Points & Flow
- **Main Entry**: [app/page.tsx](app/page.tsx) - Client component that orchestrates all sections
- **Layout**: [app/layout.tsx](app/layout.tsx) - Root layout with metadata, SEO, and global styles
- **Execution Flow**:
  1. `page.tsx` initializes language state (Korean default)
  2. Detects browser language and loads preference from localStorage
  3. Renders Navigation component (fixed header)
  4. Renders 7 main sections sequentially as independent components

### Component Architecture
All page sections are in `/components/` and follow this pattern:
- Receive `language` prop from parent (`'ko' | 'en'`)
- Contain bilingual `content` object with `ko` and `en` keys
- Use Framer Motion for scroll-triggered animations
- Self-contained with inline TypeScript interfaces

**Section Components** (in render order):
1. [Navigation.tsx](components/Navigation.tsx) - Fixed header with language toggle
2. [HeroSection.tsx](components/HeroSection.tsx) - Hero with live profit ticker
3. [ProfitRealitySection.tsx](components/ProfitRealitySection.tsx) - **Interactive calculator** (see below)
4. [SimplicitySection.tsx](components/SimplicitySection.tsx) - 3-step process
5. [TechnologySection.tsx](components/TechnologySection.tsx) - AI credibility messaging
6. [PricingSection.tsx](components/PricingSection.tsx) - 3 pricing tiers
7. [TrustSection.tsx](components/TrustSection.tsx) - Dashboard preview
8. [FinalCTASection.tsx](components/FinalCTASection.tsx) - Final CTA with urgency

### Key Interactive Elements

**Investment Calculator** ([ProfitRealitySection.tsx:67-80](components/ProfitRealitySection.tsx#L67-L80)):
- Real-time profit calculations based on investment amount (₩500k - ₩10M)
- Three risk presets: Conservative (2%), Balanced (3%), Aggressive (4%)
- Displays expected, best-case, and worst-case monthly returns
- To modify rates: Edit the `rates` object in `calculateReturns()` function

**Language System**:
- Client-side detection via `navigator.language`
- Persists preference to localStorage
- Toggle in Navigation component updates all sections via prop drilling
- No i18n library needed - simple object lookups

### Styling System

**Tailwind Configuration** ([tailwind.config.js](tailwind.config.js)):
- Custom colors: `apple-blue`, `profit-green`, `risk-amber`
- System font stack for Korean/English (Apple SD Gothic Neo, Noto Sans KR)
- Custom animations: `fade-up`, `fade-in`, `slide-up`

**Global Styles** ([app/globals.css](app/globals.css)):
- CSS variables for colors, spacing, typography
- 8px grid system
- Container max-width: 1440px
- Custom utility classes for Tailwind

**Responsive Breakpoints**:
- Mobile: 320px - 767px (single column)
- Tablet: 768px - 1023px (two columns)
- Desktop: 1024px+ (full layout)
- Tailwind prefixes: `md:` (768px), `lg:` (1024px)

### Animation Patterns

All sections use Framer Motion with consistent pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```
- Animations trigger on scroll into viewport
- `once: true` prevents re-triggering
- GPU-accelerated transforms for performance

## Quick Navigation for Common Tasks

**To change text/copy**:
- Edit the `content` object inside each component (lines 10-60 typically)
- Structure: `content.ko` for Korean, `content.en` for English

**To modify calculator rates**:
- [ProfitRealitySection.tsx:67-80](components/ProfitRealitySection.tsx#L67-L80) - Edit `rates` object

**To change colors**:
- [tailwind.config.js:10-14](tailwind.config.js#L10-L14) - Custom color definitions
- [app/globals.css](app/globals.css) - CSS variables (`:root`)

**To add a new section**:
1. Create component in `/components/` following existing pattern
2. Import and add to [app/page.tsx](app/page.tsx) render sequence
3. Pass `language` prop to component

**To update SEO/metadata**:
- [app/layout.tsx](app/layout.tsx) - Metadata object with title, description, OpenGraph

## Performance & Optimization

**Targets** (from README):
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Total Bundle Size: < 400KB (achieved)

**Key Optimizations**:
- System fonts only (no web font loading)
- Framer Motion animations use GPU transforms
- No external API calls (static content)
- Next.js automatic code splitting

## Important Context & Constraints

**Risk Disclosure Requirements**:
- Always display investment warnings prominently
- Never promise guaranteed returns
- Calculator shows worst-case scenarios
- See [ProfitRealitySection.tsx](components/ProfitRealitySection.tsx) warning implementation

**Bilingual Architecture**:
- All user-facing text must have both Korean and English versions
- Maintain consistency between languages
- Korean is default for South Korean target market

**Design Principles**:
- Apple/Stripe aesthetic - clean, minimal, typography-focused
- Conversion-focused messaging with transparent risk disclosure
- Mobile-first responsive design
- Profit expectation drives conversion funnel

## Future Enhancement Areas

**Potential API Integrations**:
- Live trading data for dashboard preview ([TrustSection.tsx](components/TrustSection.tsx))
- Real-time profit calculations from API ([ProfitRealitySection.tsx](components/ProfitRealitySection.tsx))
- Newsletter signup form submission
- Free trial signup flow

**Testing Infrastructure**:
- No automated testing currently configured
- To add: Install Jest + React Testing Library
- Manual testing checklist available in `test-checklist.html`

**Scalability Considerations**:
- Current: Simple prop drilling for language state
- Future: Consider React Context or next-i18next for SSR i18n
- Current: No state management library needed
- Future: Add Zustand/Redux if application state grows

## Technical Stack Summary

- **Framework**: Next.js 14.1.0 (App Directory)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.3.0 + PostCSS
- **Animation**: Framer Motion 11.0.3
- **Additional**: react-countup, clsx, tailwind-merge
- **Build Target**: ES5 for browser compatibility
- **Deployment**: Static export compatible (Netlify, Vercel, GitHub Pages)
