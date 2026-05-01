---
name: Core Intelligence
colors:
  surface: '#0c141f'
  surface-dim: '#0c141f'
  surface-bright: '#323946'
  surface-container-lowest: '#070e19'
  surface-container-low: '#151c27'
  surface-container: '#19202b'
  surface-container-high: '#232a36'
  surface-container-highest: '#2e3541'
  on-surface: '#dce2f3'
  on-surface-variant: '#e0bfba'
  inverse-surface: '#dce2f3'
  inverse-on-surface: '#2a313d'
  outline: '#a88a86'
  outline-variant: '#59413e'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#ff6b5c'
  on-primary-container: '#6d0004'
  inverse-primary: '#ae3027'
  secondary: '#b8c4ff'
  on-secondary: '#002585'
  secondary-container: '#0239bf'
  on-secondary-container: '#a5b5ff'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#9c9a9a'
  on-tertiary-container: '#333232'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#8c1713'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c4ff'
  on-secondary-fixed: '#001454'
  on-secondary-fixed-variant: '#0037ba'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#0c141f'
  on-background: '#dce2f3'
  surface-variant: '#2e3541'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.06em
  data-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 32px
  card-gap: 24px
  section-margin: 48px
  inner-padding: 20px
---

## Brand & Style
The design system is anchored in a **Premium Dark Minimalism** aesthetic, specifically tailored for high-velocity AI operations. It targets technical power users who require high data density without the cognitive load of traditional enterprise software.

The personality is "Silent Intelligence"—sophisticated, responsive, and authoritative. It utilizes a mix of **Glassmorphism** for navigational overlays and **Tonal Layering** for primary data structures. The interface feels like a high-end physical cockpit, using subtle shadows and layered depth to organize complex information. The visual narrative emphasizes speed and precision through sharp typography and vibrant, purposeful accent colors.

## Colors
The palette is built on a "Deep Space" foundation to minimize eye strain and maximize the pop of AI-driven insights. 

- **Foundation:** The background (#0f0f0f) serves as the infinite canvas, while the card base (#1a1a1a) creates the first level of elevation.
- **Accents:** The Primary Coral (#ff6b5c) is reserved for critical actions, alerts, and active AI processes. The Secondary Electric Blue (#5b7cff) represents steady-state data, secondary highlights, and automated workflows.
- **Utility:** Muted greys (#6b7280) are used for metadata and inactive states to maintain a clear hierarchy. 
- **Gradients:** Use linear gradients from Primary to Secondary (45-degree angle) exclusively for high-level progress indicators and AI "thinking" states.

## Typography
This design system utilizes **Inter** for its exceptional legibility in dark-themed data environments. The type scale is condensed to favor data density.

- **Headlines:** Use tight letter-spacing and bold weights to create strong visual anchors.
- **Body:** The 14px base size ensures readability while allowing multiple modules to exist on a single screen.
- **Labels:** Uppercase labels with increased tracking are used for card headers and section titles to distinguish them from interactive data.
- **Data Mono:** While Inter is used globally, tabular data and AI-generated code should utilize a medium weight with tighter tracking to mimic a mono-spaced feel while maintaining the system's clean sans-serif aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure, optimized for widescreen monitoring. 

- **Navigation:** A floating top navbar (64px height) stays fixed, using a backdrop blur (20px) to provide a sense of depth. The sidebar is a slim, icon-only strip (72px width).
- **Rhythm:** An 8px/4px base unit ensures mathematical harmony. Use 24px gaps between modular cards to allow the background depth to breathe.
- **Margins:** Large 32px outer margins prevent the UI from feeling cramped at the edges of the display.

## Elevation & Depth
Depth is the primary communicator of importance in this design system. 

1.  **Level 0 (Background):** #0f0f0f.
2.  **Level 1 (Cards/Modules):** #1a1a1a with a 1px border of `rgba(255, 255, 255, 0.05)`.
3.  **Level 2 (Popovers/Modals):** #242424 with a deep, diffused shadow (`0 20px 40px rgba(0,0,0,0.4)`).

Apply **Backdrop Blur** (shipped as `saturate(180%) blur(20px)`) to all floating elements, including the top navbar and AI chat panels. Subtle inner-glows (0.5px white at 10% opacity) on the top edge of cards should be used to simulate a light source from above.

## Shapes
The shape language is defined by "Soft Precision." 

- **Cards:** Use a generous 24px radius to create a friendly, modern container for dense data.
- **Buttons/Inputs:** Smaller 8px-12px radii are used for internal components to maintain a professional, tool-like feel.
- **Data Visuals:** Progress indicators and radial charts should use rounded line-caps to match the outer container's softness.

## Components
Consistent implementation of these components ensures the premium feel of the design system:

- **Modular Cards:** Every card must have a consistent 20px internal padding. Backgrounds can occasionally feature a very subtle radial gradient (e.g., a faint Coral glow in the top-right corner) to indicate high-priority AI insights.
- **Floating Top Navbar:** Must be detached from the edges by 16px, appearing to float over the content with a 1px border.
- **AI Chat Panels:** These should slide in from the right, using a distinct background blur and a primary coral accent for the "AI is typing" indicator.
- **Buttons:** 
    - *Primary:* Solid #ff6b5c with white text. 
    - *Secondary:* Ghost style with 1px #5b7cff border.
- **Radial Charts:** Use a stroke width of 8px with rounded ends. The "track" of the chart should be #242424, while the "fill" uses the primary or secondary accent.
- **Icon-only Sidebar:** Tooltips must be present on hover, using the Level 2 elevation style. Icons should be 20px, stroke-based (1.5px weight).