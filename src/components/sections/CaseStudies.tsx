import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [

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
