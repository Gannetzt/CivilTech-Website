import { Hero } from '../components/sections/Hero';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { About } from '../components/sections/About';
import { ProductsPreview } from '../components/sections/ProductsPreview';
import { ProjectsCarousel } from '../components/sections/ProjectsCarousel';
import { TechnicalResources } from '../components/sections/TechnicalResources';
import { Stakeholders } from '../components/sections/Stakeholders';
import { SEO } from '../components/seo/SEO';

export function HomePage() {
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to Civiltech Construction Chemicals LLP. Discover our advanced solutions for waterproofing, industrial flooring, concrete admixtures, and high-performance tiling adhesives."
        url="https://civiltechchemicals.com/"
      />
      <Hero />
      
      {/* Product Portfolio (Preview) comes first as requested */}
      <ProductsPreview />
      
      {/* Core Competencies comes second */}
      <FeaturedServices />
      
      {/* Stakeholders section moved down and separated */}
      <Stakeholders />
      
      <About />
      <ProjectsCarousel />
      <TechnicalResources />
    </>
  );
}
