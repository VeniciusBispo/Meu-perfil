import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experiencia" className="py-32 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter text-center">Trajetória Profissional</h2>
        
        <div className="space-y-4">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-12 pb-16 last:pb-0 group">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-0 w-[2px] h-full bg-white/5 group-last:h-8" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-accent bg-[#0a0a0a] z-10 group-hover:bg-accent transition-colors shadow-[0_0_15px_rgba(0,209,255,0.3)]" />
              
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1 flex items-center gap-3">
                      <Briefcase size={22} className="text-accent/50" />
                      {exp.title}
                    </h3>
                    <p className="text-accent font-bold tracking-tight">{exp.company}</p>
                  </div>
                  <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black text-white/40 uppercase tracking-widest h-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-white/50 text-lg leading-relaxed font-medium italic">
                  "{exp.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
