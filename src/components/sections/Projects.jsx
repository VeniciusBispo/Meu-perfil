import Section from '../common/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Github, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projetos">
      <div className="mb-24">
        <h2 className="section-title">Trabalho <br /> & <span className="text-accent italic">Soluções</span></h2>
        <p className="text-[var(--text-body)] text-[var(--color-text-dim)] max-w-xl font-[var(--weight-medium)] leading-relaxed">
          Projetos selecionados que demonstram expertise em arquitetura, segurança e performance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-[var(--space-64)] md:gap-[var(--space-80)]">
        {portfolioData.projects.map((project) => (
          <motion.div 
            key={project.id} 
            whileHover={{ y: -10, scale: 1.01 }}
            className="group relative bg-[var(--color-surface)] p-10 md:p-12 transition-all duration-500 rounded-[var(--radius-xl)] border border-[var(--color-border)] hover:border-accent/10 premium-shadow flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[120px] -mr-40 -mt-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Massive Mockup / Thumb */}
            <div className="aspect-video bg-white/[0.03] rounded-[var(--radius-lg)] border border-[var(--color-border)] mb-12 overflow-hidden relative group-hover:border-accent/20 transition-all duration-700 shadow-inner">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute top-6 left-6">
                 <span className="px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[var(--text-tiny)] font-[var(--weight-black)] uppercase tracking-[0.2em] text-accent">
                   {project.category}
                 </span>
               </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-[var(--text-h3)] font-[var(--weight-black)] mb-8 tracking-tight text-white group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <AlertCircle size={20} className="text-red-500/50 shrink-0 mt-1" />
                  <p className="text-[var(--color-text-dim)] text-[var(--text-small)] font-[var(--weight-medium)] leading-relaxed">
                    <span className="text-white/60 block mb-1 font-[var(--weight-black)] tracking-tight uppercase tracking-widest text-[var(--text-tiny)]">O Problema</span>
                    {project.problem}
                  </p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={20} className="text-accent/50 shrink-0 mt-1" />
                  <p className="text-[var(--color-text-dim)] text-[var(--text-small)] font-[var(--weight-medium)] leading-relaxed">
                    <span className="text-white/60 block mb-1 font-[var(--weight-black)] tracking-tight uppercase tracking-widest text-[var(--text-tiny)]">O Impacto</span>
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-16">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/[0.02] rounded-[var(--radius-sm)] text-[var(--text-tiny)] font-[var(--weight-black)] text-white/30 border border-white/5 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-6 pt-10 border-t border-white/5">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="flex-1 flex items-center justify-center gap-3 py-5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] hover:bg-white/5 transition-all font-[var(--weight-black)] text-[var(--text-tiny)] uppercase tracking-widest text-[var(--color-text-dim)] hover:text-white"
                >
                  <Github size={18} /> Código
                </a>
                <a 
                  href={project.link} 
                  className="flex-1 flex items-center justify-center gap-3 py-5 bg-white text-black rounded-[var(--radius-md)] hover:bg-accent hover:text-white transition-all font-[var(--weight-black)] text-[var(--text-tiny)] uppercase tracking-widest shadow-2xl"
                >
                  <ExternalLink size={18} /> Ver Projeto
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
