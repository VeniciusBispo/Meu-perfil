import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <Section id="sobre" className="py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter flex items-center gap-5">
            Sobre Mim
            <span className="h-[2px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
            {portfolioData.about.text}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all group">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Educação
            </h3>
            {portfolioData.about.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-lg font-bold text-white">{edu.degree}</p>
                <p className="text-white/40 font-medium">{edu.institution}</p>
                <p className="text-accent/60 text-xs font-black uppercase tracking-widest pt-2">{edu.period}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-accent/20 transition-all">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-accent" />
              Filosofia de Trabalho
            </h3>
            <p className="text-white/60 leading-relaxed italic">
              "Focado em transformar complexidade em simplicidade através de arquitetura limpa e código resiliente."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
