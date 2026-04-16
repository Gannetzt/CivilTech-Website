import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Tag, Building2, PlayCircle, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projects';
import { SEO } from '../components/seo/SEO';
import { LogoBadge } from '../components/ui/LogoBadge';
import { useState } from 'react';

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === projectId);
  const [activeMedia, setActiveMedia] = useState<'image' | 'video'>('image');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline font-bold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const mediaItems = [
    { type: 'image', src: project.image },
    ...(project.image2 ? [{ type: 'image', src: project.image2 }] : []),
    ...(project.image3 ? [{ type: 'image', src: project.image3 }] : []),
    ...(project.video ? [{ type: 'video', src: project.video }] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${project.title} - Project Details`}
        description={project.description}
        url={`https://civiltechchemicals.com/projects/${project.id}`}
      />

      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-bold uppercase tracking-widest text-xs">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="font-bold uppercase tracking-widest text-xs">{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-secondary shadow-2xl border border-border">
              {project.video && activeMedia === 'video' ? (
                <video 
                  src={project.video} 
                  controls 
                  className="w-full h-full object-cover"
                  autoPlay
                />
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              )}
              <LogoBadge size="sm" className="top-6 left-6" />
            </div>

            {/* Thumbnails/Switchers */}
            <div className="flex gap-4">
              {mediaItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMedia(item.type as any)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    (item.type === 'video' && activeMedia === 'video') || (idx === 0 && activeMedia === 'image')
                      ? 'border-primary' 
                      : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <img src={project.image} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    {item.type === 'video' ? <PlayCircle className="w-8 h-8 text-white" /> : <ImageIcon className="w-6 h-6 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Project Info */}
          <div className="space-y-12">
            <div className="bg-card border border-border rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Building2 className="w-6 h-6" />
                  <span className="text-xs font-black uppercase tracking-[0.2em]">Project Overview</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Implementation</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  {project.description}
                </p>

                <div className="mt-10 pt-10 border-t border-border space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-2">Sector</p>
                    <p className="text-lg font-bold text-foreground">{project.sector || 'Construction'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-2">Key Solution</p>
                    <p className="text-lg font-bold text-foreground">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Widget */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-primary-foreground text-center space-y-6 shadow-xl shadow-primary/20">
              <h3 className="text-2xl font-bold">Interested in similar results?</h3>
              <p className="opacity-80 font-medium">Get in touch with our technical experts for a personalized solution.</p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-primary hover:bg-green-50 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
