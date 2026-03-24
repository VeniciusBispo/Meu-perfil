import Section from '../common/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Layout, Server, Database, Settings, Terminal } from 'lucide-react';

const iconMap = {
  "Linguagens": Code2,
  "Frontend": Layout,
  "Backend": Server,
  "Banco de Dados": Database,
  "Ferramentas": Settings,
  "Outros Conhecimentos": Terminal
};

const Skills = () => {
  return (
    <Section id="habilidades">
      <div className="mb-24">
        <h2 className="section-title">Habilidades <br /> & <span className="text-accent italic">Stack</span></h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {portfolioData.skills.map((skillGroup, idx) => {
          const Icon = iconMap[skillGroup.category] || Settings;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[var(--color-surface)] p-10 md:p-12 rounded-[var(--radius-xl)] border border-[var(--color-border)] premium-shadow group relative"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[60px] -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="mb-10">
                <div className="w-16 h-16 bg-accent/10 rounded-[var(--radius-lg)] flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,209,255,0)] group-hover:shadow-[0_0_30px_rgba(0,209,255,0.3)]">
                  <Icon size={28} />
                </div>
                <h3 className="text-[var(--text-h3)] font-[var(--weight-black)] tracking-tight text-white mb-2 leading-tight">
                  {skillGroup.category}
                </h3>
                <p className="text-[var(--text-tiny)] font-[var(--weight-black)] text-accent/50 uppercase tracking-[0.2em]">Tecnologias Core</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-[var(--radius-md)] text-[var(--text-small)] font-[var(--weight-black)] text-[var(--color-text-dim)] transition-all group-hover:text-white group-hover:border-accent/40 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
