import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Code2, Server, Database, Settings } from 'lucide-react';

const Skills = () => {
  const icons = {
    Frontend: <Code2 className="text-accent" />,
    Backend: <Server className="text-accent" />,
    "Banco de Dados & DevOps": <Database className="text-accent" />,
    "Ferramentas & Outros": <Settings className="text-accent" />,
  };

  return (
    <Section id="habilidades" className="bg-white/[0.02]">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Habilidades Técnicas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.skills.map((skillGroup, idx) => (
          <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/40 transition-all hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              {icons[skillGroup.category] || <Code2 className="text-accent" />}
            </div>
            <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 bg-white/5 rounded-md text-sm text-white/60 border border-white/5">
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
