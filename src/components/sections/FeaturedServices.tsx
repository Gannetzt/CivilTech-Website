import { useNavigate } from 'react-router';
import { Droplets, Wrench, Layers, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'waterproofing',
    icon: Droplets,
    title: 'Waterproofing Systems',
    description: 'Advanced waterproofing solutions for all construction needs, ensuring long-lasting protection against water damage.',
    color: 'bg-blue-500'
  },
  {
    id: 'concrete',
    icon: Wrench,
    title: 'Concrete Repair & Protection',
    description: 'Comprehensive repair and protection systems to restore and extend the life of concrete structures.',
    color: 'bg-blue-600'
  },
  {
    id: 'flooring',
    icon: Layers,
    title: 'Industrial Flooring',
    description: 'High-performance flooring solutions designed for demanding industrial and commercial environments.',
    color: 'bg-blue-700'
  },
  {
    id: 'sealants',
    icon: Shield,
    title: 'Admixtures & Sealants',
    description: 'Specialized admixtures and sealants to enhance concrete properties and ensure structural integrity.',
    color: 'bg-blue-800'
  }
];

export function FeaturedServices() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-secondary/10 transition-colors duration-300 relative overflow-hidden" id="services">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Core Competencies
          </div>
          <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-6">Industrial Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed opacity-80">
            High-performance chemical engineering tailored for modern infrastructure 
            and demanding structural requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              onClick={() => navigate(`/products?category=${service.id}`)}
              className="group bg-card rounded-[2rem] p-10 sm:p-12 hover:shadow-2xl hover:border-primary/30 transition-all duration-700 hover:-translate-y-4 cursor-pointer border border-border relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/5 transition-colors duration-500"></div>

              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl relative z-10 bg-primary shadow-primary/10 group-hover:bg-green-600 transition-colors`}>
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <h3 className="text-card-foreground font-bold text-xl sm:text-2xl mb-6 group-hover:text-primary transition-colors leading-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-10 relative z-10 opacity-80 group-hover:opacity-100">
                {service.description}
              </p>
              <div className="flex items-center gap-3 text-primary/40 dark:text-primary-foreground/40 font-bold text-xs sm:text-sm uppercase tracking-widest group-hover:text-green-600 transition-all group-hover:gap-6 relative z-10">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
