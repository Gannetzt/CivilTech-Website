import { Link } from 'react-router';
import { ArrowRight, Loader2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { api } from '../services/api';
import { ProjectDetail } from '../data/projects';
import { useState, useEffect } from 'react';

export function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <SEO 
        title="Our Projects" 
        description="Explore Civiltech's diverse portfolio of successful construction chemicals projects."
        url="https://civiltechchemicals.com/projects"
      />
      
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight uppercase">
                Our Portfolio of Excellence
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-blue-50 font-medium">
                Showcasing our track record across infrastructure, industrial, and commercial sectors nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Synchronizing database...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No projects listed at the moment.</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div 
                      key={project.id}
                      className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                            {project.sector || 'Project'}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl font-black text-blue-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors uppercase tracking-tight" title={project.title}>
                            {project.title}
                          </h3>
                          <p className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                            {project.location}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">
                          {project.description}
                        </p>
  
                        <div className="pt-6 border-t border-border mt-auto">
                          <Link 
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center gap-2 text-sm font-black text-blue-900 hover:text-green-600 transition-all group/link uppercase tracking-wider"
                          >
                            Explore Details
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
