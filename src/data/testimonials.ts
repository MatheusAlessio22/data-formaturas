import type { Testimonial } from '../types'

// PROVISÓRIO: depoimentos de exemplo para a apresentação ao cliente.
// Substituir pelas citações reais (e nomes completos/autorização de uso) antes de publicar.
export const testimonials: Testimonial[] = [
  {
    id: 'amanda-s',
    author: 'Amanda S.',
    role: 'Presidente da Comissão',
    course: 'Direito',
    institution: 'CESUL',
    city: 'Francisco Beltrão',
    quote:
      'A segurança que a Data Formaturas passou pra gente foi o que mais pesou na decisão. Todo o dinheiro arrecadado pela turma foi acompanhado de perto, sem surpresas e sem dor de cabeça até o último dia.',
    rating: 5,
  },
  {
    id: 'lucas-m',
    author: 'Lucas M.',
    role: 'Presidente da Comissão',
    course: 'Medicina',
    institution: 'UNIPAR',
    city: 'Francisco Beltrão',
    quote:
      'A grandiosidade do baile superou tudo que imaginávamos. Cenografia, iluminação e atração musical no nível de uma festa de outro patamar. A turma toda comenta até hoje.',
    rating: 5,
  },
  {
    id: 'gabriela-f',
    author: 'Gabriela F.',
    role: 'Presidente da Comissão',
    course: 'Agronomia',
    institution: 'UNISEP',
    city: 'Francisco Beltrão',
    quote:
      'A equipe esteve presente em cada etapa, do primeiro ano até a noite da formatura. Dedicação de quem realmente entende do assunto e trata a comissão como parceira, não como cliente.',
    rating: 5,
  },
]
