import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">
            {portfolioData.profile.name.split(' ')[0]}
            <span className="text-accent group-hover:animate-pulse">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-5 border-l border-white/10 pl-8">
            <a href={portfolioData.profile.github} target="_blank" className="text-white/60 hover:text-accent transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href={portfolioData.profile.linkedin} target="_blank" className="text-white/60 hover:text-accent transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white/70 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <a href={portfolioData.profile.github} target="_blank" className="flex items-center gap-2 text-white/60">
                   <Github size={20} /> <span className="text-sm font-bold">GitHub</span>
                </a>
                <a href={portfolioData.profile.linkedin} target="_blank" className="flex items-center gap-2 text-white/60">
                   <Linkedin size={20} /> <span className="text-sm font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
