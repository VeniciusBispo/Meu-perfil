import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contato" className="py-40">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-gradient leading-[0.9]">
          Vamos construir o <br /> próximo grande <span className="text-accent italic">impacto</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/40 mb-20 max-w-2xl mx-auto font-medium">
          Aberto a oportunidades que desafiem o status quo da tecnologia.
        </p>

        <div className="flex flex-col items-center gap-10">
          <a 
            href={`mailto:${portfolioData.profile.email}`}
            className="group text-3xl md:text-5xl font-black tracking-tighter text-white hover:text-accent transition-all flex items-center gap-4"
          >
            {portfolioData.profile.email}
            <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform text-accent" />
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={portfolioData.profile.github}
              target="_blank"
              className="px-8 py-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all font-bold flex items-center gap-3"
            >
              <Github size={24} /> GitHub
            </a>
            <a 
              href={portfolioData.profile.linkedin}
              target="_blank"
              className="px-8 py-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all font-bold flex items-center gap-3"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/20 text-xs font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} {portfolioData.profile.name}. Todos os Direitos Reservados.</p>
          <div className="flex gap-8">
             <span>React 19</span>
             <span>Tailwind 4</span>
             <span>Vite 8</span>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;
