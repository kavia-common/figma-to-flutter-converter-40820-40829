# Page Design Notes - Grocery Shop Mobile App Template (Landing Canvas)

Screen size: 2340 x 1560
Background: Solid yellow (#FFC83A)

High-level layout
- Use a two-column grid layout:
  - Left panel width ≈ 900–980px (approx 40% of 2340).
  - Right gallery panel width ≈ 1360–1440px.
- Padding:
  - Page outer padding: 64px (top/bottom), 72px (left/right).
  - Internal gaps: 24–32px between stacked items.

Left panel (Hero)
- Title:
  - Text: “Grocery Shop”
  - Font: H1 64px, 700, color var(--text-primary)
  - Position (YAML Frame 8699):
    - Container (Frame 8699): x: -1075, y: -630, width: 618, height: 207
    - Two lines:
      - “Grocery Shop”: width 618, height 135 (typo_90)
      - “Mobile App UI Kit”: width 396, height 72 (typo_91), 48px under H1
  - Subtitle:
    - Text: “Mobile App UI Kit”
    - Font: 32px–36px, 600–700, color var(--text-primary)
- Feature chips group (Group 37757 / Frames 8695–8698):
  - Four chips vertically stacked with 24px gap:
    - “High Quality”
    - “Organized layer”
    - “Full Customizable”
    - “Styleguide”
  - Each chip:
    - Height: 95px
    - Internal padding: 20px 24px
    - Background: var(--chip-gray) #F2F2F2
    - Radius: 16px–18px
    - Font: 20–24px, 600, color var(--text-primary)
- Figma logo badge & “16 Screens” (Group 37770)
  - Left: Circular badge 182 x 182, white with subtle ring (Ellipse 1466; style_190).
  - Inside: Figma mark (five vectors; primary one provided as /assets/figmaimages/figma_image_33438_318.svg).
  - Right: Text chip container (Frame 8691): 467 x 135, white card with shadow, caption “16 Screens” in bold 24px.
  - Spacing: 24px gap between circle and card.
- Optional small angled device cards scattered on yellow left side:
  - YAML images 33438:272 to 276 (various rectangles around left-center) to create collage effect.

Right panel (Screens gallery)
- A staggered diagonal grid of mobile screen previews (all with robust white devices or just screen rectangles with shadows).
- Phone cards (from YAML):
  - Categories-1 (imagePath: /assets/figmaimages/figma_image_33438_311.png)
    - Dimensions: width 571.56, height 1010.45 (YAML)
    - Base layer rect: Rectangle 17834 (574.06 x 999.11) acts as placeholder behind.
  - Orders (imagePath: /assets/figmaimages/figma_image_33438_323.png)
    - Dimensions: 570.90 x 1009.28; positioned upper-left stack.
  - Grocery Home (imagePath: /assets/figmaimages/figma_image_33438_324.png)
    - Dimensions: 570.90 x 1009.28
  - Product details-1 (imagePath: /assets/figmaimages/figma_image_33438_325.png)
    - Dimensions: 570.90 x 1009.28
  - Shopping Cart _Offer (imagePath: /assets/figmaimages/figma_image_33438_300.png)
    - Dimensions: 570.90 x 1009.28
  - Track Order (imagePath: /assets/figmaimages/figma_image_33438_308.png)
    - Dimensions: 570.90 x 1009.28
- Decorative placeholders (Rectangles 17835–17845) behind some phones provide alternating white/pale blocks and help with depth layering.
- Angle: Many of the phones are slightly rotated (~-8° to +8°) and vertically offset to create motion. Implement via transform: rotate() with translateY() to replicate screenshot.
- Spacing:
  - Horizontal gap between phones: 48–64px
  - Vertical offset per column: ~120–180px for the diagonal effect
- Shadow:
  - 0 12px 32px rgba(0,0,0,.16) under each phone

Exact image placements (relative arrangement, approximate from YAML coordinates)
- Column A (left-most in gallery):
  - Orders at ~x: -154, y: -986 (YAML absolute), in page coordinates this sits upper-left of the gallery cluster.
- Column B:
  - Grocery Home at x: 381, y: -791
- Column C:
  - Product details-1 at x: -4, y: 24
- Column D:
  - Shopping Cart _Offer at x: 531, y: 208
- Column E:
  - Track Order at x: 930, y: -521
- Note: These x/y values are in Figma global coordinates. For web, replicate diagonals using a CSS grid plus per-item translate and rotate rules (see CSS section in the assets).

Iconography
- Figma mark composed of 5 vectors; only the bottom-most vector provided as SVG. Use a sprite or inline SVG group if recreating. For static landing, a raster composite is acceptable.

Responsive behavior
- Desktop: two-column with diagonal gallery.
- Tablet: single column stacked; gallery becomes 2-up grid with rotate angles reduced.
- Mobile: single column, horizontal snap-scrolling of phones, no rotation for better readability.

Accessibility and semantics
- Use <main>, <aside>, <section>, <figure> and <figcaption> for phones with alt text.
- Ensure heading hierarchy h1 then supporting h2/span.

