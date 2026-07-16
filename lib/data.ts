export type Project = {
  id: string;
  index: string;
  name: string;
  image: string;
  imageFit?: "cover" | "contain";
  description: string;
  role?: string;
  tech: string[];
  github?: string;
  demo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "barbertime",
    index: "01",
    name: "BarberTime",
    image: "/images/barbertime.png",
    description:
      "Sistema completo de agendamento para barbearias. Backend com prevenção automática de conflito de horários, gestão de barbeiros e serviços, e autenticação com controle de permissões por tipo de usuário.",
    role: "Desenvolvimento full stack em squad de 6 pessoas.",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Zod"],
    github: "https://github.com/Devezaa7/barberTime",
    demo: "https://barbertime-app.onrender.com/index.html",
  },
  {
    id: "teamtrack",
    index: "02",
    name: "TeamTrack",
    image: "/images/team-treack.png",
    imageFit: "contain",
    description:
      "Sistema de controle de estoque com cadastro de produtos, alerta automático de estoque baixo e cálculo de preço médio, construído em equipe durante o curso PDA.",
    role: "Colaborador no desenvolvimento em equipe (Grupo 7).",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/samuel0860/teamtrack-system",
    demo: "https://samuel0860.github.io/teamtrack-system/",
  },
  {
    id: "espaco-agape",
    index: "03",
    name: "Espaço Ágape",
    image: "/images/espaco-agape.png",
    imageFit: "contain",
    description:
      "Landing page para estúdio de estética na Barra da Tijuca. Catálogo de serviços, depoimentos de clientes e agendamento integrado, com identidade visual nude e dourada.",
    role: "Desenvolvimento completo do projeto.",
    tech: ["React", "Vite", "Formspree"],
    github: "https://github.com/Devezaa7/EspacoAgape-PDA",
    demo: "https://espa-o-gape-projeto-pda.vercel.app/",
  },
  {
    id: "alphadrone",
    index: "04",
    name: "AlphaDrone",
    image: "/images/alphadrone.png",
    imageFit: "contain",
    description:
      "Site institucional e de vendas para escola de pilotagem de drones. Checkout de cursos integrado e domínio próprio em produção — projeto freelance entregue a um cliente real.",
    role: "Desenvolvimento freelance, do design ao deploy.",
    tech: ["React", "Vite", "Tailwind CSS", "Kiwify"],
    github: "https://github.com/Devezaa7/Curso-AlphaDrone",
    demo: "https://alphadronebrasil.com.br/",
  },
  {
    id: "aprendeja",
    index: "05",
    name: "AprenderJá",
    image: "/images/aprenderja.png",
    description:
      "Plataforma de requalificação profissional para adultos em transição de carreira, com progresso individualizado por conta e autenticação segura via JWT e cookies HttpOnly.",
    role: "Contribuição em squad, projeto acadêmico do curso PDA.",
    tech: ["React", "TanStack Start", "Prisma", "PostgreSQL", "Zod"],
    note: "Repositório privado",
  },
  {
    id: "foco-no-concurso",
    index: "06",
    name: "Foco no Concurso",
    image: "/images/foco-no-concurso.png",
    description:
      "Aplicativo de estudo para concursos públicos: acompanha o que já foi revisado, sinaliza matérias atrasadas e usa IA para sugerir tópicos e montar um cronograma de revisão.",
    role: "Projeto solo, incluindo refatoração da lógica de estado em hook customizado.",
    tech: ["React", "TypeScript", "JSON Server", "Claude API"],
    note: "Repositório privado",
  },
];

export const techStack: string[] = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "HTML",
  "CSS",
  "Git",
];

export const contactLinks = {
  github: "https://github.com/Devezaa7",
  linkedin: "https://www.linkedin.com/in/dev-deveza/",
  email: "deveezag@gmail.com",
};