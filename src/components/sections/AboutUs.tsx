import { ArrowRight, MapPin, Phone, Mail, Shield, Award, Users, Handshake, Heart, CheckCircle } from 'lucide-react';

const solutions = [
  'Concrete Admixtures',
  'Surface Treatments',
  'Grouts',
  'Anchors',
  'Industrial Flooring',
  'Waterproofing',
  'Concrete Repairs',
  'Protective coatings',
  'Adhesives',
  'Joint Sealants',
  'Cement Grinding Aid'
];

const values = [
  {
    title: 'Safety',
    description: 'Civiltech Construction Chemicals LLP believes safety is paramount with respect to Civiltech Construction Chemicals LLP products and our interactions with customers.',
    icon: Shield,
    color: 'blue'
  },
  {
    title: 'Performance',
    description: 'Civiltech Construction Chemicals LLP delivers on our promises to customers and delights in exceeding their expectations.',
    icon: Award,
    color: 'green'
  },
  {
    title: 'Respect',
    description: 'Civiltech Construction Chemicals LLP works closely with our customers from many diverse backgrounds and respects different beliefs.',
    icon: Users,
    color: 'purple'
  },
  {
    title: 'Mutual Trust',
    description: 'Civiltech Construction Chemicals LLP believes in open, long-term relationships delivering mutual value',
    icon: Handshake,
    color: 'orange'
  },
  {
    title: 'Passion',
    description: 'We are proud of our heritage, and we want to deliver future success via our customers\' successes.',
    icon: Heart,
    color: 'red'
  }
];

export function AboutUs() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="mb-6 text-white text-4xl sm:text-6xl font-black tracking-tighter leading-none">About Civiltech</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed font-medium">
              A leader in high-performance construction chemicals, delivering complete constructive solutions for the industry's most challenging projects.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Our Legacy
              </div>
              <h2 className="text-foreground text-4xl font-black mb-8 tracking-tight">Precision & Performance</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Civiltech Construction Chemicals LLP is a premier manufacturer of high-performance construction chemicals based in Kondapur, Hyderabad, India. We are dedicated to delivering innovative structural solutions and technical expertise to the Indian construction industry.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                We have state-of-the-art manufacturing facilities supported by a nationwide network of experts and laboratories.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1680595848057-66631ee6fd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMHBsYW50fGVufDF8fHx8MTc2NTg4MzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manufacturing Plant"
                  className="h-72 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative group mt-0 sm:mt-12 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628863353691-0071c8c1874c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjB0ZXN0aW5nfGVufDF8fHx8MTc2NTg4MzQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laboratory"
                  className="h-72 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Capabilities
            </div>
            <h2 className="text-foreground text-4xl font-black mb-6 tracking-tight">Constructive Solutions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Our tailored solutions combine extensive product ranges with technical expertise to meet the highest industry standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-center gap-4 bg-card p-5 rounded-2xl shadow-sm border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <span className="text-foreground font-bold tracking-tight">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-black mb-4 tracking-tight">Global Reach</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto uppercase tracking-widest font-bold">
              Present in 25+ countries, exporting innovation worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-auto lg:h-[600px] w-full">
              <img
                src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTc5MjY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global Reach"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]"
              />
              <div className="absolute bottom-10 right-10 bg-green-600 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                <p className="text-5xl font-black mb-1">25+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Countries Served</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
              <h3 className="text-white text-xl font-black mb-10 uppercase tracking-widest border-b border-green-500 pb-4 inline-block">Corporate Office</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-widest mb-2">Office Address</p>
                    <p className="text-white/70 leading-relaxed font-medium">
                       Kondapur Hyderabad, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-white text-lg font-black">+91 40 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-white text-lg font-black">india@civiltech.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Foundations
            </div>
            <h2 className="text-foreground text-4xl font-black mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Great construction requires solid foundations. We've built our business on these rock-solid values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              const colorClasses = {
                blue: 'bg-primary/10 text-primary',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
                red: 'bg-red-100 text-red-600'
              };

              return (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className={`inline-flex p-6 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 ${colorClasses[value.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-foreground font-black text-2xl mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical CTA Section */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 sm:p-20 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
            <h2 className="text-white text-3xl sm:text-5xl font-black mb-8 tracking-tighter leading-none">Technical Documentation</h2>
            <p className="text-white/70 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Access our comprehensive library of product technical data sheets and industrial application guides.
            </p>
            <button className="bg-white text-primary hover:bg-green-600 hover:text-white px-10 py-5 rounded-2xl transition-all duration-300 inline-flex items-center gap-4 font-black uppercase tracking-widest shadow-xl transform hover:scale-105">
              <span>Download Brochures</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
