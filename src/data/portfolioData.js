export const portfolioData = {
  profile: {
    name: "José Venicius",
    role: "Sistemas de Informação | Software Engineer Enthusiast",
    bio: "Construindo sistemas de alto impacto onde a eficiência encontra a inovação. Estudante de Sistemas de Informação focado em arquitetura resiliente, automação de hardware e soluções que realmente escalam.",
    email: "viniciusbispo272@gmail.com",
    github: "https://github.com/VeniciusBispo",
    linkedin: "https://www.linkedin.com/in/venicius-bispo-386323229",
  },
  about: {
    text: "Acadêmico de Sistemas de Informação focado no desenvolvimento de soluções robustas e escaláveis. Possuo uma base técnica sólida em engenharia de software, com grande interesse em arquitetura de sistemas e automação. Minha abordagem é pautada pela resolução analítica de problemas e pela busca constante por novas tecnologias que otimizem processos. Acredito na evolução contínua através da prática e do estudo rigoroso das melhores práticas do mercado.",
    education: [
      {
        degree: "Bacharelado em Sistemas de Informação",
        institution: "Universidade Federal de Sergipe - Campus Itabaiana",
        period: "2020 - Presente",
      }
    ]
  },
  skills: [
    {
      category: "Linguagens",
      items: ["Python", "JavaScript", "C#", "SQL", "TypeScript"]
    },
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "Next.js", "Framer Motion", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "FastAPI", "WMI API", "RESTful APIs"]
    },
    {
      category: "Banco de Dados",
      items: ["PostgreSQL", "MongoDB", "SQL Server", "SQLite", "Prisma ORM"]
    },
    {
      category: "Ferramentas",
      items: ["Git", "Docker", "VS Code", "Postman", "Insomnia"]
    },
    {
      category: "Outros Conhecimentos",
      items: ["Clean Architecture", "SOLID", "DDD", "Metodologias Ágeis", "DDC/CI Protocol"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "LumaFlow (EyeFlow)",
      image: "/assets/lumaflow.png",
      category: "Performance & Hardware",
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
      image: "/assets/securokey.png",
      category: "Security & Cryptography",
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
      image: "/assets/notacloud.png",
      category: "Fullstack & Cloud",
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
      period: "2020 - Presente",
      description: "Desenvolvimento de aplicações desktop e web, aplicando princípios de engenharia de software e arquitetura limpa para resolver desafios técnicos reais."
    }
  ]
};
