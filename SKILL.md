---
name: wave-design
description: Use this skill to generate well-branded interfaces and assets for Wave Sports & Entertainment, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Canvas**: dark by default. `--bg = --night (#0B0909)`. Light mode flips to `--silver (#FAF7F4)`.
- **Accent**: `--volt (#E3F643)`. Use sparingly. Always pair text on Volt with `--night`.
- **Type**: Zalando Sans Expanded (display, tight tracking), Zalando Sans (body), Space Grotesk Medium UPPERCASE for specs/metadata, IBM Plex Serif Light Italic for editorial pull quotes.
- **Radius**: 0 by default. Pill only on tags/status.
- **Tone**: confident, brief, sport-adjacent. No hype words. No emoji in chrome. Always `&` not `and`. UPPERCASE mono for buttons and metadata.
- **Iconography**: Lucide (1.5px stroke, 24px). Substitute flagged in README.

## Files in this skill
- `README.md` — full brand context, content + visual foundations, iconography.
- `tokens.css` — single source of truth for tokens and fonts; `elements.css` — plain-element sizes; `colors_and_type.css` — both, for HTML mocks.
- `fonts/` — Zalando Sans, Zalando Sans Expanded, Space Grotesk, IBM Plex Serif.
- `assets/` — primary lockup, icon mark, brand reference image.
- `ui_kits/marketing/` — B-to-B marketing site UI kit (React).
- `ui_kits/originals/` — B-to-C Originals viewer UI kit (React).
- `preview/` — atomic specimen cards (colors, type, components).
