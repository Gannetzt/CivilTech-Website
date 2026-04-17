import { TechnicalResources } from '../components/sections/TechnicalResources';
import { SEO } from '../components/seo/SEO';

export function TechnicalResourcesPage() {
  return (
    <>
      <SEO 
        title="Technical Resources & Documentation" 
        description="Access Civiltech's complete library of technical data sheets, brochures, site manuals, and safety documentation for construction chemicals."
        url="https://civiltechchemicals.com/technical-resources"
      />
      <TechnicalResources />
    </>
  );
}
