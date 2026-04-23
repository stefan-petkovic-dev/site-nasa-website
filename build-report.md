# QA Report

## Deterministic Audits

⚠️ 41 classes used in TSX but not in globals.css:
  - .stats-band (app/page.tsx)
  - .stats-band--split-accent (app/page.tsx)
  - .stats-band-grid (app/page.tsx)
  - .stats-band-item (app/page.tsx)
  - .stats-band-value (app/page.tsx)
  - .stats-band-label (app/page.tsx)
  - .logo-marquee-item (app/page.tsx)
  - .logo-marquee-item-text (app/page.tsx)
  - .section--overlay-mesh (app/page.tsx)
  - .section--overlay-glow (app/page.tsx)
  - .section--overlay-orb (app/page.tsx)
  - .section--overlay-grid (app/page.tsx)
  - .section--overlay-spotlight (app/page.tsx)
  - .stats-band-value (components/AnimatedCounter.tsx)
  - .faq-item (components/FaqAccordion.tsx)
  - .faq-question (components/FaqAccordion.tsx)
  - .faq-icon (components/FaqAccordion.tsx)
  - .faq-answer-wrap (components/FaqAccordion.tsx)
  - .faq-answer (components/FaqAccordion.tsx)
  - .footer-tagline (components/Footer.tsx)

Syntax errors: 0

### Dynamism

| Page | MotionReveal | whileInView | whileHover | AnimatePresence | FaqAccordion | HorizontalScroller | AnimatedCounter | Status |
|------|-------------:|------------:|-----------:|----------------:|-------------:|-------------------:|----------------:|--------|
| app/not-found.tsx | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ⚠ only 0 scroll-reveal wrap(s) (need ≥ 3); no interactive primitive (FaqAccordion / HorizontalScroller / AnimatedCounter / AnimatePresence) |
| app/page.tsx | 15 | 0 | 0 | 0 | 1 | 1 | 5 | ✓ |
| app/privacy/page.tsx | 1 | 0 | 0 | 0 | 0 | 0 | 0 | ⚠ only 1 scroll-reveal wrap(s) (need ≥ 3); no interactive primitive (FaqAccordion / HorizontalScroller / AnimatedCounter / AnimatePresence) |
| app/sitemap-page/page.tsx | 1 | 0 | 0 | 0 | 0 | 0 | 0 | ⚠ only 1 scroll-reveal wrap(s) (need ≥ 3); no interactive primitive (FaqAccordion / HorizontalScroller / AnimatedCounter / AnimatePresence) |
| app/terms/page.tsx | 1 | 0 | 0 | 0 | 0 | 0 | 0 | ⚠ only 1 scroll-reveal wrap(s) (need ≥ 3); no interactive primitive (FaqAccordion / HorizontalScroller / AnimatedCounter / AnimatePresence) |

---

## Claude Review

The generated files were provided inline in the prompt, not written to disk yet. I'll produce the QA report entirely from the code supplied in the brief.

---

# QA Report — NASA Next.js Static Export

**Reviewer role:** Senior QA Engineer & Accessibility Specialist
**Date:** 2026-04-23
**Scope:** `app/layout.tsx`, `app/page.tsx`, `components/Nav.tsx`, `components/Footer.tsx`, plus the automated CSS/Dynamism audit results

---

## 1. CSS / Styling — 41 Missing Class Definitions

The automated audit found 41 CSS classes referenced in TSX but absent from `globals.css`. Every one of these will silently produce unstyled elements.

| # | Class | File | Fix Required |
|---|-------|------|-------------|
| 1 | `.stats-band` | `app/page.tsx` | Add ruleset in globals.css |
| 2 | `.stats-band--split-accent` | `app/page.tsx` | Add ruleset |
| 3 | `.stats-band-grid` | `app/page.tsx` | Add ruleset |
| 4 | `.stats-band-item` | `app/page.tsx` | Add ruleset |
| 5 | `.stats-band-value` | `app/page.tsx` + `AnimatedCounter.tsx` | Add ruleset — shared across two files |
| 6 | `.stats-band-label` | `app/page.tsx` | Add ruleset |
| 7 | `.logo-marquee-item` | `app/page.tsx` | Add ruleset |
| 8 | `.logo-marquee-item-text` | `app/page.tsx` | Add ruleset |
| 9 | `.section--overlay-mesh` | `app/page.tsx` | Add ruleset |
| 10 | `.section--overlay-glow` | `app/page.tsx` | Add ruleset |
| 11 | `.section--overlay-orb` | `app/page.tsx` | Add ruleset |
| 12 | `.section--overlay-grid` | `app/page.tsx` | Add ruleset |
| 13 | `.section--overlay-spotlight` | `app/page.tsx` | Add ruleset |
| 14 | `.faq-item` | `components/FaqAccordion.tsx` | Add ruleset |
| 15 | `.faq-question` | `components/FaqAccordion.tsx` | Add ruleset |
| 16 | `.faq-icon` | `components/FaqAccordion.tsx` | Add ruleset |
| 17 | `.faq-answer-wrap` | `components/FaqAccordion.tsx` | Add ruleset (likely needs `overflow: hidden` + height transition) |
| 18 | `.faq-answer` | `components/FaqAccordion.tsx` | Add ruleset |
| 19 | `.footer-tagline` | `components/Footer.tsx` | Add ruleset |

**Severity: Blocking.** These sections will render with zero layout/visual styling in production.

---

## 2. Accessibility

### 2a. Mobile Nav Drawer — No Focus Trap *(High)*

**File:** `components/Nav.tsx`

When the mobile drawer opens (`data-open="true"`), focus is never programmatically moved into it and there is no focus trap. Keyboard users can Tab out of the drawer behind the backdrop while it is visually open.

**Fix:**
- On open: call `drawerRef.current?.querySelector<HTMLElement>('button, a')?.focus()` to move focus to the close button.
- Implement a focus trap loop: intercept `Tab`/`Shift+Tab` to keep focus within the `<aside>` while it is open.
- On close: return focus to the hamburger trigger (`triggerRef.current?.focus()`).

### 2b. `aria-expanded` State Not Reflected in Drawer *(Medium)*

**File:** `components/Nav.tsx`, hamburger button (approx. line 76)

`aria-expanded={open}` is set on the hamburger button — correct. However, the `<aside id="mobile-nav-drawer">` does not have `aria-modal="true"` and does not use `role="dialog"`. Screen readers on mobile may not announce this as an overlay.

**Fix:** Add `role="dialog"` and `aria-modal="true"` to the `<aside>`. Pair with a visible `aria-label` (already present — `"Mobile navigation"`).

### 2c. FAQ Accordion — Keyboard & ARIA Contract Unknown *(High)*

**File:** `components/FaqAccordion.tsx` (not provided in full)

The content manifest specifies: *"Keyboard navigable and screen-reader labeled."* The component is not shown, so its ARIA contract cannot be verified. The standard requires:

- Each trigger: `<button aria-expanded="true|false" aria-controls="answer-id">`
- Each answer panel: `id="answer-id"` matching the `aria-controls` value
- `role="region"` or `role="list"` on the container is optional but common

**Action:** Provide `FaqAccordion.tsx` source for verification before shipping.

### 2d. Decorative Icons Not Consistently Hidden *(Low)*

**File:** `components/Nav.tsx` line ~45 and throughout `app/page.tsx`

`<Rocket size={16} aria-hidden="true" />` inside the CTA button is correctly hidden. However, the general pattern should be audited across all `lucide-react` icon uses in `app/page.tsx` (pillars, process stages, differentiators) — every purely decorative icon must carry `aria-hidden="true"` and every informative icon must have an adjacent visible label or `aria-label`. The pillar/process arrays appear to always pair icons with text, which is correct, but this needs visual confirmation.

### 2e. Footer Heading Hierarchy *(Medium)*

**File:** `components/Footer.tsx`

The footer contains `<h3 className="footer-heading">Explore</h3>` and `<h3>Resources</h3>`. These `h3` elements appear before any `h2` within the footer. If the page ends with a section whose last heading is an `h2`, these footer `h3` elements are semantically orphaned (no `h2` parent).

**Fix:** Either wrap with a visually hidden `<h2>Footer</h2>`, or change the footer headings to `<p role="heading" aria-level="3">` (common pattern for footers that should not pollute the document outline). The `<footer>` landmark already implies its role, so suppressing these from the outline is acceptable.

### 2f. Skip Link Target *(Low)*

**File:** `app/layout.tsx` line 15

`<a href="#main">Skip to main content</a>` targets `<main id="main">`. This is correct. Verify in CSS that `.skip-link` has `:focus` styles that make it visible — if `.skip-link` is missing from `globals.css` it may be invisible to keyboard users even when focused.

**Action:** Confirm `.skip-link` and `.skip-link:focus` are defined in `globals.css`.

---

## 3. SEO

### 3a. `metadataBase` Placeholder URL *(Blocking)*

**File:** `app/layout.tsx` line 12

```ts
metadataBase: new URL('https://your-domain.com'),
```

This placeholder will be used to resolve relative OG and Twitter image URLs in production. Leaving it as-is means every OG image URL, canonical link, and sitemap entry will point to `your-domain.com` instead of the live domain.

**Fix:** Replace with the production domain before deployment, ideally sourced from an environment variable:

```ts
metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://nasa.gov'),
```

### 3b. Nav Labels Do Not Match NASA Content *(High — content/brand inconsistency)*

**File:** `components/Nav.tsx`, `navItems` array

The navigation labels are: `Home, Work, Products, Pricing, Services, Our Process, Testimonials`. These are B2B service-page labels — they were not updated for the NASA site context. The actual homepage sections appear to cover: missions, process, FAQ, and newsletter.

Additionally the anchor targets (`/#work`, `/#products`, `/#pricing`, `/#services`, `/#process`, `/#testimonials`) must each have a matching `id` attribute in `app/page.tsx`. If any section's `id` differs, the nav link will scroll to the top of the page silently.

**Fix:**
1. Update `navItems` labels and `href` values to match the actual section IDs used in `app/page.tsx` (e.g., `/#missions`, `/#process`, `/#faq`, `/#newsletter`).
2. Audit every `id` in `app/page.tsx` against every `href` in both Nav and Footer to confirm 1:1 match.

### 3c. Footer Links Also Reference B2B Anchor IDs *(High)*

**File:** `components/Footer.tsx`, `primaryLinks` and `resourceLinks`

Same issue as 3b. `/#work`, `/#products`, `/#pricing`, `/#services`, `/#process`, `/#testimonials` appear in both column arrays. These must be corrected to match actual section IDs.

### 3d. OpenGraph Description Truncated in Manifest *(Low)*

**File:** `app/layout.tsx` lines 13–16

The OG description matches the `<meta name="description">` — this is correct. No Twitter card type is set. Consider adding:

```ts
twitter: {
  card: 'summary_large_image',
}
```

---

## 4. Static Export Correctness

### 4a. `new Date().getFullYear()` Evaluated at Build Time *(Medium)*

**File:** `components/Footer.tsx` line 1

```ts
const currentYear = new Date().getFullYear();
```

In a static export (`output: 'export'`), this value is baked in at build time. If the site is built in 2026 and not rebuilt in 2027, the copyright will read `© 2026` indefinitely.

**Fix (options ranked by simplicity):**
1. Accept the build-time value and add the build to a CI schedule that redeploys on January 1.
2. Move the copyright year to a `'use client'` wrapper that hydrates client-side: `const year = new Date().getFullYear()` inside a `useEffect`.
3. Use a date range: `© 1958–{currentYear}` (NASA founding year), which is factually accurate and less likely to feel stale.

### 4b. `<img>` Tags Instead of Next.js `<Image>` *(Low for static export)*

**Files:** `components/Nav.tsx` (logo), `components/Footer.tsx` (logo), throughout `app/page.tsx`

Next.js `<Image>` provides automatic WebP conversion, responsive `srcset`, and lazy loading. For a `static export`, `<Image>` requires `unoptimized: true` in `next.config`, which eliminates most of its value. If `unoptimized: true` is already set, raw `<img>` is acceptable. If it is not set, the build will error on `<Image>` with `output: 'export'`.

**Action:** Confirm `next.config` contains `images: { unoptimized: true }` when `output: 'export'` is set, and document the decision.

---

## 5. Dynamism / Interactivity Gaps

Per the dynamism audit, four pages have insufficient scroll-reveal coverage and no interactive primitives:

| Page | `MotionReveal` count | Interactive primitives | Required action |
|------|---------------------|----------------------|-----------------|
| `app/not-found.tsx` | 0 | None | Add ≥ 3 `<MotionReveal>` wrappers; add at least one interactive element |
| `app/privacy/page.tsx` | 1 | None | Add ≥ 3 `<MotionReveal>` wrappers |
| `app/sitemap-page/page.tsx` | 1 | None | Add ≥ 3 `<MotionReveal>` wrappers |
| `app/terms/page.tsx` | 1 | None | Add ≥ 3 `<MotionReveal>` wrappers |

**Fix for each page:** Wrap each major text section (e.g., every `<section>` or `<article>` block) in a `<MotionReveal>`. For the 404 page, add at minimum a `<FaqAccordion>` with common questions, or an `<AnimatedCounter>` with mission statistics, to meet the interactive primitive requirement.

---

## 6. Component-Level Issues

### 6a. `AnimatedCounter` — Class Collision *(Medium)*

**File:** `components/AnimatedCounter.tsx`

The component emits `.stats-band-value`, which is also used directly in `app/page.tsx`. Both are missing from CSS (see §1). Ensure the single CSS definition covers both usage contexts (i.e., the class does not need different styles depending on parent container).

### 6b. `LogoMarquee` — Two Missing Classes *(Medium)*

**File:** `app/page.tsx` + `components/LogoMarquee.tsx`

`.logo-marquee-item` and `.logo-marquee-item-text` are missing. A logo marquee without `overflow: hidden` and animation keyframes on its container will not scroll. The `@keyframes marquee` (or equivalent) ruleset must also be present in `globals.css`.

### 6c. `ClientEnhancements` — Unknown Content *(Informational)*

**File:** `components/ClientEnhancements.tsx` (not provided)

This component is rendered at the bottom of `<body>` in the root layout. Its content is unknown. Verify it does not add event listeners without cleanup (memory leak risk) and does not write to `document.cookie` or `localStorage` without a GDPR/privacy notice.

---

## 7. Structural / Heading Hierarchy

**File:** `app/page.tsx` + `components/HomeHero.tsx`

The content manifest specifies:
- Hero H1: Eyebrow / primary keyword
- Hero H2: Main headline
- Section headings as H2 with subsections as H3

The homepage imports `HomeHero` (not shown). Confirm:
1. There is exactly **one `<h1>`** on the page (in the hero).
2. No section headline skips levels (e.g., no `<h4>` that follows an `<h2>` directly).
3. FAQ section uses `<h2>` for the section headline and the accordion buttons are not heading elements — they are `<button>` elements only.

---

## 8. Summary — Prioritised Fix List

| Priority | Count | Issues |
|----------|-------|--------|
| **P0 — Blocking** | 2 | 41 missing CSS classes (unstyled sections); `metadataBase` placeholder in production metadata |
| **P1 — High** | 3 | Nav/footer anchor IDs do not match actual section IDs; mobile drawer has no focus trap or focus return; FAQ accordion ARIA contract unverified |
| **P2 — Medium** | 5 | Drawer missing `role="dialog"` + `aria-modal`; footer heading hierarchy; 4 pages below dynamism threshold; `currentYear` baked at build time; AnimatedCounter/LogoMarquee CSS missing with animation keyframes |
| **P3 — Low** | 4 | Decorative icon `aria-hidden` audit incomplete; skip link `:focus` style unconfirmed; no Twitter card metadata; `<img>` vs `<Image>` documentation gap |

**Recommended sequence:** Fix P0 items (CSS + metadataBase) first — they are blocking visual render and SEO. Then address the P1 focus-management and anchor-ID issues before accessibility sign-off. P2 dynamism gaps can be batched into a single pass across the four secondary pages.