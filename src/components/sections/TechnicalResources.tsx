import { useState } from 'react';
import { FileText, Download, Search, ArrowLeft, ChevronRight, FileCheck, ShieldAlert, BookOpen, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ResourceCategory = {
  id: string;
  title: string;
  description: string;
  count: string;
  icon: any;
  color: string;
  bgIcon: string;
};

const categories: ResourceCategory[] = [
  {
    id: 'datasheets',
    title: 'Product Datasheets',
    description: 'Comprehensive technical specifications, brochures and performance data for all product lines.',
    count: '5 Documents',
    icon: FileCheck,
    color: 'text-blue-600',
    bgIcon: 'bg-blue-50'
  }
];

const mockDocuments = {
  datasheets: [
    { id: '1', name: 'Civil Tech Full Catalogue', size: '7.2 MB', version: '2025', date: 'Apr 2026', path: '/assets/Brochures/Civil Tech Catalogue.pdf' },
    { id: '2', name: 'All Products Documents', size: '11.2 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/All Products documents.pdf' },
    { id: '3', name: 'Civiltech Report (Dec 2025)', size: '80 KB', version: '1.0', date: 'Dec 2025', path: '/assets/Brochures/1828-12-2025 CIVILTECH Report.pdf' },
    { id: '4', name: 'PolyBond 2K TDS', size: '4.4 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Poly-Bond 2K Document.pdf' },
    { id: '5', name: 'PolyBond Flexicoat TDS', size: '3.7 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Polybond Flexicoat.pdf' },
    { id: '6', name: 'PolyBond SBR TDS', size: '2.3 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/POlybond SBR.pdf' },
    { id: '7', name: 'Galaxy MEP TDS', size: '3.4 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Galaxy MEP.pdf' },
    { id: '8', name: 'Galaxy Flexi Tape TDS', size: '2.8 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Galaxy Flexi Tape Document.pdf' },
    { id: '9', name: 'Trujoint Flexitape TDS', size: '2.8 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Trujoint Flexitape TDS.pdf' },
    { id: '10', name: 'Rockfix GP TDS', size: '1.7 MB', version: '1.0', date: 'Apr 2026', path: '/assets/Brochures/Rockfix GP.pdf' },
  ],
  guides: [
    { id: '1', name: 'Surface Preparation Guide', size: '4.2 MB', version: 'v5.0', date: 'Jan 2026', path: '#' },
    { id: '2', name: 'Concrete Repair Manual', size: '8.5 MB', version: 'v3.2', date: 'Feb 2026', path: '#' },
    { id: '3', name: 'Waterproofing Application Guide', size: '12 MB', version: 'v6.1', date: 'Oct 2025', path: '#' },
  ],
  sds: [
    { id: '1', name: 'SDS: Nitobond EP', size: '0.4 MB', version: '2026 Edition', date: 'Jan 2026', path: '#' },
    { id: '2', name: 'SDS: Conbextra HF', size: '0.4 MB', version: '2026 Edition', date: 'Feb 2026', path: '#' },
  ],
  casestudies: [
    { id: '1', name: 'Hyderabad Metro Infrastructure', size: '15 MB', version: 'Project Spotlight', date: '2024', path: '#' },
    { id: '2', name: 'Marine Terminal Restoration', size: '22 MB', version: 'Industrial Report', date: '2025', path: '#' },
  ]
};

export function TechnicalResources() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const documents = selectedCategory ? mockDocuments[selectedCategory as keyof typeof mockDocuments] : [];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-background transition-colors duration-300" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  Knowledge Hub
                </div>
                <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-6">Technical Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                  Access Civiltech's complete library of engineering specifications,
                  site manuals, and safety documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="group bg-card border border-border rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:border-green-500/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors"></div>

                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${category.bgIcon} dark:bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 relative z-10 group-hover:scale-110 transition-transform`}>
                      <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${category.color}`} />
                    </div>

                    <h3 className="text-card-foreground font-bold text-lg sm:text-xl mb-2 sm:mb-3 relative z-10">{category.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-6 leading-relaxed relative z-10">{category.description}</p>

                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-900/40 group-hover:text-green-600 transition-colors">
                        {category.count}
                      </span>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button
                  onClick={() => window.open('/assets/Brochures/Civil Tech Catalogue.pdf', '_blank')}
                  className="bg-primary hover:bg-green-600 text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-bold shadow-xl shadow-primary/20 text-sm sm:text-base transform hover:scale-105"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Full Product Catalog
                </button>
                {/* <button className="bg-background hover:bg-primary hover:text-white text-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-2xl border-2 border-border transition-all font-bold text-sm sm:text-base transform hover:scale-105">
                  Custom Resource Request
                </button> */}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-3 bg-secondary hover:bg-green-500 hover:text-white rounded-full transition-all group"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div>
                    <h2 className="text-foreground text-3xl font-bold">{currentCategory?.title}</h2>
                    <p className="text-muted-foreground">Showing all documents for {currentCategory?.title}</p>
                  </div>
                </div>

                {/* Search in Category */}
                <div className="relative max-w-sm w-full">
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all text-foreground"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 bg-secondary/30 px-8 py-4 border-b border-border text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <div className="col-span-6 md:col-span-5">Document Name</div>
                  <div className="hidden md:block col-span-2">Version</div>
                  <div className="hidden md:block col-span-2">Updated</div>
                  <div className="col-span-3 md:col-span-1 text-right">Size</div>
                  <div className="col-span-3 md:col-span-2 text-right">Actions</div>
                </div>

                <div className="divide-y divide-border">
                  {filteredDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="grid grid-cols-12 px-8 py-6 items-center hover:bg-primary/5 transition-colors group"
                    >
                      <div className="col-span-6 md:col-span-5 flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${currentCategory?.bgIcon} dark:bg-opacity-10 group-hover:scale-110 transition-transform`}>
                          <FileText className={`w-5 h-5 ${currentCategory?.color}`} />
                        </div>
                        <span className="text-card-foreground font-bold md:text-lg">{doc.name}</span>
                      </div>
                      <div className="hidden md:block col-span-2 text-muted-foreground text-sm font-medium">
                        {doc.version}
                      </div>
                      <div className="hidden md:block col-span-2 text-muted-foreground text-sm">
                        {doc.date}
                      </div>
                      <div className="col-span-3 md:col-span-1 text-right text-muted-foreground text-xs font-mono">
                        {doc.size}
                      </div>
                      <div className="col-span-3 md:col-span-2 flex justify-end items-center gap-3">
                        <button
                          onClick={() => doc.path !== '#' && window.open(doc.path, '_blank')}
                          className="p-2 text-foreground hover:text-green-600 transition-colors"
                          title="View PDF"
                        >
                          <BookOpen className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => doc.path !== '#' && window.open(doc.path, '_blank')}
                          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm"
                        >
                          <Download className="w-4 h-4" />
                          <span className="hidden sm:inline">Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredDocuments.length === 0 && (
                    <div className="py-20 text-center">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">No documents found matching "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
