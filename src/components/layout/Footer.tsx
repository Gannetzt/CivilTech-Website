import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/59663358e291026026b733e05a456c1f287e3e58.png';

const footerLinks = {
  company: [
    'About Us',
    'Our History',
    'Leadership Team',
    'Careers',
    'News & Media'
  ],
  products: [
    'Waterproofing',
    'Repair & Protection',
    'Industrial Flooring',
    'Admixtures',
    'Sealants'
  ],
  sectors: [
    'Residential',
    'Commercial',
    'Infrastructure',
    'Industrial',
    'Marine'
  ],
  support: [
    'Technical Support',
    'Documentation',
    'Training',
    'Warranty',
    'Contact Us'
  ]
};

const regionalOffices = [
  { region: 'India', city: 'Hyderabad' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Main Footer - Compact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <img src={logo} alt="Civiltech Logo" className="h-7 sm:h-8 w-auto" />
            <p className="text-blue-100/60 leading-relaxed text-xs sm:text-sm max-w-xs">
              Leading high-performance construction chemicals manufacturer.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-blue-100/40 hover:text-green-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Grouped for Efficiency */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-widest border-b border-green-500/30 pb-1 inline-block">Menu</h4>
            <ul className="space-y-2">
              {footerLinks.company.slice(0, 4).map((link) => (
                <li key={link}><a href="#" className="text-blue-100/50 hover:text-green-400 transition-colors text-xs">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-widest border-b border-green-500/30 pb-1 inline-block">Expertise</h4>
            <ul className="space-y-2">
              {footerLinks.products.slice(0, 4).map((link) => (
                <li key={link}><a href="#" className="text-blue-100/50 hover:text-green-400 transition-colors text-xs">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Combined Contact & Office Column */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-widest border-b border-green-500/30 pb-1 inline-block">Direct Contact</h4>
            <div className="space-y-2 text-xs text-blue-100/50">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-green-500" /> 
                <span>Kondapur Hyderabad, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-green-500" /> 
                <span>+91 40 2345 6789</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-green-500" /> 
                <span>info@civiltech.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs">
          <p className="text-blue-100/30">
            © {currentYear} Civiltech Construction Chemicals LLP.
          </p>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            {['Privacy', 'Terms', 'Regional Offices'].map((item) => (
              <a key={item} href="#" className="text-blue-100/30 hover:text-green-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}