# EMON / STROHM.ENERGY Design System

**Version:** 1.0 | April 2026  
**Figma file:** `VPcX9e6BPcmWMj5og6IKgC` (access required)  
**Sources provided:** EMON Master Design + Copy System v1 (DOCX), EMON Benchmark Analysis (DOCX), Darwin Website UI (PDF), Logos Guideline v5 (PDF), UI Kit Brand Design System v2 (PDF), Masterlist v5 FINAL (XLSX), Watts competitor screenshots (PNG)

---

## UPDATE 16 OCT 2026 (binding, overrides older values below)
- Brand colour = stop 100 of each ramp (10–100 tokens: --color-<brand>-<stop>). Card colours: --color-card-<brand>.
- FLUXX #FDC706 (yellow). STROHM #F76801 (fills, dots, hover only). New: KALK #C4B1C8.
- EMON #21AE8F (logo guideline), ramp derived. Logo text colour #3D3D3B. LINA, AGRIX, KERN, PUSH, PACT, DEPOT keep earlier values, TO CONFIRM.
- Logos: assets/logos/<BRAND>-logo.svg (full) and <BRAND>-wordmark.svg (letters only). Also <BRAND>-logo-symbol-wordmark.svg. Available for 26 brands (MOX, EMON, NENDO use the -2026 files). Missing: LINA, AGRIX. Logo colours are kept as supplied and may differ slightly from the brand tokens; text #282A29.
- Text #4F4F4E. #B2B3B3 only on dark backgrounds or non-text; on white use #898989.
- Web type: Hero 56/60 Ultra Light CAPS · H1 48/56 Thin · Sub 24/32 Thin · Body 16/20 Thin · Highlight 16 Medium · Min 12 Thin. Tablet and mobile sizes in colors_and_type.css.
- Spacing 4px steps (--space-1 … --space-30). Card radius and padding 24/20/16. CTA 56/52/48px, radius 8, padding 32/28/24, gap 8.
- Breakpoints: tablet ≤1279px, mobile ≤767px.
- Cards use --color-card-<brand> and padding var(--card-padding). Sub heading (h2) var(--web-sub-*), body (p) var(--web-body-*).
- Secondary buttons (outline, white) use the same --cta-* sizes as primary.
- Checkbox: 20×20px, accent-color = brand colour (default, checked, disabled = native disabled state).
- Icons: ANDO feature icon list in "ANDO - DOC - Feature Icons - EN" (placeholders until SVGs arrive).

## COMPANY CONTEXT

**STROHM.ENERGY** is the parent platform brand — engineered and manufactured energy hardware and software. The brand north star is **Braun / Dieter Rams / Teenage Engineering**: functional restraint, typographic economy, single-word brand names, engineered precision.

**Tagline:** "engineered & manufactured by"  
**Website:** strohm.energy (also referred to as Darwin in internal docs)

### Product Ecosystem

STROHM.ENERGY operates ~20 hardware sub-brands plus several software systems:

#### Hardware Brands
| Brand | Category | Primary Colour |
|-------|----------|---------------|
| ANDO | High-Tech Solar Panels | #CDDB65 |
| FLUXX | Advanced Battery Storage | #FECDC0 |
| MOEBIUS | Energy Inverters | #FB8C00 |
| SYNQ | Smart Meters & Plugs | #5F7673 |
| NENDO | Heat Pump Technology | teal variant |
| MOX | Structural Mounting | #DC4040 |
| TOGU | Electrical Connectivity | verify Figma |
| OGO | Water Systems | verify Figma |
| XOOM | EV Charging | verify Figma |
| CHILL | Energy-integrated Infrastructure | verify Figma |
| FEU | Radiant Heating | #DA6E70 |
| GLOW | Solar Lighting | #E3D55D |
| PROP | Wind Generation | verify Figma |
| AIRO | Airflow Systems | verify Figma |
| SHELTR | Asset Protection | verify Figma |
| MUKI | Energy Sets | verify Figma |
| WURK | Installation Equipment | verify Figma |
| DODO | Asset Protection | verify Figma |
| OZZY | Energy Switching | #8BCF3F |
| TRIBE | Distributed Energy Systems | verify Figma |

#### Software Systems
| System | Role |
|--------|------|
| **EMON** | Energy Management App (core platform — primary subject of this design system) |
| TRIBE | Installer partner network (B2B) |
| KALK | Calculation / configurator tool |
| KERN | Core backend |
| PUSH | Notification system |
| DEPOT | Inventory & logistics |
| PACT | Contract management |

---

## CONTENT FUNDAMENTALS

### The Four-Voice Model

EMON uses a hybrid voice model. Each voice is assigned to specific moments:

| Voice | Assigned To | Character |
|-------|------------|-----------|
| **Apple — minimalism** | All standard UI copy | Short, calm, clean, emotionally neutral, never loud |
| **Braun — precision** | Technical content, data labels, specs | Honest, functional, no vague adjectives, engineered clarity |
| **Monty Python — success** | Positive confirmations only | Elegant absurdity, a quiet wink, refined playfulness |
| **Ricky Gervais — error** | Error states only | Dry, understated, quietly ironic, adult, never insulting |

### Universal Copy Rules
- **No exclamation marks. Ever. In any context.**
- Titles: 2–4 words
- Buttons: 1–3 words (action verbs preferred)
- Short sentences: one idea per sentence
- No hype or marketing — copy is functional
- Humour only where assigned
- Units always included: '3.42 kW' not '3.42'
- **European number format:** comma as decimal separator — '160,8 kWh'
- Mixed-weight inline: numeric value is Bold, label/unit is Light, same size/colour

### Voice Examples

**Apple (standard UI):**  
'Charging scheduled.' / 'Battery updated.' / 'Connected to Wi-Fi Mesh.' / 'Dynamic pricing active.'

**Braun (technical):**  
'Grid import: 1.28 kW.' / 'Solar generation: 3.42 kW.' / 'Battery discharge limit: 20%.'

**Monty Python (success):**  
'Saved. Everything lined up politely.' / 'Connected. A tiny spark of order appeared.' / 'Done. The data straightened its posture.'

**Ricky Gervais (error):**  
'Couldn't connect. Even the router looks uncertain.' / 'No grid data. The meter might be having a moment.' / 'Still loading... slowly, but with enthusiasm.'

### Casing
- Screen titles: Mixed case (Bold first word + Light second word)
- Navigation: ALL CAPS (web only)
- Buttons: Sentence case
- Data labels: Sentence case
- Brand names: ALL CAPS (ANDO, FLUXX, EMON, etc.)

### User Types
- **Installer:** Braun precision default, technical language welcomed, never condescending
- **Consumer:** Apple minimalism default, technical terms translated to plain words

---

## VISUAL FOUNDATIONS

### Color System
- **No gradients. No shadows. No transparency.** All surfaces are flat solid fills.
- The darkest text is `#5B5B5B` — never true black in the app.
- One warm accent (`#FFEB9E`) reserved strictly for grid balancing reserve bands and status dots.
- One cool accent (`#CCEDF0`) reserved strictly for system notice cards.
- Every product brand has one corporate colour used for status dots, battery fill tints, product hover states.

### Typography
- **App font:** Source Han Sans KR — Light (300), Normal (400), Bold (700) only
- **Web font:** Helvetica Neue — Thin, Ultra Light, Light, Regular
- Never mix fonts within the same surface
- **Distinctive rule:** Mixed-weight inline spans — numeric values Bold, units/labels Light, same size and colour on the same baseline
- Hero numbers (SoC %) displayed at 94px Bold

### Backgrounds
- App: pure white `#FFFFFF` — no imagery, no textures, no patterns
- Web canvas: `#F7F7F5` (off-white)
- Cards: `#F4F4F4` (primary) / `#E3E3E3` (stats row)
- No full-bleed photography in the app UI (only marketing/onboarding)

### Animation
- No formal animation system defined in sources
- Implied: minimal, functional — no bounces, no decorative motion
- Loading: radial line spinner (custom SVG, 1px stroke)

### Hover / Press States
- **Hover (web):** product name adopts its corporate colour; product type label appears in same colour
- **Press (app):** corporate colour fill replaces button fill
- No opacity hover states — colour transitions only

### Borders & Dividers
- Dividers: 1px `#DDDDDD` horizontal/vertical lines
- Input default stroke: 1px `#BBBBBB`; focused: 1px corporate colour
- Cards: no stroke, flat fill only

### Corner Radii
- Cards (outer): 12px
- Cards (inner sub-elements): 8px
- Buttons: 8px
- Input fields: 8px
- Modals: 12px
- Reserve band (nested): 0px top / 8px bottom

### Cards
- No shadow, no border, no gradient
- Flat fill: `#F4F4F4` primary, `#E3E3E3` darker stats
- Inner padding: 20px (fixed)
- All spacing multiples of 8px

### Layout
- App canvas: 393×852px (iPhone 14/15 Pro)
- Side gutters: 20px each side (353px usable width)
- Spacing base unit: 8px — all spacing is a multiple of 8px
- Top bar: 40px / Bottom bar: 40px (always present, always empty)
- Content inner padding: 20px

### Imagery / Photography
- App UI: no photography
- Web/marketing: warm amber-to-brown editorial photography, domestic subjects, shallow depth of field (reference: Watts' Live competitor benchmark for photographic quality target)

### Icons
- Bespoke SVGs by Strohm.energy graphic design team
- Flat, 1px stroke, no fill (except status dots which are solid filled circles)
- Do NOT substitute with third-party icon libraries (Material Icons, SF Symbols, etc.)
- Status dots: 12px filled circles, `#FFEB9E` or product brand colour

---

## ICONOGRAPHY

All icons in EMON are **bespoke SVGs** produced by the Strohm.energy graphic design team. There is no built-in icon font, no CDN icon library, and no emoji used anywhere in the product.

Key bespoke icons: camera, solar grid, lightning box, checkmark/yes, back chevron + line.

**Do not substitute.** If a bespoke icon is unavailable, use a placeholder rectangle with the icon name as a label.

Icon files: **not yet extracted** — requires Figma access (`VPcX9e6BPcmWMj5og6IKgC`) or asset export from the design team.

Logo assets: see `assets/` folder for available logos.

---

## FILE INDEX

```
README.md                          ← This file
SKILL.md                           ← Agent skill descriptor
colors_and_type.css                ← CSS custom properties: colors, typography, spacing
assets/
  logos/                           ← Brand logos (PNG/SVG from uploaded guideline)
  icons/                           ← Placeholder — bespoke SVGs needed from Figma
preview/
  colors-neutral.html              ← Neutral palette swatches
  colors-surfaces.html             ← Surface & card colours
  colors-semantic.html             ← Semantic state colours
  colors-brands.html               ← Product brand colours
  type-scale-app.html              ← App type scale (Source Han Sans KR)
  type-scale-web.html              ← Web type scale (Helvetica Neue)
  type-mixed-weight.html           ← Mixed-weight inline pattern
  spacing-tokens.html              ← 8px grid spacing tokens
  spacing-layout.html              ← App layout zones
  components-buttons.html          ← Button states
  components-inputs.html           ← Input field states
  components-cards.html            ← Card variants
  components-modals.html           ← Modal / pop-up patterns
  components-charts.html           ← Chart components
  brand-logos.html                 ← Logo system overview
  brand-voice.html                 ← Copy voice examples
ui_kits/
  emon/
    README.md                      ← EMON app UI kit notes
    index.html                     ← Interactive EMON app prototype
    TopBar.jsx                     ← Top bar component
    BottomBar.jsx                  ← Bottom bar component
    BatteryStatus.jsx              ← Battery SoC screen
    EnergyPricing.jsx              ← Energy pricing screen
    SolarSetup.jsx                 ← ANDO solar setup flow
    Shared.jsx                     ← Shared tokens & primitives
```

---

## KNOWN GAPS / ACTION ITEMS

1. **Hex codes:** Several product brand colours need full 6-digit re-export from Figma (`VPcX9e6BPcmWMj5og6IKgC`). The PDF source truncated all hex codes.
2. **Bespoke icons:** All app icons are custom SVGs — not yet available. Requires Figma export or asset handoff from design team.
3. **Logo SVGs:** Logo assets in `assets/logos/` are placeholders — full vector files needed from design team.
4. **Font files:** Source Han Sans KR is substituted with **Noto Sans KR** (Google Fonts) — visually near-identical. Original font files from Adobe Fonts preferred.
5. **Figma access:** Figma file `VPcX9e6BPcmWMj5og6IKgC` referenced throughout — screens, variables, and full colour tokens require direct Figma access.
