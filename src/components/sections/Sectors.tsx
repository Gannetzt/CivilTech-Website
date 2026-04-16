import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const sectors = [
  {
    id: 'airports',
    title: 'Airports',
    description: 'Our turnkey construction and maintenance solutions are used by some of the biggest airports, from terminal to runway.',
    image: 'https://images.unsplash.com/photo-1563805832691-1e597ad11777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY1Nzk2MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'buildings',
    title: 'Buildings',
    description: 'High performance admixtures, seals, grouts and waterproofing solutions for every stage of a building\'s life-cycle.',
    image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU3MDIwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'cement',
    title: 'Cement',
    description: 'We offer recognised expertise in adapting chemical technology to specific applications, from construction to decommissioning.',
    image: 'https://images.unsplash.com/photo-1666219462105-2909c2d72d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1lbnQlMjBmYWN0b3J5JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjU3OTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'chemical-process',
    title: 'Chemical & Process',
    description: 'We have extensive experience in providing robust chemical and process structure solutions, increasingly including industrial and process plant infrastructure.',
    image: 'https://images.unsplash.com/photo-1571322270931-4202f63500a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMHBsYW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjU3OTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'concrete',
    title: 'Concrete',
    description: 'From high range water reducers to slump retention and accelerating solutions, Civiltech Construction Chemicals LLP concrete admixtures help to modify and improve the properties of fresh and hardened concrete or mortar.',
    image: 'https://images.unsplash.com/photo-1685464196339-46a985b2049b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY1Nzk2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'dam',
    title: 'Dam',
    description: 'Our range of products and solutions for new construction of Dams as well for repair and rehabilitation will enhance the life of structure far beyond.',
    image: 'https://images.unsplash.com/photo-1686276920108-b779380d3d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb2VsZWN0cmljJTIwZGFtJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2NTc5NjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'defence',
    title: 'Defence',
    description: 'You will find complete solutions for defence Civil engineering and Infra structures. Our flooring solutions for Hangars floors do protect for high wear and tear for jet movements.',
    image: 'https://images.unsplash.com/photo-1637252211698-7d524345d4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMGRlZmVuc2UlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjU3OTYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'industrial',
    title: 'Industrial',
    description: 'Our expertise lies in identifying the correct chemical technology for industrial structure solutions, from initial construction to decommissioning.',
    image: 'https://images.unsplash.com/photo-1560953981-28e3bab4aab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjU3OTYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'marine-and-ports',
    title: 'Marine and Ports',
    description: 'We strengthen, protect and waterproof marine installations and infrastructure even in extreme temperatures and conditions.',
    image: 'https://images.unsplash.com/photo-1547081835-6ad9428582f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBwb3J0JTIwaGFyYm9yfGVufDF8fHx8MTc2NTc5NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    description: 'We offer regulatory-compliant internal and external corrosion protection for both onshore and offshore oil and gas applications.',
    image: 'https://images.unsplash.com/photo-1669484417691-7a04f1239678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeXxlbnwxfHx8fDE3NjU3OTYxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'power',
    title: 'Power - Wind, Nuclear, Thermal and Hydro',
    description: 'Our products help power and utility structures perform for decades under the harshest environmental conditions.',
    image: 'https://images.unsplash.com/photo-1692631204791-03d33e3084ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHBvd2VyfGVufDF8fHx8MTc2NTc5NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'rail',
    title: 'Rail',
    description: 'You\'ll find our rail infrastructure solutions in key infrastructure projects, serving major transit networks.',
    image: 'https://images.unsplash.com/photo-1764021714060-bc6f748f721f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhaW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjU3OTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'roads-and-bridges',
    title: 'Roads and Bridges',
    description: 'Extend performance and improve repair times for roads, motorways and bridges with our comprehensive product range.',
    image: 'https://images.unsplash.com/photo-1726733725435-29fde25a5892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYnJpZGdlJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY1NzMxMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'tunnel',
    title: 'Tunnel',
    description: 'Our range of products and solutions will help build tunnels at a faster pace with fast setting admixtures, water proofing membranes and many more.',
    image: 'https://images.unsplash.com/photo-1761069234641-3a68266c4740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5uZWwlMjBjb25zdHJ1Y3Rpb24lMjB1bmRlcmdyb3VuZHxlbnwxfHx8fDE3NjU3OTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'water',
    title: 'Water',
    description: 'We help waterproof and protect structures against chemical attacks, joint-leaks, cracks and surface corrosion.',
    image: 'https://images.unsplash.com/photo-1705708551758-76b153fa536e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc2NTc4MDY4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Sectors() {
  const navigate = useNavigate();
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="sectors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-blue-950 mb-4 font-bold text-3xl sm:text-4xl lg:text-5xl">Sectors</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Specialized construction chemical solutions across diverse industries and infrastructure sectors
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg sm:text-xl font-bold">
                  {sector.title}
                </h3>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {sector.description}
                </p>
                <button
                  onClick={() => { navigate(`/sectors/${sector.id}`); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="flex items-center gap-2 text-blue-900 font-bold hover:text-green-600 transition-all group-hover:gap-3 text-sm"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Online Brochures Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-600 rounded-2xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-4 relative z-10 font-bold">Online Brochures</h2>
          <p className="text-blue-50 text-base sm:text-lg mb-8 max-w-2xl mx-auto relative z-10 opacity-90 leading-relaxed">
            Delivering exceptional products across India. Download our latest technical guides and product catalogs.
          </p>
          <button
            onClick={() => window.open('/assets/Brochures/Civil Tech Catalogue.pdf', '_blank')}
            className="bg-white hover:bg-green-500 hover:text-white text-blue-900 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 font-bold shadow-lg hover:shadow-green-500/20 relative z-10 text-sm sm:text-base"
          >
            View All Brochures
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
