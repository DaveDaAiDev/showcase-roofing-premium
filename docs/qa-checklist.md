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
- No overlapping cards
- No giant blank spaces

## CTA Rhythm

- Header: Call Now (utility) + Request Inspection
- Hero: Request Roof Inspection + View Services
- Diagnostic: Schedule Inspection (no Call Now duplicate)
- Contact: Send Inspection Request (final conversion)

## Motion

- Reduced motion disables non-essential animation
- Content visible by default
- No scroll-reveal dependency

## Contact

- UI-only demo success state
- No backend submission
