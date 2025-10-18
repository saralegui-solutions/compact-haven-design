export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Reglas de Oro para Maximizar un Departamento de 35m²",
    excerpt: "Descubre cómo la psicología del espacio y el uso inteligente del color pueden hacer que tu departamento pequeño se sienta más amplio.",
    date: "2024-03-15",
    category: "Diseño de Interiores"
  },
  {
    id: 2,
    title: "Mobiliario Multifuncional: La Clave del Confort en Espacios Reducidos",
    excerpt: "Aprende a seleccionar muebles que cumplan múltiples funciones sin sacrificar estética ni comodidad.",
    date: "2024-03-10",
    category: "Tips de Espacio"
  },
  {
    id: 3,
    title: "Zonificación: Crea Áreas Independientes en tu Monoambiente",
    excerpt: "Técnicas profesionales para delimitar espacios y crear sensación de privacidad en departamentos abiertos.",
    date: "2024-03-05",
    category: "Arquitectura"
  },
  {
    id: 4,
    title: "El Poder de los Colores Neutros en Espacios Compactos",
    excerpt: "Aprende cómo utilizar paletas neutras con acentos estratégicos para amplificar visualmente tu departamento y crear atmósferas distintas en cada zona.",
    date: "2024-02-28",
    category: "Diseño de Interiores"
  },
  {
    id: 5,
    title: "Almacenamiento Vertical: Aprovecha Cada Centímetro",
    excerpt: "Estrategias inteligentes para maximizar el espacio vertical sin saturar visualmente tu hogar, desde estanterías flotantes hasta soluciones modulares.",
    date: "2024-02-20",
    category: "Tips de Espacio"
  }
];

export const getLatestPosts = (count: number): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
