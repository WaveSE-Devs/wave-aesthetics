# Wave Design System

A clean, modern, professional system for **Wave Sports & Entertainment** built on a strict black / white / **Volt** palette with elements of brutalism: hard edges, zero‑radius surfaces, ALL‑CAPS spec labels, dense mono captions, and accents used like a highlighter — sparingly and with intent.

The system covers two sides of Wave:
1. **B-to-B (WSE)** — corporate, agency, and partner-facing surfaces. Uses the *Wave Sports & Entertainment* primary lockup. Tone: confident, plainspoken.
2. **B-to-C (Wave)** — fan-facing brand for Originals, Productions and shows. Uses the *Wave* logotype + Vertical lockups. Tone: punchy, scene-aware.

> **Source materials provided**
> - `assets/brand-guidelines-reference.png` — single-page brand standard (primary lockup, palette, typeface specimen, logo usage).
> - `assets/wave-logotype.svg` — full WAVE wordmark, all-caps geometric.
> - `assets/wave-icon.svg` — square WV icon mark.
> - Font files for *Zalando Sans*, *Zalando Sans Expanded*, *Space Grotesk*, *IBM Plex Serif*.
>
> No Figma URL or codebase was attached. Every visual decision in this system is sourced from the brand reference page; product UI is reasonable, brand-faithful invention rather than a recreation.

---

## Use it in a repo

This repo is an npm package. Every Wave tool installs it instead of keeping its own copy of the tokens, fonts and logos.

```bash
npm install github:WaveSE-Devs/wave-aesthetics
```

Pin a tag or commit (`github:WaveSE-Devs/wave-aesthetics#v0.4.0`) so a change here never lands in an app without you choosing it. To pick up a change, bump the ref and reinstall.

**Tokens and fonts.** Import once, at the root of the app. This loads `tokens.css`: fonts, CSS variables, the heading face, `.eyebrow` / `.spec`, the Volt focus ring. The fonts load from this package, so you don't copy them into `public/`. It leaves the size and spacing of plain elements to your app.

```ts
// Next.js — src/app/layout.tsx
import "wave-aesthetics";
```

```css
/* Any CSS entry point */
@import "wave-aesthetics";
```

**Tailwind v3** (`tailwind.config.ts`). Gives `bg-wave-night`, `text-fg-muted`, `border-line`, `font-display`, `tracking-spec`, sharp radii and so on.

```ts
presets: [require("wave-aesthetics/tailwind/preset")],
```

| Need | Use |
|---|---|
| Page canvas / card / hovered card | `bg-wave-night` / `bg-wave-slate` / `bg-wave-elev` |
| Hairline border | `border-wave-line` (stronger: `border-wave-line-strong`) |
| Text: primary / muted / dim | `text-wave-silver` / `text-wave-muted` / `text-wave-clay` |
| Accent | `text-wave-volt`, `bg-wave-volt text-wave-night` (never white on Volt) |
| Secondary palette (taxonomy only) / greys | `bg-wave-cyan`, `text-wave-red`, `bg-wave-grey-800`, ... |
| Display / body / spec / editorial fonts | `font-display` / `font-sans` / `font-mono` / `font-serif` |
| Eyebrow or spec label | `.eyebrow`, `.spec` (from `tokens.css`) |
| Radius | Surfaces are sharp: `rounded-lg`, `rounded-xl`, `rounded-2xl` all resolve to 0. `rounded` / `rounded-md` (2–4px) for dense controls. `rounded-full` only for tags, badges, avatars. |
| Motion | `duration-quick ease-wave` for color/border changes |

**Tailwind v4** (`globals.css`). Put the tokens in the `base` layer: unlayered CSS beats every Tailwind layer, so otherwise `.eyebrow`'s color would win over `eyebrow text-wave-volt`.

```css
@import "tailwindcss";
@import "wave-aesthetics" layer(base);
@import "wave-aesthetics/tailwind/theme.css";
```

**Logos.** Import the SVGs (`import icon from "wave-aesthetics/assets/wave-icon.svg"`), or copy them into `public/` when you need a fixed URL, such as a favicon.

**Plain HTML / prototypes.** Link `colors_and_type.css`, which adds `elements.css` (sizes and spacing for `h1`–`h4`, `p`, `small`, `code`, `blockquote`) so unstyled HTML already looks Wave. The `preview/` cards and `ui_kits/` show it in use.

**Changing the system.** Edit it here, not in an app. Then tag a release and bump the ref in each app that should get the change.

---

## ⚠️ Font substitution flagged

The Wave brand guideline specifies **Pragmatica** (display + body) and **Space Grotesk** (numerical / spec). Pragmatica is a licensed Paratype family and was not provided.

We substitute **Zalando Sans Expanded** for *Pragmatica Extended* (headers / display) and **Zalando Sans** for *Pragmatica* (body) — both are wide grotesks with similar proportions and a high x-height. **Space Grotesk** and **IBM Plex Serif** are the real fonts.

→ **Action requested:** if you have Pragmatica licenses, drop the `.woff2` / `.ttf` files into `fonts/` and update the `@font-face` blocks in `tokens.css`. The token names already point to the correct family — no other code needs to change.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This file — brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent skill manifest. Tells Claude / agents how to use this system. |
| `tokens.css` | **Single source of truth** for color + type tokens, fonts, label classes, focus ring. What apps import. |
| `elements.css` | Sizes and spacing for plain elements, for unstyled HTML. |
| `colors_and_type.css` | Both of the above, for plain HTML and prototypes. |
| `tailwind/preset.js` | Tailwind v3 preset mapping the tokens to utilities. |
| `tailwind/theme.css` | Tailwind v4 `@theme` mapping the tokens to utilities. |
| `package.json` | Makes the repo installable (`npm install github:WaveSE-Devs/wave-aesthetics`). |
| `fonts/` | Webfont files (Zalando Sans, Zalando Sans Expanded, Space Grotesk, IBM Plex Serif). |
| `assets/` | Logos (`wave-logotype.svg`, `wave-icon.svg`), tool app icons (`task-track-icon.png`), brand reference. |
| `preview/` | Self-contained HTML cards rendered in the Design System tab. |
| `ui_kits/marketing/` | Marketing site UI kit — hero, nav, show grid, footer, etc. |
| `ui_kits/originals/` | Wave Originals viewer UI kit — player, episode rail, show hub. |

---

## CONTENT FUNDAMENTALS

### Voice
Confident, brief, sport-adjacent. Every line earns its space. Wave is on the floor — not in a press box.

- **Sentence cadence**: short. Often **a single noun phrase or fragment**. ("Originals. Built for fans, not feeds.")
- **Verbs over adjectives**. "Hosted by," "Drops Friday," "Sold out." Not "incredible," "unforgettable," "unique."
- **No hype words**: avoid *revolutionary, game-changing, world-class, redefining.*
- **No exclamation marks** outside dialogue.
- **No emoji** in product chrome, marketing copy, or slides. Emoji are exclusively a *user content* signal (chat, comments).

### Casing
| Surface | Casing |
|---|---|
| Brand & subsidiary names | **Title Case**: *Wave Sports & Entertainment*, *Wave Originals*, *Wave Productions*. Always **&**, never "and". |
| Headers (display) | **Title Case** per the spec sheet. |
| Subheaders | **Sentence case**. |
| Body | Sentence case. |
| Specs / labels / metadata / button micro-copy | **UPPERCASE**, mono. ("WATCH NOW", "EP. 04", "LIVE"). |
| Eyebrows above headlines | **UPPERCASE**, mono, tracked +0.08em. |

### Pronouns
- **"You"** for the audience (fans, partners). Always.
- **"We"** for Wave-the-company. Sparingly. Wave does not introduce itself in marketing — it shows up.
- Never "us" + "you" sandwich phrasing ("we want to bring you…"). Just say what's happening.

### Examples — write like this
> Originals. Built for fans, not feeds.

> A new episode every Friday. Hosted by Patrick Mahomes.

> WSE partners with culture-first creators to build sports IP that actually moves.

### Don't write like this
> ✗ We're so excited to bring you our amazing new platform that's going to revolutionize the way you watch sports! 🚀
> ✗ "Our world-class team has crafted a truly one-of-a-kind experience…"

### Numbers, dates, sports vernacular
- Numerals over words always: "3 episodes," "12K subscribers."
- Dates: `FRI · NOV 14` style. Mono, dot-separated, uppercase.
- Scores, stats, and counts use **Space Grotesk Medium** (the spec face).
- Team / league names: full first reference, then standard short form (KC, LAL).

### Emoji policy
**No emoji** in design system surfaces, marketing, slides, or chrome. Emoji are reserved for user-generated content (comments, chat, reactions).

---

## VISUAL FOUNDATIONS

### Default canvas: dark
The system is **dark-default**. `--bg` is `--night` (#0B0909). Light mode (`[data-theme="light"]`) flips to `--silver`. There is no third theme.

### Color
- **Primary palette** (use 95% of the time): `--night`, `--slate`, `--clay`, `--silver`, **`--volt`**.
- **Volt is an accent, not a fill.** Volt blocks should occupy ≤15% of any frame. It works as: a single key word in a headline, a CTA fill, an underline, a 2px border on a focused card, a status dot. **Never** as a page background or large field of fill.
- **Always pair text on Volt with `--night`**. Volt + white = illegible. Volt + black = correct.
- **Secondary palette** is taxonomy-only — categorize Originals shows, episode types, schedule blocks. Never decorative.
- **Extended palette** (110 shades) is locked away for subsidiary brand systems and one-off campaigns. Don't pull from it without a documented reason.

### Type
- **Display & headers**: Zalando Sans Expanded (Pragmatica substitute). **Tight tracking (-0.025em)**, line-height 0.95–1.05. Title Case.
- **Body**: Zalando Sans, 16px/1.5 default.
- **Specs / labels / scores / metadata**: Space Grotesk Medium, **UPPERCASE**, +0.04em tracking. This is the single most distinctive type signal in the system — use it generously on small chrome.
- **Editorial / pull quotes**: IBM Plex Serif Light, italic optional. Used for long-form Originals copy and partnership stories. Never on UI chrome.

### Spacing
4px base. Common rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Marketing sections breathe (96px+ block padding). Product chrome is dense (8–16px).

### Backgrounds
- **Primary**: solid `--night`. No gradient. No pattern. The void.
- **Secondary** (sections, cards): solid `--slate`.
- **Imagery**: full-bleed photography. Show photos run **cool / desaturated / high contrast**, often with a slight grain. Marketing photography is **warmer & sharper** but still high-contrast. Black-and-white is encouraged for archival / editorial.
- **No gradients** in the system. Image-only "protection gradients" (a dark vertical fade under captions on a photo) are allowed and use `linear-gradient(180deg, transparent 0%, var(--night) 100%)`.
- **No textures, no noise overlays, no hand-drawn flourishes.**

### Borders
- **1px hairlines** in `--line` are the default separator on dark surfaces.
- **2px volt borders** mark *focused* / *active* / *selected* states only.
- **Heavy 2px white borders** are a brutalist accent on poster cards and episode tiles.

### Radii
- **Default radius is 0.** Cards, buttons, inputs, modals — all sharp.
- 2px / 4px allowed on dense controls (chips, kbds) for legibility.
- 999px (pill) only on tags, status badges, and avatar containers.
- **Never** mix radii on adjacent siblings — pick one.

### Shadows / elevation
- The system avoids drop shadows. Elevation is signaled by **surface color + hairline border**, not blur.
- One exception: the `--shadow-pop` brutalist offset shadow (8px 8px solid Volt) used on poster cards on hover, episode tiles on press.
- **No inner shadows.** No glow effects. No glassmorphism.

### Hover & press
- **Hover**: 2px Volt outline appears, surface lifts to `--bg-elev-2`. No scale change.
- **Press**: brutalist offset — element shifts `translate(2px, 2px)` and the volt offset shadow collapses. Tactile, physical.
- **Disabled**: 40% opacity, no pointer.
- **Focus visible**: 2px Volt outline, 2px offset, never blurred.

### Animation
- **Quick**: 120ms — color & border state changes.
- **Base**: 200ms — surface and translate moves.
- **Slow**: 400ms — page transitions, modal entry.
- **Easing**: `cubic-bezier(0.2,0,0,1)` (standard) for everything that enters; `cubic-bezier(0.4,0,1,1)` for things that leave. **No bounces. No springs.** The brand is composed, not chirpy.
- Image fades on load: 200ms. No zooms, no Ken Burns.

### Transparency / blur
- Use sparingly. Sticky nav on scroll uses `rgba(11, 9, 9, 0.72)` + 12px backdrop blur — that's the only blurred surface in the system.
- No translucent cards. No frosted modals.

### Imagery vibe
- **Sports photography**: cool, contrasty, slight grain. Moments of stillness over peak action. Sweat, breath, downtime, the bench.
- **Originals stills**: cinematic, often anamorphic, deep blacks crushed.
- **Talent portraits**: black-and-white preferred for editorial; color for marketing.
- **No stock photography.**

### Layout
- **12-column grid** with 24px gutter; max-width container 1440px.
- Marketing sections use **wide left-margin headers** (eyebrow + display title flush left, body copy in column 5 onward) for a editorial / oversized layout.
- Product chrome: **fixed top nav (64px)**, optional fixed left rail (240px), content scrolls.
- **Fixed elements**: top nav, video player chrome, modal scrim. That's the list.
- Marketing layouts **break the grid intentionally** for hero shots — full-bleed images, oversized type that crops at the edge. Brutalism, contained.

### Cards
- Default card: `--slate` background, 1px `--line` border, **0px radius**, 24px padding.
- **No shadow.** Hover applies a 2px volt outline (subtractive, not additive — no growth).
- Poster cards (shows, episodes): 16:9 or 2:3 image, full-bleed, with a thin Space Grotesk caption *below* — never overlaid.

---

## ICONOGRAPHY

### System
Wave's brand guideline does not specify an icon set. We standardize on **Lucide** (CDN, ISC license) — single-stroke, 1.5px stroke weight, 24px grid — because it matches the geometric, mechanical feel of the WAVE wordmark and lives well next to Space Grotesk metadata.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="play"></i>
<script>lucide.createIcons();</script>
```

→ **Action requested:** if Wave has an internal icon set (sprite, font, or SVG library), drop it in `assets/icons/` and update `SKILL.md` and the marketing UI kit's `Icon` component to point at it.

### Stroke + size rules
- **24px** at default density (body / nav / chrome).
- **20px** in dense surfaces (table cells, chip rows).
- **16px** only as a metadata adornment (next to a timestamp, a count).
- **48px+** for marketing / editorial — switch to filled / chunky variants when you go this big.
- **Stroke weight** is 1.5px Lucide default. **Never change it.** No mixing weights in a single screen.

### Color
- Icons inherit `currentColor`. They are not colored objects.
- Default `--fg-muted`, hover `--fg`, active `--volt`.
- Status icons take their meaning color: success → `--leaf`, warning → `--amber`, danger → `--cherry`.

### Logo / mark usage
- `assets/wave-logotype.svg` — for headers, footers, page chrome. Min height 16px. Always white on dark or near-black on light. **Never on Volt.**
- `assets/wave-icon.svg` — square WV icon for app icons, favicons, avatars, social.
- **Don't** rotate, skew, gradient-fill, drop-shadow, or place on a busy background. Always provide ≥ logo-height of clearspace on every side.

### Tool app icons
- `assets/task-track-icon.png` — Task Track. 1024×1024, rounded-square app icon with its own black field; use it as-is (don't re-round or re-frame it).

### Emoji & Unicode glyphs
- **No emoji in product chrome or brand surfaces.** (User-generated content excepted.)
- Acceptable Unicode: `→` (next), `←` (back), `·` (separator), `—` (em dash), `+` (numeric prefix). All in Space Grotesk so they sit on the mono baseline.
