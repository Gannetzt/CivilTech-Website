import { Tools } from '../components/sections/Tools';
import { SEO } from '../components/seo/SEO';

export function ToolsPage() {
  return (
    <>
      <SEO 
        title="Application Tools" 
        description="Professional grade application tools and equipment for the precise installation of construction chemicals and industrial flooring systems."
        url="https://civiltechchemicals.com/tools"
      />
      <Tools />
    </>
  );
}
