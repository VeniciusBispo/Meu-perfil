import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Code, Layers, Database, ShieldCheck, Cpu } from 'lucide-react';

const Skills = () => {
  const icons = {
    "Linguagens": <Code className="text-accent" />,
    "Frontend": <Layers className="text-accent" />,
    "Backend": <Terminal className="text-accent" />,
    "Banco de Dados": <Database className="text-accent" />,
    "Ferramentas": <ShieldCheck className="text-accent" />,
    "Outros Conhecimentos": <Cpu className="text-accent" />,
  };

  return (
    <Section id="habilidades" className="bg-white/[0.01] py-32 border-y border-white/5">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Stack Tecnológica</h2>
        <p className="text-white/40 max-w-2xl mx-auto font-medium">Categorias profissionais organizadas para leitura rápida e precisa.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup, idx) => (
          <div key={idx} className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-accent/30 transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center mb-8 border border-accent/10 group-hover:bg-accent/10 transition-colors">
              {icons[skillGroup.category] || <Code className="text-accent" />}
            </div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skillGroup.items.map((skill, sIdx) => (
                <span key={sIdx} className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-semibold text-white/60 border border-white/5 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
