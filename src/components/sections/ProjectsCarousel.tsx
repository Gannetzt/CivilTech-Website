import { useState, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p2 from '../../assets/clients/Picture2.jpg';
import p3 from '../../assets/clients/Picture3.png';
import p4 from '../../assets/clients/Picture4.png';
import p5 from '../../assets/clients/Picture5.png';
import p6 from '../../assets/clients/Picture6.png';
import p7 from '../../assets/clients/Picture7.png';
import p8 from '../../assets/clients/Picture8.jpg';
import p9 from '../../assets/clients/Picture9.jpg';
import p10 from '../../assets/clients/Picture10.png';
import p11 from '../../assets/clients/Picture11.png';
import p12 from '../../assets/clients/Picture12.jpg';
import p13 from '../../assets/clients/Picture13.png';
import p14 from '../../assets/clients/Picture14.png';
import p15 from '../../assets/clients/Picture15.png';
import p16 from '../../assets/clients/Picture16.jpg';
import p17 from '../../assets/clients/Picture17.png';
import p18 from '../../assets/clients/Picture18.jpg';
import p19 from '../../assets/clients/Picture19.jpg';
import p20 from '../../assets/clients/Picture20.png';
import p21 from '../../assets/clients/Picture21.png';
import p22 from '../../assets/clients/Picture22.jpg';
import p23 from '../../assets/clients/Picture23.png';
import p24 from '../../assets/clients/Picture24.jpg';
import p25 from '../../assets/clients/Picture25.jpg';
import p26 from '../../assets/clients/Picture26.png';
import p27 from '../../assets/clients/Picture27.jpg';
import p28 from '../../assets/clients/Picture28.jpg';
import p29 from '../../assets/clients/Picture29.png';
import maritimeTerminal from '../../assets/projects/maritime_terminal.png';

const projects = [
  {
    title: "Global Maritime Terminal",
    location: "Mumbai Port Trust",
    category: "Waterproofing",
    description: "Full-scale crystaline waterproofing and protective coatings for high-salinity marine environments.",
    image: maritimeTerminal
  },
  {
    title: "Tech-City Hub",
    location: "Bangalore",
    category: "Industrial Flooring",
    description: "Self-leveling epoxy flooring system for a 200,000 sq.ft. clean-room manufacturing facility.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
  },
  {
    title: "Grand Plaza Infrastructure",
    location: "Dubai",
    category: "Concrete Aids",
    description: "High-performance curing compounds used in extreme temperature structural concrete applications.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
  }
];

const clients = [
  { name: "Client 12", logo: p12 },
  { name: "Client 3", logo: p3 },
  { name: "Client 4", logo: p4 },
  { name: "Client 2", logo: p2 },
  { name: "Client 5", logo: p5 },
  { name: "Client 6", logo: p6 },
  { name: "Client 7", logo: p7 },
  { name: "Client 8", logo: p8 },
  { name: "Client 9", logo: p9 },
  { name: "Client 10", logo: p10 },
  { name: "Client 11", logo: p11 },
  { name: "Client 13", logo: p13 },
  { name: "Client 14", logo: p14 },
  { name: "Client 15", logo: p15 },
  { name: "Client 16", logo: p16 },
  { name: "Client 17", logo: p17 },
  { name: "Client 18", logo: p18 },
  { name: "Client 19", logo: p19 },
  { name: "Client 20", logo: p20 },
  { name: "Client 21", logo: p21 },
  { name: "Client 22", logo: p22 },
  { name: "Client 23", logo: p23 },
  { name: "Client 24", logo: p24 },
  { name: "Client 25", logo: p25 },
  { name: "Client 26", logo: p26 },
  { name: "Client 27", logo: p27 },
  { name: "Client 28", logo: p28 },
  { name: "Client 29", logo: p29 }
];

export function ProjectsCarousel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
    return () => clearTimeout(timer);
  }, [location.key]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => setCurrentIndex(index);

  const clientSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true,
    variableWidth: true,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-background transition-colors duration-300 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2 bg-primary/5 text-primary rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
            Our Industry Impact
          </div>
          <h2 className="text-foreground text-4xl lg:text-6xl font-black mb-8 tracking-tighter leading-none">Trusted by Global Giants</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg sm:text-xl font-medium leading-relaxed mb-16 opacity-80">
            Civiltech partners with world-class engineering firms and developers to deliver
            uncompromising construction chemical performance.
          </p>

          {/* Balanced Industry Marquee */}
          <div className="relative mb-24 max-w-full overflow-hidden">
            <Slider
              key={`clients-${location.key}`}
              {...clientSliderSettings}
              className="client-slider"
            >
              {clients.map((client, idx) => (
                <div key={idx} className="px-12 sm:px-20 focus:outline-none">
                  <div className="flex items-center justify-center min-h-[100px]">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 sm:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-500"
                      />
                    ) : (
                      <div className="text-xl sm:text-2xl font-black text-foreground/10 hover:text-primary transition-all duration-500 uppercase tracking-tighter whitespace-nowrap py-6 select-none cursor-default border-b-2 border-transparent hover:border-primary/20">
                        {client.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>

            <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        <div className="relative group/carousel">
          <div className="relative aspect-[4/5] sm:aspect-video min-h-[500px] max-h-[850px] rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl bg-primary border border-white/5">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className={`absolute inset-0 transition-all duration-[1000ms] ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out group-hover/carousel:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

                <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-end">
                  <div className="w-full max-w-4xl space-y-3 sm:space-y-6">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[8px] sm:text-[11px] font-black tracking-[0.2em] uppercase text-white border border-white/10">
                        {project.category}
                      </span>
                      <div className="h-px w-6 sm:w-12 bg-white/30"></div>
                      <span className="text-white/80 text-[9px] sm:text-sm font-bold tracking-widest uppercase">{project.location}</span>
                    </div>

                    <h3 className="text-white text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                      {project.title}<span className="text-white/20">.</span>
                    </h3>

                    <p className="text-white/70 max-w-xl text-[10px] sm:text-base lg:text-lg font-medium leading-relaxed hidden sm:block">
                      {project.description}
                    </p>

                    <div className="pt-2 sm:pt-4">
                      <button
                        onClick={() => navigate('/case-studies')}
                        className="group/btn inline-flex items-center gap-3 sm:gap-6 px-5 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl text-white text-[9px] sm:text-xs font-black uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-primary hover:border-white"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover/btn:translate-x-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute right-6 bottom-6 sm:right-12 sm:bottom-12 flex gap-3 z-30">
              <button
                onClick={prev}
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/10 backdrop-blur-3xl border border-white/20 hover:bg-white hover:text-primary text-white rounded-2xl transition-all duration-500 group/arrow shadow-xl"
              >
                <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8 transition-transform group-hover/arrow:-translate-x-1" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/10 backdrop-blur-3xl border border-white/20 hover:bg-white hover:text-primary text-white rounded-2xl transition-all duration-500 group/arrow shadow-xl"
              >
                <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8 transition-transform group-hover/arrow:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 transition-all duration-700 ease-out ${index === currentIndex ? 'w-24 bg-primary' : 'w-4 bg-muted hover:bg-muted-foreground'
                  } rounded-full overflow-hidden`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
