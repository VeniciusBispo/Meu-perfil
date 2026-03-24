import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[var(--space-80)] overflow-hidden bg-[var(--color-bg)]">
      {/* Visual Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />
      
      {/* Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none">
        <div className="absolute inset-0 bg-accent/5 rounded-full blur-[160px] animate-pulse" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left Column: Extreme Typography */}
          <motion.div
            className="lg:col-span-8 text-left z-10"
            style={{ y, opacity }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[var(--text-tiny)] font-[var(--weight-black)] text-accent uppercase tracking-[0.3em]">
                 Disponível para Projetos
              </span>
            </div>

            {/* Headline - Extreme Scale Fixed */}
            <h1 className="text-[clamp(4rem,9.5vw,9.5rem)] font-[var(--weight-black)] leading-[0.8] tracking-[var(--tracking-hero)] text-gradient mb-12">
              Engenharia <br /> que <span className="italic">conecta</span>.
            </h1>

            {/* Bio - Massive and Scannable */}
            <p className="text-[var(--text-h3)] text-[var(--color-text-dim)] max-w-2xl mb-16 leading-tight font-[var(--weight-medium)] tracking-tight">
              {portfolioData.profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-8">
              <a 
                href="#projetos" 
                className="group px-14 py-7 bg-white text-black font-[var(--weight-black)] rounded-[var(--radius-md)] flex items-center gap-4 transition-all hover:bg-accent hover:text-white shadow-2xl"
              >
                Explorar Projetos
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href={portfolioData.profile.linkedin}
                target="_blank"
                className="px-14 py-7 bg-[var(--color-surface)] border border-[var(--color-border)] text-white font-[var(--weight-black)] rounded-[var(--radius-md)] hover:bg-white/5 transition-all text-center"
              >
                Ver LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column: Professional Portrait */}
          <motion.div 
            className="lg:col-span-4 relative hidden lg:block ml-auto w-full max-w-[450px]"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] premium-shadow group">
               <img 
                 src={profileImage}
                 alt="Professional Portrait"
                 className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-accent/20 rounded-bl-[var(--radius-xl)]" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-r-2 border-t-2 border-accent/20 rounded-tr-[var(--radius-xl)]" />
          </motion.div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
