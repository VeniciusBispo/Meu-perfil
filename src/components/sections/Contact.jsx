import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github />, href: portfolioData.profile.github, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin />, href: portfolioData.profile.linkedin, color: 'hover:text-[#0077b5]' },
    { name: 'Email', icon: <Mail />, href: `mailto:${portfolioData.profile.email}`, color: 'hover:text-accent' },
  ];

  return (
    <Section id="contato" className="pb-40">
      <div className="bg-gradient-to-br from-accent/10 to-transparent p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          Vamos construir algo <br /> <span className="text-accent italic">impactante</span> juntos?
        </h2>
        
        <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
          Estou sempre aberto a novas oportunidades, colaborações em projetos open-source ou apenas uma boa conversa sobre tecnologia.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 ${link.color} hover:bg-white/10 hover:-translate-y-1 group`}
            >
              {link.icon}
              <span className="font-bold">{link.name}</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.profile.name}. Todos os direitos reservados.</p>
          <p className="mt-2 uppercase tracking-[0.2em] text-[10px]">Construído com React + Tailwind CSS</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
