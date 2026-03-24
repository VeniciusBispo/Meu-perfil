import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Github, ExternalLink, Puzzle } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projetos">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
        <p className="text-white/60">Soluções reais para problemas reais. Focado em impacto e código limpo.</p>
      </div>

      <div className="space-y-24">
        {portfolioData.projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            {/* Project Image/Visual */}
            <div className="w-full md:w-1/2 aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Puzzle size={80} className="text-white/5 group-hover:text-accent/20 transition-all group-hover:scale-110" />
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-md rounded-full text-xs font-mono text-accent border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-white">{project.title}</h3>
              
              <div className="space-y-6 mb-8 text-white/70">
                <div className="p-4 bg-white/5 border-l-2 border-red-500/50 rounded-r-lg">
                  <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-1">O Problema</p>
                  <p>{project.problem}</p>
                </div>
                <div className="p-4 bg-white/5 border-l-2 border-emerald-500/50 rounded-r-lg">
                  <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-1">A Solução</p>
                  <p>{project.solution}</p>
                </div>
                <div className="p-4 bg-accent/5 border-l-2 border-accent/50 rounded-r-lg">
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Impacto & Resultado</p>
                  <p>{project.impact}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors text-sm font-bold"
                >
                  <Github size={18} /> Código
                </a>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 px-6 py-2 bg-accent text-[#0a0a0a] rounded-full hover:bg-accent/90 transition-colors text-sm font-bold"
                >
                  <ExternalLink size={18} /> Demo Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
