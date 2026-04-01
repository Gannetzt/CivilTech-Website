import { ExpertHub } from '../components/sections/ExpertHub';
import { SEO } from '../components/seo/SEO';

export function ExpertHubPage() {
  return (
    <>
      <SEO 
        title="Expert Hub" 
        description="Connect with our technical experts at Civiltech. Access specialized knowledge, engineering consultations, and advanced technical support for your construction projects."
        url="https://civiltechchemicals.com/expert-hub"
      />
      <ExpertHub />
    </>
  );
}
