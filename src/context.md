
## Overview
A complete, professional IT/Development portfolio website with creative code-themed loading animation, smooth scroll sections, and polished interactions. Features include hero section, about, skills showcase, certificates, projects gallery, and contact form. Fully responsive with unique backgrounds and thoughtful animations throughout.

## Available Imports

**Components:**
- `Portfolio` - (named export) Main portfolio component with all sections

**Types:**
- `PortfolioProps` - (TypeScript interface, not exported) Props interface for Portfolio component

## Component Props & Types

```typescript
interface PortfolioProps {
  'data-id'?: string  // Optional data-id attribute for component identification
}
```

All props are optional. The component works out of the box with no required props.

## Import Patterns

```typescript
// Named export
import { Portfolio } from './Portfolio'
```

## Usage Requirements

**Dependencies:**
- Requires `framer-motion` for animations
- Requires `lucide-react` for icons
- Requires Tailwind CSS for styling

**No special context providers or wrappers needed** - the component is self-contained.

## How It Works

The portfolio displays as a single-page application with smooth scrolling between sections:

1. **Loading Screen**: Animated code typing effect that simulates building the portfolio
2. **Sticky Navigation**: Auto-highlights active section, smooth scrolls to sections
3. **Home Section**: Hero with photo, animated greeting, role badges, and CTA buttons
4. **About Section**: 4-panel specialization grid with professional description
5. **Skills Section**: Animated tech stack cards organized by Frontend/Backend/Database
6. **Certificates Section**: 4 certificate cards with external links and hover effects
7. **Projects Section**: 5 projects with alternating image/description layout and demo links
8. **Contact Section**: Social links + contact form (uses mailto for submission)

**Interactive Features:**
- Smooth scroll animations on section transitions
- Hover effects on interactive elements (buttons, cards, links)
- Staggered entrance animations for lists and grids
- Mobile-responsive hamburger menu
- Form validation and mailto submission

## Layout & Appearance

- **Full-width sections**: Each section spans 100% width with unique gradient backgrounds
- **Responsive**: Mobile-first design with breakpoints at sm (640px), md (768px), lg (1024px)
- **Unique section backgrounds**: Each section has distinct gradient combinations
- **Consistent spacing**: Max-width container (7xl) centers content with proper padding

**Section Backgrounds:**
- Home: Gray gradient with pattern overlay
- About: Blue/slate gradient
- Skills: Purple/indigo gradient with animated blobs
- Certificates: Emerald/teal/cyan gradient
- Projects: Gray/slate with floating gradient circles
- Contact: Indigo/purple/pink gradient with rotating elements

## Styling & Theming

The component uses Tailwind CSS with custom gradient combinations. No additional Tailwind config required - all colors use standard Tailwind classes.

**Customization:**
- Accepts `className` prop (though not commonly needed as it's full-page)
- Modify gradient colors by editing section background classes
- Adjust animation timing in Framer Motion props
- Update content by editing component source files

**Color Scheme:**
- Primary accent: Green (home), Blue (about), Purple (skills), Emerald (certificates), Pink/Purple (contact)
- Background: Dark gradients (gray-900, slate-900, etc.)
- Text: White headings, gray-300/400 body text

## Code Examples

### Example 1: Basic Usage
```typescript
import { Portfolio } from './Portfolio'

function App() {
  return <Portfolio />
}
```

### Example 2: With Data ID
```typescript
import { Portfolio } from './Portfolio'

function App() {
  return <Portfolio data-id="main-portfolio" />
}
```

### Example 3: In a Larger Application
```typescript
import { Portfolio } from './Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Example 4: Custom Container
```typescript
import { Portfolio } from './Portfolio'

function App() {
  return (
    <div className="app-container">
      <Portfolio />
    </div>
  )
}
```

**Note:** The Portfolio component is designed to be full-page and handles its own layout, backgrounds, and navigation. It's best used as a standalone page component rather than embedded within other layouts.
