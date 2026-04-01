import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle, Wrench, TrendingUp, FileText, ChevronRight, Download, Mail, Package } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { productsData } from '../data/products';

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-center p-8 transition-colors duration-300">
        <SEO title="Product Not Found" description="The requested product could not be found." />
        <div className="max-w-md">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-black text-foreground mb-4 tracking-tighter">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-xl"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <SEO 
        title={product.name} 
        description={product.description} 
        keywords={`${product.name}, ${product.categoryName}, Construction Chemicals, Civiltech`}
        url={`https://civiltechchemicals.com/products/${product.id}`}
        image={product.image}
      />
      {/* Dynamic Header */}
      <div className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <button
            onClick={() => navigate('/products?category=' + product.category)}
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-white mb-8 transition-colors group text-sm font-bold uppercase tracking-[0.2em]"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            {product.categoryName}
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl opacity-80 font-medium leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              <button className="bg-white text-primary hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group">
                <span>Request Quote</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => product.tdsUrl && window.open(product.tdsUrl, '_blank')}
                className="bg-primary/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3"
              >
                <Download className="w-4 h-4" />
                <span>Technical Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Visual Overview */}
            <div className="relative group/image overflow-hidden rounded-[3rem] shadow-2xl bg-secondary border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Core Features & Advantages */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-[2.5rem] p-10 border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-6 tracking-tight">Key Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 group-hover/item:scale-150 transition-transform" />
                      <span className="text-muted-foreground font-medium leading-relaxed group-hover/item:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-[2.5rem] p-10 border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-6 tracking-tight">Project Advantages</h2>
                <ul className="space-y-4">
                  {product.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-green-500 group-hover/item:scale-150 transition-all" />
                      <span className="text-muted-foreground font-medium leading-relaxed group-hover/item:text-foreground transition-colors">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Usage & Applications */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-[2.5rem] p-10 border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                  <Wrench className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-6 tracking-tight">Mixing & Usage</h2>
                <ul className="space-y-4">
                  {product.usage.map((use, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                      <span className="text-primary font-black opacity-40">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-muted-foreground font-medium leading-relaxed">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-[2.5rem] p-10 border border-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                  <FileText className="w-7 h-7 text-purple-600" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-6 tracking-tight">Target Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <span key={index} className="px-5 py-2.5 bg-secondary rounded-full text-sm font-bold text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-default">
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Sidebar Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
            
            {/* Technical Specifications Card */}
            <div className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
              <div className="bg-secondary/50 px-8 py-6 border-b border-border">
                <h3 className="text-xl font-black text-foreground tracking-tight">Technical Data</h3>
              </div>
              <div className="p-8 space-y-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-col gap-1 pb-4 border-b border-border/50 last:border-0 last:pb-0 group/spec">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover/spec:text-primary transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-foreground font-black group-hover/spec:translate-x-1 transition-transform inline-block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-primary/5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  * All specifications are typical values based on industrial laboratory standards and may vary under on-site conditions.
                </p>
              </div>
            </div>

            {/* Support CTA */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all" />
              <h3 className="text-2xl font-black mb-4 tracking-tight leading-none">Need Technical Support?</h3>
              <p className="opacity-70 text-sm font-medium mb-8 leading-relaxed">
                Our engineering team provides specialized consultations for high-scale structural projects.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-primary hover:bg-green-600 hover:text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
