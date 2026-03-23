import { Hero } from '../components/sections/Hero';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { About } from '../components/sections/About';
import { ProductsPreview } from '../components/sections/ProductsPreview';
import { ProjectsCarousel } from '../components/sections/ProjectsCarousel';
import { TechnicalResources } from '../components/sections/TechnicalResources';
import { Stakeholders } from '../components/sections/Stakeholders';

export function HomePage() {
  return (
    <>
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
