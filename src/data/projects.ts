export interface ProjectDetail {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  image2?: string;
  image3?: string;
  video?: string;
  sector?: string;
  solutions?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'inorbit-mall',
    title: "Inorbit Mall",
    location: "Hyderabad",
    category: "Waterproofing",
    sector: "Buildings",
    description: "Comprehensive waterproofing and protective coating solutions implemented at Inorbit Mall, Hyderabad. The project focused on ensuring structural integrity and long-term protection against heavy footfall and environmental factors.",
    image: "/assets/casestudies/inorbit-mall-hyderabad.jpg"
  },
  {
    id: 'sirpur-paper-mills',
    title: "The Sirpur Paper Mills Limited",
    location: "Kaghaznagar, Telangana",
    category: "Industrial Flooring",
    sector: "Industrial",
    description: "Self-leveling epoxy flooring system for a 200,000 sq.ft. manufacturing facility. This high-performance flooring is designed for chemical resistance and heavy machinery usage.",
    image: "/assets/casestudies/Sirpur Paper mill work.jpeg",
    image2: "/assets/casestudies/Sirpur Paper mill work 2.jpeg",
    image3: "/assets/casestudies/Sirpur Paper mill work 3.jpeg",
    video: "/assets/casestudies/Sirpur Paper mill work video.mp4"
  },
  {
    id: 'lt-metro',
    title: "L&T Metro",
    location: "Nampally and Moosarambagh stations",
    category: "Concrete Aids",
    sector: "Rail",
    description: "High-performance curing compounds used in extreme temperature structural concrete applications. Our solutions ensured crack-free curing for the metro platform slabs.",
    image: "/assets/casestudies/L&T metro.jpeg"
  },
  {
    id: 'apcrda',
    title: "APCRDA",
    location: "Amaravati",
    category: "Block Jointing Mortar",
    sector: "Buildings",
    description: "Implementation of RockFix GP Block Jointing mortar for major residential complexes in Amaravati. This project showcased the efficiency and strength of our specialized masonry solutions.",
    image: "/assets/casestudies/AP project.jpeg",
    video: "/assets/casestudies/Jointing mortar.mp4"
  },
  {
    id: 'aparna-sarovar',
    title: "Aparna Sarovar",
    location: "Hyderabad",
    category: "Flooring",
    sector: "Buildings",
    description: "Application of FloorTop SL, a high-performance self-leveling flooring system for premium residential apartments. The result is a seamless, dust-free, and aesthetic floor surface.",
    image: "/assets/casestudies/Aparna sarovar.jpeg",
    image2: "/assets/casestudies/Aparna sarovar 2.jpeg",
    video: "/assets/casestudies/Aparna sarovar.mp4"
  }
];
