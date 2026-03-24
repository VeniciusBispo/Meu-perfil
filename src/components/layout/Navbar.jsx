import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Active section detection with better threshold
    const sections = ['sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Stack', href: '#habilidades', id: 'habilidades' },
    { name: 'Trabalho', href: '#projetos', id: 'projetos' },
    { name: 'Impacto', href: '#experiencia', id: 'experiencia' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled
        ? 'py-6 bg-[var(--color-bg)]/80 backdrop-blur-3xl border-b border-[var(--color-border)]'
        : 'py-10 bg-transparent'
      }`}>
      {/* Scroll Progress Bar - More Premium */}
      <motion.div
        className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-accent origin-left z-50 shadow-[0_0_15px_rgba(0,209,255,0.4)]"
        style={{ scaleX }}
      />

      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-[var(--weight-black)] text-xl rounded-[var(--radius-sm)] transition-all group-hover:bg-accent group-hover:text-white">
            {portfolioData.profile.name.charAt(0)}
          </div>
          <span className="text-[var(--text-body)] font-[var(--weight-black)] tracking-tight text-white hidden sm:block">
            {portfolioData.profile.name.split(' ')[1]}
            <span className="text-white/20">.dev</span>
          </span>
        </a>

        {/* Desktop Links - Extreme Hierarchy */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[var(--text-tiny)] uppercase tracking-[0.3em] font-[var(--weight-black)] transition-all relative py-2 ${activeSection === link.id ? 'text-accent' : 'text-white/40 hover:text-white'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-white/5 pl-12">
            <a href={`mailto:${portfolioData.profile.email}`} className="text-white/40 hover:text-accent transition-all">
              <Mail size={18} />
            </a>
            <a href={portfolioData.profile.github} target="_blank" className="text-white/40 hover:text-accent transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white w-12 h-12 flex items-center justify-center bg-white/5 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[var(--color-bg)] z-[200] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-xl font-[var(--weight-black)]">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-[var(--weight-black)] tracking-tight text-white/90 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 flex items-center gap-8 text-white/40">
              <a href={portfolioData.profile.github} target="_blank"><Github size={24} /></a>
              <a href={portfolioData.profile.linkedin} target="_blank"><Linkedin size={24} /></a>
              <a href={`mailto:${portfolioData.profile.email}`}><Mail size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
