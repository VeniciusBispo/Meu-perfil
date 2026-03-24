import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 text-accent text-xs font-black uppercase tracking-[0.2em]"
        >
          Disponível para Projetos ⚡
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-gradient"
        >
          Engenharia <br /> de Alto <span className="text-accent">Impacto</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          {portfolioData.profile.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#projetos" 
            className="group px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-2 hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            Explorar Trabalho
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contato" 
            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all hover:border-white/20 active:scale-95"
          >
            Conectar no LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <motion.div
           animate={{ y: [0, 12, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
