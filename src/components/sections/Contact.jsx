import Section from '../common/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contato" className="bg-[var(--color-surface)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-24">
          <h2 className="section-title">Vamos <span className="text-accent underline underline-offset-[12px] decoration-accent/20">Conversar</span>?</h2>
          <p className="text-[var(--text-h3)] text-[var(--color-text-dim)] font-[var(--weight-medium)] leading-tight tracking-tight mb-16">
             Pronto para transformar sua visão técnica em realidade de alto impacto.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-6 px-16 py-8 bg-white text-black font-[var(--weight-black)] rounded-[var(--radius-xl)] transition-all hover:bg-accent hover:text-white shadow-[0_40px_80px_-20px_rgba(255,255,255,0.1)] hover:shadow-accent/40"
            >
             <Mail size={24} />
             <span className="text-[var(--text-h3)] tracking-tight">{portfolioData.profile.email}</span>
             <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>

           <div className="flex items-center gap-10 mt-12 pb-12 border-b border-white/5 w-full justify-center">
             <a 
               href={portfolioData.profile.github} 
               target="_blank" 
               className="flex items-center gap-3 text-[var(--color-text-dim)] hover:text-white transition-colors font-[var(--weight-black)] text-[var(--text-small)] uppercase tracking-[0.3em]"
             >
                <Github size={20} /> github
             </a>
             <a 
               href={portfolioData.profile.linkedin} 
               target="_blank" 
               className="flex items-center gap-3 text-[var(--color-text-dim)] hover:text-white transition-colors font-[var(--weight-black)] text-[var(--text-small)] uppercase tracking-[0.3em]"
             >
                <Linkedin size={20} /> linkedin
             </a>
           </div>

           <p className="text-[var(--text-tiny)] font-[var(--weight-black)] text-white/20 uppercase tracking-[0.5em] mt-8">
             Design & Code by {portfolioData.profile.name.split(' ')[0]} © 2026
           </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
