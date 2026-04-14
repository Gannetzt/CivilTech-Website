import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Adani Shantigram',
    location: 'India',
    description: 'Adani Group is an $8.7 billion (2013), 10,000+ employee, diversified conglomerate with interests in ports, real estate, special economic zones, power generation, and oil and gas exploration and distribution.',
    image: 'https://images.unsplash.com/photo-1667375887091-2237f31fa92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwSW5kaWF8ZW58MXx8fHwxNzY1ODgyMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Buildings',
    solution: 'Waterproofing'
  },
  {
    title: 'Air Force Academy',
    location: 'India',
    description: 'Air Force Hangars with Fosroc static dissipative flooring system.',
    image: 'https://images.unsplash.com/photo-1571406172996-99dcf29b2f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMGhhbmdhciUyMGZsb29yfGVufDF8fHx8MTc2NTg4MjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Defence',
    solution: 'Industrial Flooring'
  },
  {
    title: 'Almatti Dam',
    location: 'India',
    description: 'The project involved Almatti Dam repair work to increase the height of the dam and increase the water storage capacity, as well as to stop the water seepage from the body of the dam and make the body of the dam leakage proof.',
    image: 'https://images.unsplash.com/photo-1541008022357-e6195d1af8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGRhbSUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NjU4ODIyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Dam',
    solution: 'Concrete Repair'
  },
  {
    title: 'Amazon IT Park',
    location: 'India',
    description: 'Amazon IT Park were looking for a durable and aesthetically pleasing car park deck coating system for their IT Park basement floor parking garage.',
    image: 'https://images.unsplash.com/photo-1649886962584-f8c88b3bf918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwZ2FyYWdlJTIwYmFzZW1lbnR8ZW58MXx8fHwxNzY1ODgyMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Industrial',
    solution: 'Protective Coatings'
  },
  {
    title: 'Aparna Zenith',
    location: 'India',
    description: 'Aparna Zenith Located in close proximity to the IT hub / financial district in Hyderabad at Gachibowli, Nallagandla,. It is a gated community of high end residential apartments.',
    image: 'https://images.unsplash.com/photo-1621919200669-2779566a6eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU4NDY0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Buildings',
    solution: 'Waterproofing'
  },
  {
    title: 'Aurobindo Galaxy',
    location: 'India',
    description: 'Aurobindo Galaxy, a magnificent 25 storied commercial building, 105 metres tall has a beautiful structural glass façade, with a fresh looking design. Galaxy is the tallest commercial office tower in Hyderabad, India is built with precast technology.',
    image: 'https://images.unsplash.com/photo-1651331189285-64ef5906d6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0b3dlcnxlbnwxfHx8fDE3NjU4Mjc4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Buildings',
    solution: 'Concrete Admixtures'
  },
  {
    title: 'Ayanna IT Park',
    location: 'India',
    description: 'Ayanna IT Park is located in Kondapur, Hyderabad and offers 450.000 sq. ft. of commercial space.',
    image: 'https://images.unsplash.com/photo-1722718902732-e45eac8d3d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwSVQlMjBwYXJrfGVufDF8fHx8MTc2NTg4MjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Buildings',
    solution: 'Industrial Flooring'
  },
  {
    title: 'Bangalore Metro Station Building',
    location: 'India',
    description: 'The Bangalore Metro Rail Project – Phase 2 involves the construction of an underground structure, approx. 2.8 km in length, from Shivajinagar Station to Tannery Road Station.',
    image: 'https://images.unsplash.com/photo-1665809544649-c389c3209976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRybyUyMHN0YXRpb24lMjB1bmRlcmdyb3VuZHxlbnwxfHx8fDE3NjU4ODIyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Rail',
    solution: 'Waterproofing'
  },
  {
    title: 'Bekaert Industries',
    location: 'India',
    description: 'Bekaert is a steel wire manufacturing company located at Pune. They were looking for a tough and durable floor in their warehousing area that can withstand continuous trolley movement, impact and abrasion.',
    image: 'https://images.unsplash.com/photo-1761034278174-bf8d69530182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwZmxvb3J8ZW58MXx8fHwxNzY1ODgyMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sector: 'Industrial',
    solution: 'Industrial Flooring'
  },
  {
    title: 'Inorbit Mall',
    location: 'Hyderabad',
    description: 'Waterproofing and protective coating solutions implemented at Inorbit Mall, Hyderabad to ensure structural integrity and long-term protection against environmental factors.',
    image: '/assets/casestudies/inorbit-mall-hyderabad.jpg',
    sector: 'Buildings',
    solution: 'Waterproofing'
  }
];

const sectors = ['All Sectors', 'Buildings', 'Defence', 'Dam', 'Industrial', 'Rail'];
const solutions = ['All Solutions', 'Waterproofing', 'Industrial Flooring', 'Concrete Repair', 'Protective Coatings', 'Concrete Admixtures'];

export function CaseStudies() {
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedSolution, setSelectedSolution] = useState('All Solutions');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter case studies
  const filteredCaseStudies = caseStudies.filter((study) => {
    const sectorMatch = selectedSector === 'All Sectors' || study.sector === selectedSector;
    const solutionMatch = selectedSolution === 'All Solutions' || study.solution === selectedSolution;
    return sectorMatch && solutionMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">Case Studies</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Discover how Civiltech Construction Chemicals LLP solutions have been successfully implemented in projects across India
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h3 className="text-gray-900">Filter</h3>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex-1 md:w-64">
                <label className="block text-gray-700 text-sm mb-2">Sector</label>
                <select
                  value={selectedSector}
                  onChange={(e) => {
                    setSelectedSector(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 md:w-64">
                <label className="block text-gray-700 text-sm mb-2">Solution</label>
                <select
                  value={selectedSolution}
                  onChange={(e) => {
                    setSelectedSolution(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {solutions.map((solution) => (
                    <option key={solution} value={solution}>
                      {solution}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentCaseStudies.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentCaseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white mb-1">{study.title}, {study.location}</h3>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                            {study.sector}
                          </span>
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                            {study.solution}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {study.description}
                      </p>
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all group-hover:gap-3">
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            currentPage === pageNumber
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return <span key={pageNumber} className="px-2">...</span>;
                    }
                    return null;
                  })}

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No case studies found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedSector('All Sectors');
                  setSelectedSolution('All Solutions');
                  setCurrentPage(1);
                }}
                className="mt-4 text-blue-600 hover:text-blue-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Online Brochures Section */}
      <section className="py-20 bg-gray-50">
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
