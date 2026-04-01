import { Solutions } from '../components/sections/Solutions';
import { SEO } from '../components/seo/SEO';

export function SolutionsPage() {
  return (
    <>
      <SEO 
        title="Our Solutions" 
        description="Explore comprehensive construction solutions by Civiltech, featuring high-performance chemical technologies tailored for concrete, flooring, waterproofing, and specialized repairs."
        url="https://civiltechchemicals.com/solutions"
      />
      <Solutions />
    </>
  );
}
