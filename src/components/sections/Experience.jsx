import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experiencia" className="bg-white/[0.02]">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experiência & Trajetória</h2>
      
      <div className="max-w-3xl mx-auto">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 pb-12 border-l border-white/10 last:pb-0 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5 group-hover:border-accent/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-accent" />
                  {exp.title}
                </h3>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-xs font-bold text-accent whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-accent/80 font-medium mb-3">{exp.company}</p>
              <p className="text-white/60 leading-relaxed italic text-sm">
                "{exp.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
