import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Github, ExternalLink, Zap } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projetos" className="py-32">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Projetos em Foco</h2>
          <p className="text-white/40 max-w-xl font-medium">Desenvolvendo soluções reais com foco em performance e experiência de usuário.</p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-white/5 mb-8 mx-12"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {portfolioData.projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-[#111] border border-white/5 rounded-[3rem] p-10 flex flex-col hover:border-accent/20 transition-all h-full"
          >
            {/* Visual Header */}
            <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden">
               <Zap size={64} className="text-white/5 group-hover:text-accent/20 transition-all group-hover:scale-125" />
               <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50"></div>
               </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
              
              <p className="text-white/50 mb-8 font-medium line-clamp-3">
                {project.solution}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.slice(0, 4).map((t, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-white/40 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 pt-6 border-t border-white/5">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all font-black text-sm"
                >
                  <Github size={18} /> Código
                </a>
                <a 
                  href={project.link} 
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-black rounded-2xl hover:bg-white transition-all font-black text-sm shadow-[0_4px_20px_rgba(0,209,255,0.2)]"
                >
                  <ExternalLink size={18} /> Demo
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
