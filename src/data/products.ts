export interface ProductDetail {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  description: string;
  image: string;
  features: string[];
  usage: string[];
  advantages: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  tdsUrl?: string;
  hidden?: boolean;
}

export const productsData: ProductDetail[] = [
  // Waterproofing Coatings
  {
    id: 'w1',
    name: 'PolyBond AP',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Acrylic Polymer Waterproofing Compound',
    image: new URL('../assets/products/PolyBond AP copy.png', import.meta.url).href,
    features: [
      'Single component acrylic polymer based waterproofing',
      'Excellent adhesion to concrete, masonry, and plaster',
      'UV resistant and weather resistant',
      'Flexible and crack bridging properties',
      'Easy application by brush or roller'
    ],
    usage: [
      'External and internal walls',
      'Terraces and balconies',
      'Sunken slabs and bathrooms',
      'Water tanks and swimming pools',
      'Basement waterproofing'
    ],
    advantages: [
      'Long-lasting protection against water ingress',
      'Breathable coating allows vapor transmission',
      'Can be applied on damp surfaces',
      'Environmentally friendly formulation',
      'Cost-effective solution'
    ],
    specifications: [
      { label: 'Base', value: 'Acrylic Polymer' },
      { label: 'Color', value: 'White' },
      { label: 'Coverage', value: '1.5-2.0 kg/m² per coat' },
      { label: 'Drying Time', value: '4-6 hours' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Buildings',
      'Commercial Complexes',
      'Industrial Structures',
      'Water Retaining Structures'
    ]
  },
  {
    id: 'w2',
    name: 'PolyBond 2K',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Two Component Polymerized Waterproofing Coating',
    image: new URL('../assets/products/POLYBOND 2K.jpg', import.meta.url).href,
    features: [
      'Two component polymer modified waterproofing system',
      'Superior adhesion and flexibility',
      'Resistant to hydrostatic pressure',
      'Excellent crack bridging ability',
      'Seamless waterproofing membrane'
    ],
    usage: [
      'Wet areas like bathrooms and kitchens',
      'Terraces and balconies',
      'Swimming pools and water tanks',
      'Basement and foundations',
      'Lift pits and tunnels'
    ],
    advantages: [
      'High performance waterproofing system',
      'Long-term durability',
      'Resistant to chemicals and salts',
      'Can withstand heavy traffic',
      'Easy mixing and application'
    ],
    specifications: [
      { label: 'Base', value: 'Polymer Modified Cement' },
      { label: 'Color', value: 'Grey' },
      { label: 'Coverage', value: '2.0-2.5 kg/m² per coat' },
      { label: 'Pot Life', value: '30-45 minutes' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Buildings',
      'Commercial Projects',
      'Infrastructure Works',
      'Water Treatment Plants'
    ]
  },
  {
    id: 'w3',
    name: 'PolyBond 2K Ultra',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Two Component Cementitious Flexible Waterproofing Coating',
    image: new URL('../assets/products/Polybond 2k Ultra.jpg', import.meta.url).href,
    features: [
      'Ultra-flexible cementitious waterproofing coating',
      'Superior crack bridging up to 2mm',
      'High resistance to water pressure',
      'Excellent adhesion to various substrates',
      'UV and weather resistant'
    ],
    usage: [
      'High-movement joints and cracks',
      'Roofs and terraces with thermal movement',
      'Balconies and podiums',
      'Wet areas and bathrooms',
      'Foundations and basements'
    ],
    advantages: [
      'Maximum flexibility for dynamic structures',
      'Breathable membrane prevents moisture buildup',
      'Can be applied on green concrete',
      'Compatible with tile adhesives',
      'Non-toxic and eco-friendly'
    ],
    specifications: [
      { label: 'Base', value: 'Flexible Polymer Modified Cement' },
      { label: 'Color', value: 'White/Grey' },
      { label: 'Coverage', value: '1.8-2.2 kg/m² per coat' },
      { label: 'Elongation', value: 'Up to 200%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'High-rise Buildings',
      'Seismic Zones',
      'Thermal Expansion Areas',
      'Parking Decks'
    ]
  },
  {
    id: 'w4',
    name: 'PolyBond PU',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'High Build Elastomeric Waterproofing Coating',
    image: new URL('../assets/products/POLYBOND PU.jpg', import.meta.url).href,
    features: [
      'Single component polyurethane based coating',
      'High build elastomeric membrane',
      'Excellent elongation and recovery',
      'UV stable and weather resistant',
      'Seamless and self-healing properties'
    ],
    usage: [
      'Exposed roofs and terraces',
      'Metal roof waterproofing',
      'Parking decks',
      'Balconies and podiums',
      'Roof gardens'
    ],
    advantages: [
      'Superior elasticity and flexibility',
      'Resistant to ponding water',
      'Excellent adhesion to various substrates',
      'Long service life',
      'Easy application and maintenance'
    ],
    specifications: [
      { label: 'Base', value: 'Polyurethane' },
      { label: 'Color', value: 'Grey/Red/Green' },
      { label: 'Coverage', value: '1.5-2.0 kg/m² per coat' },
      { label: 'Elongation', value: 'Up to 400%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Roofing Systems',
      'Metal Structures',
      'Parking Areas',
      'Industrial Buildings'
    ]
  },
  {
    id: 'w5',
    name: 'Hydroshield WP+',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Single Component Thermal Insulation cum Waterproofing Coating',
    image: new URL('../assets/products/POLYBOND FLEXICOAT.jpg', import.meta.url).href,
    features: [
      'Dual function: waterproofing and thermal insulation',
      'Reduces heat transfer by up to 40%',
      'Reflective white coating reduces surface temperature',
      'Elastic and crack bridging',
      'Energy saving solution'
    ],
    usage: [
      'Roof waterproofing with heat reduction',
      'Metal roofs and sheds',
      'Industrial buildings',
      'Warehouses and factories',
      'Residential terraces'
    ],
    advantages: [
      'Reduces air conditioning costs',
      'Provides waterproofing and insulation in one product',
      'Environmentally friendly',
      'UV resistant and durable',
      'Easy to apply and maintain'
    ],
    specifications: [
      { label: 'Base', value: 'Acrylic Polymer with Ceramic Microspheres' },
      { label: 'Color', value: 'White' },
      { label: 'Coverage', value: '2.0-2.5 kg/m² per coat' },
      { label: 'Heat Reduction', value: 'Up to 40%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Industrial Roofs',
      'Commercial Buildings',
      'Residential Projects',
      'Energy Conservation Projects'
    ]
  },
  {
    id: 'w6',
    name: 'InstaPlug -P',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Rapid Setting Water Plugging Mortar (Powder)',
    image: new URL('../assets/products/INSTAPLUG -P.jpg', import.meta.url).href,
    features: [
      'Instant setting water plugging mortar',
      'Rapidly stops leaking water',
      'High early strength development',
      'Excellent bond to concrete',
      'Can be used underwater'
    ],
    usage: [
      'Stopping active water leakages',
      'Sealing joints in concrete pipes',
      'Repairing water retaining structures',
      'Basement and tunnel repairs',
      'Underwater repairs'
    ],
    advantages: [
      'Stops water flow in seconds',
      'Non-shrink properties',
      'Easy to mix and apply',
      'Permanent water sealing',
      'Safe for potable water'
    ],
    specifications: [
      { label: 'Base', value: 'Cementitious specialized compound' },
      { label: 'Color', value: 'Grey' },
      { label: 'Setting Time', value: '1-3 minutes' },
      { label: 'Compressive Strength', value: '>40 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Basements',
      'Water Tanks',
      'Sewage Systems',
      'Tunnels'
    ]
  },
  {
    id: 'w7',
    name: 'InstaPlug -L',
    category: 'waterproofing',
    categoryName: 'Waterproofing Coatings',
    description: 'Liquid Shotcrete Accelerator / Rapid Hardener',
    image: new URL('../assets/products/INSTAPLUG-L.jpg', import.meta.url).href,
    features: [
      'Liquid rapid hardening admixture',
      'Instant set for shotcrete',
      'High early strength',
      'Reduces rebound loss',
      'Non-chloride formulation'
    ],
    usage: [
      'Shotcreting in tunnels',
      'Slope stabilization',
      'Rapid repairs',
      'Cold weather concreting',
      'Precast concrete production'
    ],
    advantages: [
      'Fast setting and hardening',
      'Improved bond to substrate',
      'Economical application',
      'Minimal shrinkage',
      'Reliable performance'
    ],
    specifications: [
      { label: 'Base', value: 'Specialized Chemicals' },
      { label: 'Color', value: 'Amber/Clear' },
      { label: 'Setting Time', value: 'Instant' },
      { label: 'Specific Gravity', value: '1.25 ± 0.05' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Tunneling',
      'Mining',
      'Slope Protection',
      'Precast Industry'
    ]
  },

  // Expansion Joints / Sealants
  {
    id: 's1',
    name: 'Flexi Tape EPDM',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'EPDM Tape for Expansion Joints',
    image: new URL('../assets/products/Flexi Tape EPDM.png', import.meta.url).href,
    features: [
      'EPDM rubber-based expansion joint tape',
      'High elasticity and recovery',
      'Weather and UV resistant',
      'Self-adhesive backing for easy installation',
      'Excellent durability'
    ],
    usage: [
      'Expansion joints in buildings',
      'Movement joints in floors and walls',
      'Concrete joint sealing',
      'Precast panel joints',
      'Pavement joints'
    ],
    advantages: [
      'Pre-formed and ready to use',
      'No mixing or curing required',
      'Accommodates large movements',
      'Long service life',
      'Cost-effective solution'
    ],
    specifications: [
      { label: 'Material', value: 'EPDM Rubber' },
      { label: 'Width', value: '50-300mm' },
      { label: 'Thickness', value: '3-10mm' },
      { label: 'Movement Capability', value: '±25%' },
      { label: 'Temperature Range', value: '-40°C to +80°C' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Building Construction',
      'Infrastructure Projects',
      'Parking Structures',
      'Industrial Facilities'
    ]
  },
  {
    id: 's2',
    name: 'FlexiTape TP',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'Flexible Thermo Plastic Expansion Joint Tape',
    image: 'https://images.unsplash.com/photo-1731317735479-1011ba08ad65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGpvaW50JTIwc2VhbGFudCUyMGFwcGxpY2F0aW9ufGVufDF8fHx8MTc3MzY1ODY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Thermoplastic expansion joint filler',
      'Flexible and compressible',
      'Water and weather resistant',
      'Easy to cut and install',
      'Non-staining'
    ],
    usage: [
      'Expansion joints in concrete slabs',
      'Floor and wall joints',
      'Runway and highway joints',
      'Bridge deck joints',
      'Industrial floor joints'
    ],
    advantages: [
      'Accommodates thermal movement',
      'Prevents water and debris infiltration',
      'Durable and long-lasting',
      'Easy installation',
      'Chemical resistant'
    ],
    specifications: [
      { label: 'Material', value: 'Thermoplastic Polymer' },
      { label: 'Width', value: '25-150mm' },
      { label: 'Thickness', value: '5-25mm' },
      { label: 'Compression', value: 'Up to 50%' },
      { label: 'Temperature Range', value: '-30°C to +70°C' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Concrete Pavements',
      'Industrial Flooring',
      'Bridge Construction',
      'Airport Runways'
    ]
  },
  {
    id: 's3',
    name: 'MEP',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'Multi Purpose Epoxy Putty',
    image: 'https://images.unsplash.com/photo-1708746333853-2c3261852e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGhlc2l2ZSUyMGNvbnN0cnVjdGlvbiUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhZ3xlbnwxfHx8fDE3NzM2NTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Two component epoxy putty',
      'Excellent adhesion to multiple substrates',
      'High compressive strength',
      'Chemical and water resistant',
      'Can be drilled and machined after curing'
    ],
    usage: [
      'Crack filling in concrete',
      'Bonding and anchoring',
      'Emergency pipe repairs',
      'Joint sealing',
      'Surface repairs'
    ],
    advantages: [
      'Versatile multi-purpose application',
      'Fast setting and curing',
      'Excellent bonding strength',
      'Resistant to chemicals and solvents',
      'Can be painted after curing'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Grey' },
      { label: 'Pot Life', value: '15-20 minutes' },
      { label: 'Compressive Strength', value: '>70 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Concrete Repairs',
      'Industrial Maintenance',
      'Plumbing Repairs',
      'General Construction'
    ]
  },
  {
    id: 's4',
    name: 'Seal It 55',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'Two Component Gun Grade Poly Sulphide Sealant',
    image: new URL('../assets/products/Seal It 55.png', import.meta.url).href,
    features: [
      'Two component polysulphide sealant',
      'Gun grade consistency for easy application',
      'High movement capability',
      'Excellent adhesion without primer',
      'Weather and chemical resistant'
    ],
    usage: [
      'Expansion joints in facades',
      'Glazing and curtain wall joints',
      'Concrete joint sealing',
      'Pavement and plaza joints',
      'Marine applications'
    ],
    advantages: [
      'Superior movement accommodation (±25%)',
      'Long-lasting performance',
      'Resistant to UV and weathering',
      'Compatible with various substrates',
      'Low shrinkage'
    ],
    specifications: [
      { label: 'Base', value: 'Polysulphide Polymer' },
      { label: 'Color', value: 'Black/Grey/White' },
      { label: 'Movement Capability', value: '±25%' },
      { label: 'Shore A Hardness', value: '25-35' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Commercial Buildings',
      'Infrastructure Projects',
      'Industrial Facilities',
      'Marine Structures'
    ]
  },
  {
    id: 's5',
    name: 'PS 55 PG',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'Two Component Pourable Grade Poly Sulphide Sealant',
    image: 'https://images.unsplash.com/photo-1597857306105-b23e08328d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2hlbWljYWwlMjBidWNrZXRzJTIwcGFpbnR8ZW58MXx8fHwxNzczNjU3ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Self-leveling pourable grade sealant',
      'Two component polysulphide based',
      'Excellent movement capability',
      'Fuel and chemical resistant',
      'Weather and UV resistant'
    ],
    usage: [
      'Horizontal expansion joints',
      'Airport runway joints',
      'Highway and bridge joints',
      'Parking deck joints',
      'Industrial floor joints'
    ],
    advantages: [
      'Self-leveling for horizontal applications',
      'Superior durability',
      'Resistant to jet fuel and chemicals',
      'Accommodates heavy traffic',
      'Long service life'
    ],
    specifications: [
      { label: 'Base', value: 'Polysulphide Polymer' },
      { label: 'Color', value: 'Black/Grey' },
      { label: 'Movement Capability', value: '±25%' },
      { label: 'Curing Time', value: '7-14 days' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Airport Infrastructure',
      'Highway Construction',
      'Parking Structures',
      'Industrial Facilities'
    ]
  },
  {
    id: 's6',
    name: 'Neoseal 50',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'Single Component Gun Grade Poly Urethane Sealant',
    image: new URL('../assets/products/Neoseal 50.png', import.meta.url).href,
    features: [
      'Single component polyurethane sealant',
      'Moisture curing technology',
      'Excellent adhesion to most substrates',
      'High elasticity and recovery',
      'Paintable after curing'
    ],
    usage: [
      'Building expansion joints',
      'Perimeter sealing',
      'Glazing and window joints',
      'Concrete and masonry joints',
      'Metal and wood joints'
    ],
    advantages: [
      'Easy to use - no mixing required',
      'Good movement capability (±20%)',
      'Weather and UV resistant',
      'Can be painted',
      'Non-staining'
    ],
    specifications: [
      { label: 'Base', value: 'Polyurethane' },
      { label: 'Color', value: 'White/Grey/Black' },
      { label: 'Movement Capability', value: '±20%' },
      { label: 'Tack Free Time', value: '2-4 hours' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Construction',
      'Commercial Buildings',
      'Industrial Projects',
      'Renovation Works'
    ]
  },

  // Concrete Aids (continuing with similar detail for all products...)
  {
    id: 'c1',
    name: 'Conlease',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'Concrete Mould Release Agent',
    image: new URL('../assets/products/Conlease.png', import.meta.url).href,
    features: [
      'Ready to use mould release agent',
      'Prevents concrete adhesion to formwork',
      'Does not stain concrete surface',
      'Suitable for all types of formwork',
      'Easy spray application'
    ],
    usage: [
      'Steel formwork release',
      'Plywood and timber formwork',
      'Plastic and FRP moulds',
      'Precast concrete production',
      'Architectural concrete finishes'
    ],
    advantages: [
      'Clean release without staining',
      'Extends formwork life',
      'Improves surface finish',
      'Economical coverage',
      'Environmentally safe'
    ],
    specifications: [
      { label: 'Base', value: 'Mineral Oil Based' },
      { label: 'Color', value: 'Light Yellow' },
      { label: 'Coverage', value: '15-20 m²/liter' },
      { label: 'Application', value: 'Spray/Brush' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Ready Mix Concrete',
      'Precast Industry',
      'Building Construction',
      'Infrastructure Projects'
    ]
  },
  {
    id: 'c2',
    name: 'Concure WB',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'Wax Based Curing Compound',
    image: new URL('../assets/products/Concure WB.png', import.meta.url).href,
    features: [
      'Wax emulsion based curing compound',
      'Forms impermeable membrane',
      'Reduces water evaporation',
      'Enhances concrete strength development',
      'Easy spray application'
    ],
    usage: [
      'Fresh concrete curing',
      'Floors and pavements',
      'Slabs and decks',
      'Runways and highways',
      'Industrial floors'
    ],
    advantages: [
      'Reduces curing time and labor',
      'Prevents plastic shrinkage cracks',
      'Improves concrete durability',
      'Cost-effective curing method',
      'Suitable for large areas'
    ],
    specifications: [
      { label: 'Base', value: 'Wax Emulsion' },
      { label: 'Color', value: 'White/Translucent' },
      { label: 'Coverage', value: '5-6 m²/liter' },
      { label: 'Water Retention', value: '>90%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Commercial Flooring',
      'Industrial Slabs',
      'Road Construction',
      'Airport Pavements'
    ]
  },
  {
    id: 'c3',
    name: 'Concure PRB',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'Polymeric Resin Based Curing Compound',
    image: new URL('../assets/products/Concure PRB.png', import.meta.url).href,
    features: [
      'Acrylic resin based curing compound',
      'High efficiency water retention',
      'UV resistant film',
      'Non-yellowing formulation',
      'Suitable for colored concrete'
    ],
    usage: [
      'Decorative concrete curing',
      'Colored and stamped concrete',
      'Architectural finishes',
      'Exposed aggregate surfaces',
      'Premium concrete projects'
    ],
    advantages: [
      'Superior curing efficiency',
      'Does not discolor concrete',
      'UV stable coating',
      'Enhances surface appearance',
      'Long-lasting protection'
    ],
    specifications: [
      { label: 'Base', value: 'Acrylic Resin' },
      { label: 'Color', value: 'Clear' },
      { label: 'Coverage', value: '4-5 m²/liter' },
      { label: 'Water Retention', value: '>95%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Decorative Concrete',
      'Architectural Projects',
      'Premium Flooring',
      'Commercial Buildings'
    ]
  },
  {
    id: 'c4',
    name: 'Nano Cure',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'Non Film Forming Curing Compound with Advanced Technology',
    image: new URL('../assets/products/Nano Cure.png', import.meta.url).href,
    features: [
      'Advanced nano-technology based curing',
      'Non-film forming formula',
      'Penetrates concrete surface',
      'Allows surface treatments after curing',
      'Environmentally friendly'
    ],
    usage: [
      'Concrete requiring surface treatments',
      'Floors to be coated or painted',
      'Industrial floors',
      'Residential slabs',
      'Concrete where film is not desired'
    ],
    advantages: [
      'No removal required before coating',
      'Deep penetration curing',
      'Enhances concrete density',
      'VOC compliant',
      'Easy application'
    ],
    specifications: [
      { label: 'Base', value: 'Nano Silicate' },
      { label: 'Color', value: 'Clear' },
      { label: 'Coverage', value: '6-8 m²/liter' },
      { label: 'Penetration', value: '5-10mm' },
      { label: 'Shelf Life', value: '24 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Industrial Flooring',
      'Commercial Projects',
      'Residential Construction',
      'Parking Structures'
    ]
  },
  {
    id: 'c5',
    name: 'CCC500',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'High Performance PU Injection Foam Grout',
    image: new URL('../assets/products/CCC500.png', import.meta.url).href,
    features: [
      'Two component polyurethane injection foam',
      'Rapid expansion and curing',
      'Excellent water cut-off properties',
      'Flexible after curing',
      'High compressive strength'
    ],
    usage: [
      'Water leakage control',
      'Crack injection',
      'Void filling',
      'Soil stabilization',
      'Tunnel waterproofing'
    ],
    advantages: [
      'Immediate water sealing',
      'Expands to fill voids',
      'Permanent solution',
      'Works in wet conditions',
      'Fast setting'
    ],
    specifications: [
      { label: 'Base', value: 'Polyurethane' },
      { label: 'Expansion Ratio', value: '20-40 times' },
      { label: 'Gel Time', value: '30-120 seconds' },
      { label: 'Compressive Strength', value: '>0.5 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Basement Waterproofing',
      'Tunnel Construction',
      'Underground Structures',
      'Dam Repairs'
    ]
  },
  {
    id: 'c6',
    name: 'InstaCrete (Shotcrete Accelerator)',
    category: 'concrete',
    categoryName: 'Concrete Aids',
    description: 'Liquid Shotcrete Accelerator for Sprayed Concrete',
    image: new URL('../assets/products/INSTACRETE (Shotcrete Accelerator).jpg', import.meta.url).href,
    features: [
      'High performance liquid accelerator',
      'Instant set for shotcrete / guniting',
      'Improved bond to substrate',
      'Reduces rebound significantly',
      'Enhances waterproofing properties'
    ],
    usage: [
      'Wet and dry shotcrete',
      'Tunnel lining and support',
      'Rock stabilization',
      'Repair of concrete structures',
      'Precast concrete'
    ],
    advantages: [
      'Rapid strength gain',
      'Durable concrete lining',
      'Economical - reduced waste',
      'Consistent performance',
      'Non-alkaline option available'
    ],
    specifications: [
      { label: 'Base', value: 'Liquid Specialized Admixture' },
      { label: 'Color', value: 'Clear/Amber' },
      { label: 'Setting Time', value: '1-5 minutes' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Mining Operations',
      'Subway Tunnels',
      'Basement Excavations',
      'Canal Lining'
    ]
  },

  // Protection Compounds / Flooring Products
  {
    id: 'f1',
    name: 'FloorProtect',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'High Strength Epoxy Floor Coating',
    image: 'https://images.unsplash.com/photo-1772305595483-6b058aff40f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcG94eSUyMGZsb29yJTIwY29hdGluZyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzczNjYwMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Two component epoxy floor coating',
      'High mechanical strength',
      'Chemical and abrasion resistant',
      'Seamless and dust-free finish',
      'Available in various colors'
    ],
    usage: [
      'Industrial factory floors',
      'Warehouses and storage areas',
      'Pharmaceutical facilities',
      'Food processing plants',
      'Electronic manufacturing'
    ],
    advantages: [
      'Long-lasting protection',
      'Easy to clean and maintain',
      'Resistant to chemicals and oils',
      'Enhances floor aesthetics',
      'Anti-dust properties'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Multiple Colors' },
      { label: 'Coverage', value: '3-4 m²/kg' },
      { label: 'Compressive Strength', value: '>80 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Industrial Facilities',
      'Manufacturing Units',
      'Commercial Spaces',
      'Clean Rooms'
    ]
  },
  {
    id: 'f2',
    name: 'FloorTop NMH',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'Non Metallic Wear Resistant Floor Topping',
    image: new URL('../assets/products/NON METALLIC FLOOR HARDNER.jpg', import.meta.url).href,
    features: [
      'Non-metallic aggregate floor hardener',
      'High abrasion resistance',
      'Dust-proof and wear-resistant surface',
      'Increases concrete surface hardness',
      'Multiple color options'
    ],
    usage: [
      'Warehouses and godowns',
      'Manufacturing facilities',
      'Retail stores',
      'Parking areas',
      'Commercial buildings'
    ],
    advantages: [
      'Cost-effective flooring solution',
      'Easy application on fresh concrete',
      'Long service life',
      'Low maintenance',
      'Aesthetic finish'
    ],
    specifications: [
      { label: 'Base', value: 'Cement, Aggregates, Additives' },
      { label: 'Color', value: 'Grey/Red/Green/Blue' },
      { label: 'Coverage', value: '3-5 kg/m²' },
      { label: 'Compressive Strength', value: '>70 MPa' },
      { label: 'Shelf Life', value: '6 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Light to Medium Traffic Areas',
      'Commercial Flooring',
      'Residential Projects',
      'Institutional Buildings'
    ]
  },
  {
    id: 'f3',
    name: 'FloorTop MH',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'Metallic Aggregate Abrasion Resistant Floor Topping',
    image: new URL('../assets/products/METALLIC FLOOR HARDNER.jpg', import.meta.url).href,
    features: [
      'Metallic aggregate floor hardener',
      'Superior abrasion resistance',
      'High impact resistance',
      'Extremely durable surface',
      'Suitable for heavy traffic'
    ],
    usage: [
      'Heavy-duty industrial floors',
      'Forklift traffic areas',
      'Loading bays and docks',
      'Manufacturing plants',
      'Heavy machinery areas'
    ],
    advantages: [
      'Maximum wear resistance',
      'Withstands heavy traffic',
      'Impact resistant',
      'Long-lasting performance',
      'Dust-free surface'
    ],
    specifications: [
      { label: 'Base', value: 'Cement, Metallic Aggregates, Additives' },
      { label: 'Color', value: 'Grey' },
      { label: 'Coverage', value: '4-6 kg/m²' },
      { label: 'Compressive Strength', value: '>80 MPa' },
      { label: 'Shelf Life', value: '6 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Heavy Industrial Floors',
      'Logistics Facilities',
      'Manufacturing Units',
      'Distribution Centers'
    ]
  },
  {
    id: 'f4',
    name: 'TankCoat FG',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'Food Grade Epoxy Coating for Potable Water Tanks',
    image: new URL('../assets/products/TankCoat5G.jpg', import.meta.url).href,
    features: [
      'Food-grade certified epoxy coating',
      'Safe for potable water contact',
      'Non-toxic and odorless',
      'Excellent chemical resistance',
      'Smooth and hygienic finish'
    ],
    usage: [
      'Potable water tanks',
      'Food storage tanks',
      'Beverage industry tanks',
      'Pharmaceutical storage',
      'Swimming pools'
    ],
    advantages: [
      'Meets food safety standards',
      'Prevents bacterial growth',
      'Easy to clean',
      'Corrosion protection',
      'Long service life'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'White/Blue' },
      { label: 'Coverage', value: '3-4 m²/kg' },
      { label: 'Food Grade', value: 'FDA Approved' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Water Treatment Plants',
      'Food & Beverage Industry',
      'Residential Complexes',
      'Hotels and Hospitals'
    ]
  },
  {
    id: 'f5',
    name: 'FloorTop SL',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'Self Leveling Abrasion Resistant Floor Topping',
    image: new URL('../assets/products/FLOORTOP SL (SELF LEVELLING ABBRASSION RESISTANT FLOOR TOPPING).jpg', import.meta.url).href,
    features: [
      'Self-leveling floor topping',
      'High strength and durability',
      'Abrasion and wear resistant',
      'Smooth and level finish',
      'Fast application'
    ],
    usage: [
      'Floor leveling before coatings',
      'Industrial floors',
      'Commercial spaces',
      'Uneven floor correction',
      'Renovation projects'
    ],
    advantages: [
      'Self-leveling saves time',
      'Perfect flat surface',
      'High strength development',
      'Minimal thickness application',
      'Easy installation'
    ],
    specifications: [
      { label: 'Base', value: 'Cement, Polymers, Additives' },
      { label: 'Color', value: 'Grey' },
      { label: 'Thickness', value: '3-30mm' },
      { label: 'Compressive Strength', value: '>60 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Floor Leveling',
      'Industrial Facilities',
      'Commercial Buildings',
      'Renovation Works'
    ]
  },
  {
    id: 'f6',
    name: 'HydroSeal',
    category: 'flooring',
    categoryName: 'Protection Compounds / Flooring Products',
    description: 'Acrylic Resin Based Water Repellent cum Sealer',
    image: 'https://images.unsplash.com/photo-1701009711077-07f9f4ea0edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwcHJvZHVjdCUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzczNjU3ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Acrylic resin based sealer',
      'Water repellent properties',
      'Breathable coating',
      'UV resistant',
      'Enhances surface appearance'
    ],
    usage: [
      'Concrete and masonry sealing',
      'Natural stone protection',
      'Brick and block sealing',
      'Decorative concrete',
      'Paver sealing'
    ],
    advantages: [
      'Prevents water absorption',
      'Protects against weathering',
      'Enhances color and appearance',
      'Easy maintenance',
      'Environmentally friendly'
    ],
    specifications: [
      { label: 'Base', value: 'Acrylic Resin' },
      { label: 'Color', value: 'Clear' },
      { label: 'Coverage', value: '4-6 m²/liter' },
      { label: 'Drying Time', value: '2-4 hours' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Building Facades',
      'Decorative Surfaces',
      'Paving Stones',
      'Natural Stone'
    ]
  },

  // Tiling, Adhesives & Repairing Compounds
  {
    id: 't1',
    name: 'Tile O Fix',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Cement Based Tile Jointing Mortar',
    image: new URL('../assets/products/TILE O FIX (Polymeric Cement Based Tile Grout).jpg', import.meta.url).href,
    features: [
      'Polymer modified tile jointing mortar',
      'High bonding strength',
      'Water and stain resistant',
      'Crack resistant',
      'Easy to apply and clean'
    ],
    usage: [
      'Interior and exterior tiling',
      'Wall and floor tiles',
      'Ceramic and vitrified tiles',
      'Natural stone tiles',
      'Swimming pools'
    ],
    advantages: [
      'Superior adhesion',
      'Flexible and crack resistant',
      'Waterproof joints',
      'Long-lasting',
      'Multiple color options'
    ],
    specifications: [
      { label: 'Base', value: 'Cement, Polymers, Additives' },
      { label: 'Color', value: 'White/Grey' },
      { label: 'Coverage', value: 'Depends on joint width' },
      { label: 'Compressive Strength', value: '>30 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Tiling',
      'Commercial Projects',
      'Wet Areas',
      'Swimming Pools'
    ],
    hidden: true
  },
  {
    id: 't2',
    name: 'CemGrout',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Polymeric Cement Based Tile Joint Grout',
    image: new URL('../assets/products/CEM GROUT (Single component cementitious tile grout).jpg', import.meta.url).href,
    features: [
      'Premium polymer modified grout',
      'Stain and water resistant',
      'Color stable and non-fading',
      'Anti-fungal properties',
      'Smooth finish'
    ],
    usage: [
      'Wall and floor tile grouting',
      'Kitchen and bathroom tiles',
      'Swimming pool tiles',
      'Facade tile joints',
      'Decorative tiling'
    ],
    advantages: [
      'Excellent color retention',
      'Easy to clean and maintain',
      'Prevents mold growth',
      'Durable joints',
      'Wide color range'
    ],
    specifications: [
      { label: 'Base', value: 'Cement, Polymers, Pigments' },
      { label: 'Color', value: 'Multiple Colors' },
      { label: 'Joint Width', value: '2-10mm' },
      { label: 'Water Absorption', value: '<5%' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Buildings',
      'Hotels and Restaurants',
      'Shopping Malls',
      'Swimming Pools'
    ],
    hidden: true
  },
  {
    id: 't3',
    name: 'TileCrete EP',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Three Component Epoxy Tile Grout',
    image: new URL('../assets/products/TILECRETE EP – (3 COMPONENT EPOXY BASED TILE GROUT).jpg', import.meta.url).href,
    features: [
      'Three component epoxy grout',
      'Chemical and stain resistant',
      'Waterproof and hygienic',
      'High strength',
      'Anti-bacterial properties'
    ],
    usage: [
      'Food processing areas',
      'Pharmaceutical facilities',
      'Laboratories',
      'Commercial kitchens',
      'Swimming pools'
    ],
    advantages: [
      'Superior chemical resistance',
      'Zero water absorption',
      'Permanent color',
      'Easy to clean',
      'Prevents bacterial growth'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Multiple Colors' },
      { label: 'Joint Width', value: '3-15mm' },
      { label: 'Chemical Resistance', value: 'Excellent' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Food Industry',
      'Pharmaceutical Industry',
      'Clean Rooms',
      'Healthcare Facilities'
    ]
  },
  {
    id: 't4',
    name: 'BondEP',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Two Component Solvent Free Epoxy Bonding Agent',
    image: 'https://images.unsplash.com/photo-1597857306105-b23e08328d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2hlbWljYWwlMjBidWNrZXRzJTIwcGFpbnR8ZW58MXx8fHwxNzczNjU3ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Two component epoxy bonding agent',
      'Solvent-free formulation',
      'Excellent adhesion to various substrates',
      'High bond strength',
      'Chemical resistant'
    ],
    usage: [
      'Bonding new concrete to old',
      'Bonding repair mortars',
      'Tile adhesion on difficult substrates',
      'Steel to concrete bonding',
      'General purpose bonding'
    ],
    advantages: [
      'Superior bonding performance',
      'No VOC emissions',
      'Versatile application',
      'Durable bond',
      'Easy to use'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Clear/Grey' },
      { label: 'Bond Strength', value: '>15 MPa' },
      { label: 'Pot Life', value: '30-40 minutes' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Concrete Repairs',
      'Industrial Bonding',
      'Renovation Works',
      'Infrastructure Projects'
    ],
    hidden: true
  },
  {
    id: 't5',
    name: 'MEP',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Multi Purpose Epoxy Putty / Concrete Crack Filler',
    image: 'https://images.unsplash.com/photo-1720156066527-41497702fc63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBhZGhlc2l2ZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzY1Nzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Versatile epoxy putty',
      'Excellent adhesion',
      'Can be drilled and machined',
      'Water and chemical resistant',
      'High compressive strength'
    ],
    usage: [
      'Crack filling in concrete',
      'Emergency repairs',
      'Bonding and anchoring',
      'Surface repairs',
      'Joint sealing'
    ],
    advantages: [
      'Multi-purpose application',
      'Fast setting',
      'Strong and durable',
      'Can be painted',
      'Easy to use'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Grey' },
      { label: 'Pot Life', value: '15-20 minutes' },
      { label: 'Compressive Strength', value: '>70 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Concrete Repairs',
      'Industrial Maintenance',
      'Emergency Repairs',
      'General Construction'
    ]
  },
  {
    id: 't6',
    name: 'SBA',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Thixotropic Segmental Bridge Adhesive',
    image: 'https://images.unsplash.com/photo-1728038761120-9bb76cbac906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjaGVtaWNhbCUyMHByb2R1Y3RzJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3MzY1Nzg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Epoxy-based thixotropic adhesive',
      'No sagging on vertical surfaces',
      'High bond strength',
      'Rapid strength development',
      'Chemical resistant'
    ],
    usage: [
      'Segmental bridge construction',
      'Precast segment gluing',
      'Vertical and overhead bonding',
      'Structural bonding',
      'Infrastructure projects'
    ],
    advantages: [
      'Non-sag formulation',
      'Fast curing',
      'High structural strength',
      'Durable bond',
      'Easy application'
    ],
    specifications: [
      { label: 'Base', value: 'Epoxy Resin' },
      { label: 'Color', value: 'Grey' },
      { label: 'Bond Strength', value: '>20 MPa' },
      { label: 'Pot Life', value: '45-60 minutes' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Bridge Construction',
      'Precast Structures',
      'Infrastructure Works',
      'Segmental Construction'
    ],
    hidden: true
  },
  {
    id: 't7',
    name: 'CrackFill',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Acrylic Fiber Reinforced Crack Filler',
    image: 'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtb3J0YXIlMjBiYWclMjBwcm9kdWN0fGVufDF8fHx8MTc3MzY1ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Acrylic fiber reinforced compound',
      'Flexible and crack bridging',
      'Weather resistant',
      'Easy to apply',
      'Paintable'
    ],
    usage: [
      'Hairline crack filling',
      'Wall crack repairs',
      'Ceiling crack filling',
      'Facade repairs',
      'Interior surface repairs'
    ],
    advantages: [
      'Prevents crack recurrence',
      'Flexible formulation',
      'Easy application',
      'Can be painted over',
      'Quick drying'
    ],
    specifications: [
      { label: 'Base', value: 'Acrylic Polymer with Fibers' },
      { label: 'Color', value: 'White' },
      { label: 'Application', value: 'Trowel/Spatula' },
      { label: 'Drying Time', value: '4-6 hours' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Buildings',
      'Commercial Projects',
      'Renovation Works',
      'Facade Repairs'
    ],
    hidden: true
  },
  {
    id: 't8',
    name: 'ResiFix',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Polyester Resin Anchoring Grout',
    image: 'https://images.unsplash.com/photo-1579710147304-bac018c668f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjaGVtaWNhbCUyMGNvbnRhaW5lciUyMGdyZWVufGVufDF8fHx8MTc3MzY1ODA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Polyester resin-based anchoring grout',
      'Rapid curing',
      'High bond strength',
      'Suitable for all seasons',
      'Chemical resistant'
    ],
    usage: [
      'Anchor bolt fixing',
      'Dowel bar anchoring',
      'Rebar anchoring',
      'Machine foundation bolting',
      'Structural anchoring'
    ],
    advantages: [
      'Fast curing - 30 minutes',
      'High load capacity',
      'All-weather installation',
      'Easy cartridge application',
      'Long service life'
    ],
    specifications: [
      { label: 'Base', value: 'Polyester Resin' },
      { label: 'Color', value: 'Beige' },
      { label: 'Curing Time', value: '30-45 minutes' },
      { label: 'Bond Strength', value: '>25 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Industrial Anchoring',
      'Infrastructure Projects',
      'Machine Installations',
      'Structural Works'
    ],
    hidden: true
  },
  {
    id: 't9',
    name: 'Tile O Clean',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'High Performance Floor Cleaning Agent',
    image: new URL('../assets/products/TILE ‘O’ Clean (High performance Tile cleaning agent).jpg', import.meta.url).href,
    features: [
      'Specialized tile and grout cleaner',
      'Removes stains and efflorescence',
      'Safe on all tile types',
      'Concentrated formula',
      'Pleasant fragrance'
    ],
    usage: [
      'Tile and grout cleaning',
      'Removing cement residue',
      'Post-construction cleaning',
      'Routine floor cleaning',
      'Removing efflorescence'
    ],
    advantages: [
      'Effective cleaning',
      'Safe on tiles',
      'Economical - concentrated',
      'Easy to use',
      'Environmentally safe'
    ],
    specifications: [
      { label: 'Base', value: 'Acidic Cleaner' },
      { label: 'pH', value: '2-3' },
      { label: 'Dilution', value: '1:5 to 1:10 with water' },
      { label: 'Fragrance', value: 'Lemon' },
      { label: 'Shelf Life', value: '24 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential Cleaning',
      'Commercial Spaces',
      'Post-Construction',
      'Maintenance Cleaning'
    ],
    hidden: true
  },
  {
    id: 't10',
    name: 'BlockFix C10 / C20',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'Thin Joint Masonry Mortar for AAC Blocks',
    image: new URL('../assets/products/BLOCKFIX C20  BLOCKFIX C10.jpg', import.meta.url).href,
    features: [
      'High strength thin joint masonry mortar',
      'Excellent bond with AAC blocks',
      'Minimal thickness application (3-5mm)',
      'Water resistant and durable',
      'Saves time and labor costs'
    ],
    usage: [
      'AAC block masonry',
      'Hollow block masonry',
      'Concrete block wall construction',
      'Thin joint mortar for stones',
      'Interior and exterior walls'
    ],
    advantages: [
      'Superior bonding strength',
      'Reduced thermal bridging',
      'No curing required',
      'Ready to use - just add water',
      'Minimal wastage'
    ],
    specifications: [
      { label: 'Base', value: 'Polymer Modified Cement' },
      { label: 'Color', value: 'Grey' },
      { label: 'Bond Strength', value: '>0.5 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential High-rises',
      'Commercial Buildings',
      'Institutional Projects',
      'Industrial Units'
    ],
    hidden: true
  },
  {
    id: 't11',
    name: 'Rockfix GP',
    category: 'tiling',
    categoryName: 'Tiling, Adhesives & Repairing Compounds',
    description: 'General Purpose Adhesives and Repairing Compound',
    image: new URL('../assets/products/Rockfix GP.png', import.meta.url).href,
    features: [
      'High performance',
      'Excellent bonding',
      'Easy to apply',
      'Water resistant',
      'Durable'
    ],
    usage: [
      'Tiling applications',
      'Repairing works',
      'Bonding agent'
    ],
    advantages: [
      'Strong adhesion',
      'Long lasting',
      'Cost effective'
    ],
    specifications: [
      { label: 'Base', value: 'Cementitious' },
      { label: 'Color', value: 'Grey' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Residential',
      'Commercial',
      'Industrial'
    ]
  },
  {
    id: 's7',
    name: 'HardCrete 55',
    category: 'sealants',
    categoryName: 'Expansion Joints / Sealants',
    description: 'High Build Non-Shrink Structural Repair Grout',
    image: new URL('../assets/products/HARDCRETE 55.jpg', import.meta.url).href,
    features: [
      'Non-shrink structural repair mortar',
      'High compressive strength',
      'Excellent bond to concrete and steel',
      'High build - can be applied in thickness',
      'Resistant to carbonation and chlorides'
    ],
    usage: [
      'Structural concrete repairs',
      'Patching of spalled concrete',
      'Column and beam Jacketing',
      'Bridge deck repairs',
      'Marine structure repairs'
    ],
    advantages: [
      'Durable structural repairs',
      'Prevents steel corrosion',
      'Good workability',
      'Fast strength development',
      'Permanent solution'
    ],
    specifications: [
      { label: 'Base', value: 'Specialized Cementitious Compound' },
      { label: 'Color', value: 'Grey' },
      { label: 'Compressive Strength', value: '>55 MPa' },
      { label: 'Shelf Life', value: '12 months' }
    ],
    tdsUrl: '/src/assets/documents/sample-tds.pdf',
    applications: [
      'Bridges and Dams',
      'Industrial Structures',
      'Infrastructure Repairs',
      'General Construction'
    ]
  }
];
