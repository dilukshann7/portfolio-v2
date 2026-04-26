---
name: "Portfolio v2"
description: "Personal portfolio of Dilukshan Niranjan, full-stack developer and AI engineer."
colors:
  obsidian: "oklch(15% 0 0)"
  warm-paper: "oklch(97% 0.01 75)"
  ink: "oklch(20% 0 0)"
  ash: "oklch(55.6% 0 0)"
  silver: "oklch(70.8% 0 0)"
  parchment: "oklch(94% 0.01 85)"
  sage: "oklch(92% 0.03 120)"
  amber: "oklch(75% 0.15 75)"
  electric-violet: "oklch(50% 0.25 300)"
  destructive: "oklch(57.7% 0.245 27.325)"
typography:
  display:
    fontFamily: '"Relationship of mélodrame", Georgia, serif'
    fontSize: "clamp(3.5rem, 6.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.015em"
  headline:
    fontFamily: '"Relationship of mélodrame", Georgia, serif'
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.5px"
  title:
    fontFamily: '"Space Grotesk", system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025rem"
  body:
    fontFamily: '"DM Sans", system-ui, sans-serif'
    fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: '"Space Grotesk", system-ui, sans-serif'
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
  mono:
    fontFamily: '"JetBrains Mono", "Fira Code", monospace'
    fontSize: "0.65rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  2xl: "18px"
  3xl: "22px"
  4xl: "26px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
    typography: "{typography.label}"
  chip:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "rgba(255, 255, 255, 0.6)"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.7rem"
    typography: "{typography.label}"
  card-dark:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.lg}"
    padding: "2rem"
  card-light:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "2rem"
  nav-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.pill}"
    padding: "0"
    size: "110px 38px"
---

# Design System: Portfolio v2

## 1. Overview

**Creative North Star: "The Obsidian Atelier"**

This portfolio is a craftsman's studio at night: dark surfaces, warm task lighting, and each project section gets its own material palette. The design system is built around the tension between deep darkness and warm, intentional light. It is editorial in structure, kinetic in behavior, and precise in execution. Every surface earns its place; nothing is decorative by default.

The system explicitly rejects generic SaaS templates, standard portfolio grids, and the dark-blue developer cliché. It also refuses decoration without purpose: motion, WebGL, and glass effects exist only when they serve content reveal or narrative progression.

**Key Characteristics:**
- Dark hero and footer bookend a light middle with per-section color blocking.
- Typography is the primary vehicle for personality: a custom display face for headlines, a warm sans for body, and a technical mono for metadata.
- Motion is choreographed, not ambient. GSAP scroll triggers and entrance sequences guide the reader through the narrative.
- Elevation is atmospheric, not structural. Depth comes from environmental layers (light rays, particle galaxy, 3D models) behind flat content surfaces.
- Two visual modes coexist: the dark editorial homepage and a lighter, more technical contact surface.

## 2. Colors

The palette character is an editorial darkroom: deep blacks, warm paper, and single accents that appear rarely and with intent.

### Primary
- **Obsidian** (`oklch(15% 0 0)` / `#0a0a0a`): The dark base. Used for the hero background, body in dark mode, the full-screen navigation overlay, and the footer. Not pure black; it holds ink without feeling like a void.
- **Warm Paper** (`oklch(97% 0.01 75)` / `#fff8ef`): The primary text color on dark surfaces. Used for hero headlines, primary button fills, and proof signals. It is off-white with a faint warm tint, never clinical `#fff`.

### Secondary
- **Ink** (`oklch(20% 0 0)` / `#1a1a1e`): The near-black used for text on light surfaces (projects section, blog, contact page). Slightly lighter than obsidian to avoid optical heaviness on white backgrounds.
- **Ash** (`oklch(55.6% 0 0)` / `#8e8e93`): Muted text on light surfaces. Used for secondary copy, placeholders, and disabled states.

### Neutral
- **Silver** (`oklch(70.8% 0 0)` / `#b5b5b5`): Borders, dividers, and subtle hover states. Used for navigation link hovers, input focus borders, and footer credits.
- **Parchment** (`oklch(94% 0.01 85)` / `#f0ece3`): A warm off-white used as a section background (AboutCards card-2). It introduces warmth into the light middle without breaking the monochrome discipline.

### Named Rules
**The One Warmth Rule.** The only warm color on the entire site is Warm Paper (`#fff8ef`). Everything else is cool-neutral or per-section thematic. If a second warm tone appears, it must be justified by content, not decoration.

**The No Pure Black Rule.** `#000` is forbidden. The darkest value is Obsidian (`#0a0a0a`). Pure black flattens; Obsidian holds depth.

## 3. Typography

**Display Font:** Relationship of mélodrame (with Georgia, serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Label Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Mono Font:** JetBrains Mono (with Fira Code, monospace fallback)

**Character:** The pairing is editorial-meets-technical. The display face carries bespoke personality in headlines; DM Sans keeps body copy warm and readable; Space Grotesk provides structural, confident labels; JetBrains Mono signals precision in metadata and UI chrome.

### Hierarchy
- **Display** (400 weight, `clamp(3.5rem, 6.5vw, 6rem)`, line-height 0.9, letter-spacing 0.015em): Hero headlines and major section titles. Used sparingly; one or two per page maximum.
- **Headline** (400 weight, `clamp(2.5rem, 5vw, 4rem)`, line-height 0.94, letter-spacing -0.5px): Section headings within content areas ("Experienced In", "Featured Work").
- **Title** (700 weight, 1.25rem, line-height 1.2, letter-spacing -0.025rem): Card titles, project names, and sub-section headers. Space Grotesk.
- **Body** (400 weight, `clamp(1.05rem, 1.35vw, 1.25rem)`, line-height 1.5): Paragraphs and descriptions. Max line length 65–75ch. DM Sans.
- **Label** (700 weight, 0.72rem, line-height 1.4, letter-spacing 0.12em, uppercase): Tags, proof signals, CTAs, metadata. Space Grotesk. All caps, tightly tracked.
- **Mono** (500 weight, 0.65rem, line-height 1.4, letter-spacing 0.04em, uppercase): Navigation menu copy, footer credits, availability badges, technical metadata. JetBrains Mono.

### Named Rules
**The Weight Contrast Rule.** Hierarchy is established through scale AND weight contrast, never scale alone. Display is 400; titles are 700; labels are 700 at a much smaller size. Avoid flat scales where every heading is 600.

## 4. Elevation

This system uses atmospheric depth rather than structural shadows. Surfaces are flat at rest. Depth is conveyed through background color changes, glass blur, and environmental effects (WebGL light rays, particle galaxies, 3D models) that sit behind content layers.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.4)`): The hero glass card's shadow. Used once, as a stage for the focal point.
- **Ambient Hover** (`filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))`): Navigation toggle hover state. Extremely subtle.
- **Contact Surface** (`box-shadow: 0 12px 40px rgba(0, 0, 0, 0.09), 0 2px 8px rgba(0, 0, 0, 0.05)`): The contact page form card. The only place layered shadows appear, because it floats over a light background.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, elevation, focus) or as environmental staging (hero glass card). If a shadow is present, it must be justified by one of those two roles.

## 5. Components

### Buttons
- **Shape:** Pill radius (`999px`) on homepage; soft rectangle (`8px` / `12px`) on contact page.
- **Primary:** Warm Paper background (`{colors.warm-paper}`), Ink text (`{colors.ink}`), `0.8rem 1.6rem` padding. Uppercase label typography. Hover: `translateY(-2px)` with `220ms ease` transition.
- **Secondary / Ghost:** Transparent background, Warm Paper text, `1px solid rgba(255, 255, 255, 0.18)` border. Hover: background shifts to `rgba(255, 255, 255, 0.07)`.
- **Contact Primary:** `rgba(255, 255, 255, 0.62)` glass background, white text, `8px` radius, blur backdrop. Hover: background darkens slightly, border intensifies.
- **Contact Ghost:** Transparent background, muted white text, subtle border. Hover: background `rgba(255, 255, 255, 0.07)`.

### Chips / Tags
- **Style:** `rgba(255, 255, 255, 0.04)` background, `1px solid rgba(255, 255, 255, 0.08)` border, `rgba(255, 255, 255, 0.6)` text.
- **Shape:** `6px` radius.
- **Typography:** Label style (Space Grotesk, 0.68rem, 700 weight, uppercase, 0.12em tracking).
- **State:** Hover brightens background to `rgba(255, 255, 255, 0.08)`.

### Cards / Containers
- **Homepage cards:** Full-bleed sections with per-card background colors (`#0f0f0f`, `#f0ece3`, `#1a1a2e`, `#0d1117`, `#1e1b18`). No border-radius; they span the viewport width. Internal padding `2em`. Content and a 2x2 tech grid sit inside.
- **Contact page card:** `rgba(255, 255, 255, 0.62)` glass background, `16px` radius, `blur(20px) saturate(1.6)` backdrop-filter, `1px solid rgba(255, 255, 255, 0.7)` border, layered shadow. Two-column grid inside.
- **Hero glass card:** `rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.01)` gradient background, `blur(16px) saturate(140%)` backdrop-filter, `1px solid rgba(255, 255, 255, 0.08)` border with `rgba(255, 255, 255, 0.15)` top border, `2rem` radius. This is the signature glass surface.

### Inputs / Fields
- **Contact page fields:** Transparent background, no border except a `1px solid rgba(0, 0, 0, 0.1)` bottom stroke. No radius. Label is JetBrains Mono, 0.55rem, uppercase, positioned absolutely above the input. Focus: bottom border shifts to Silver (`#8e8e93`). Placeholder uses `--text-disabled` color.
- **No other inputs exist in the current system.** Form fields are limited to the contact page.

### Navigation
- **Toggle:** Fixed top-right, `110px x 38px`, pill-shaped. Contains a GlassSurface component (SVG chromatic aberration filter) and a "Menu" label in JetBrains Mono. Opens to a full-screen overlay (`#0a0a0a` background) with large Inter headlines (`clamp(2.4rem, 4vw, 3.25rem)`, 660 weight).
- **Links:** White at `0.88` opacity, hover to `#aeaeb2`. Social links in JetBrains Mono, `0.75rem`, uppercase.
- **Mobile:** Toggle shrinks to `90px x 36px`, menu stacks vertically, "Hello" decorative text remains.

### Signature Components
- **LightRays:** WebGL shader background (OGL) producing animated light rays from a configurable origin. Used in the hero and contact page hero. White rays with configurable spread, speed, and mouse influence. Purpose: environmental atmosphere, not decoration.
- **GlassSurface:** SVG-filter-based glass component producing chromatic aberration, blur, and displacement. Used in the navigation toggle. Purpose: rare and purposeful glassmorphism.

## 6. Do's and Don'ts

### Do:
- **Do** use Obsidian (`#0a0a0a`) as the darkest value. Never `#000`.
- **Do** use Warm Paper (`#fff8ef`) as the only warm tone on dark surfaces.
- **Do** cap body line length at 65–75ch.
- **Do** use `cubic-bezier(0.9, 0, 0.1, 1)` (the "hop" ease) for major transitions, and `power4.out` / `expo.out` for entrance animations.
- **Do** respect `prefers-reduced-motion: reduce`. All GSAP animations have reduced-motion fallbacks.
- **Do** vary spacing for rhythm. Hero padding is `3rem 2.5rem`; card padding is `2em`; section gaps are `3rem` to `4rem`.

### Don't:
- **Don't** use side-stripe borders (`border-left` or `border-right` > 1px as colored accents). Rewrite with full borders, background tints, or nothing.
- **Don't** use gradient text (`background-clip: text` with gradients). Use a single solid color; emphasis via weight or size.
- **Don't** use glassmorphism as a default. Glass appears only in the hero focal card and the navigation toggle.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent).
- **Don't** use identical card grids (same-sized cards with icon + heading + text, repeated endlessly).
- **Don't** use modal as a first thought. The navigation uses a full-screen overlay, not a modal.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** rely on color alone to convey meaning. Ensure sufficient contrast for all text and interactive elements.
