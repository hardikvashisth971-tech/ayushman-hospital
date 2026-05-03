# Design Brief: Ayushman Hospital

## Tone & Aesthetic
Professional, trustworthy, accessible healthcare. Clean modernism with warmth. Emphasizes emergency accessibility, 24/7 support, and patient-centric care through visual hierarchy.

## Visual Direction
Refined, minimalist medical design. Light mode by default. Teal-blue primary conveys trust and calm. Warm gold accents signal premium care. Emergency red reserved for urgent CTAs and alerts only. No decoration; every visual choice serves clarity and accessibility.

## Color Palette

| Role | OKLCH | Hex | Usage |
|------|-------|-----|-------|
| Primary (Medical Teal) | 0.58 0.12 240 | #2B6E9E | Buttons, headers, primary CTAs, logo |
| Secondary (Wellness Green) | 0.68 0.08 140 | #5A8D68 | Accent borders, secondary actions, highlights |
| Accent (Warm Gold) | 0.72 0.08 60 | #B5933D | Premium highlights, trust signals |
| Destructive (Emergency Red) | 0.55 0.22 25 | #D84444 | Emergency calls, urgent alerts, danger states |
| Background | 0.99 0 0 | #FFFBF6 | Main page background |
| Card | 1.0 0 0 | #FFFFFF | Content cards, panels, dialogs |
| Foreground | 0.15 0 0 | #1A1A1A | Body text, primary text |
| Muted | 0.93 0 0 | #EAEAEA | Disabled text, secondary labels |
| Border | 0.88 0 0 | #DCDCDC | Card borders, dividers |

## Typography

| Layer | Font | Usage | Scale |
|-------|------|-------|-------|
| Display | General Sans (400, 600) | Headers, hero titles, section headings | 24px, 32px, 40px |
| Body | DM Sans (400, 500, 600) | Body copy, cards, UI labels | 16px base, 14px small |
| Mono | Geist Mono (400) | Medical codes, appointment refs, data | 12px, 14px |

## Structural Zones

| Zone | Background | Border | Shadow | Usage |
|------|------------|--------|--------|-------|
| Header | `bg-card` | `border-b border-border` | `shadow-card` | Navigation, logo, emergency button |
| Hero | `hero-gradient` | None | `shadow-hero` | Primary CTA, tagline, large imagery |
| Content | `bg-background` | None | None | Main page flow, breathing room |
| Card | `bg-card` | `border border-border` | `shadow-card` | Services, doctors, testimonials, departments |
| Section Alt | `bg-muted/5` | None | None | Alternating section backgrounds |
| Footer | `bg-muted/10` | `border-t border-border` | None | Contact, helpline, copyright |

## Spacing & Rhythm
Base unit: 4px. Padding: 12px (sm), 20px (md), 32px (lg), 48px (xl). Gap between cards: 20px. Section padding: 48px vertical, 32px horizontal. Mobile: halve vertical padding below lg.

## Component Patterns

| Component | Style | Interaction |
|-----------|-------|-------------|
| Primary Button | `bg-primary text-primary-foreground rounded-lg` | `hover:opacity-90 shadow-card` |
| Secondary Button | `bg-secondary text-secondary-foreground rounded-lg` | `hover:opacity-90` |
| Emergency Button | `bg-destructive text-white font-semibold px-6 py-3` | `hover:bg-destructive/90 shadow-card` |
| Card | `medical-card` class from utilities | `hover:shadow-elevated hover:-translate-y-1px` |
| Badge | `bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm` | None |
| Input | `bg-input border border-input rounded-lg px-4 py-2` | `focus:ring-2 ring-primary` |

## Motion
- **Default transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (applied to interactive elements)
- **Card hover**: Subtle shadow lift + 1px vertical translate
- **Button press**: Opacity fade to 90%
- **Loading**: Pulse animation on progress states
- **No entrance animations**: Content loads in place; focus on clarity over drama

## Differentiation
**Emergency accessibility front-and-center**: Red emergency call button in header (always visible). 24/7 helpline in footer. One-click calling interface. Doctors and departments are discoverable without friction.

## Elevation & Depth
- **Subtle shadows** only (card, elevated). No glows or neon. Depth through layering and z-index, not blur.
- **Light card on light background**: Achieved via `border + shadow-card`, not opacity.

## Constraints
- **Fonts**: General Sans (display), DM Sans (body), Geist Mono (mono) only.
- **Colors**: OKLCH tokens only. No hex literals in components.
- **Icons**: Heroicons or equivalent; consistent 24x24 size.
- **Images**: Stock medical photography or generated illustrations.
- **Dark mode**: Secondary, only if explicitly requested. Light mode is canonical.
- **Animations**: Preference-respecting; disable on `prefers-reduced-motion`.

## Responsive Breakpoints
- **Mobile first**: Base styles for 320px+
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px), `xl:` (1280px), `2xl:` (1400px)

## Quality Benchmarks
Linear (clarity), Stripe (trust), Apple (refinement). Clean, purposeful, zero ornament.
