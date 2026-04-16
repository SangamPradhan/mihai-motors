# Design System Strategy: Mario Motors

## 1. Overview & Creative North Star: "The Obsidian Gallery"
The design system for Mario Motors rejects the standard "e-commerce grid" in favor of a high-end editorial experience. Our Creative North Star is **"The Obsidian Gallery."** Imagine a silent, dimly lit showroom where vehicles are illuminated by precision spotlights.

To achieve this, the design system utilizes **Cinematic Asymmetry**. We move away from centered, predictable layouts and instead use wide-margin gutters, overlapping typography, and large-scale imagery that bleeds off the edge of the viewport. This is not just a website; it is a digital concierge service that prioritizes atmosphere and prestige over density.

### The Logo Concept
The **Mario Motors** mark should be a "Ghost Emblem."
- **Wordmark:** "MARIO MOTORS" set in tracked-out, all-caps Inter (Letter spacing: 0.25em) for a modern, architectural feel.
- **The Symbol:** A minimalist, geometric "M" constructed from two razor-thin, parallel diagonal lines. It should resemble a precision-engineered chassis component or a silhouette of a high-speed apex. 
- **Application:** Use `primary` (#ffb4a9) sparingly on the symbol; the wordmark remains `on_surface` (#e5e2e1).

---

## 2. Colors & Tonal Depth
This system is built on "Negative Space as Luxury." Black is not a void; it is a premium material.

### The "No-Line" Rule
**Strict Mandate:** Prohibit the use of 1px solid borders for sectioning or containment. 
Boundaries must be defined through background shifts. Use `surface_container_low` (#1c1b1b) for the main body and transition to `surface_container_lowest` (#0e0e0e) for footer or utility sections. This creates a "seamless" world that feels infinite.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base Layer:** `surface` (#131313).
- **Secondary Content Layer:** `surface_container` (#201f1f).
- **Interactive/Floating Elements:** `surface_bright` (#3a3939) with a 20px `backdrop-blur`.

### The "Glass & Gradient" Rule
To add "soul" to the dark aesthetic, use subtle radial gradients. A primary CTA should not be a flat red box; it should be a gradient from `primary_container` (#c0392b) to `on_primary_fixed_variant` (#8e130c), giving it the depth of automotive paint.

---

## 3. Typography: The Editorial Voice
We contrast the heritage of the serif with the precision of the sans-serif.

*   **Display (Playfair Display/NotoSerif):** Used for "Heroic" moments. `display-lg` should be used with tight line-height (1.1) to create a bold, authoritative impact. 
*   **Headlines:** Used for storytelling. Combine `headline-lg` with `primary` color accents to draw the eye to key value propositions.
*   **Body (Inter):** The "Engineer’s Voice." Clean, legible, and highly functional. Always use `on_surface` (#e5e2e1) for primary reading and `secondary` (#c7c6c6) for meta-data.
*   **Letter Spacing:** Increase letter spacing by 5-10% for all `label` and `title` tokens to enhance the "luxury" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows look "cheap" in a luxury dark mode. We use light to define space.

*   **The Layering Principle:** Place a `surface_container_highest` (#353534) card on top of a `surface_dim` (#131313) background. The contrast in value provides enough separation without needing a stroke.
*   **Ambient Shadows:** For floating modals, use a shadow with a 60px blur, 0% offset, and 6% opacity using the `on_surface` color. This mimics "ambient occlusion" rather than a direct light source.
*   **The "Ghost Border" Fallback:** If a container needs a boundary (e.g., a search input), use `outline_variant` (#59413d) at **15% opacity**. It should be felt, not seen.
*   **Razor Edges:** With a `Roundedness Scale` of **0px**, every element must feel precision-cut. There are no soft corners in Mario Motors; only sharp, architectural edges.

---

## 5. Components

### Buttons: The "Ignition" Variants
- **Primary:** Gradient fill (`primary_container` to `on_primary_fixed_variant`). Text in `on_primary_container` (#ffe5e1). No border. Sharp corners.
- **Secondary:** Transparent background, `on_surface` text, and a "Ghost Border" (1px, 20% opacity). 
- **Tertiary/Text:** All caps, `label-md` Inter, 0.2em letter spacing, with a 1px `primary` underline that expands on hover.

### Cards & Lists
- **The Rule of No Dividers:** Forbid the use of horizontal lines between list items. Use 32px or 48px of vertical whitespace to separate items.
- **Hover State:** When hovering over a car listing card, shift the background from `surface_container` to `surface_bright`. 

### Input Fields
- **Style:** Underline only. Use `outline` (#a88a85) for the baseline. On focus, the baseline transforms into `primary` (#ffb4a9) with a subtle outer glow.
- **Typography:** Placeholder text should be `secondary` (#c7c6c6) in `body-md`.

### Specialized Component: The "Spec-Sheet"
A vertical list for vehicle specifications (Horsepower, 0-60, Top Speed). 
- **Value:** `display-sm` (Playfair Display).
- **Label:** `label-sm` (Inter, All-Caps, 0.2em spacing).
- **Layout:** Asymmetrical staggered columns.

---

## 6. Do's and Don'ts

### Do:
- **Do** use large amounts of "Macro White Space" (Empty black space). It signals that the content is so valuable it doesn't need to be crowded.
- **Do** use high-contrast imagery where the car emerges from the shadows.
- **Do** use `tertiary` (#80d0f8) tokens *only* for subtle interactive cues like "New" badges or active status indicators.

### Don't:
- **Don't** use 100% white (#FFFFFF). It is jarring in a dark luxury environment. Always use `on_surface` (#e5e2e1).
- **Don't** use any rounded corners. Even a 2px radius breaks the architectural "Diamond Cut" aesthetic.
- **Don't** use standard "Error Red." Use the system `error` token (#ffb4ab) which is tuned to be legible against deep blacks without looking "cartoonish."