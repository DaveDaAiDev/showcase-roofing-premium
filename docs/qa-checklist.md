# QA Checklist

## Build

```bash
npm run lint
npm run build
```

## Routes

- `/`
- `/services`
- `/services/storm-damage`
- `/services/roof-repair`
- `/services/roof-replacement`
- `/services/roof-inspection`
- `/reviews`
- `/service-area`

## Layout

- Mobile widths: 360, 390, 414
- No horizontal overflow
- No overlapping cards (hero triage preview strip clears hero padding)
- No giant blank spaces

## Storm Contractor Silhouette (Phase 3)

- Hero is visually distinct from HVAC — full-width storm hero, not split comfort dashboard
- Storm triage cards use triage-board layout with urgency badges
- Project proof section has image-ready Before / After / Documentation panels
- Documentation packet section renders file-packet rows
- Inspection process timeline uses rugged stepper (not HVAC process cards)

## Clone Check

If text is blurred, the site should read as storm contractor/roofing, not HVAC comfort-tech.

## CTA Rhythm

- Header: Call Now (utility) + Request Inspection
- Hero: Request Roof Inspection + View Services (no Call Now in hero body)
- StormTriage: Request Roof Inspection
- DocumentationPacket / InspectionProcessTimeline: Request Inspection or Schedule Inspection
- Contact: Send Inspection Request (final conversion)

Avoid multiple Call Now buttons in the same viewport, bottom sticky CTA, or giant duplicate callback blocks near contact/footer.

## Motion

- Reduced motion disables non-essential animation
- Content visible by default
- No scroll-reveal dependency

## Contact

- UI-only demo success state
- No backend submission

## Performance / INP

- Only `Contact.tsx` uses client `useState` for demo submit feedback
- No scroll/mousemove listeners in app code
- Prefer CSS animations (see `globals.css` keyframes)
