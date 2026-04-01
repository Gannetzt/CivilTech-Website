import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function SEO({ 
  title = "Advanced Waterproofing & Flooring", 
  description = "Leading manufacturer and supplier of high-performance construction chemicals. Civiltech offers advanced waterproofing coatings, industrial flooring, concrete admixtures, and tiling adhesives.", 
  name = "Civiltech Construction Chemicals LLP", 
  type = "website",
  keywords = "Construction Chemicals, Waterproofing Coatings, Expansion Joints, Concrete Admixtures, Industrial Flooring, Epoxy Flooring, Concrete Repair Products, Tiling Adhesives, Construction Sealants, Civiltech",
  url = "https://civiltechchemicals.com",
  image = "https://civiltechchemicals.com/og-image.jpg"
}: SEOProps) {
  
  const formattedTitle = `${name} | ${title}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{formattedTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={name} />
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
