import { Sectors } from '../components/sections/Sectors';
import { SEO } from '../components/seo/SEO';

export function SectorsPage() {
  return (
    <>
      <SEO 
        title="Sectors We Serve" 
        description="Civiltech Construction Chemicals LLP provides dedicated structural solutions for residential, commercial, infrastructure, industrial, and marine sectors."
        url="https://civiltechchemicals.com/sectors"
      />
      <Sectors />
    </>
  );
}
