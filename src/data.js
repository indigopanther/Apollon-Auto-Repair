// Central content for Apollon Auto Repair — single source of truth.
const CDN = "https://cdn.prod.website-files.com/65f7afb1ab77ff98f414f782/";

export const BUSINESS = {
  name: "Apollon Auto Repair",
  tagline: "Honest, Family-Owned Auto Repair in Atlanta",
  phone: "770-457-5868",
  phoneHref: "tel:7704575868",
  address: "2727 Shallowford Rd NE, Atlanta, GA 30341",
  addressShort: "2727 Shallowford Rd NE",
  cityState: "Atlanta, GA 30341",
  mapsHref:
    "https://maps.google.com/?q=2727+Shallowford+Rd+NE+Atlanta+GA+30341",
  mapEmbed:
    "https://www.google.com/maps?q=2727+Shallowford+Rd+NE,+Atlanta,+GA+30341&output=embed",
  hoursWeek: "Mon – Sat: 7:00 AM – 6:00 PM",
  hoursSun: "Sunday: Closed",
  years: "35+",
  rating: "4.3",
  reviewCount: "268",
  facebook: "https://www.facebook.com/kostasapollonauto/",
  yelp: "https://www.yelp.com/biz/apollon-auto-repair-atlanta-5",
};

export const NAV = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    icon: CDN + "6604aadb30b054f52274f427_48%20hand%2C%20wrench%20%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Routine Maintenance",
    short: "Oil changes, filters, fluids & tire rotations.",
    long: "Regular maintenance is the cheapest way to avoid expensive repairs. We handle oil changes, filter replacements, fluid checks and top-offs, tire rotations, and scheduled factory maintenance to keep your vehicle running its best.",
  },
  {
    icon: CDN + "6604aaa7b00cc2dc862e14a1_5%20steering%2C%20wheel%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Diagnostic Services",
    short: "Pinpoint the real cause of warning lights.",
    long: "Check-engine light on or something just feels off? Our technicians use modern diagnostic equipment to find the true root cause the first time — so you fix what's actually wrong, not what's easy to guess.",
  },
  {
    icon: CDN + "6604aaaf360bf10ca774dfcd_7%20brake%2C%20pad%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Brake Repair & Service",
    short: "Inspections, pads, rotors & full brake jobs.",
    long: "Your brakes are your most important safety system. We provide thorough inspections, pad and rotor replacement, and complete brake service to keep your stopping power exactly where it should be.",
  },
  {
    icon: CDN + "6604aac44a49dfc45e45a52e_23%20engine%2C%20detail%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Engine Repair & Tune-Ups",
    short: "From minor fixes to major overhauls.",
    long: "From minor repairs to major overhauls, our team has the expertise to handle a wide range of engine issues. Our tune-up services restore performance and improve fuel efficiency.",
  },
  {
    icon: CDN + "6604aaac2f83fed9e5106575_6%20timing%2C%20belt%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Transmission Services",
    short: "Fluid flushes, repairs & replacements.",
    long: "Automatic or manual, your transmission needs proper care. We offer fluid flushes, repairs, and replacements to keep your gears shifting smoothly and extend the life of your drivetrain.",
  },
  {
    icon: CDN + "6604aaa20a6ef429de1a9a64_2%20terminal%2C%20battery%2C%20electricity%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Electrical Diagnosis & Repair",
    short: "Lights, batteries & vehicle electronics.",
    long: "Faulty lights, battery problems, or quirky electronics? Modern vehicles are full of sensors and wiring. Our technicians diagnose and repair electrical issues quickly and correctly.",
  },
  {
    icon: CDN + "6604aab150bdb3ab7414bcee_8%20shock%2C%20breaker%2C%20absorber%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Suspension & Steering",
    short: "Alignments, shocks, struts & steering.",
    long: "A smooth, safe ride starts with healthy suspension and steering. We handle wheel alignments, shock and strut replacement, and steering component repairs for comfortable, controlled driving.",
  },
  {
    icon: CDN + "6604aae537464e6b1c5be3c4_36%20purchase%2C%20check%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "A/C & Heating Service",
    short: "Stay comfortable in every season.",
    long: "Atlanta summers are no joke. We diagnose and repair air conditioning and heating systems — recharges, compressors, and climate-control components — so your cabin stays comfortable year-round.",
  },
  {
    icon: CDN + "6604aaeb50bdb3ab7414e725_33%20speedometer%2C%20detail%2C%20speed%2C%20mechanic%2C%20service%2C%20car%2C%20transport.svg",
    title: "Exhaust System Repair",
    short: "Quieter, cleaner, more efficient driving.",
    long: "Loud noises, rattles, decreased fuel economy, or emissions issues usually trace back to the exhaust. We inspect and repair exhaust systems to keep your vehicle quiet, clean, and efficient.",
  },
];

export const REVIEWS = [
  {
    name: "Marcus T.",
    where: "Atlanta, GA",
    stars: 5,
    text: "After four other shops tried to sell me work I didn't need, Apollon told me the truth and charged a fair price. Honest people — I won't go anywhere else.",
  },
  {
    name: "Denise R.",
    where: "Chamblee, GA",
    stars: 5,
    text: "In and out within an hour and the price was exactly what they quoted. They say what they'll do and do what they say. Best prices in Atlanta.",
  },
  {
    name: "James P.",
    where: "Brookhaven, GA",
    stars: 5,
    text: "Been bringing my cars to Kostas and the crew for over 15 years. Reliable, friendly, and they never overcharge like the dealerships do.",
  },
  {
    name: "Sophia L.",
    where: "Doraville, GA",
    stars: 5,
    text: "Accurate, precise, and fast. They explained exactly what was wrong and walked me through my options without any pressure. Highly recommend.",
  },
  {
    name: "Andre W.",
    where: "Tucker, GA",
    stars: 4,
    text: "Fair pricing and solid work on my brakes and suspension. Quick turnaround and they stand behind what they do. My go-to shop now.",
  },
  {
    name: "Karen M.",
    where: "Atlanta, GA",
    stars: 5,
    text: "A family-owned shop that treats you like family. Trustworthy diagnostics and no unnecessary upsells. It's why I keep coming back.",
  },
];

// Automotive imagery. Background-image tiles degrade gracefully to a gradient
// if a remote photo is slow or unavailable.
const U = (id, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const GALLERY = [
  { src: U("1632823471565-1ecdf0a09a06"), label: "Our Service Bays" },
  { src: U("1486006920555-c77dcf18193c"), label: "Engine Work" },
  { src: U("1487754180451-c456f719a1fc"), label: "Under the Hood" },
  { src: U("1625047509248-ec889cbff17f"), label: "Brake Service" },
  { src: U("1530046339160-ce3e530c7d2f"), label: "Expert Technicians" },
  { src: U("1503376780353-7e6692767b70"), label: "Every Make & Model" },
  { src: U("1605559424843-9e4c228bf1c2"), label: "Diagnostics" },
  { src: U("1632823469850-2f77dd6a3b5f"), label: "Precision Repairs" },
  { src: U("1492144534655-ae79c964c9d7"), label: "Ready to Roll" },
];

export const HERO_IMG = U("1632823471565-1ecdf0a09a06", 1920);
export const ABOUT_IMG = U("1486006920555-c77dcf18193c", 1200);
export const BAND_IMG = U("1487754180451-c456f719a1fc", 1920);
