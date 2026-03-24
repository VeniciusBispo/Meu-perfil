import Section from '../common/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experiencia">
      <div className="mb-24">
        <h2 className="section-title">Trajetória <br /> & <span className="text-accent italic">Impacto</span></h2>
      </div>

      <div className="grid gap-12 max-w-4xl mx-auto">
        {portfolioData.experience.map((exp, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ x: 10 }}
            className="group relative bg-[var(--color-surface)] p-12 md:p-16 rounded-[var(--radius-xl)] border border-[var(--color-border)] premium-shadow overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-[var(--radius-lg)] flex items-center justify-center text-accent">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-[var(--text-h3)] font-[var(--weight-black)] tracking-tight text-white">{exp.title}</h3>
                  <p className="text-accent font-[var(--weight-black)] text-[var(--text-small)] uppercase tracking-[0.2em]">{exp.company}</p>
                </div>
              </div>
              <span className="px-6 py-2 bg-white/5 rounded-full text-[var(--text-tiny)] font-[var(--weight-black)] text-white/40 border border-white/5 uppercase tracking-[0.3em]">
                {exp.period}
              </span>
            </div>

            <p className="text-[var(--text-body)] text-[var(--color-text-dim)] leading-[var(--leading-normal)] font-[var(--weight-medium)] max-w-3xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
