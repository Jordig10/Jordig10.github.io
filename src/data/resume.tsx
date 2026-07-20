import { Icons } from "@/components/icons";
import {
  House,
  Binary,
  GitBranch,
  Code2,
  Network,
  KeyRound,
  ShieldCheck,
  Radar,
  Terminal,
  Monitor,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Jordi Gómez",
  initials: "JG",
  url: "https://jordig10.github.io",
  location: "Barcelona, España",
  locationLink: "https://www.google.com/maps/place/barcelona",
  description:
    "Estudiante de Ciberseguridad en ENTI-UB, con interés en la seguridad defensiva y el análisis de amenazas.",
  summary:
    "Estudiante de Grado en Ciberseguridad en ENTI-UB con interés en la seguridad defensiva y el análisis de amenazas. Cuento con [formación](/#education) en programación, redes, seguridad y marco legal, complementada con [proyectos prácticos](/#projects) desarrollados de forma individual y en equipo. Enfocado en el aprendizaje continuo y la resolución de problemas, busco adquirir conocimientos y experiencia práctica en entornos reales.",
  // Foto de perfil. Deja "" para mostrar tus iniciales (JG), o sustituye
  // public/picofme.png por tu propia foto y pon avatarUrl: "/picofme.png".
  avatarUrl: "",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Sobre mí" },
    // Desactivada de momento (aún sin experiencia laboral). El código se
    // conserva: cambia enabled a true cuando quieras mostrarla.
    work: { order: 2, enabled: false, heading: "Experiencia", presentLabel: "Actualidad" },
    education: { order: 3, enabled: true, heading: "Educación" },
    skills: { order: 4, enabled: true, heading: "Habilidades" },
    projects: {
      order: 5, enabled: true,
      label: "Formación práctica",
      heading: "Proyectos que he desarrollado",
      text: "Como parte de mi formación en ciberseguridad he trabajado en varios proyectos prácticos, tanto de forma individual como en equipo. Estos son algunos de ellos.",
    },
    // Desactivada (no aplica). Código conservado para el futuro.
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons.",
    },
    // Desactivada (galería de fotos). Código conservado para el futuro.
    photos: {
      order: 6, enabled: false,
      heading: "Fotografías",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contacto",
      heading: "Hablemos",
      text: "¿Quieres contactar conmigo? Escríbeme directamente por correo o LinkedIn y te responderé en cuanto pueda.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Foto 1" },
    { src: "/photos/photo2.jpg", alt: "Foto 2" },
    { src: "/photos/photo3.jpg", alt: "Foto 3" },
    { src: "/photos/photo4.jpg", alt: "Foto 4" },
    { src: "/photos/photo5.jpg", alt: "Foto 5" },
    { src: "/photos/photo6.jpg", alt: "Foto 6" },
    { src: "/photos/photo7.jpg", alt: "Foto 7" },
    { src: "/photos/photo8.jpg", alt: "Foto 8" },
    { src: "/photos/photo9.jpg", alt: "Foto 9" },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C", icon: Code2 },
    { name: "Git / GitHub", icon: GitBranch },
    { name: "VS Code", icon: Binary },
    { name: "Linux", icon: Terminal },
    { name: "Windows", icon: Monitor },
    { name: "GNS3", icon: Network },
    { name: "pfSense", icon: ShieldCheck },
    { name: "Suricata", icon: Radar },
    { name: "OpenVPN", icon: KeyRound },
  ],
  navbar: [
    { href: "/", icon: House, label: "Inicio" },
    // Blog desactivado de momento. El código y las páginas se conservan:
    // para reactivarlo, descomenta la línea siguiente.
    // { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "gomezjordi11@gmail.com",
    tel: "+34 672 256 028",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jordig10",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        // TODO: pon la URL de tu perfil de LinkedIn y cambia navbar a true.
        url: "https://www.linkedin.com/",
        icon: Icons.linkedin,
        navbar: false,
      },
      email: {
        name: "Enviar correo",
        url: "mailto:gomezjordi11@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // Experiencia laboral: vacía de momento. Cuando tengas experiencia, añade
  // entradas aquí y activa la sección "work" arriba.
  work: [],
  education: [
    {
      school: "ENTI-UB (Escola de Noves Tecnologies Interactives)",
      href: "https://enti.cat/",
      degree: "Grado en Ciberseguridad",
      logoUrl: "https://www.google.com/s2/favicons?domain=enti.cat&sz=128",
      start: "Sept 2024",
      end: "Actualidad",
    },
    {
      school: "La Salle Bonanova",
      href: "https://bonanova.lasalle.cat/",
      degree: "Bachillerato de Ciencias y Tecnología",
      logoUrl: "https://www.google.com/s2/favicons?domain=lasalle.cat&sz=128",
      start: "Sept 2021",
      end: "Jun 2023",
    },
  ],
  projects: [
    {
      title: "Cracker ético de contraseñas",
      href: "",
      dates: "Abril 2026 - Mayo 2026",
      active: true,
      description:
        "Herramienta de auditoría de contraseñas desarrollada en Python. Aplica ataques de diccionario, fuerza bruta e híbridos para evaluar la robustez de las credenciales. Proyecto elaborado en pareja.",
      technologies: [
        "Python",
        "Fuerza bruta",
        "Ataques de diccionario",
        "Ataques híbridos",
      ],
      links: [
        // Añade aquí el enlace al repositorio cuando lo tengas:
        // { type: "Código", href: "https://github.com/Jordig10/...", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Diseño de infraestructura de red segura",
      href: "",
      dates: "Febrero 2026 - Mayo 2026",
      active: true,
      description:
        "Implementación de una red corporativa para un centro educativo con dos sedes, simulada en GNS3. Uso de OpenVPN, pfSense, Suricata y Debian, con configuración de reglas de firewall y monitorización de tráfico con Suricata. Proyecto elaborado en pareja.",
      technologies: [
        "GNS3",
        "pfSense",
        "Suricata",
        "OpenVPN",
        "Debian",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Sistema de Autenticación Multifactor (MFA)",
      href: "",
      dates: "Diciembre 2025 - Enero 2026",
      active: true,
      description:
        "Sistema MFA simulado desarrollado en Java con múltiples métodos de verificación y comprobación de identidad mediante doble factor. Aplicación de principios de POO: herencia, encapsulación y polimorfismo. Proyecto elaborado en pareja.",
      technologies: [
        "Java",
        "POO",
        "MFA",
        "2FA",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  // Hackathons: sección desactivada. Vacía de momento; el componente se
  // conserva por si quieres usarla en el futuro.
  hackathons: [],
} as const;
