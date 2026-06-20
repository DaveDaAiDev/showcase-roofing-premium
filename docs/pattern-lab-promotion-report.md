# Pattern Lab Promotion Report

## Source

`dave-digital-pattern-lab` → `/patterns/storm-contractor` and `/archetypes/roofing`

## Target

`showcase-roofing-premium`

## Phase 3 — Storm Contractor Pattern Pack

Phase 3 applied the **Storm Contractor Pattern Pack** from the pattern lab. This pass changed the **visual silhouette**, not just copy or colors.

Manual adaptation only — no cross-repo imports or package links.

### Patterns adapted

| Pattern lab | Showcase section |
|---|---|
| StormContractorHero | `Hero` |
| StormTriageGrid | `StormTriage` |
| ProjectProofGallery | `ProjectProof` |
| DocumentationPacket | `DocumentationPacket` |
| InspectionProcessTimeline | `InspectionProcessTimeline` |
| LocalPresenceCardStack | `LocalPresence` |
| ReviewWall | `Reviews` |
| PremiumContactBlock | `Contact` |

### Silhouette changes

- Hero: full-width dark storm section with diagonal roof plane, inspection report card, overlapping triage preview strip — **not** a symmetrical HVAC split dashboard
- Storm triage: numbered contractor triage board with urgency badges
- Project proof: image-ready Before / After / Documentation panels
- Documentation packet: file-packet rows for homeowner review (no insurance guarantees)
- Inspection process: rugged 4-step stepper timeline

### Clone check result

If text is blurred, the site should read as **storm contractor / roofing**, not **HVAC comfort-tech**.

## Phase 2 Note

Initial roofing foundation followed the pattern lab recipe but felt too close to HVAC layout rhythm. Phase 2 added StormTriage and ProjectProof. Phase 3 replaced the hero silhouette and added DocumentationPacket + InspectionProcessTimeline.

## What Matches Pattern Lab

| Pattern | Showcase | Status |
|---|---|---|
| StormContractorHero | `Hero` | Showcase-tested (Phase 3) |
| StormTriageGrid | `StormTriage` | Showcase-tested (Phase 3) |
| ServiceCardGrid | `Services` | Showcase-tested |
| ProjectProofGallery | `ProjectProof` | Showcase-tested (Phase 3) |
| DocumentationPacket | `DocumentationPacket` | Showcase-tested (Phase 3) |
| InspectionProcessTimeline | `InspectionProcessTimeline` | Showcase-tested (Phase 3) |
| LocalPresenceCardStack | `LocalPresence` | Showcase-tested |
| ReviewWall | `Reviews` | Showcase-tested |
| PremiumContactBlock | `Contact` (UI-only demo) | Previewed |

## Performance / INP

Scanned `src` for heavy client handlers:

- Only `Contact.tsx` uses `useState` for demo form success
- No `onMouseMove`, scroll listeners, intervals, or JS-driven animation loops

## LaunchPad Readiness

**Overall showcase:** Showcase-tested (after Phase 3 storm-contractor pass)

Individual patterns remain portable concepts — extract manually per promotion workflow, do not import from pattern lab repo.

## Related

- [showcase-brief.md](./showcase-brief.md)
- [pattern-lab-source.md](./pattern-lab-source.md)
