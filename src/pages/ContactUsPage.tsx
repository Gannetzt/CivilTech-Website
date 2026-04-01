import { ContactUs } from '../components/sections/ContactUs';
import { SEO } from '../components/seo/SEO';

export function ContactUsPage() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Civiltech Construction Chemicals LLP. Reach out to our technical experts for construction solutions and project inquiries."
        url="https://civiltechchemicals.com/contact"
      />
      <ContactUs />
    </>
  );
}
