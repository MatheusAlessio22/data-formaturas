import type { GalleryItem } from '../types'

// PROVISÓRIO: imageUrl aponta para banco de imagens (Unsplash) como placeholder.
// Substituir por fotos reais dos eventos assim que o cliente disponibilizar o acervo;
// os demais campos (título, instituição, curso, cidade, ano, local) também precisam
// de validação com o cliente antes de publicar.
export const galleryItems: GalleryItem[] = [
  {
    id: 'gala-01',
    title: 'Baile de Gala Medicina UNIPAR',
    category: 'gala',
    institution: 'UNIPAR',
    course: 'Medicina',
    city: 'Francisco Beltrão',
    year: 2025,
    venue: 'Centro de Eventos Marreco',
    imageUrl:
      'https://images.unsplash.com/photo-1768508947879-848db5ef3df9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'colacao-01',
    title: 'Colação de Grau Direito CESUL',
    category: 'colacao',
    institution: 'CESUL',
    course: 'Direito',
    city: 'Francisco Beltrão',
    year: 2024,
    venue: 'Espaço Santa Fé',
    imageUrl:
      'https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cenografia-01',
    title: 'Cenografia LED Agronomia UTFPR',
    category: 'cenografia',
    institution: 'UTFPR',
    course: 'Agronomia',
    city: 'Pato Branco',
    year: 2025,
    venue: 'Centro Comunitário da Cango',
    imageUrl:
      'https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ensaio-01',
    title: 'Ensaio Fotográfico Odontologia UNISEP',
    category: 'ensaio',
    institution: 'UNISEP',
    course: 'Odontologia',
    city: 'Dois Vizinhos',
    year: 2025,
    venue: 'Clube Arrudão',
    imageUrl:
      'https://images.unsplash.com/photo-1618355776464-8666794d2520?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gala-02',
    title: 'Baile de Gala Engenharia de Produção UTFPR',
    category: 'gala',
    institution: 'UTFPR',
    course: 'Engenharia de Produção',
    city: 'Pato Branco',
    year: 2024,
    venue: 'Centro de Eventos Marreco',
    imageUrl:
      'https://images.unsplash.com/photo-1768508950790-3bbdfe3973c1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'colacao-02',
    title: 'Colação de Grau Administração UNIOESTE',
    category: 'colacao',
    institution: 'UNIOESTE',
    course: 'Administração',
    city: 'Francisco Beltrão',
    year: 2025,
    venue: 'Espaço Santa Fé',
    imageUrl:
      'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gala-03',
    title: 'Baile de Gala Odontologia UNISEP',
    category: 'gala',
    institution: 'UNISEP',
    course: 'Odontologia',
    city: 'Dois Vizinhos',
    year: 2026,
    venue: 'Clube Arrudão',
    imageUrl:
      'https://images.unsplash.com/photo-1768508948849-b2ee9e074ab1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cenografia-02',
    title: 'Cenografia Monumental Medicina CESUL',
    category: 'cenografia',
    institution: 'CESUL',
    course: 'Medicina',
    city: 'Francisco Beltrão',
    year: 2026,
    venue: 'Centro de Eventos Marreco',
    imageUrl:
      'https://images.unsplash.com/photo-1599739291127-15c456e459ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ensaio-02',
    title: 'Ensaio Fotográfico Direito UNIPAR',
    category: 'ensaio',
    institution: 'UNIPAR',
    course: 'Direito',
    city: 'Francisco Beltrão',
    year: 2024,
    venue: 'Centro Comunitário da Cango',
    imageUrl:
      'https://images.unsplash.com/photo-1591233378603-68642b2afb25?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gala-04',
    title: 'Baile de Gala Agronomia UNIOESTE',
    category: 'gala',
    institution: 'UNIOESTE',
    course: 'Agronomia',
    city: 'Francisco Beltrão',
    year: 2025,
    venue: 'Clube Arrudão',
    imageUrl:
      'https://images.unsplash.com/photo-1765632814488-52e6d0653ebe?auto=format&fit=crop&w=1200&q=80',
  },
]
