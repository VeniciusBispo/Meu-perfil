import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <Section id="sobre" className="border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-accent inline-block"></span>
            Sobre Mim
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            {portfolioData.about.text}
          </p>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors group">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <GraduationCap className="text-accent group-hover:scale-110 transition-transform" />
              Formação Acadêmica
            </h3>
            {portfolioData.about.education.map((edu, idx) => (
              <div key={idx}>
                <p className="font-bold text-white">{edu.degree}</p>
                <p className="text-white/60 text-sm">{edu.institution} | {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative">
            {/* Visual placeholder for an image or graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl font-black text-white/5 select-none">PORTFOLIO</span>
            </div>
          </div>
          {/* Stats or mini highlight */}
          <div className="absolute -bottom-6 -left-6 p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl">
            <p className="text-accent text-3xl font-black">2+</p>
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Anos de Código</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
