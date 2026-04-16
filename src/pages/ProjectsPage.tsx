import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { projectsData } from '../data/projects';

export function ProjectsPage() {
  return (
    <>
      <SEO 
        title="Our Projects" 
        description="Explore Civiltech's diverse portfolio of successful construction chemicals projects."
        url="https://civiltechchemicals.com/projects"
      />
      
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/90">
                Discover our track record of delivering excellence in construction chemical solutions across varied infrastructure projects.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                      {project.sector}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-card-foreground mb-2 line-clamp-2" title={project.title}>
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-border mt-auto">
                      <Link 
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-green-600 transition-colors group/link"
                      >
                        View Project Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
