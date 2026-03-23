import { useState } from 'react';
import { Check } from 'lucide-react';

const tabContent = {
  architects: {
    title: 'Standards of Excellence & Trust for Architects',
    description: 'We partner with architects to set new benchmarks in construction chemical excellence. Our products are engineered to provide maximum design flexibility without compromising on structural integrity.',
    points: [
      'Maximum design flexibility',
      'Structural integrity assurance',
      'Sustainable building solutions',
      'Detailed technical specifications'
    ]
  },
  contractors: {
    title: 'Reliable Performance for Professional Contractors',
    description: 'We provide high-performance construction chemicals designed to meet the demanding requirements of contractors worldwide, ensuring efficiency and durability.',
    points: [
      'Fast-setting formulations',
      'Batch-to-batch consistency',
      'On-site technical support',
      'Cost-effective bulk solutions'
    ]
  },
  homeOwners: {
    title: 'Durability and Protection for Home Owners',
    description: 'Protect your investment with professional-grade solutions. Our residential range ensures that your home remains safe and beautiful for generations.',
    points: [
      'User-friendly applications',
      'Non-toxic and safe for homes',
      'Long-lasting aesthetic finish',
      'DIY support and guidance'
    ]
  }
};

export function Stakeholders() {
  const [activeTab, setActiveTab] = useState<'architects' | 'contractors' | 'homeOwners'>('architects');

  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Our Stakeholders
          </div>
          <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-6">Tailored Excellence</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['architects', 'contractors', 'homeOwners'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-2xl border ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20'
                  : 'bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-primary'
              }`}
            >
              {tab === 'homeOwners' ? 'Home Owners' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-bold text-foreground tracking-tight leading-tight">
              {tabContent[activeTab].title}
            </h3>
            <div className="bg-secondary/20 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-inner border border-border">
              <p className="text-muted-foreground mb-10 text-lg sm:text-xl lg:text-2xl italic leading-relaxed font-medium">
                "{tabContent[activeTab].description}"
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                {tabContent[activeTab].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-2xl shadow-sm border border-border group hover:border-green-500 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary group-hover:bg-green-100 group-hover:text-green-600 rounded-full flex items-center justify-center font-bold text-sm transition-colors">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-foreground font-bold text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
