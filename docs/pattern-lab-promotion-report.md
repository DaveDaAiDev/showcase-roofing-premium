# Pattern Lab Promotion Report

## Source

`dave-digital-pattern-lab` → `/archetypes/roofing`

## Target

`showcase-roofing-premium`

## Pattern Stack Reviewed

- SplitHero
- DiagnosticStrip
- ServiceCardGrid
- LocalPresenceCardStack
- ReviewWall
- PremiumContactBlock

## Phase 2 Note

Initial roofing foundation followed the pattern lab recipe but felt too close to HVAC layout rhythm.

Phase 2 added roofing-specific signature sections to improve archetype distinction:

- **StormTriage** — hail, missing shingles, active leak, wind lift cards
- **ProjectProof** — before/after/documentation placeholder panels
- **Hero visual** — storm response board / roof inspection report (not comfort dashboard)

## What Matches Pattern Lab

| Pattern | Showcase | Status |
|---|---|---|
| SplitHero | `Hero` + storm response board | Showcase-tested |
| DiagnosticStrip | `DiagnosticStrip` | Showcase-tested |
| ServiceCardGrid | `Services` | Showcase-tested |
| LocalPresenceCardStack | `LocalPresence` | Showcase-tested |
| ReviewWall | `Reviews` | Showcase-tested |
| PremiumContactBlock | `Contact` (UI-only demo) | Previewed |

## Roofing-Only Additions

| Section | Purpose |
|---|---|
| StormTriage | Industry-specific damage triage |
| ProjectProof | Documentation / before-after proof framing |

## Performance / INP

Scanned `src` for heavy client handlers:

- Only `Contact.tsx` uses `useState` for demo form success
- No `onMouseMove`, scroll listeners, intervals, or JS-driven animation loops

If INP warnings appear in Vercel preview overlays, they are likely tooling/browser overlay related — not app event handlers.

## LaunchPad Readiness

**Overall showcase:** Showcase-tested (after Phase 2 identity pass)

Individual patterns remain portable concepts — extract manually per promotion workflow, do not import from pattern lab repo.

## Related

- [showcase-brief.md](./showcase-brief.md)
- [pattern-lab-source.md](./pattern-lab-source.md)
