export type NavLink = { label: string; href: string };

export type ServiceCard = {
  title: string;
  benefit: string;
  bullets: string[];
  cta: string;
  slug: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  serviceType: string;
  rating: number;
};

export type ServiceDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: { title: string; description: string }[];
  signs: string[];
  process: { step: string; title: string; description: string }[];
};

export const siteContent = {
  brand: "Summit Shield Roofing",
  tagline: "Storm-ready roofing help for Fort Worth homeowners.",
  phoneDisplay: "(817) 555-0198",
  phoneHref: "tel:+18175550198",
  email: "hello@summitshieldroofing.com",
  demoNote: "Demo roofing showcase — fictional business for portfolio use.",
  hero: {
    eyebrow: "Fort Worth roofing help after storms, leaks, and hail",
    title: "Roofing help when the next storm cannot wait.",
    description:
      "Demo roofing site built for inspection requests, storm-response trust, and local service-area visibility.",
    primaryCta: "Request Roof Inspection",
    secondaryCta: "View Services",
    trustPoints: ["Storm response ready", "Insurance-friendly documentation", "Local Fort Worth crews"],
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Storm Damage", href: "/services/storm-damage" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Area", href: "/service-area" },
    { label: "Contact", href: "/#contact" },
  ],
  diagnostic: {
    title: "Storm damage or roof leak?",
    description:
      "Start with a fast inspection before small damage becomes a bigger repair.",
    cta: "Schedule Inspection",
  },
  services: [
    {
      title: "Storm Damage",
      benefit: "Rapid triage after hail, wind, and heavy rain events.",
      bullets: ["Emergency leak response", "Hail and wind assessment", "Insurance documentation support"],
      cta: "View Storm Damage",
      slug: "storm-damage",
    },
    {
      title: "Roof Repair",
      benefit: "Targeted fixes that stop leaks and protect the structure.",
      bullets: ["Leak source diagnostics", "Flashing and shingle repair", "Clear repair scope before work"],
      cta: "View Roof Repair",
      slug: "roof-repair",
    },
    {
      title: "Roof Replacement",
      benefit: "Full replacement planning when repairs stop making sense.",
      bullets: ["Material and warranty review", "Timeline and budget clarity", "Storm-ready upgrade options"],
      cta: "View Replacement",
      slug: "roof-replacement",
    },
    {
      title: "Roof Inspection",
      benefit: "Professional inspection before buying, selling, or filing claims.",
      bullets: ["Full roof walkthrough", "Photo documentation", "Repair vs replace guidance"],
      cta: "View Inspection",
      slug: "roof-inspection",
    },
  ] satisfies ServiceCard[],
  localPresence: {
    title: "Show up clearly when storm damage hits.",
    description:
      "Local presence cleanup is available as an add-on for businesses that want tighter listing consistency — no live platform integration implied.",
    primaryAreas: ["Fort Worth", "Arlington", "Benbrook", "Keller", "Saginaw", "North Richland Hills"],
    checklist: [
      "Emergency services listed",
      "Roof inspection categories",
      "Review request strategy",
      "Project photos updated",
      "Website and call links aligned",
    ],
    trustStats: [
      { value: "30 mi", label: "Service radius" },
      { value: "6", label: "Primary neighborhoods" },
      { value: "10", label: "Profile cleanup items" },
      { value: "48 hr", label: "Review response plan" },
    ],
    note: "Mock local profile readiness cards — demo only.",
  },
  reviews: {
    averageRating: 4.9,
    reviewCount: 96,
    items: [
      {
        quote: "They inspected hail damage the same week and helped us understand what insurance would cover.",
        name: "Marcus L.",
        location: "Arlington",
        serviceType: "Hail damage inspection",
        rating: 5,
      },
      {
        quote: "Our leak was patched quickly and they explained whether a full replacement was actually needed.",
        name: "Diana P.",
        location: "Fort Worth",
        serviceType: "Emergency leak repair",
        rating: 5,
      },
      {
        quote: "Clear timeline, no pressure, and the crew kept the yard clean through the full replacement.",
        name: "Raymond K.",
        location: "Benbrook",
        serviceType: "Roof replacement",
        rating: 5,
      },
      {
        quote: "They documented everything for our claim and walked us through each photo before submission.",
        name: "Helen W.",
        location: "Keller",
        serviceType: "Insurance documentation support",
        rating: 5,
      },
    ] satisfies Testimonial[],
  },
  serviceAreas: [
    "Fort Worth",
    "Arlington",
    "Benbrook",
    "Keller",
    "Saginaw",
    "North Richland Hills",
  ],
  businessHours: [
    { label: "Mon – Fri", value: "7:00 AM – 6:00 PM" },
    { label: "Saturday", value: "8:00 AM – 4:00 PM" },
    { label: "Sunday", value: "Storm emergencies only" },
  ],
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "storm-damage",
    name: "Storm Damage",
    eyebrow: "Storm Response",
    title: "Fort Worth Storm Damage Roofing",
    description:
      "When hail or wind hits North Texas, small damage can turn into major leaks fast. We triage storm impact and map the smartest next step.",
    benefits: [
      { title: "Fast damage triage", description: "Priority assessment after severe weather events." },
      { title: "Insurance-ready docs", description: "Photo documentation and notes organized for claims." },
      { title: "Leak prevention focus", description: "Temporary protection when needed before full repair." },
    ],
    signs: ["Missing or lifted shingles after storms", "Granules in gutters", "Ceiling stains after rain", "Hail dents on vents or flashing", "Tree debris impact on the roofline"],
    process: [
      { step: "01", title: "Request inspection", description: "Share storm date and visible damage." },
      { step: "02", title: "On-site assessment", description: "We inspect roof planes, flashing, and attic signs." },
      { step: "03", title: "Action plan", description: "You get repair, claim, or replacement guidance." },
    ],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    eyebrow: "Targeted Repair",
    title: "Fort Worth Roof Repair",
    description:
      "Not every issue needs a full replacement. We isolate leak sources and recommend repairs that protect the home without overselling.",
    benefits: [
      { title: "Leak source diagnostics", description: "Find the real entry point, not just the visible stain." },
      { title: "Flashing expertise", description: "Common failure points around vents, chimneys, and valleys." },
      { title: "Honest scope", description: "Repair options explained before any work begins." },
    ],
    signs: ["Active leak during rain", "Damaged flashing", "Curled or cracked shingles", "Soft spots near roof penetrations", "Recurring patch failures"],
    process: [
      { step: "01", title: "Describe the issue", description: "Tell us when leaks appear and where." },
      { step: "02", title: "Diagnostic visit", description: "We trace moisture paths and roof defects." },
      { step: "03", title: "Repair recommendation", description: "Clear pricing direction and timeline." },
    ],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    eyebrow: "Full Replacement",
    title: "Fort Worth Roof Replacement",
    description:
      "When age, storm history, or repeated repairs stack up, a planned replacement protects value and reduces emergency risk.",
    benefits: [
      { title: "Material guidance", description: "Options matched to budget, warranty, and storm exposure." },
      { title: "Project roadmap", description: "Timeline, prep steps, and cleanup expectations upfront." },
      { title: "Storm-ready upgrades", description: "Discuss ventilation, underlayment, and durability choices." },
    ],
    signs: ["Roof is near end of expected lifespan", "Widespread shingle failure", "Multiple active leak zones", "Major hail damage across planes", "Frequent repair bills each season"],
    process: [
      { step: "01", title: "Consultation", description: "Review roof age, damage history, and goals." },
      { step: "02", title: "Proposal review", description: "Compare materials, warranty, and investment." },
      { step: "03", title: "Install plan", description: "Scheduled replacement with clear crew timeline." },
    ],
  },
  {
    slug: "roof-inspection",
    name: "Roof Inspection",
    eyebrow: "Professional Inspection",
    title: "Fort Worth Roof Inspection",
    description:
      "Inspections reduce guesswork before purchases, listings, or insurance conversations. You get documented findings and plain-language recommendations.",
    benefits: [
      { title: "Full roof walkthrough", description: "Exterior, flashing, penetrations, and attic clues." },
      { title: "Photo documentation", description: "Visual record you can reference or share." },
      { title: "Repair vs replace guidance", description: "Honest next-step framing without pressure." },
    ],
    signs: ["Buying or selling a home", "Insurance renewal questions", "Post-storm peace of mind", "Unknown roof age", "Planning a future replacement budget"],
    process: [
      { step: "01", title: "Book inspection", description: "Pick a window that works for your schedule." },
      { step: "02", title: "On-site review", description: "Structured checklist across the full system." },
      { step: "03", title: "Findings report", description: "Summary with priority recommendations." },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
