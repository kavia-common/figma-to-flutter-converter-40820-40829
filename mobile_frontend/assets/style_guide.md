# Style Guide - Grocery Shop Mobile App Template

Project: Grocery Shop Mobile App Template
Figma screen: 33438:271
Canvas: 2340 x 1560
Background: Solid yellow

1) Color Palette (CSS Variables)
:root
- --bg-canvas: #FFC83A (primary yellow background)
- --bg-white: #FFFFFF
- --text-primary: #1A1A1A (near-black for headings/body)
- --text-secondary: #5B5B5B (muted gray for secondary labels, placeholders)
- --text-inverse: #FFFFFF
- --nav-blue: #234BCE (deep blue header / card)
- --nav-blue-weak: #2E57D8 (variation for gradients and hover)
- --accent-green: #27AE60 (success/available, check)
- --accent-orange: #FF7A00 (discount/offer badges)
- --accent-red: #EB5757 (alerts/badges)
- --chip-gray: #F2F2F2 (pills, feature chips)
- --card-bg: #FFFFFF
- --card-elev: rgba(0,0,0,0.08)
- --shadow-strong: rgba(0,0,0,0.16)
- --divider: rgba(0,0,0,0.08)
- --figma-brand: #F24E1E

2) Typography
Font stack (assumed): "Helvetica Neue", Arial, sans-serif
- Display/Hero (H1): 64px, 700, -0.5 letter-spacing, line-height ~1.1
- H2: 48px, 700
- H3: 36px, 700
- Section Title (mobile card): 24px–28px, 700
- Card Title/Headline: 18px–20px, 700
- Body / Paragraph: 16px, 400–500
- Caption / Meta: 12px–14px, 400–500
- Button Label: 16px, 600, uppercase optional depending on button style
- Chip/Badge: 14px, 600

Text-transform:
- Feature badges/chips: Capitalized
- CTA buttons: Sentence case or uppercase (depending on platform standard)

3) Spacing System
Use a 4px base unit.
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px
- 4xl: 40px
- 5xl: 48px
- 6xl: 64px

Typical element paddings:
- Feature chips: 12px 16px, gap 12px, radius 14–16px
- Mobile card internal padding: 16–20px
- App bar/top nav: 20–24px vertical, 20–24px horizontal

Border radius:
- Chips: 16px–20px (fully rounded pill)
- Buttons: 12px–16px
- Cards: 16px–24px
- Image thumbs: 12px–16px

Shadow/Elevation:
- Card: 0 6px 24px var(--card-elev)
- Floating buttons: 0 8px 30px var(--shadow-strong)

4) Layout
Overall canvas: left feature column on yellow background, right side staggered mobile screens laid diagonally.
- Left column (about 40% width): Title, subtitle, feature chips stacked with consistent gap, Figma logo chip at bottom with “16 Screens”.
- Right column: Multiple phone mock cards (device screens) arranged in a diagonal grid with overlapping z-index.

Component structure (web adaptation)
- header: contained left-aligned brand/title if needed
- main: two-column layout (grid)
  - aside.left: hero title and feature list
  - section.gallery: mobile screen previews (images)
Use CSS Grid:
- grid-template-columns: 1fr 1.6fr (on desktop ≥ 1200px)
- column-gap: 48px
- row-gap: 32px
- The yellow background spans entire page.

5) Navigation
- This landing has no app nav; if adapted for web site:
  - Top horizontal nav (right-aligned) with CTA button.
  - Not visible in the provided screen; keep minimal.

6) Interactive Elements
- Buttons: Rounded rectangle, 16px padding, 12–16px radius, primary blue or white-on-blue.
- Chips: Gray pill with text, subtle shadow.
- Badges: Orange rectangle with rounded corners for “% off” or “Offer”.
- Cards: Image plus content, shadows and rounded corners.
- Icons: Vector SVGs (Figma logo assembled from 5 vectors).

7) Assets (from YAML imagePath)
- /assets/figmaimages/figma_image_33438_271.png (full canvas)
- Left floating images:
  - /assets/figmaimages/figma_image_33438_272.png
  - /assets/figmaimages/figma_image_33438_273.png
  - /assets/figmaimages/figma_image_33438_274.png
  - /assets/figmaimages/figma_image_33438_275.png
  - /assets/figmaimages/figma_image_33438_276.png
- Main phone screens:
  - /assets/figmaimages/figma_image_33438_311.png (Categories-1)
  - /assets/figmaimages/figma_image_33438_323.png (Orders)
  - /assets/figmaimages/figma_image_33438_324.png (Grocery Home)
  - /assets/figmaimages/figma_image_33438_325.png (Product details-1)
  - /assets/figmaimages/figma_image_33438_300.png (Shopping Cart _Offer)
  - /assets/figmaimages/figma_image_33438_308.png (Track Order)
- Figma logo vector:
  - /assets/figmaimages/figma_image_33438_318.svg (one of the 5 vector parts)

8) Responsive Hints
- ≥ 1200px: Two-column grid, diagonal phone gallery with overlap via transform/rotate.
- 768–1199px: Stack hero above gallery; reduce phone image sizes to ~280–320px height, keep 24px gaps.
- ≤ 767px: Single column; hero first, then a horizontal scrollable gallery of screens (snap center). Reduce chip sizes and text to maintain hierarchy.

9) Accessibility
- Minimum contrast: dark text on yellow meets contrast for large headings; for body text on yellow, consider increasing darkness to #111 for WCAG AA.
- Alt text: Each phone preview image must include descriptive alt text (e.g., “Grocery Home screen preview”).

10) Motion (optional)
- Subtle float for phone cards: translateY +/- 6px loop, or parallax on scroll.
- Chip hover: elevate and slightly darken border.

