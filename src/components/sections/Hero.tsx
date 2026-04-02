import { useNavigate, useLocation } from 'react-router';
import { useEffect, useState, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import waterproofingImage from '../../assets/products/waterproofing_category_banner.png';
import flooringImage from '../../assets/products/flooring_category_banner.png';
import concreteImage from '../../assets/products/concrete_category_banner.png';
import sealantsImage from '../../assets/products/sealants_category_banner.png';
import tilingImage from '../../assets/products/tiling_category_banner.png';
import waterproofingExplanatory from '../../assets/products/waterproofing_explanatory.png';
import { LogoBadge } from '../ui/LogoBadge';

const sealantsExplanatory = 'https://images.unsplash.com/photo-1730267961291-8ba275f8c556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBqb2ludCUyMHNlYWxhbnQlMjBzaWxpY29uZXxlbnwxfHx8fDE3NzM2NjAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const tilingExplanatory = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwaW5zdGFsbGF0aW9uJTIwYWRoZXNpdmV8ZW58MXx8fHwxNzczNjYwMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    // Force immediate layout recalculation before browser paint
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
    return () => clearTimeout(timer);
  }, [location.key]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1, // Mobile-first base setting
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 10000, // Very large desktop
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };

  const solutionCards = [
    {
      id: 'waterproofing',
      title: 'Waterproofing',
      description: 'Advanced acrylic and PU based coatings for complete structural protection against water ingress and moisture damage.',
      image: waterproofingExplanatory,
      gradient: 'from-blue-950 via-blue-950/40',
      accent: 'bg-blue-500',
      textAccent: 'text-blue-400',
      buttonText: 'Explore Solutions'
    },
    {
      id: 'flooring',
      title: 'Industrial Flooring',
      description: 'High-performance epoxy and polyurethane flooring systems for heavy-duty industrial and commercial environments.',
      image: flooringImage,
      gradient: 'from-blue-900 via-blue-900/40',
      accent: 'bg-blue-600',
      textAccent: 'text-blue-400',
      buttonText: 'View Products'
    },
    {
      id: 'concrete',
      title: 'Concrete Aids',
      description: 'Superior curing compounds and chemical additives to enhance structural strength and long-term durability of concrete.',
      image: 'https://images.unsplash.com/photo-1714386548315-4d3b4a1009a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGN1cmluZyUyMGNvbXBvdW5kJTIwc3ByYXl8ZW58MXx8fHwxNzczNjYwMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-slate-900 via-slate-900/40',
      accent: 'bg-blue-500',
      textAccent: 'text-blue-400',
      buttonText: 'Technical Data'
    },
    {
      id: 'sealants',
      title: 'Expansion Joints',
      description: 'Highly flexible sealing solutions designed to accommodate movement and prevent leakage in construction joints.',
      image: sealantsImage,
      gradient: 'from-blue-800 via-blue-800/40',
      accent: 'bg-blue-400',
      textAccent: 'text-blue-300',
      buttonText: 'See Sealants'
    },
    {
      id: 'tiling',
      title: 'Tiling & Adhesives',
      description: 'Professional grade adhesives and high-performance grouts for durable and aesthetic tiling installations.',
      image: tilingExplanatory,
      gradient: 'from-green-900 via-green-900/40',
      accent: 'bg-green-500',
      textAccent: 'text-green-400',
      buttonText: 'Explore Tiling'
    }
  ];

  return (
    <section className="bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2"></div>

      <div className="py-24 border-b border-border">
        <div className="text-center mb-10 sm:mb-12 px-4 relative z-20">
          <div className="inline-block px-3 py-1 bg-blue-500/5 text-blue-700 dark:text-blue-400 rounded-lg text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-blue-500/10 backdrop-blur-sm">
            Global Construction Chemicals Leader
          </div>
          <h1 className="text-foreground text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight max-w-4xl mx-auto px-2">
            Precision Solutions for <span className="text-primary">Structural Excellence</span>
          </h1>
          <p className="text-muted-foreground text-xs sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed opacity-70 px-4 font-medium">
            High-performance manufacturing standards and technical expertise for the global construction industry.
          </p>
        </div>

        {/* Product Slider - Compact Multi-Slide Experience */}
        <div className="w-full px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="max-w-[1700px] mx-auto">
            {isMounted && (
              <Slider 
                key={location.key}
                {...sliderSettings} 
                className="hero-slider-compact group/slider"
              >
                {solutionCards.map((card) => (
                  <div key={card.id} className="px-3 sm:px-4 py-6 focus:outline-none">
                    <div 
                      onClick={() => {
                        navigate(`/products?category=${card.id}`);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="group relative h-[380px] sm:h-[450px] lg:h-[480px] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 bg-secondary"
                    >
                      <img 
                        src={card.image} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt={card.title}
                      />
                      <LogoBadge size="sm" className="top-6 left-6" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-all duration-500`}></div>
                      
                      <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end bg-gradient-to-t from-blue-950/80 via-transparent to-transparent">
                        <div className="w-full space-y-3 sm:space-y-4">
                          <div className="overflow-hidden">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 transform transition-all duration-700 -translate-x-full group-hover:translate-x-0`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${card.accent} animate-pulse`}></div>
                              <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-white/90">Technical Solutions</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight transform transition-all duration-500 group-hover:-translate-y-1">
                            {card.title}<span className="text-primary-foreground/20">.</span>
                          </h3>
                          
                          <div className="max-w-xs overflow-hidden">
                            <p className="text-white/80 text-[10px] sm:text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 transform translate-y-full group-hover:translate-y-0">
                              {card.description}
                            </p>
                          </div>
                          
                          <div className="pt-2 transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200">
                            <button className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.3em] group/link hover:text-green-400 transition-colors">
                              <span>Explore</span>
                              <span className="text-xl transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
