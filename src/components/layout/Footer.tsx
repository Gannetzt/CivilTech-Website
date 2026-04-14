import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/59663358e291026026b733e05a456c1f287e3e58.png';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about-us' },
    { name: 'Expert Hub', path: '/expert-hub' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ],
  products: [
    { name: 'Waterproofing', path: '/products?category=waterproofing' },
    { name: 'Concrete Aids', path: '/products?category=concrete' },
    { name: 'Industrial Flooring', path: '/products?category=flooring' },
    { name: 'Sealants', path: '/products?category=sealants' }
  ],
  sectors: [
    { name: 'Residential', path: '/sectors' },
    { name: 'Commercial', path: '/sectors' },
    { name: 'Infrastructure', path: '/sectors' },
    { name: 'Industrial', path: '/sectors' }
  ],
  support: [
    { name: 'Technical Support', path: '/contact' },
    { name: 'Documentation', path: '/contact' },
    { name: 'LokFix', path: '/lokfix' },
    { name: 'Tools', path: '/tools' }
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white" id="contact" style={{ scrollMarginTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <Link to="/">
              <img src={logo} alt="Civiltech Logo" className="h-10 w-auto brightness-200" />
            </Link>
            <p className="text-blue-100/60 leading-relaxed text-sm max-w-xs">
              Leading high-performance construction chemicals manufacturer, delivering engineered solutions for modern infrastructure.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all border border-white/10">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 mb-3">Products Tested By / Certified</p>
              <div className="flex items-center gap-3 bg-white p-2 rounded max-w-xs shadow-inner">
                <img src="/assets/certifications/bureau-veritas-red.png" alt="Bureau Veritas Certification" className="h-10 w-auto object-contain mix-blend-multiply" />
                <div className="h-8 w-px bg-gray-300"></div>
                <img src="/assets/certifications/iso-9001.png" alt="ISO 9001:2015" className="h-8 w-auto object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-4 border-green-500 pl-3">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-blue-100/50 hover:text-green-400 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-4 border-green-500 pl-3">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-blue-100/50 hover:text-green-400 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-4 border-green-500 pl-3">Sectors</h4>
            <ul className="space-y-4">
              {footerLinks.sectors.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-blue-100/50 hover:text-green-400 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-4 border-green-500 pl-3">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-blue-100/50 hover:text-green-400 transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-white/5 mb-8">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-blue-100/40 font-bold mb-0.5">Location</p>
              <p className="text-sm font-bold">Kondapur Hyderabad, India</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-blue-100/40 font-bold mb-0.5">Call Us</p>
              <p className="text-sm font-bold">+91 40-35982016 / +91 89787 85341</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-blue-100/40 font-bold mb-0.5">Email Support</p>
              <p className="text-sm font-bold">mailtociviltech@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs transition-opacity duration-300">
          <p className="text-blue-100/30">
            © {currentYear} Civiltech Construction Chemicals LLP. All rights reserved.
          </p>
          <div className="flex gap-8 uppercase tracking-[0.2em]">
            <Link to="/about-us" className="text-blue-100/30 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/about-us" className="text-blue-100/30 hover:text-green-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}