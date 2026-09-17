import type { JourneyStage } from '../types'

export const journeyStages: JourneyStage[] = [
  {
    step: 1,
    title: 'O Início do Sonho',
    timeFrame: '1º e 2º ano da faculdade',
    description:
      'Formação da comissão, apresentação da prévia 3D da festa e abertura do portal de adesão para toda a turma.',
    deliverables: ['Formação da comissão', 'Prévia 3D da festa', 'Portal de adesão online'],
    iconName: 'Sparkles',
  },
  {
    step: 2,
    title: 'Arrecadação & Festas do Meio',
    timeFrame: '2º e 3º ano da faculdade',
    description:
      'Suporte completo em eventos intermediários como Meio Médico, Meio Advogado e festas dos 500 dias, mantendo o caixa da turma saudável.',
    deliverables: ['Meio Médico / Meio Advogado', 'Festa dos 500 dias', 'Gestão financeira da comissão'],
    iconName: 'Banknote',
  },
  {
    step: 3,
    title: 'Sessões Fotográficas & Convites',
    timeFrame: '6 a 3 meses antes da formatura',
    description:
      'Ensaios temáticos com beca e roupas casuais em estúdio móvel, além da produção completa dos convites de gala.',
    deliverables: ['Ensaio com beca', 'Ensaio casual/externo', 'Convites de gala impressos'],
    iconName: 'Camera',
  },
  {
    step: 4,
    title: 'A Solenidade de Colação de Grau',
    timeFrame: 'Semana da formatura',
    description:
      'Cerimonial oficial com protocolo solene, becas sob medida e emoção milimetricamente coordenada do início ao fim.',
    deliverables: ['Cerimonial e protocolo', 'Becas sob medida', 'Coordenação de palco'],
    iconName: 'GraduationCap',
  },
  {
    step: 5,
    title: 'O Baile de Gala & After Party',
    timeFrame: 'A noite mais esperada',
    description:
      'Recepção monumental, gastronomia de alto padrão, open bar premium, shows ao vivo e pista de dança até o sol nascer.',
    deliverables: ['Recepção e gastronomia', 'Open bar premium', 'Shows e after party'],
    iconName: 'PartyPopper',
  },
]
