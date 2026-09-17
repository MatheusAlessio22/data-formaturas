export interface TrustPillar {
  id: string
  title: string
  description: string
  iconName: string
}

export const trustPillars: TrustPillar[] = [
  {
    id: 'sede-propria',
    title: 'Sede Própria & Atendimento Presencial',
    description:
      'Escritório físico consolidado na Rua Curitiba, 1395 (Centro de Francisco Beltrão), sempre aberto para a comissão.',
    iconName: 'MapPin',
  },
  {
    id: 'contas-auditadas',
    title: 'Contas Auditadas & Portal Financeiro',
    description: 'Cada centavo arrecadado pela turma é transparente, contabilizado e protegido.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'contratos-blindados',
    title: 'Contratos Blindados',
    description: 'Garantia jurídica e seguro de entrega para cada fornecedor e atração contratada.',
    iconName: 'FileCheck',
  },
  {
    id: 'solidez-comprovada',
    title: 'Solidez Comprovada',
    description: 'Zero cancelamentos e 100% dos mais de 1.000 eventos realizados com perfeição.',
    iconName: 'Award',
  },
]
