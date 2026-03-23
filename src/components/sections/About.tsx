import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '1945', event: 'Company Founded' },
  { year: '1980', event: 'Global Expansion' },
  { year: '2000', event: 'Innovation Center Launch' },
  { year: '2025', event: '80 Years of Excellence' }
];

const stats = [
  { icon: Award, value: 'Expertise', label: 'Technical Solutions' },
  { icon: Globe, value: 'National', label: 'Presence' },
  { icon: Users, value: 'Team', label: 'Expert Support' },
  { icon: TrendingUp, value: 'Quality', label: 'Manufacturing' }
];

export function About() {
  return (
    <section className="py-24 bg-background transition-colors duration-300" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-1 bg-green-500 mb-8"></div>
              <h2 className="text-foreground text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                Innovation in <br />
                <span className="text-green-600">Construction Chemicals</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Civiltech Construction Chemicals LLP is a leading manufacturer and supplier of high-performance 
                construction chemicals. We deliver innovative solutions that 
                meet the evolving needs of the construction industry.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed italic border-l-4 border-green-500 pl-6 py-2">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner 
                for construction professionals.
              </p>
              
              <div className="pt-8">
                <button className="bg-blue-900 hover:bg-green-600 text-white px-10 py-4 rounded-2xl transition-all duration-300 font-bold shadow-xl shadow-blue-950/20">
                  Our Legacy
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`bg-card border border-border p-8 rounded-3xl text-center hover:shadow-2xl hover:border-green-500/20 transition-all duration-500 group ${idx === 1 || idx === 3 ? 'mt-8' : ''}`}
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <stat.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div className="text-card-foreground text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}