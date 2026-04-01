import { CaseStudies } from '../components/sections/CaseStudies';
import { SEO } from '../components/seo/SEO';

export function CaseStudiesPage() {
  return (
    <>
      <SEO 
        title="Case Studies & Projects" 
        description="Explore our successful projects across India. Discover how Civiltech provides durable and long-lasting construction solutions for massive infrastructures."
        url="https://civiltechchemicals.com/case-studies"
      />
      <CaseStudies />
    </>
  );
}
