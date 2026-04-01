import { AboutUs } from '../components/sections/AboutUs';
import { SEO } from '../components/seo/SEO';

export function AboutUsPage() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Civiltech Construction Chemicals LLP. With over two decades of legacy in precision manufacturing, we offer top constructors' complete construction solutions."
        url="https://civiltechchemicals.com/about-us"
      />
      <AboutUs />
    </>
  );
}
