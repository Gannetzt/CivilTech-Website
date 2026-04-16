import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { Sun, Moon, Menu, X, ChevronDown, Phone, Clock } from 'lucide-react';
import logo from 'figma:asset/59663358e291026026b733e05a456c1f287e3e58.png';
import { GetQuoteWidget } from '../ui/GetQuoteWidget';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const isActive = (item: string) => {
    const route = '/' + item.toLowerCase().replace(/\s+/g, '-');
    return location.pathname === route;
  };

  const isParentActive = (items?: string[]) => {
    if (!items) return false;
    return items.some(item => isActive(item));
  };

  const handleNavigation = (item: string) => {
    const route = item.toLowerCase().replace(/\s+/g, '-');
    if (item === 'Solutions') {
      navigate('/solutions');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Sectors') {
      navigate('/sectors');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Products') {
      navigate('/products');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Lok fix') {
      navigate('/lokfix');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Tools') {
      navigate('/tools');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Case Studies') {
      navigate('/case-studies');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Expert Hub') {
      navigate('/expert-hub');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'About Us') {
      navigate('/about-us');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Contact') {
      navigate('/contact');
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else if (item === 'Technical Resources') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById('resources');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const element = document.getElementById('resources');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      setActiveDropdown(null);
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(route);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const navItems = [
    {
      label: 'What We Do',
      hasDropdown: true,
      items: ['Solutions', 'Sectors']
    },
    { label: 'Products' },
    {
      label: 'Featured',
      hasDropdown: true,
      items: ['Lok fix', 'Tools']
    },
    { label: 'Technical Resources' },
    { label: 'About Us' },
    { label: 'Contact' }
  ];

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-background border-b border-border hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1.5 text-[10px] font-bold tracking-widest uppercase text-gray-400">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 group cursor-default">
                <Phone className="w-3 h-3 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">+91 40-35982016 | +91 89787 85341</span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <Clock className="w-3 h-3 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-1.5 group cursor-default bg-blue-900/5 dark:bg-blue-400/5 px-3 py-1 rounded-full border border-blue-900/10 dark:border-blue-400/10">
                <span className="text-blue-900 dark:text-blue-400 font-extrabold tracking-[0.2em] text-[9px]">ISO 9001:2015 CERTIFIED COMPANY</span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <span className="text-gray-300">Email:</span>
                <span className="text-blue-900/60 dark:text-blue-400/60 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors">mailtociviltech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Civiltech Logo" className="h-10 w-auto brightness-100 dark:brightness-200" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                <button
                  onClick={() => handleNavigation(item.label)}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  className={`transition-colors flex items-center gap-1 py-2 text-sm uppercase tracking-wider font-bold ${
                    isActive(item.label) || isParentActive(item.items)
                      ? 'text-blue-900 dark:text-blue-400 border-b-2 border-green-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-300'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-56"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-background rounded-lg shadow-xl py-2 border border-border overflow-hidden">
                      {item.items?.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => handleNavigation(subItem)}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-4 ${
                            isActive(subItem)
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-400 font-bold border-green-500'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-300 border-transparent hover:border-green-400'
                          }`}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <GetQuoteWidget />
            <div className="w-px h-6 bg-border mx-1"></div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-blue-900/40 rounded-full transition-all duration-300 transform hover:scale-110"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="px-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-bold text-sm uppercase tracking-wide transition-colors py-3 px-4 flex items-center justify-between w-full rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {activeDropdown === item.label && (
                        <div className="ml-4 border-l-2 border-green-200 dark:border-green-900 space-y-1 my-1">
                          {item.items?.map((subItem) => (
                            <button
                              key={subItem}
                              onClick={() => handleNavigation(subItem)}
                              className="w-full text-left text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-300 font-medium transition-colors py-2 px-6 rounded-r-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
                            >
                              {subItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.label)}
                      className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-bold text-sm uppercase tracking-wide transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-4 pt-6 mt-4 border-t border-border px-4">
                <GetQuoteWidget />
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center gap-3 group w-full"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  )}
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                    {isDarkMode ? 'Light' : 'Dark'}
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}