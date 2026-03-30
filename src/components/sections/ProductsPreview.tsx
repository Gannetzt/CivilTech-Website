import { useNavigate } from 'react-router';
import { Search, ArrowRight } from 'lucide-react';
import tilingImage from '../../assets/products/tiling.png';
import waterproofingImage from '../../assets/products/waterproofing.png';
import groutsImage from '../../assets/products/Grouts And Anchors.jpg';
import protectiveImage from '../../assets/products/Protective Coatings 1.jpg';
import exteriorImage from '../../assets/products/Exterior Protective Paints.jpg';

const categories = [
  {
    id: 'waterproofing',
    title: 'Waterproofing Coatings',
    count: 7,
    image: waterproofingImage
  },
  {
    id: 'sealants',
    title: 'Expansion Joints / Sealants',
    count: 7,
    image: groutsImage
  },
  {
    id: 'concrete',
    title: 'Concrete Aids',
    count: 6,
    image: exteriorImage
  },
  {
    id: 'flooring',
    title: 'Protection Compounds / Flooring Products',
    count: 6,
    image: protectiveImage
  },
  {
    id: 'tiling',
    title: 'Tiling, Adhesives & Repairing Compounds',
    count: 10,
    image: tilingImage
  }
];

export function ProductsPreview() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <section className="py-24 bg-background transition-colors duration-300" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Product Portfolio
          </div>
          <h2 className="text-foreground text-4xl lg:text-5xl font-bold mb-6">Explore Our Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From heavy-duty waterproofing to precision tiling adhesives, discover 
            solutions built for performance.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={`${category.id}-${index}`}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-border"
            >
              {/* Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-secondary">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay with Primary Color */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-card rounded-2xl flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-green-600 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-primary/60 group-hover:text-green-600 transition-colors">
                    {category.count} Products
                  </span>
                  <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse group-hover:bg-green-500 transition-colors"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {category.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary/40 group-hover:text-green-600 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/products')}
            className="bg-primary hover:bg-green-600 text-primary-foreground px-12 py-5 rounded-2xl transition-all duration-300 font-bold shadow-xl shadow-primary/20 transform hover:scale-105"
          >
            Explore Complete Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
