import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { ArrowLeft, ArrowRight, Package, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { productsData } from '../data/products';
import tilingImage from '../assets/products/tiling_category_banner.png';
import waterproofingImage from '../assets/products/waterproofing_category_banner.png';
import sealantsImage from '../assets/products/sealants_category_banner.png';
import concreteImage from '../assets/products/concrete_category_banner.png';
import flooringImage from '../assets/products/flooring_category_banner.png';
import waterproofingExplanatory from '../assets/products/waterproofing_explanatory.png';
import { LogoBadge } from '../components/ui/LogoBadge';

interface ProductCategory {
  id: string;
  name: string;
  count: number;
  image: string;
  description: string;
}

const categories: ProductCategory[] = [
  {
    id: 'waterproofing',
    name: 'Waterproofing Coatings',
    count: 7,
    description: 'High-performance specialized coating solutions',
    image: waterproofingImage
  },
  {
    id: 'sealants',
    name: 'Expansion Joints / Sealants',
    count: 7,
    description: 'High-performance sealing solutions for joints',
    image: sealantsImage
  },
  {
    id: 'concrete',
    name: 'Concrete Aids',
    count: 6,
    description: 'Essential additives for superior concrete performance',
    image: concreteImage
  },
  {
    id: 'flooring',
    name: 'Protection Compounds / Flooring Products',
    count: 6,
    description: 'Durable flooring solutions for industrial applications',
    image: flooringImage
  },
  {
    id: 'tiling',
    name: 'Tiling, Adhesives & Repairing Compounds',
    count: 11,
    description: 'Professional grade adhesives and repair solutions',
    image: tilingImage
  }
];

const heroSlides = [
  {
    id: 1,
    title: 'Construction Solutions',
    subtitle: 'Advanced chemicals for modern infrastructure',
    image: waterproofingExplanatory
  },
  {
    id: 2,
    title: 'Industrial Flooring',
    subtitle: 'High-performance epoxy and coating systems',
    image: flooringImage
  },
  {
    id: 3,
    title: 'Waterproofing Systems',
    subtitle: 'Complete protection against water ingress',
    image: sealantsImage
  }
];

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedCategory = searchParams.get('category');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const filteredProducts = selectedCategory
    ? productsData.filter(p => p.category === selectedCategory)
    : [];

  const handleCategoryClick = (categoryId: string) => {
    setSearchParams({ category: categoryId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => setSearchParams({});
  const handleViewDetails = (productId: string) => navigate(`/products/${productId}`);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <SEO 
        title={selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Products & Solutions'}
        description={selectedCategory ? categories.find(c => c.id === selectedCategory)?.description : 'Explore our comprehensive range of high-performance construction chemicals including waterproofing matrices, joint sealants, concrete aids, and protection compounds.'}
        url={`https://civiltechchemicals.com/products${selectedCategory ? `?category=${selectedCategory}` : ''}`}
      />
      {!selectedCategory ? (
        <>
          {/* Modern Hero Section */}
          <div className="relative h-[60vh] overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <LogoBadge size="lg" className="top-8 left-8" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-4xl sm:text-6xl font-black mb-4 leading-none tracking-tighter">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl opacity-80 mb-8 max-w-lg font-medium">
                        {slide.subtitle}
                      </p>
                      <button 
                        onClick={() => handleCategoryClick('waterproofing')}
                        className="bg-white text-primary hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl"
                      >
                        Explore Solutions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Carousel Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 transition-all rounded-full ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Clean Categories Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                  Product Portfolio
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter leading-none">
                  Specialized Categories
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed">
                Engineered solutions for every construction challenge, from basement to rooftop.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="group relative bg-card rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden bg-secondary">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <LogoBadge size="sm" className="top-4 left-4" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20">
                      {category.count} Products
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest group-hover:text-green-600 transition-all group-hover:gap-5">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Enhanced Product Listing */
        <div className="bg-background min-h-screen pb-24">
          <div className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <button
                onClick={handleBackToCategories}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-white mb-8 transition-colors group text-sm font-bold uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                Back to Categories
              </button>
              
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h1>
                <p className="text-xl opacity-70 font-medium">
                  {categories.find(c => c.id === selectedCategory)?.description}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-4 mb-12 border-b border-border pb-6">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Showing {filteredProducts.length} high-performance products</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleViewDetails(product.id)}
                  className="group bg-card rounded-[2rem] overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden bg-secondary">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-[10px] font-black tracking-[0.2em] uppercase text-primary mb-3">
                        {product.categoryName}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    <button 
                      className="w-full bg-primary hover:bg-green-600 text-primary-foreground py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Product Details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
