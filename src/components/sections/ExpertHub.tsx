import { ArrowRight, Users, Beaker, FileText, TrendingUp, Wrench, GraduationCap } from 'lucide-react';

const expertiseAreas = [
  {
    title: 'Product Expertise',
    icon: Beaker,
    description: 'Highly experienced product specialists who provide complete solutions and answer queries related to products, their usage, and the right product selection.',
    color: 'blue'
  },
  {
    title: 'Concrete Expertise',
    icon: Wrench,
    description: 'A dedicated team of qualified and trained concrete technologists for mix design and on-site trial support to optimize the concrete mix and admixture dosage.',
    color: 'green'
  },
  {
    title: 'Specification Expertise',
    icon: FileText,
    description: 'A dedicated specification team of experts to directly liaise with consultants/opinion makers and offer support towards drawing the correct BOQ with materials fit for purpose.',
    color: 'purple'
  },
  {
    title: 'Technical Sales Expertise',
    icon: TrendingUp,
    description: 'Highly experienced sales managers for all your commercial needs in terms of pricing, supply schedule and on-time delivery.',
    color: 'orange'
  },
  {
    title: 'Technical Service Expertise',
    icon: Users,
    description: 'Application support managers for on-site application support, termination details, selecting the right application tools and equipment.',
    color: 'cyan'
  },
  {
    title: 'Training and CSR',
    icon: GraduationCap,
    description: 'Customised seminars covering range of solutions and training programs to small jobbers for skills enhancement under CSR activity.',
    color: 'pink'
  }
];

const stakeholders = [
  {
    title: 'Architect/Engineers',
    description: 'Civiltech Construction Chemicals LLP Specification team engages with both architects and engineers while the project is in design stage to understand specific performance requirements of the project and to provide right product solutions and to draw correct BOQ\'s.'
  },
  {
    title: 'Owner',
    description: 'Our team works closely with project owners to ensure their vision is realized with the highest quality materials and construction solutions tailored to their specific needs.'
  },
  {
    title: 'Contractor',
    description: 'We provide contractors with comprehensive support including product selection, application guidance, and on-site technical assistance to ensure successful project execution.'
  },
  {
    title: 'Applicators',
    description: 'Our experts offer hands-on training and application support to ensure proper installation techniques and optimal product performance on every project.'
  }
];

export function ExpertHub() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">Expert Hub</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Civiltech Construction Chemicals LLP team of experts are always at your service.
            </p>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-4">
              We would be happy to interact and liaise for all your construction chemical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Civiltech Construction Chemicals LLP is the world leader in delivering constructive solutions. Driven by our motto to provide optimized constructive solutions, our Expert Hub is designed to allow our customers to reach out to experts for specific requirements and get immediate solutions.
            </p>
          </div>

          {/* Expert Hub Comprises */}
          <div className="mt-16">
            <h2 className="text-center text-gray-900 mb-12">Our Expert Hub is comprised of:</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-800 leading-relaxed">
                  A dedicated specification team of experts to directly liaise with consultants/opinion makers and offer support towards drawing the correct BOQ with materials fit for purpose
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-gray-800 leading-relaxed">
                  A dedicated team of qualified and trained concrete technologists for mix design and on-site trial support to optimize the concrete mix and admixture dosage
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                <p className="text-gray-800 leading-relaxed">
                  Highly experienced product specialists who provide complete solutions and answer queries related to products, their usage, and the right product selection
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-gray-800 leading-relaxed">
                  Application support managers for on-site application support, termination details, selecting the right application tools and equipment, and providing product application method statements and do's and don'ts during and post application of products
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-l-4 border-cyan-600">
                <p className="text-gray-800 leading-relaxed">
                  Highly experienced sales managers for all your commercial needs in terms of pricing, supply schedule and on-time delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Start to Finish Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">From Start to Finish</h2>
            <p className="text-xl text-gray-600">
              Over 80 years of expertise in providing products and services to the construction industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-gray-900 mb-4">{stakeholder.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {stakeholder.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Civiltech Construction Chemicals LLP Specification Team further supports this process by issuing a bespoke specification document, including project-specific drawings and technical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Contact our team of experts for all your project needs.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200',
                cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
                pink: 'bg-pink-100 text-pink-600 border-pink-200'
              };

              return (
                <div
                  key={area.title}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-lg mb-6 ${colorClasses[area.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all group-hover:gap-3">
                    <span>View more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Support */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1754780960162-839cda44d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODE2OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-4">Design Support</h3>
                <p className="text-gray-600 mb-4">
                  Civiltech Construction Chemicals LLP team of experts will assist our customers with Design support for CFRP retrofitting.
                </p>
                <p className="text-gray-600 mb-6">
                  Design support for Lokfix Anchors and repair and rehabilitation of structures.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CAD Detailing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595843102703-96f6a6580cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQUQlMjBkZXNpZ24lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1ODgyNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CAD Detailing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-4">CAD Detailing</h3>
                <p className="text-gray-600 mb-6">
                  In addition to a library of standard details, customised CAD details can be created for specific projects by our CAD Department.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Training and Seminar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1759756480941-7230dedf5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NTg4MjcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Training and Seminar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-4">Training and Seminar</h3>
                <p className="text-gray-600 mb-6">
                  Civiltech Construction Chemicals LLP offers customised seminars covering range of solutions and sub sector offerings to our esteemed customers and also host training programs to small jobbers for skills enhancement under CSR activity.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Brochures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-12 text-center">
            <h2 className="text-white mb-4">Online Brochures</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Delivering exceptional products worldwide
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
              View All Brochures
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
