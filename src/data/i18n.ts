export type Lang = "es" | "en";

export const i18n = {
  es: {
    nav: { home: "Inicio", langToggle: "Idioma" },
    theme: { light: "Claro", dark: "Oscuro" },
    hero: {
      greeting: (firstName: string) => `Hola, soy ${firstName}`,
      description:
        "Estudiante de Ciberseguridad en ENTI-UB, con interés en la seguridad defensiva y el análisis de amenazas.",
    },
    summary:
      "Estudiante de Grado en Ciberseguridad en ENTI-UB con interés en la seguridad defensiva y el análisis de amenazas. Cuento con [formación](/#education) en programación, redes, seguridad y marco legal, complementada con [proyectos prácticos](/#projects) desarrollados de forma individual y en equipo. Enfocado en el aprendizaje continuo y la resolución de problemas, busco adquirir conocimientos y experiencia práctica en entornos reales.",
    sections: {
      about: "Sobre mí",
      education: "Educación",
      skills: "Habilidades",
      projects: {
        label: "Formación práctica",
        heading: "Proyectos que he desarrollado",
        text: "Como parte de mi formación en ciberseguridad he trabajado en varios proyectos prácticos, tanto de forma individual como en equipo. Estos son algunos de ellos.",
      },
      contact: {
        label: "Contacto",
        heading: "Hablemos",
        text: "¿Quieres contactar conmigo? Escríbeme directamente por correo o LinkedIn y te responderé en cuanto pueda.",
      },
    },
    skillCategories: {
      languages: "Lenguajes",
      security: "Redes y seguridad",
      tools: "Herramientas y sistemas",
    },
    // El orden debe coincidir con DATA.education en src/data/resume.tsx
    education: [
      { degree: "Grado en Ciberseguridad", start: "Sept 2024", end: "Actualidad" },
      { degree: "Bachillerato de Ciencias y Tecnología", start: "Sept 2021", end: "Jun 2023" },
    ],
    // El orden debe coincidir con DATA.projects en src/data/resume.tsx
    projects: [
      {
        title: "Cracker ético de contraseñas",
        description:
          "Herramienta de auditoría de contraseñas desarrollada en Python. Aplica ataques de diccionario, fuerza bruta e híbridos para evaluar la robustez de las credenciales. Proyecto elaborado en pareja.",
        technologies: ["Python", "Fuerza bruta", "Ataques de diccionario", "Ataques híbridos"],
        dates: "Abril 2026 - Mayo 2026",
      },
      {
        title: "Diseño de infraestructura de red segura",
        description:
          "Implementación de una red corporativa para un centro educativo con dos sedes, simulada en GNS3. Uso de OpenVPN, pfSense, Suricata y Debian, con configuración de reglas de firewall y monitorización de tráfico con Suricata. Proyecto elaborado en pareja.",
        technologies: ["GNS3", "pfSense", "Suricata", "OpenVPN", "Debian"],
        dates: "Febrero 2026 - Mayo 2026",
      },
      {
        title: "Sistema de Autenticación Multifactor (MFA)",
        description:
          "Sistema MFA simulado desarrollado en Java con múltiples métodos de verificación y comprobación de identidad mediante doble factor. Aplicación de principios de POO: herencia, encapsulación y polimorfismo. Proyecto elaborado en pareja.",
        technologies: ["Java", "POO", "MFA", "2FA"],
        dates: "Diciembre 2025 - Enero 2026",
      },
    ],
    socialNames: {
      GitHub: "GitHub",
      LinkedIn: "LinkedIn",
      email: "Enviar correo",
    },
    projectLinkType: "Código",
  },
  en: {
    nav: { home: "Home", langToggle: "Language" },
    theme: { light: "Light", dark: "Dark" },
    hero: {
      greeting: (firstName: string) => `Hi, I'm ${firstName}`,
      description:
        "Cybersecurity student at ENTI-UB, interested in defensive security and threat analysis.",
    },
    summary:
      "I'm a Cybersecurity degree student at ENTI-UB, interested in defensive security and threat analysis. I have a background in [programming, networking, security and legal frameworks](/#education), complemented by [hands-on projects](/#projects) built both individually and in teams. Focused on continuous learning and problem-solving, I'm looking to gain knowledge and hands-on experience in real-world environments.",
    sections: {
      about: "About Me",
      education: "Education",
      skills: "Skills",
      projects: {
        label: "Hands-on Training",
        heading: "Projects I've built",
        text: "As part of my cybersecurity training, I've worked on several hands-on projects, both individually and as part of a team. Here are a few of them.",
      },
      contact: {
        label: "Contact",
        heading: "Let's talk",
        text: "Want to get in touch? Email me directly or reach out on LinkedIn and I'll get back to you as soon as I can.",
      },
    },
    skillCategories: {
      languages: "Languages",
      security: "Networking & Security",
      tools: "Tools & Systems",
    },
    education: [
      { degree: "Bachelor's Degree in Cybersecurity", start: "Sept 2024", end: "Present" },
      { degree: "Science & Technology Baccalaureate", start: "Sept 2021", end: "Jun 2023" },
    ],
    projects: [
      {
        title: "Ethical Password Cracker",
        description:
          "Password auditing tool built in Python. Applies dictionary, brute-force and hybrid attacks to evaluate credential strength. Built in a team of two.",
        technologies: ["Python", "Brute force", "Dictionary attacks", "Hybrid attacks"],
        dates: "April 2026 - May 2026",
      },
      {
        title: "Secure Network Infrastructure Design",
        description:
          "Deployment of a corporate network for a school with two campuses, simulated in GNS3. Used OpenVPN, pfSense, Suricata and Debian, with firewall rule configuration and traffic monitoring via Suricata. Built in a team of two.",
        technologies: ["GNS3", "pfSense", "Suricata", "OpenVPN", "Debian"],
        dates: "February 2026 - May 2026",
      },
      {
        title: "Multi-Factor Authentication (MFA) System",
        description:
          "Simulated MFA system built in Java with multiple verification methods and two-factor identity checks. Applied OOP principles: inheritance, encapsulation and polymorphism. Built in a team of two.",
        technologies: ["Java", "OOP", "MFA", "2FA"],
        dates: "December 2025 - January 2026",
      },
    ],
    socialNames: {
      GitHub: "GitHub",
      LinkedIn: "LinkedIn",
      email: "Send Email",
    },
    projectLinkType: "Code",
  },
} as const;
