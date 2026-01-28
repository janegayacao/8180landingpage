# 8180 Studio — Brand Guidelines

**Version 1.0**  
Last Updated: January 21, 2026

---

## Design Philosophy

8180 Studio embodies **Industrial Minimalism meets High-Tech** with a dark-mode-first approach. The design emphasizes:

- **Tactile Maximalism**: 1px borders, subtle drop shadows, grid-heavy engineered aesthetic
- **Glassmorphism Effects**: Subtle transparency and backdrop blur for depth
- **Unadulterated Productivity**: Clean, functional, no-nonsense design
- **Professional & Cutting-Edge**: Balance between industrial and modern tech aesthetic

---

## Brand Colors

### Primary Brand Colors

```
Blue Bolt (Primary):    #00AAFF / rgb(0, 170, 255)
Charcoal (Main):        #353535 / rgb(53, 53, 53)
White:                  #FFFFFF / rgb(255, 255, 255)
```

### Blue Bolt Palette

Our signature electric blue that represents innovation, precision, and energy.

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Blue-1 | `#e6f7ff` | rgb(230, 247, 255) | Subtle backgrounds, hover states |
| Blue-2 | `#c2ebff` | rgb(194, 235, 255) | Light accents |
| Blue-3 | `#91daff` | rgb(145, 218, 255) | Medium accents |
| Blue-4 | `#5ec9ff` | rgb(94, 201, 255) | Active states |
| Blue-5 | `#2eb9ff` | rgb(46, 185, 255) | Interactive elements |
| **Blue-Primary** | `#00aaff` | rgb(0, 170, 255) | **CTAs, primary actions, key accents** |
| Blue-Secondary | `#0062ff` | rgb(0, 98, 255) | Secondary actions, links |
| Blue-8 | `#0053d9` | rgb(0, 83, 217) | Pressed states |
| Blue-9 | `#0046b5` | rgb(0, 70, 181) | Deep accents |
| Blue-10 | `#003891` | rgb(0, 56, 145) | Darkest blue for contrast |

### Charcoal Palette

Our sophisticated grayscale system for backgrounds, surfaces, and typography.

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Charcoal-1 | `#ebebeb` | rgb(235, 235, 235) | Lightest gray, light mode |
| Charcoal-2 | `#cfcfcf` | rgb(207, 207, 207) | Borders, dividers (light mode) |
| Charcoal-3 | `#a8a8a8` | rgb(168, 168, 168) | Disabled states |
| Charcoal-4 | `#808080` | rgb(128, 128, 128) | Secondary text (light mode) |
| Charcoal-5 | `#595959` | rgb(89, 89, 89) | Tertiary text |
| **Charcoal-Main** | `#353535` | rgb(53, 53, 53) | **Brand charcoal, primary surfaces** |
| Charcoal-7 | `#2d2d2d` | rgb(45, 45, 45) | Card backgrounds |
| Charcoal-8 | `#262626` | rgb(38, 38, 38) | Elevated surfaces |
| Charcoal-9 | `#1e1e1e` | rgb(30, 30, 30) | Secondary backgrounds |
| Charcoal-10 | `#121212` | rgb(24, 24, 24) | Primary background (dark mode) |

---

## Current Website Color Usage

### Backgrounds
- Primary Background: `#121212` (Charcoal-10)
- Card/Surface Background: `#1A1A1A` (between Charcoal-9 and Charcoal-8)
- Elevated Surfaces: `#2A2A2A` (lighter than Charcoal-7)

### Text
- Primary Text: `#FFFFFF` (White)
- Secondary Text: `#E5E5E5` (light gray)
- Tertiary Text: `#808080` (Charcoal-4)

### Accents & Interactive
- Primary CTAs: `#00AAFF` (Blue-Primary)
- CTA Glow: `rgba(0, 170, 255, 0.3)` - `rgba(0, 170, 255, 0.5)`
- Hover Borders: `#00AAFF` with opacity variants
- Focus States: `#00AAFF`
- Icons: `#00AAFF` (Blue-Primary)

### Borders & Dividers
- Subtle Borders: `rgba(255, 255, 255, 0.1)` (white/10)
- Card Borders: `rgba(255, 255, 255, 0.1)` (white/10)
- Hover Borders: `#00AAFF` with 30-50% opacity

---

## Logo System

8180 Studio uses a three-tier logo system designed for maximum versatility across all contexts and applications. The Master Logo combines the icon and wordmark for complete brand representation.

### Logo Variants

#### 1. White Master Logo (Primary) ⭐
- **File:** `LogoMasterWhite1.tsx` (SVG React component)
- **Type:** Combined icon + wordmark (horizontal lockup)
- **Dimensions:** 239×116px (viewBox ratio ~2.06:1)
- **Colors:** White (#FFFFFF) with Blue Bolt to Blue-Secondary gradient (#00AAFF → #0062FF)
- **Use Case:** **PRIMARY logo for all major brand touchpoints**

**Current Implementation:**
- Recommended Width: 180px - 240px for optimal legibility
- Minimum Size: 120px width
- Ideal For: Main branding, hero sections, presentations, marketing materials

**Use This Logo When:**
- Maximum brand impact is needed
- Ample horizontal space is available
- First impression contexts (landing pages, pitch decks)
- Print materials and merchandise
- Partner/sponsor placement
- Official communications

#### 2. White Wordmark Logo (Secondary)
- **File:** `LogoWordmarkWhite1.tsx` (SVG React component)
- **Type:** Wordmark text only (no icon)
- **Dimensions:** Variable width (maintains aspect ratio)
- **Colors:** White (#FFFFFF), Blue Bolt (#00AAFF), Charcoal (#353535)
- **Use Case:** Navigation headers, footers, compact horizontal spaces

**Current Implementation:**
- Header: 96px width (`w-24` in Tailwind)
- Footer: 112px width (`w-28` in Tailwind)
- Minimum Size: 64px width for legibility

**Use This Logo When:**
- Navigation bars and sticky headers
- Footer branding
- Email signatures
- Horizontal space is limited but text is important
- Within application UI (sidebar, top bar)

#### 3. White Icon Logo (Tertiary)
- **File:** `LogoIconWhite1.tsx` (SVG React component)
- **Type:** Icon/mark only (no wordmark text)
- **Dimensions:** 125×110px (viewBox ratio ~1.14:1)
- **Colors:** White (#FFFFFF) with Blue Bolt to Blue-Secondary gradient (#00AAFF → #0062FF)
- **Use Case:** Favicon, app icons, social media profiles, ultra-compact spaces

**Recommended Sizes:**
- Favicon: 32×32px, 64×64px, 128×128px
- Social Media Avatar: 400×400px minimum
- Mobile App Icon: 512×512px, 1024×1024px
- Compact UI: 48px - 96px
- Loading spinners: 32px - 64px

**Use This Logo When:**
- Browser favicon
- Mobile app icon
- Social media profile pictures
- Compact UI elements (notifications, badges)
- Loading states
- Watermarks
- Small-scale applications (< 100px width)
- Square format required

### Logo Selection Decision Tree

```
Need maximum brand impact? → White Master Logo (Primary)
  ↓ No
Horizontal space available (200px+)? → White Master Logo (Primary)
  ↓ No
Need text but space is tight (80-150px)? → White Wordmark Logo (Secondary)
  ↓ No
Square or very compact space (< 80px)? → White Icon Logo (Tertiary)
```

### Logo Usage Guidelines by Context

| Context | Recommended Logo | Min Size |
|---------|-----------------|----------|
| Website Hero Section | Master Logo | 200px |
| Navigation Header | Wordmark Logo | 80px |
| Footer | Master or Wordmark | 112px |
| Email Signature | Master Logo | 180px |
| Business Card | Master Logo | 2 inches |
| Presentations | Master Logo | 240px |
| Social Media Cover | Master Logo | Variable |
| Social Media Avatar | Icon Logo | 400×400px |
| Favicon | Icon Logo | 64×64px |
| Mobile App Icon | Icon Logo | 1024×1024px |
| Loading States | Icon Logo | 48px |
| Watermark | Icon Logo | 64px |
| Print Materials | Master Logo | 2 inches |

### Logo Colors & Variants

**Current Available:**
- ✅ White Master Logo — Primary combined logo for dark backgrounds
- ✅ White Wordmark Logo — Text-only for compact horizontal spaces
- ✅ White Icon Logo — Icon-only for square/tiny spaces

**Needed (Future):**
- ⚪ Dark Master Logo — For light backgrounds
- ⚪ Dark Wordmark Logo — For light backgrounds
- ⚪ Dark Icon Logo — For light backgrounds
- ⚪ Monochrome variations for print/fax
- ⚪ Single-color versions (all white, all blue)

### Technical Specifications

**Master Logo (Primary):**
```tsx
import LogoMasterWhite from "@/imports/LogoMasterWhite1";

// Usage
<div className="w-60"> {/* 240px - ideal size */}
  <LogoMasterWhite />
</div>

// Minimum size
<div className="w-32"> {/* 128px */}
  <LogoMasterWhite />
</div>
```

**Wordmark Logo (Secondary):**
```tsx
import LogoWordmarkWhite from "@/imports/LogoWordmarkWhite1";

// Usage
<div className="w-24"> {/* 96px */}
  <LogoWordmarkWhite />
</div>
```

**Icon Logo (Tertiary):**
```tsx
import LogoIconWhite from "@/imports/LogoIconWhite1";

// Usage
<div className="w-16 h-14"> {/* Maintains 125:110 ratio */}
  <LogoIconWhite />
</div>
```

### Logo Gradient

Both the Master Logo and Icon Logo feature the signature 8180 gradient:
- **Start:** Blue Bolt (#00AAFF)
- **End:** Blue-Secondary (#0062FF)
- **Direction:** Vertical (top to bottom)
- **Purpose:** Adds depth, dimension, and premium feel
- **Location:** Applied to the icon element within both logos

### Clear Space & Protection

**Minimum Clear Space:**
- Master Logo: 24px on all sides (equivalent to the height of "8" in the wordmark)
- Wordmark: 16px on all sides
- Icon: 12px on all sides

**Protection Rules:**
- Never distort or stretch logos (maintain aspect ratios)
- Never rotate logos (except Icon at 90° if absolutely necessary)
- Never apply filters, effects, or additional shadows
- Never change colors outside approved palette
- Never place on low-contrast backgrounds
- Never separate icon from wordmark in Master Logo
- Maintain minimum sizes for legibility
- Always use on appropriate background contrast

**Background Requirements:**
- White logos require dark backgrounds (#121212 - #353535 recommended)
- Minimum contrast ratio: 4.5:1 (WCAG AA compliance)
- Avoid busy, patterned, or distracting backgrounds
- Use solid colors or subtle gradients only
- Test legibility before finalizing placement

### Logo Don'ts

❌ Don't change the gradient colors or direction  
❌ Don't separate the icon from wordmark (in Master Logo)  
❌ Don't outline, add strokes, or add drop shadows  
❌ Don't use on conflicting brand colors  
❌ Don't compress or distort aspect ratio  
❌ Don't use low-resolution or pixelated versions  
❌ Don't place on gradients that reduce legibility  
❌ Don't recreate or redraw the logos  
❌ Don't use Wordmark when Master Logo fits  
❌ Don't use Icon when Wordmark or Master fits  
❌ Don't add effects like glows, bevels, or textures  
❌ Don't rotate or tilt (except Icon in specific cases)  

### Logo Hierarchy Best Practices

**Order of Preference:**
1. **First Choice:** White Master Logo (if space allows 180px+ width)
2. **Second Choice:** White Wordmark Logo (if space is 80-180px width)
3. **Last Resort:** White Icon Logo (only if space is < 80px or square)

**Why This Matters:**
- Master Logo provides maximum brand recognition and impact
- Wordmark maintains text legibility when Master is too large
- Icon is for extreme space constraints only

### File Structure

```
/src/imports/
  ├── LogoMasterWhite1.tsx    — PRIMARY: Combined icon + wordmark
  ├── LogoWordmarkWhite1.tsx  — Secondary: Wordmark text only
  ├── LogoIconWhite1.tsx      — Tertiary: Icon mark only
  ├── svg-u0tml7uisv.ts       — Master Logo SVG paths
  ├── svg-4vqytugq5k.ts       — Wordmark SVG paths
  └── svg-utb9ix4agh.ts       — Icon SVG paths
```

### Logo Dimensions Reference

| Logo | Width | Height | Aspect Ratio | ViewBox |
|------|-------|--------|--------------|---------|
| Master Logo | Variable | Variable | ~2.06:1 | 239×116 |
| Wordmark Logo | Variable | Variable | Wide | Variable |
| Icon Logo | Variable | Variable | ~1.14:1 | 125×110 |

---

## Typography

### Font Families

**Primary Brand Fonts:**

**Agdasima** — Titles and Labels
- Family: `'Agdasima', sans-serif`
- Weights: 400 (Regular), 700 (Bold)
- Usage: Headings (h1-h6), labels, buttons, numbers, uppercase labels
- Character: Bold, geometric, engineered aesthetic
- Google Fonts: `family=Agdasima:wght@400;700`

**Open Sauce Sans** — Body Copy and Clarity  
- Family: `'Open Sans', sans-serif`
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- Usage: Body text, paragraphs, form inputs, UI elements
- Character: Clean, legible, professional
- Variations: Use weight variations for emphasis and hierarchy
- Google Fonts: `family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800`

### CSS Implementation

```css
/* Font Variables */
:root {
  --font-title: 'Agdasima', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}

/* Base Typography */
body {
  font-family: var(--font-body);
  font-weight: 400;
}

/* Titles use Agdasima */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-title);
}

/* Labels and buttons use Agdasima */
label, button {
  font-family: var(--font-title);
}

/* Body copy uses Open Sauce Sans */
p, span, div, input, textarea, select {
  font-family: var(--font-body);
}
```

### Font Hierarchy

**Display/Hero (Agdasima):**
- Family: Agdasima
- Weight: Regular (400) or Bold (700)
- Tracking: Tight (`tracking-tighter` or `tracking-tight`)
- Sizes: 6xl - 8rem (96px - 128px)
- Usage: Hero headlines, large impact text

**Headings (Agdasima):**
- H1: 5xl - 6xl (`text-5xl md:text-6xl`) — Bold (700)
- H2: 4xl - 5xl (`text-4xl md:text-5xl`) — Bold (700)
- H3: 3xl (`text-3xl`) — Bold (700)
- H4: 2xl (`text-2xl`) — Bold (700)

**Body (Open Sauce Sans):**
- Large: 20px (`text-xl`) — Regular (400)
- Regular: 18px (`text-lg`) — Regular (400)
- Small: 14px (`text-sm`) — Regular (400)
- Light variation: Weight 300 for subtle text
- Bold variation: Weight 600-700 for emphasis

**Labels & Buttons (Agdasima):**
- Size: 14px - 18px (`text-sm` to `text-lg`)
- Weight: Regular (400) or Bold (700)
- Transform: Often `uppercase` with `tracking-wider`
- Usage: Navigation, CTAs, form labels, category tags

**Numbers & Stats (Agdasima):**
- Size: 32px - 96px (`text-3xl` to `text-6xl`)
- Weight: Bold (700)
- Usage: Process numbers (01, 02), statistics (100+, 60%), large numerals

---

## Component Styling

### Cards
```css
Background: bg-gradient-to-br from-white/5 to-transparent
Border: border border-white/10
Backdrop: backdrop-blur-sm
Shadow: shadow-[0_8px_32px_rgba(0,0,0,0.3)]
Hover: hover:border-[#00AAFF]/50
```

### Buttons (Primary CTA)
```css
Background: bg-[#00AAFF]
Text: text-white
Border: border border-[#00AAFF]
Shadow: shadow-[0_0_20px_rgba(0,170,255,0.3)]
Hover: hover:shadow-[0_0_30px_rgba(0,170,255,0.5)]
Padding: px-10 py-5
```

### Form Inputs
```css
Background: bg-transparent
Border: border border-white/20
Focus: focus:border-[#00AAFF]
Backdrop: backdrop-blur-sm
```

### Icons
- Size: 16px - 48px depending on context
- Color: `text-[#00AAFF]` for active/primary
- Color: `text-gray-400` for inactive
- Hover: `hover:text-[#00AAFF]`

---

## Glassmorphism Effects

### Standard Glass Card
```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.1)
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
```

### Nested Glass Element
```css
background: rgba(0, 0, 0, 0.3)
backdrop-filter: blur(5px)
border: 1px solid rgba(255, 255, 255, 0.1)
```

---

## Accessibility Standards

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Current ratios:
  - White on `#121212`: ~15:1 ✓
  - `#00AAFF` on `#121212`: ~4.8:1 ✓
  - Gray-300 on `#121212`: ~8.5:1 ✓

### Interactive Elements
- Minimum touch target: 44×44px
- Visible focus indicators using `#00AAFF`
- Skip links for keyboard navigation
- Proper ARIA labels on all interactive elements

### Motion
- Respect `prefers-reduced-motion` media query
- Provide alternatives for animated content
- Keep animations smooth (0.3s - 0.8s duration)

---

## Grid System

### Layout Grid
```css
Max Width: 1600px (max-w-[1600px])
Padding: 24px (px-6)
Gap: 16px - 64px depending on context
```

### Bento Grid (Services)
```css
Grid: grid-cols-1 md:grid-cols-4
Gap: 16px (gap-4)
Row Height: 280px (auto-rows-[280px])
Spans: 2×2 for large cards
```

---

## Spacing Scale

Based on Tailwind's 4px scale:
- **Micro**: 4px, 8px, 12px (`gap-1`, `gap-2`, `gap-3`)
- **Small**: 16px, 20px, 24px (`gap-4`, `gap-5`, `gap-6`)
- **Medium**: 32px, 48px, 64px (`gap-8`, `gap-12`, `gap-16`)
- **Large**: 96px, 128px (`gap-24`, `gap-32`)

Section Spacing:
- Between sections: 128px vertical (`py-32`)
- Within sections: 48px - 64px (`mb-12`, `mb-16`)

---

## Animation Guidelines

### Timing Functions
- Default: `cubic-bezier(0.22, 1, 0.36, 1)` (smooth ease-out)
- Quick interactions: `duration-300` (0.3s)
- Page loads: `duration-800` to `duration-1000` (0.8s - 1s)

### Motion Patterns
- Fade + Slide: `opacity-0 y-30` → `opacity-1 y-0`
- Stagger delays: 0.1s - 0.2s per element
- Hover transforms: `scale-105`, `translate-x-1`

---

## Voice & Messaging

### Brand Personality
- Direct & No-Nonsense
- Technically Confident
- Results-Focused
- Anti-Corporate

### Key Phrases
- "Unadulterated Productivity"
- "No BS. No Politics. Just Results."
- "Builders Who Left Corporate"
- "Your Workflow, Our Solution"

### Tone
- **Professional** but not stuffy
- **Confident** without being arrogant
- **Technical** while remaining accessible
- **Honest** and transparent

---

## File Organization

```
/src
  /app
    /components
      - HeaderV2.tsx
      - HeroV2.tsx
      - ServicesV2.tsx
      - AboutV2.tsx
      - WorkflowV2.tsx
      - PortfolioV2.tsx
      - ContactFooterV2.tsx
    - App.tsx
  /imports
    - LogoMasterWhite1.tsx (Official Logo)
    - Swatches.tsx (Color Palette Reference)
  /styles
    - fonts.css
    - theme.css
```

---

## Design Checklist

Before deploying any component:

- [ ] Uses official Blue Bolt (#00AAFF) for all accents
- [ ] Backgrounds use Charcoal-10 (#121212) or palette
- [ ] Typography contrast meets WCAG AA
- [ ] Interactive elements have focus states
- [ ] Respects prefers-reduced-motion
- [ ] Mobile responsive (320px - 1600px+)
- [ ] 1px borders with proper opacity
- [ ] Glassmorphism effects applied consistently
- [ ] Logo usage follows size guidelines
- [ ] Spacing follows 4px scale system

---

## Contact

**8180 Studio**  
Design & Build Team  
© 2026 8180 Studio. No BS. Just Results.

---

*This document should be referenced for all design and development decisions to ensure brand consistency across all touchpoints.*