import { useParams, useNavigate, Link } from 'react-router';
import { ArrowLeft, ArrowRight, CheckCircle, Building2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

interface SectorData {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  challenges: string[];
  solutions: string[];
  products: { name: string; category: string }[];
  accent: string;
}

const sectorsData: Record<string, SectorData> = {
  airports: {
    title: 'Airports',
    tagline: 'Precision engineering for world-class aviation infrastructure.',
    description: 'Our turnkey construction and maintenance solutions are used by some of the biggest airports, from terminal to runway.',
    longDescription: `Airport infrastructure demands the highest standards of durability, load-bearing capacity, and chemical resistance. Civiltech Construction Chemicals LLP provides a complete suite of solutions engineered to withstand extreme conditions including heavy aircraft loads, fuel spills, and constant thermal cycling.\n\nFrom high-strength concrete admixtures for runway construction to epoxy-based industrial flooring systems for hangars and terminals, our product range covers every stage of airport construction and maintenance. Our waterproofing systems protect underground structures, fuel depots, and utility corridors, while our repair mortars extend the service life of existing airport infrastructure.`,
    image: 'https://images.unsplash.com/photo-1563805832691-1e597ad11777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY1Nzk2MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Extreme load-bearing requirements for runways and taxiways',
      'Chemical resistance to jet fuel, hydraulic fluids and deicers',
      'Minimal downtime for repairs and maintenance',
      'Waterproofing for underground fuel depots and utilities',
      'Fire-resistant flooring for hangar facilities',
    ],
    solutions: ['Industrial Flooring', 'Concrete Admixtures', 'Waterproofing Systems', 'Concrete Repair Mortars', 'Joint Sealants'],
    products: [
      { name: 'Industrial Flooring', category: 'flooring' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
      { name: 'Sealants', category: 'sealants' },
    ],
    accent: 'from-blue-900 to-blue-700',
  },
  buildings: {
    title: 'Buildings',
    tagline: 'Complete chemical solutions for every stage of a building\'s lifecycle.',
    description: 'High performance admixtures, seals, grouts and waterproofing solutions for residential, commercial, and high-rise buildings.',
    longDescription: `From the foundation to the rooftop, Civiltech Construction Chemicals LLP provides a comprehensive range of products that enhance building performance at every stage of construction and maintenance.\n\nOur concrete admixtures improve workability, strength, and durability during the casting phase. Our waterproofing systems protect basements, podiums, and flat roofs from water ingress. Our tile adhesives and grouts ensure long-lasting, aesthetic finishes, while our repair and protection systems extend the life of aging building structures.\n\nWhether it's a residential apartment complex, a commercial office tower, or a mixed-use development, Civiltech has the right product for every challenge.`,
    image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU3MDIwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Basement and podium waterproofing',
      'High-rise concrete mix design and workability',
      'Façade protection and surface coatings',
      'Tiling and finishing solutions for large-scale interiors',
      'Structural repair and rehabilitation',
    ],
    solutions: ['Waterproofing', 'Concrete Admixtures', 'Tile Adhesives & Grouts', 'Protective Coatings', 'Concrete Repair'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Tiling & Adhesives', category: 'tiling' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-slate-800 to-slate-600',
  },
  cement: {
    title: 'Cement',
    tagline: 'Optimizing cement quality and production efficiency.',
    description: 'We offer recognized expertise in adapting chemical technology for cement manufacturing, from construction to decommissioning.',
    longDescription: `The cement industry faces constant pressure to improve efficiency, reduce energy consumption, and enhance product quality. Civiltech's cement grinding aids and concrete admixtures are designed to address these challenges directly.\n\nOur grinding aids enhance mill output and cement fineness while reducing energy consumption. Our admixtures allow cement manufacturers to produce specialized products with improved performance characteristics, meeting the demands of modern high-strength and specialty concrete applications.`,
    image: 'https://images.unsplash.com/photo-1666219462105-2909c2d72d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBmYWN0b3J5JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjU3OTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Improving grinding efficiency and reducing energy consumption',
      'Enhancing cement quality and consistency',
      'Meeting diverse customer specifications',
      'Reducing clinker content while maintaining strength',
    ],
    solutions: ['Cement Grinding Aids', 'Concrete Admixtures', 'Surface Treatments'],
    products: [
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-gray-700 to-gray-600',
  },
  'chemical-process': {
    title: 'Chemical & Process',
    tagline: 'Robust solutions for chemically-aggressive industrial environments.',
    description: 'We have extensive experience in providing robust chemical and process structure solutions, including industrial and process plant infrastructure.',
    longDescription: `Chemical and process plants present some of the most severe environments for construction materials — with constant exposure to aggressive chemicals, high temperatures, and heavy mechanical loads. Civiltech Construction Chemicals LLP provides specialized products engineered to withstand these extreme conditions.\n\nOur epoxy-based industrial flooring systems provide excellent chemical resistance and meet stringent hygiene standards. Our protective coatings shield structural elements from chemical attack and corrosion. Our waterproofing and joint sealant products ensure the integrity of containment structures and process areas.`,
    image: 'https://images.unsplash.com/photo-1571322270931-4202f63500a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjU3OTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Chemical resistance for floors and walls',
      'Containment integrity for hazardous materials',
      'High-temperature resistance for process areas',
      'Anti-static flooring requirements',
      'Hygiene-compliant surfaces',
    ],
    solutions: ['Industrial Flooring', 'Protective Coatings', 'Waterproofing', 'Joint Sealants', 'Concrete Repair'],
    products: [
      { name: 'Industrial Flooring', category: 'flooring' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Sealants', category: 'sealants' },
    ],
    accent: 'from-orange-900 to-orange-700',
  },
  concrete: {
    title: 'Concrete',
    tagline: 'Enhancing every aspect of concrete performance — from mix to finished structure.',
    description: 'From high range water reducers to slump retention and accelerating solutions, our concrete admixtures modify and improve fresh and hardened concrete.',
    longDescription: `Concrete is the backbone of modern construction, and Civiltech Construction Chemicals LLP's range of concrete admixtures gives engineers and contractors precise control over concrete performance at every stage — from mixing to curing.\n\nOur superplasticizers and high-range water reducers improve workability without compromising strength. Our retarders provide extended workability in hot weather, while our accelerators enable early striking and faster project schedules. Our air-entraining agents improve freeze-thaw resistance for exposed structures. Our concrete repair mortars and structural grouts restore damaged concrete to its original performance level.`,
    image: 'https://images.unsplash.com/photo-1685464196339-46a985b2049b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY1Nzk2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Workability and pumpability for complex pours',
      'Early strength development for fast-track construction',
      'Durability against chemical and environmental attack',
      'Concrete repair and rehabilitation',
    ],
    solutions: ['Concrete Admixtures', 'Concrete Repair', 'Surface Treatments', 'Grouts'],
    products: [
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-stone-800 to-stone-600',
  },
  dam: {
    title: 'Dam',
    tagline: 'Long-term structural integrity for water retention infrastructure.',
    description: 'Our range of products and solutions enhances the life of dam structures far beyond design expectations.',
    longDescription: `Dams are among the most demanding structures in civil engineering, requiring materials that can withstand constant hydrostatic pressure, thermal cycling, and chemical attack from water and sediment. Civiltech Construction Chemicals LLP provides specialized waterproofing membranes, crystalline coatings, expansive grouts, and repair mortars designed specifically for dam construction and rehabilitation.\n\nOur crystalline waterproofing technology penetrates and seals concrete from within, providing permanent protection even under hydrostatic pressure. Our polyurethane and epoxy injection systems seal active leaks and cracks, while our high-performance repair mortars restore damaged concrete sections to full structural integrity.`,
    image: 'https://images.unsplash.com/photo-1686276920108-b779380d3d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb2VsZWN0cmljJTIwZGFtJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2NTc5NjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Hydrostatic pressure resistance',
      'Crack injection and sealing of active leaks',
      'Structural repair and rehabilitation under wet conditions',
      'Mass concrete thermal crack control',
    ],
    solutions: ['Waterproofing Systems', 'Concrete Repair', 'Grouts', 'Concrete Admixtures'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-blue-800 to-cyan-700',
  },
  defence: {
    title: 'Defence',
    tagline: 'Specialized solutions for defence infrastructure and facilities.',
    description: 'Complete solutions for defence civil engineering and infrastructure, including flooring for hangars, bunkers, and operational facilities.',
    longDescription: `Defence infrastructure demands the highest levels of performance, reliability, and compliance. Civiltech Construction Chemicals LLP provides specialized construction chemical solutions for military and defence applications including airfield pavements, hangar floors, ammunition storage facilities, and blast-resistant structures.\n\nOur high-strength concrete admixtures meet strict defence specifications, while our industrial flooring systems are engineered for the extreme loads imposed by aircraft, military vehicles, and heavy equipment. Our waterproofing systems protect underground bunkers and command centre facilities, while our protective coatings provide corrosion protection in harsh environments.`,
    image: 'https://images.unsplash.com/photo-1637252211698-7d524345d4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGRlZmVuc2UlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjU3OTYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Extreme load flooring for hangars and vehicle facilities',
      'Blast-resistant concrete mixes',
      'Waterproofing for underground structures',
      'Anti-corrosion coatings for exposed assets',
    ],
    solutions: ['Industrial Flooring', 'Concrete Admixtures', 'Waterproofing', 'Protective Coatings'],
    products: [
      { name: 'Industrial Flooring', category: 'flooring' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-green-900 to-green-700',
  },
  industrial: {
    title: 'Industrial',
    tagline: 'Chemical solutions engineered for heavy-duty industrial environments.',
    description: 'Our expertise lies in identifying the correct chemical technology for industrial structure solutions, from construction to end-of-life.',
    longDescription: `Industrial facilities — including manufacturing plants, warehouses, food processing units, and heavy industrial complexes — require construction chemical solutions that combine extreme durability with performance under specific process conditions.\n\nCiviltech Construction Chemicals LLP's industrial product range covers high-load flooring systems, chemical-resistant coatings, structural repair materials, and specialized waterproofing solutions. Our epoxy floor coating systems provide seamless, hygienic, and chemical-resistant surfaces for food-grade and pharmaceutical environments, while our polyurethane systems deliver flexibility and impact resistance for logistics and warehousing applications.`,
    image: 'https://images.unsplash.com/photo-1560953981-28e3bab4aab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjU3OTYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Heavy forklift and pallet racking loads on floors',
      'Chemical spillage resistance',
      'Food-safe and hygienic surface requirements',
      'Fast-cure systems to minimize production downtime',
    ],
    solutions: ['Industrial Flooring', 'Protective Coatings', 'Concrete Repair', 'Waterproofing', 'Concrete Admixtures'],
    products: [
      { name: 'Industrial Flooring', category: 'flooring' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-yellow-900 to-yellow-700',
  },
  'marine-and-ports': {
    title: 'Marine and Ports',
    tagline: 'Protecting structures against the harshest marine environments.',
    description: 'We strengthen, protect and waterproof marine installations and infrastructure even in extreme temperatures and conditions.',
    longDescription: `Marine and port structures are exposed to some of the most aggressive environments in construction — continuous wetting and drying, chloride-induced corrosion, abrasion from vessel movements, and biological attack. Civiltech Construction Chemicals LLP provides specialist products designed to achieve long service life in these conditions.\n\nOur corrosion protection systems prevent chloride attack on steel-reinforced concrete in tidal and splash zones. Our high-performance concrete admixtures produce dense, low-permeability concrete suited to marine exposure. Our waterproofing membranes protect below-water port structures, while our repair mortars restore damaged piers and quay walls to full structural integrity.`,
    image: 'https://images.unsplash.com/photo-1547081835-6ad9428582f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBwb3J0JTIwaGFyYm9yfGVufDF8fHx8MTc2NTc5NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Chloride-induced corrosion of reinforced concrete',
      'Tidal and splash zone exposure',
      'Underwater concrete repair',
      'Abrasion resistance for quay and jetty surfaces',
    ],
    solutions: ['Concrete Admixtures', 'Protective Coatings', 'Waterproofing', 'Concrete Repair', 'Joint Sealants'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
      { name: 'Sealants', category: 'sealants' },
    ],
    accent: 'from-cyan-900 to-cyan-700',
  },
  'oil-gas': {
    title: 'Oil & Gas',
    tagline: 'Regulatory-compliant solutions for onshore and offshore energy infrastructure.',
    description: 'We offer regulatory-compliant internal and external corrosion protection for both onshore and offshore oil and gas applications.',
    longDescription: `The oil and gas sector demands construction chemical solutions that meet strict regulatory requirements and perform reliably in extreme environments over decades of service. Civiltech Construction Chemicals LLP supplies corrosion protection systems, chemical-resistant flooring, waterproofing, and structural materials for refineries, petrochemical plants, LNG terminals, and offshore platforms.\n\nOur solvent-free epoxy coatings provide outstanding chemical resistance for secondary containment areas. Our high-performance grouts ensure the precise positioning and load transfer for critical equipment foundations. Our concrete repair systems restore damaged concrete in aggressive process environments without extended plant shutdowns.`,
    image: 'https://images.unsplash.com/photo-1669484417691-7a04f1239678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeXxlbnwxfHx8fDE3NjU3OTYxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Secondary containment for chemical and fuel spills',
      'Equipment foundation grouts with high compressive strength',
      'Corrosion protection for structural steel and concrete',
      'Compliance with ATEX and fire safety standards',
    ],
    solutions: ['Industrial Flooring', 'Protective Coatings', 'Grouts', 'Waterproofing', 'Concrete Repair'],
    products: [
      { name: 'Industrial Flooring', category: 'flooring' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-amber-900 to-amber-700',
  },
  'power': {
    title: 'Power — Wind, Nuclear, Thermal & Hydro',
    tagline: 'Long-lasting solutions for power generation infrastructure.',
    description: 'Our products help power and utility structures perform for decades under the harshest environmental conditions.',
    longDescription: `Power generation facilities — whether thermal, hydro, nuclear, or renewable — require construction chemical solutions that deliver reliability over extremely long design lives. Civiltech Construction Chemicals LLP provides specialist materials for cooling towers, turbine foundations, containment structures, and hydro civil works.\n\nOur high-performance concrete admixtures produce mass concrete mixes for power station foundations with controlled heat of hydration. Our crystalline waterproofing systems protect cooling water structures and tailrace tunnels. Our corrosion inhibitors protect steel reinforcement in aggressive environments, while our repair mortars extend the service life of aging power plant structures.`,
    image: 'https://images.unsplash.com/photo-1692631204791-03d33e3084ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHBvd2VyfGVufDF8fHx8MTc2NTc5NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Mass concrete heat of hydration control',
      'Long service life requirements (60+ years)',
      'Chemical resistance in cooling water systems',
      'Turbine and generator foundation precision grouting',
    ],
    solutions: ['Concrete Admixtures', 'Waterproofing', 'Grouts', 'Protective Coatings', 'Concrete Repair'],
    products: [
      { name: 'Concrete Admixtures', category: 'concrete' },
      { name: 'Waterproofing', category: 'waterproofing' },
    ],
    accent: 'from-green-800 to-emerald-700',
  },
  rail: {
    title: 'Rail',
    tagline: 'Precision chemical solutions for modern rail infrastructure.',
    description: 'Our rail infrastructure solutions feature in key national projects, ensuring safe and durable track and station systems.',
    longDescription: `Rail infrastructure — from track beds and viaducts to metro stations and tunnels — demands construction chemical solutions that combine precision with long-term durability. Civiltech Construction Chemicals LLP provides specialist products for track slab concrete, bridge deck waterproofing, tunnel linings, and station finishes.\n\nOur concrete admixtures produce the consistent, high-quality mixes required for precast rail segments and in-situ track slabs. Our waterproofing membranes protect bridge decks and underground structures from water ingress. Our epoxy grouts provide precise levelling and strong bonding for rail track and equipment fixings. Our industrial flooring systems create durable, safe surfaces for depots and maintenance facilities.`,
    image: 'https://images.unsplash.com/photo-1764021714060-bc6f748f721f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhaW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjU3OTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'High-strength precast concrete for track slabs',
      'Bridge deck waterproofing under heavy traffic',
      'Tunnel lining and waterproofing',
      'Platform and station finishing solutions',
    ],
    solutions: ['Concrete Admixtures', 'Waterproofing', 'Industrial Flooring', 'Grouts', 'Concrete Repair'],
    products: [
      { name: 'Concrete Admixtures', category: 'concrete' },
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Industrial Flooring', category: 'flooring' },
    ],
    accent: 'from-indigo-900 to-indigo-700',
  },
  'roads-and-bridges': {
    title: 'Roads and Bridges',
    tagline: 'Extending performance and reducing repair times for road and bridge infrastructure.',
    description: 'Extend performance and improve repair times for roads, motorways and bridges with our comprehensive product range.',
    longDescription: `Roads and bridges are exposed to heavy traffic loads, thermal cycling, de-icing chemicals, and constant moisture attack. Civiltech Construction Chemicals LLP provides specialist products for bridge deck protection, carriageway repair, expansion joint sealing, and concrete bridge structure repair and protection.\n\nOur waterproofing membranes protect bridge decks from water and chloride penetration. Our polyurethane and silicone joint sealants accommodate movement in expansion joints while providing long-term watertightness. Our rapid-setting repair mortars minimize traffic disruption during pothole and carriageway repairs. Our protective coatings extend the life of bridge structures by preventing chloride-induced corrosion.`,
    image: 'https://images.unsplash.com/photo-1726733725435-29fde25a5892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYnJpZGdlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY1NzMxMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Bridge deck waterproofing and protection',
      'Expansion joint sealing for high-traffic roads',
      'Rapid-repair solutions for minimal traffic disruption',
      'Corrosion protection for bridge superstructures',
    ],
    solutions: ['Waterproofing', 'Joint Sealants', 'Concrete Repair', 'Protective Coatings', 'Concrete Admixtures'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Sealants', category: 'sealants' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-blue-900 to-blue-700',
  },
  tunnel: {
    title: 'Tunnel',
    tagline: 'Advanced waterproofing and lining solutions for underground construction.',
    description: 'Our products and solutions help build tunnels faster with fast-setting admixtures, waterproofing membranes and rapid repair systems.',
    longDescription: `Tunnel construction and maintenance presents unique challenges including high groundwater pressure, complex ground conditions, restricted working space, and the need for rapid construction progress. Civiltech Construction Chemicals LLP provides specialist construction chemicals optimized for tunneling applications.\n\nOur shotcrete accelerators enable rapid strength development in spray-applied concrete lining systems. Our waterproofing membranes, injection hoses, and crystalline coatings provide multi-layer protection against groundwater ingress. Our polyurethane injection systems seal active water leaks in existing tunnel structures. Our rapid-setting repair mortars allow fast maintenance interventions with minimal disruption to tunnel operations.`,
    image: 'https://images.unsplash.com/photo-1761069234641-3a68266c4740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5uZWwlMjBjb25zdHJ1Y3Rpb24lMjB1bmRlcmdyb3VuZHxlbnwxfHx8fDE3NjU3OTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Groundwater pressure and leakage control',
      'Shotcrete lining for primary support',
      'Waterproofing membrane installation in confined space',
      'Active leak sealing in existing tunnels',
    ],
    solutions: ['Waterproofing', 'Concrete Admixtures', 'Concrete Repair', 'Grouts', 'Joint Sealants'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
    ],
    accent: 'from-gray-900 to-gray-700',
  },
  water: {
    title: 'Water',
    tagline: 'Waterproofing and protective systems for water infrastructure.',
    description: 'We help waterproof and protect water structures against chemical attacks, joint-leaks, cracks and surface corrosion.',
    longDescription: `Water and wastewater infrastructure — including reservoirs, water treatment plants, sewage systems, and irrigation channels — demands construction chemical solutions that combine long service life with compatibility with potable water standards.\n\nCiviltech Construction Chemicals LLP provides crystalline waterproofing coatings and membranes, corrosion-inhibiting concrete admixtures, chemical-resistant protective coatings, and joint sealing systems specifically designed for water-retaining structures. Our products are tested for compatibility with potable water applications and meet relevant Indian and international standards for water infrastructure.`,
    image: 'https://images.unsplash.com/photo-1705708551758-76b153fa536e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc2NTc4MDY4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    challenges: [
      'Potable water compatibility requirements',
      'Water-retaining structure waterproofing',
      'Chemical resistance to water treatment chemicals',
      'Crack repair under hydrostatic pressure',
    ],
    solutions: ['Waterproofing', 'Concrete Repair', 'Concrete Admixtures', 'Joint Sealants', 'Protective Coatings'],
    products: [
      { name: 'Waterproofing', category: 'waterproofing' },
      { name: 'Concrete Admixtures', category: 'concrete' },
      { name: 'Sealants', category: 'sealants' },
    ],
    accent: 'from-blue-800 to-teal-700',
  },
};

export function SectorDetailPage() {
  const { sectorId } = useParams<{ sectorId: string }>();
  const navigate = useNavigate();
  const sector = sectorId ? sectorsData[sectorId] : null;

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Sector Not Found</h2>
          <p className="text-muted-foreground mb-6">The sector you're looking for doesn't exist.</p>
          <Link to="/sectors" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors">
            Back to Sectors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${sector.title} — Civiltech Construction Chemicals`}
        description={sector.description}
        url={`https://civiltechchemicals.com/sectors/${sectorId}`}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={sector.image}
          alt={sector.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${sector.accent} opacity-80`} />
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-16">
          <div className="max-w-4xl">
            <button
              onClick={() => navigate('/sectors')}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Sectors
            </button>
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-white/20">
              Sector Focus
            </div>
            <h1 className="text-white text-4xl sm:text-6xl font-black mb-4 tracking-tight leading-none">
              {sector.title}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl font-medium">
              {sector.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Sector Overview
              </div>
              <h2 className="text-foreground text-3xl sm:text-4xl font-black mb-6 tracking-tight">
                How Civiltech Serves the <span className="text-primary">{sector.title}</span> Sector
              </h2>
              {sector.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              {/* Challenges */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-foreground font-black text-xl mb-6 border-l-4 border-primary pl-4">
                  Key Sector Challenges
                </h3>
                <ul className="space-y-4">
                  {sector.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs font-black">!</span>
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed font-medium">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-foreground font-black text-xl mb-6 border-l-4 border-green-500 pl-4">
                  Our Solutions
                </h3>
                <ul className="space-y-4">
                  {sector.solutions.map((sol) => (
                    <li key={sol} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground font-bold text-sm">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Products CTA */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-foreground text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              Relevant Product Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our products tailored for the {sector.title} sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sector.products.map((product) => (
              <button
                key={product.name}
                onClick={() => { navigate(`/products?category=${product.category}`); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="group bg-card border border-border hover:border-primary rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-foreground font-black text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-green-600 transition-colors">View Products →</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => { navigate('/products'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="bg-primary hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl inline-flex items-center gap-3"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="bg-background border-2 border-border hover:border-primary text-foreground hover:text-primary px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all"
            >
              Get Technical Advice
            </button>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/sectors')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Sectors
          </button>
          <Link to="/contact" className="text-primary font-bold hover:underline underline-offset-4 transition-colors">
            Request a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
