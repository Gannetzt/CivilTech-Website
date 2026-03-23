import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SectorsPage } from './pages/SectorsPage';
import { LokfixPage } from './pages/LokfixPage';
import { ToolsPage } from './pages/ToolsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ExpertHubPage } from './pages/ExpertHubPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ScrollToTop } from './components/layout/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden selection:bg-green-100 selection:text-green-900 bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/lokfix" element={<LokfixPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/expert-hub" element={<ExpertHubPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}