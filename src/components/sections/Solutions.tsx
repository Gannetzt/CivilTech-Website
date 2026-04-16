import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const solutions = [
  {
    title: 'Adhesives',
    description: 'With world-class brands like Nitobond and Nitotile, we are a leading provider of adhesives for tiling and structural grade bonding.',
    image: 'https://images.unsplash.com/photo-1590501002411-4f83513b5c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWxlJTIwYWRoZXNpdmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY1Nzg1MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiling'
  },
  {
    title: 'Anchors',
    description: 'Our wide range of chemical anchors serve a variety of challenging needs in new construction and repair situations, designed to aid in-situ applications.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBhbmNob3IlMjBib2x0fGVufDF8fHx8MTc2NTc4NTIwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Cement Grinding Aid',
    description: 'Our additives can enhance cement quality, improve grinding efficiency, and reduce production costs.',
    image: 'https://images.unsplash.com/photo-1615990860014-99e51245218c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjU3ODE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Concrete Admixtures',
    description: 'Leaders in concrete admixtures – products to modify and improve the properties of fresh and hardened concrete or mortar.',
    image: 'https://images.unsplash.com/photo-1597476812043-ba0c00cae935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMG1peGluZ3xlbnwxfHx8fDE3NjU3ODUyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Concrete Repair',
    description: 'Our repair materials and protective systems can help prolong the life of structures way beyond their original design.',
    image: 'https://images.unsplash.com/photo-1570992532407-b71ca75b801e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGluZHVzdHJpYWwlMjBmbG9vcnxlbnwxfHx8fDE3NjU3ODE2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Grouts',
    description: 'Our wide range of cement and resin-based products to fill voids and resin-anchoring systems help strengthen and protect.',
    image: 'https://images.unsplash.com/photo-1519496494275-9cf6b3a4c276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBncm91dHxlbnwxfHx8fDE3NjU3ODUyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Industrial Flooring',
    description: 'With an unrivalled range of market leading flooring products, we deliver complete flooring solutions, from design to installation.',
    image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NzY1MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'flooring'
  },
  {
    title: 'Joint Sealants',
    description: 'Trust Civiltech Construction Chemicals LLP expert knowledge of joint design and sealant technology to help you choose the right product.',
    image: 'https://images.unsplash.com/photo-1628947723910-fb6bb6e5ce82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFsYW50JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2NTc4NTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'sealants'
  },
  {
    title: 'Protective Coatings',
    description: 'We deliver top-to-bottom protection with our superior protective coating technology, including world class brands Dekguard and Nitocote.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvYXRpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2NTc4NTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'waterproofing'
  },
  {
    title: 'Surface Treatments',
    description: 'Wide range of curing compounds and shutter release agents are manufactured to the highest quality standards to meet all the challenges to construction industry.',
    image: 'https://images.unsplash.com/photo-1722079358008-2c72a8973998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjU3ODAxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'concrete'
  },
  {
    title: 'Waterproofing',
    description: 'Civiltech Construction Chemicals LLP delivers a full range of world-class waterproofing systems from basement to roof, including waterproof membranes and waterstops.',
    image: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1NzgxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'waterproofing'
  }
];

export function Solutions() {
  const navigate = useNavigate();
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">Solutions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive construction chemical solutions designed to meet the diverse needs of modern construction projects
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg sm:text-xl font-bold">
                  {solution.title}
                </h3>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {solution.description}
                </p>
                <button
                  onClick={() => { navigate(`/products?category=${solution.category}`); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="flex items-center gap-2 text-blue-900 font-bold hover:text-green-600 transition-all group-hover:gap-3 text-sm"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
