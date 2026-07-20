import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";
import { C } from "@/components/ui/svgs/c";
import { Git } from "@/components/ui/svgs/git";
import { Linux } from "@/components/ui/svgs/linux";
import { OpenVPN } from "@/components/ui/svgs/openvpn";
import { Pfsense } from "@/components/ui/svgs/pfsense";

// Los textos visibles (títulos, descripciones, encabezados de sección) viven
// en src/data/i18n.ts para poder mostrarlos en español o inglés. Este
// archivo solo guarda los datos que NO cambian según el idioma: fechas,
// enlaces, iconos, imágenes y flags de orden/visibilidad.
export const DATA = {
  name: "Jordi Gómez",
  initials: "JG",
  url: "https://jordig10.github.io",
  location: "Barcelona, España",
  locationLink: "https://www.google.com/maps/place/barcelona",
  // Usados solo como valores por defecto para las meta tags SEO (servidor,
  // no cambian con el selector de idioma). El texto visible en la página
  // sale de i18n.ts.
  description:
    "Estudiante de Ciberseguridad en ENTI-UB, con interés en la seguridad defensiva y el análisis de amenazas.",
  summary:
    "Estudiante de Grado en Ciberseguridad en ENTI-UB con interés en la seguridad defensiva y el análisis de amenazas.",
  // Foto de perfil. Deja "" para mostrar tus iniciales (JG), o sustituye
  // public/picofme.png por tu propia foto y pon avatarUrl: "/picofme.png".
  avatarUrl: "",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true },
    // Desactivada de momento (aún sin experiencia laboral). El código se
    // conserva: cambia enabled a true cuando quieras mostrarla. Al ser una
    // sección futura, su texto no pasa por i18n.ts todavía.
    work: { order: 2, enabled: false, heading: "Experiencia", presentLabel: "Actualidad" },
    education: { order: 3, enabled: true },
    skills: { order: 4, enabled: true },
    projects: { order: 5, enabled: true },
    // Desactivada (no aplica). Código conservado para el futuro.
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons.",
    },
    // Desactivada (galería de fotos). Código conservado para el futuro.
    photos: { order: 6, enabled: false, heading: "Fotografías" },
    contact: { order: 8, enabled: true },
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
  // Agrupadas por categoría; el nombre de cada categoría se traduce en
  // i18n.ts (skillCategories). Los nombres de las tecnologías en sí
  // (Python, GNS3...) son nombres propios y no se traducen.
  skills: [
    {
      category: "languages" as const,
      items: [
        { name: "Python", icon: Python },
        { name: "Java", icon: Java },
        { name: "C", icon: C },
      ],
    },
    {
      category: "security" as const,
      items: [
        { name: "GNS3", iconUrl: "https://www.google.com/s2/favicons?domain=gns3.com&sz=64" },
        { name: "pfSense", icon: Pfsense },
        { name: "Suricata", iconUrl: "https://www.google.com/s2/favicons?domain=suricata.io&sz=64" },
        { name: "OpenVPN", icon: OpenVPN },
      ],
    },
    {
      category: "tools" as const,
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: Icons.github },
        // Sin logo vectorial disponible: se usa el favicon oficial del sitio.
        { name: "VS Code", iconUrl: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64" },
        { name: "Linux", icon: Linux },
        { name: "Windows", iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: House },
    // Blog desactivado de momento. El código y las páginas se conservan:
    // para reactivarlo, descomenta la línea siguiente.
    // { href: "/blog", icon: Library },
  ],
  contact: {
    email: "gomezjordi11@gmail.com",
    tel: "+34 672 256 028",
    // El nombre visible de cada red (tooltip) sale de i18n.ts (socialNames),
    // usando esta misma clave (GitHub / LinkedIn / email).
    social: {
      GitHub: {
        url: "https://github.com/Jordig10",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        // TODO: pon la URL de tu perfil de LinkedIn y cambia navbar a true.
        url: "https://www.linkedin.com/",
        icon: Icons.linkedin,
        navbar: false,
      },
      email: {
        url: "mailto:gomezjordi11@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // Experiencia laboral: vacía de momento. Cuando tengas experiencia, añade
  // entradas aquí y activa la sección "work" arriba.
  work: [],
  // El texto (degree, start, end) sale de i18n.ts → education[i], alineado
  // por índice con este array. Si añades o reordenas una entrada aquí,
  // actualiza también i18n.ts.
  education: [
    {
      school: "ENTI-UB (Escola de Noves Tecnologies Interactives)",
      href: "https://enti.cat/",
      logoUrl: "https://www.google.com/s2/favicons?domain=enti.cat&sz=128",
    },
    {
      school: "La Salle Bonanova",
      href: "https://bonanova.lasalle.cat/",
      logoUrl: "https://www.google.com/s2/favicons?domain=lasalle.cat&sz=128",
    },
  ],
  // El texto (title, description, technologies, dates) sale de i18n.ts →
  // projects[i], alineado por índice con este array. Si añades o reordenas
  // un proyecto aquí, actualiza también i18n.ts.
  projects: [
    {
      href: "https://github.com/Jordig10/cracker-etico",
      active: true,
      links: [
        {
          type: "code" as const,
          href: "https://github.com/Jordig10/cracker-etico",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      href: "https://github.com/Jordig10/Proyecto-Redes-III",
      active: true,
      links: [
        {
          type: "code" as const,
          href: "https://github.com/Jordig10/Proyecto-Redes-III",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      href: "https://github.com/Jordig10/Multifactor-Authentication",
      active: true,
      links: [
        {
          type: "code" as const,
          href: "https://github.com/Jordig10/Multifactor-Authentication",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  // Hackathons: sección desactivada. Vacía de momento; el componente se
  // conserva por si quieres usarla en el futuro.
  hackathons: [],
} as const;
