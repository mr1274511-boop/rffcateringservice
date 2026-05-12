# Design Brief

## Direction
RFF Catering — Islamic Warmth & Hospitality. Luxury catering experience with culturally authentic Islamic branding, warm color palette (forest green, rich gold), and welcoming warmth throughout.

## Tone
Warm, confident, deliberately Islamic—hospitality luxury inspired by Aman resorts meets geometric Islamic minimalism. Refined, never cold.

## Differentiation
Decorative Islamic geometric corner ornaments and Bismillah banner as persistent brand anchors; warm gold CTAs; RTL layout support for Arabic; refined motion choreography.

## Color Palette

| Token      | OKLCH           | Role                         |
|------------|-----------------|------------------------------|
| background | 0.13 0.025 155  | Deep forest green base        |
| foreground | 0.92 0.01 150   | Warm off-white text          |
| card       | 0.18 0.025 155  | Elevated forest card surface |
| primary    | 0.65 0.18 85    | Rich gold/amber authority    |
| secondary  | 0.35 0.15 155   | Forest green culinary accent |
| accent     | 0.88 0.015 80   | Cream/ivory highlights       |
| destructive| 0.55 0.22 25    | Red warning alerts           |

## Typography
- Display: Fraunces (serif, elegant, authoritative for Islamic aesthetic)
- Body: DM Sans (clean, multilingual support)
- Mono: Geist Mono (order details, pricing)
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl font-bold`, labels `text-sm font-semibold uppercase`, body `text-base`

## Elevation & Depth
Multi-layered surface hierarchy: dark forest base, elevated card surfaces with subtle warm shadows, gold accent borders on interactive elements, refined 0.3s smooth transitions.

## Structural Zones

| Zone      | Background       | Border           | Notes                              |
|-----------|------------------|------------------|---------  |
| Header    | card (elevated)  | gold accent      | Arabic right-aligned, Bismillah banner |
| Hero      | card with gradient| none             | Islamic star pattern overlay       |
| Content   | alternating bg/muted | none           | Alternating sections for rhythm    |
| Cards     | card             | gold on hover    | Menu, orders, invoices             |
| Footer    | muted/dark       | gold accent top  | Multilingual, warm credibility     |
| Admin     | sidebar dark     | gold active nav  | Sidebar + main content grid        |

## Spacing & Rhythm
Generous spacing between sections (3–4rem), card groups with 1.5rem gaps, micro-spacing 0.5–1rem. Spacious density for hospitality warmth.

## Component Patterns
- Buttons: gold primary, forest secondary, rounded-md, hover brightens gold to lighter amber
- Cards: rounded-md, forest green bg, gold border accent on hover, shadow-elevated
- Badges: rounded-full, muted background, foreground text
- Forms: cream/ivory input backgrounds, gold focus rings, multilingual placeholders

## Motion
- Entrance: fade-in 0.3s on page load
- Hover: gold border slide-in, 0.3s smooth transition
- Decorative: subtle Islamic ornament opacity pulse on section headers

## Constraints
- Never use raw hex or named colors; all colors via OKLCH tokens
- RTL layout support for Arabic language mode
- Multilingual labels and alt text on all interactive elements
- Bismillah banner must persist on every page header
- Admin dashboard: password-protected, full menu CRUD, real-time order management

## Signature Detail
Islamic geometric corner ornaments (stars, arabesque) on section dividers and card corners. Cultural authenticity embedded in design system, not bolted-on decoration.
