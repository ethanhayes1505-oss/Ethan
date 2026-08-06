# Shopify Theme — Working Notes

## Context

Custom Shopify theme built on the Skeleton reference theme, for a live production
store. Not a Theme Store submission, but built to Theme Store quality standards.

`../dawn-reference/` is a clone of Shopify's Dawn theme. It is **read-only reference
material**. Read it to learn how Shopify solves a problem, then write our own version.
Never symlink it, never copy whole files without reading and trimming them.

## Hard rules

1. **Never push to the published theme.** Use `shopify theme dev` for local work and
   `shopify theme push --unpublished` for previews. If a command would overwrite the
   live theme, stop and ask.
2. **Validate every Liquid file before calling it done.** Use the `shopify-dev` MCP
   server's `validate_theme_codeblocks` on individual files and `validate_theme` before
   any push. Undefined objects and filters are the number one source of broken themes.
3. **Look it up, don't recall it.** For any Liquid object, filter, tag, or schema setting
   type, check the docs via the MCP server rather than writing from memory. Liquid's API
   surface changes and half-remembered filters fail silently.
4. **No external JavaScript libraries.** No jQuery, no Swiper, no Slick, no Alpine, no
   framework. Vanilla Web Components only. Every library is a page-weight regression.
5. **No build step unless explicitly agreed.** Plain CSS and ES modules. Shopify serves
   assets over HTTP/2; bundling buys less than it costs in complexity here.

## Architecture

```
assets/          CSS and JS, one file per component, named to match its section
blocks/          reusable theme blocks
config/          settings_schema.json, settings_data.json
layout/          theme.liquid, password.liquid
locales/         en.default.json — all user-facing strings live here
sections/        one .liquid file per section, each with its own {% schema %}
snippets/        small reusable partials, no schema
templates/       JSON templates that compose sections
```

- JSON templates, sections everywhere. Templates are `.json` and reference sections by
  name. Do not hardcode markup into templates.
- One concern per section. If a section file passes ~250 lines, extract snippets.
- Every section needs a schema with a `presets` array, or merchants can't add it in the
  editor.
- All strings go in `locales/en.default.json` and are referenced with `t:` keys in
  schemas and `| t` in Liquid. No hardcoded English in markup, including aria-labels.

## Performance budget

- Scope CSS with `{% style %}` inside the section, or one `section-name.css` in
  `assets/` loaded with `{{ 'section-name.css' | asset_url | stylesheet_tag }}`. Prefer
  `{% style %}` for anything small — it's inline and costs no request.
- Images: always
  `{{ image | image_url: width: 800 | image_tag: loading: 'lazy', sizes: '...', widths: '400,600,800,1200' }}`.
  Never a bare `<img src>`.
- Above-the-fold hero image gets `loading: 'eager'` and `fetchpriority: 'high'`.
  Everything else is lazy.
- Defer JS: `<script src="..." type="module"></script>`. Components below the fold
  initialise inside an `IntersectionObserver`, not on `DOMContentLoaded`.
- No web fonts beyond two families. Use `font_face` with `font_display: 'swap'`.
- Target: Lighthouse performance 60+ mobile (Shopify's own Theme Store floor), and test
  on a throttled mid-range Android profile, not desktop.

## Responsive — mobile and desktop must both be correct

The majority of traffic is mobile. **Mobile is the default case, not the fallback.**

- Write mobile-first. Base styles are the phone layout with no media query. Enhance
  upward with `@media (min-width: ...)`. Never write a desktop layout and then patch it
  back down — that's where things break.
- Breakpoints — use only these, and only when the layout genuinely needs one: `750px`
  (tablet), `990px` (desktop), `1400px` (wide). Do not invent new ones per section.
- Fluid type and spacing. Use `clamp()` for headings and section padding so there are no
  jarring jumps between breakpoints:
  `font-size: clamp(1.75rem, 1.2rem + 2.5vw, 3.5rem);`
- **No horizontal overflow, ever.** Any section that can scroll sideways on a 320px
  screen is a bug. Watch for: fixed `width` values, long unbroken product titles, tables,
  and negative margins. Check with
  `document.documentElement.scrollWidth > window.innerWidth`.
- Use `dvh`, not `vh`, for full-height elements. `100vh` is wrong on mobile browsers
  because of the collapsing address bar.
- Touch targets are minimum 44x44px with at least 8px between them. Desktop-sized icon
  buttons are unusable on a phone.
- No hover-only behaviour. Anything revealed on `:hover` must also be reachable by tap
  and by keyboard. Wrap hover styling in `@media (hover: hover)`.
- Responsive images need a real `sizes` attribute that matches the actual rendered width
  at each breakpoint, otherwise phones download desktop-sized images. e.g.
  `sizes: '(min-width: 990px) 25vw, (min-width: 750px) 50vw, 100vw'`
- Grids collapse predictably. Use `repeat(auto-fit, minmax(...))` or explicit column
  counts per breakpoint. Never leave a 4-column grid to figure itself out.
- Sticky headers must not eat the viewport on a short phone screen. Cap the height and
  test with the keyboard open on a search field.

## Testing, before any section is done

1. Chrome DevTools device toolbar at 320px, 375px, 768px, 1024px, 1440px.
2. Actually open the `shopify theme dev` preview URL on a real phone. Emulators miss
   touch behaviour, momentum scrolling, and iOS Safari quirks.
3. Rotate to landscape on mobile — it's the most commonly broken case.
4. Zoom the browser to 200%. Text must reflow, not clip or overlap.

If a layout only works at the exact widths tested, it isn't responsive. Drag the window
slowly across the full range and watch for anything that jumps, clips, or overlaps.

## Accessibility floor

Non-negotiable, checked before any section is considered done:

- Semantic HTML first. `<button>` for actions, `<a>` for navigation. Never a `<div>` with
  a click handler.
- Visible focus states on every interactive element. Never `outline: none` without a
  replacement.
- Modals and drawers trap focus, close on `Escape`, and return focus to the trigger.
- Dropdowns open on `Enter`/`Space`, navigate with arrows, close on `Escape`. Hover alone
  is not an interaction.
- All images have meaningful `alt`, or `alt=""` if decorative.
- Colour contrast 4.5:1 for body text, 3:1 for large text and UI boundaries.
- Target WCAG 2.2 AA. Lighthouse catches roughly a third of violations — the rest come
  from keyboard-only testing on the full purchase flow.

## Progressive enhancement

The product form and main navigation must work with JavaScript disabled. Test this in
DevTools before shipping a section that touches either. Cart drawers, quick-add, and
predictive search are enhancements layered on top of working links and forms.

## Workflow

```bash
shopify theme dev --store STORE.myshopify.com   # hot-reloading dev theme
shopify theme check                              # lint before every commit
shopify theme push --unpublished                 # preview copy in theme library
```

Commit after each working section. Never bundle multiple sections into one commit — if
something regresses, we need to bisect.

## Definition of done for a section

- [ ] Passes `shopify theme check` with no errors
- [ ] Passes MCP `validate_theme_codeblocks`
- [ ] Has a `{% schema %}` with `presets` and translated setting labels
- [ ] Renders correctly with zero content configured (empty state)
- [ ] Renders correctly at 320px, 768px, and 1440px
- [ ] Keyboard navigable end to end
- [ ] No new render-blocking requests

## Ask me before

- Adding any dependency, however small
- Changing `config/settings_schema.json` structure
- Touching `layout/theme.liquid`
- Anything involving the cart or checkout
- Any command that could affect the published theme
