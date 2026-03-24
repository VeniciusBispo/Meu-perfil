export const portfolioData = {
  profile: {
    name: "José Venicius",
    role: "Sistemas de Informação | Software Engineer Enthusiast",
    bio: "Construindo sistemas de alto impacto onde a eficiência encontra a inovação. Estudante de Sistemas de Informação focado em arquitetura resiliente, automação de hardware e soluções que realmente escalam.",
    email: "contato@veniciusbispo.dev",
    github: "https://github.com/VeniciusBispo",
    linkedin: "https://linkedin.com/in/veniciusbispo", // Placeholder, ajustável
  },
  about: {
    text: "Sou acadêmico de Sistemas de Informação com foco no desenvolvimento de habilidades técnicas e analíticas voltadas à área de tecnologia. Em constante aprimoramento em engenharia de software, arquitetura de sistemas e metodologias ágeis.",
    education: [
      {
        degree: "Bacharelado em Sistemas de Informação",
        institution: "Universidade [Seu Nome]",
        period: "2022 - Presente",
      }
    ]
  },
  skills: [
    {
      category: "Linguagens & Frameworks",
      items: ["Python", "JavaScript", "C#", "SQL", "React", "PySide6"]
    },
    {
      category: "Arquitetura & Engenharia",
      items: ["Clean Architecture", "SOLID", "Domain-Driven Design", "OOP"]
    },
    {
      category: "Hardware & Sistemas",
      items: ["DDC/CI", "WMI API", "Linux", "Windows Automation"]
    },
    {
      category: "Ferramentas",
      items: ["Git", "Docker", "Agile/Scrum", "CI/CD"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "LumaFlow (EyeFlow)",
      problem: "O cansaço visual causado por brilho inadequado em monitores afeta a produtividade e a saúde de profissionais de tecnologia.",
      solution: "Desenvolvimento de um assistente inteligente de conforto visual com controle híbrido de hardware via protocolos DDC/CI e APIs nativas do Windows (WMI).",
      tech: ["Python 3.11", "PySide6 (Qt)", "SOLID", "Clean Architecture"],
      impact: "Aplicação robusta com arquitetura desacoplada, permitindo controle centralizado de múltiplos monitores e redução real do estresse ocular.",
      differentials: "Wizard interativo para cálculo de curva de hardware, hotkeys globais e motor heurístico de proteção visual.",
      github: "https://github.com/VeniciusBispo/EyeFlow",
      link: "#"
    },
    {
      id: 2,
      title: "SecuroKey Generator",
      problem: "A vulnerabilidade em chaves de autenticação locais e o uso de métodos de entropia fracos comprometem a segurança de dados sensíveis.",
      solution: "Um gerador de chaves criptografadas de alta entropia que implementa algoritmos de randomização segura para proteção de ativos digitais.",
      tech: ["Python", "Cryptography Libraries", "Security Patterns"],
      impact: "Geração de chaves robustas resistentes a ataques de força bruta, otimizando a segurança em ambientes de desenvolvimento e produção.",
      differentials: "Customização de nível de entropia, arquitetura local-first e foco em integridade de dados.",
      github: "https://github.com/VeniciusBispo/Gerador-de-ChaveCriptografada",
      link: "#"
    },
    {
      id: 3,
      title: "NotaCloud (Site-Notas-virtuais)",
      problem: "A dispersão de informações e a perda de insights críticos durante sessões intensas de estudo ou desenvolvimento.",
      solution: "Plataforma web resiliente para gerenciamento de notas em nuvem, focada em síncronismo em tempo real e interface reativa.",
      tech: ["HTML5", "CSS3", "JavaScript", "SQL Backend"],
      impact: "Centralização eficiente de conhecimento acadêmico e técnico, com redução significativa no tempo de recuperação de informações.",
      differentials: "Integração Full-stack, persistência de dados otimizada e interface intuitiva focada no usuário.",
      github: "https://github.com/VeniciusBispo/Site-Notas-virtuais",
      link: "#"
    }
  ],
  experience: [
    {
      title: "Desenvolvedor & Estudante de SI",
      company: "Projetos Independentes / Acadêmicos",
      period: "2022 - Presente",
      description: "Desenvolvimento de aplicações desktop e web, aplicando princípios de engenharia de software e arquitetura limpa para resolver desafios técnicos reais."
    }
  ]
};
