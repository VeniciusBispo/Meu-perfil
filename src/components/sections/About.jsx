import Section from '../common/Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { User, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <Section id="sobre">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        {/* Main Text Content - Left Aligned for better reading flow */}
        <div className="lg:col-span-12 mb-16">
           <h2 className="section-title">Sobre <span className="text-accent underline underline-offset-8 decoration-accent/20">Mim</span></h2>
        </div>
        
        <div className="lg:col-span-7">
          <p className="text-[var(--text-body)] text-[var(--color-text-dim)] leading-[var(--leading-normal)] mb-12 max-w-[700px] font-[var(--weight-medium)]">
             {portfolioData.about.text.split('. ').slice(0, 3).join('. ') + '.'}
          </p>
          <p className="text-[var(--text-body)] text-[var(--color-text-dim)] leading-[var(--leading-normal)] max-w-[700px] font-[var(--weight-medium)]">
             Sou focado em arquitetura limpa e performance, transformando visões técnicas em produtos robustos de alto desempenho.
          </p>
        </div>

        {/* Highlight Card - Right Side */}
        <div className="lg:col-span-5">
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-[var(--color-surface)] p-10 md:p-12 rounded-[var(--radius-xl)] border border-[var(--color-border)] premium-shadow relative"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
             <div className="flex items-center gap-4 mb-10">
               <BookOpen size={24} className="text-accent" />
               <h3 className="text-[var(--text-h3)] font-[var(--weight-black)] tracking-tight">Formação</h3>
             </div>
             
             <div className="space-y-12">
               {portfolioData.about.education.map((edu, idx) => (
                 <div key={idx} className="relative pl-10 border-l-2 border-accent/20">
                    <h4 className="text-[var(--text-body)] font-[var(--weight-black)] text-white mb-2 leading-tight">{edu.degree}</h4>
                    <p className="text-accent text-[var(--text-small)] font-[var(--weight-black)] mb-3 uppercase tracking-wider">{edu.institution}</p>
                    <span className="text-[var(--color-text-dim)] text-[var(--text-tiny)] font-[var(--weight-black)] uppercase tracking-[0.2em]">{edu.period}</span>
                 </div>
               ))}
             </div>
           </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
