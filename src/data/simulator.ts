import type { LucideIcon } from 'lucide-react'
import { Camera, Martini, Music, PartyPopper, Sparkles } from 'lucide-react'
import type { EducationLevel } from '../types'

export interface TurmaTypeOption {
  value: EducationLevel
  label: string
  description: string
}

export const turmaTypeOptions: TurmaTypeOption[] = [
  { value: 'graduacao', label: 'Ensino Superior', description: 'Faculdade ou universidade' },
  { value: 'ensino-medio', label: 'Terceirão', description: 'Último ano do Ensino Médio' },
]

export const courseOptions: string[] = [
  'Medicina',
  'Direito',
  'Agronomia',
  'Odontologia',
  'Engenharia de Produção',
  'Administração',
  'Enfermagem',
  'Fisioterapia',
  'Psicologia',
  'Arquitetura',
]

export const institutionOptions: string[] = ['UNIPAR', 'CESUL', 'UNISEP', 'UTFPR', 'UNIOESTE', 'UEPG/FAISU']

export const cityOptions: string[] = ['Francisco Beltrão - PR', 'Pato Branco - PR', 'Dois Vizinhos - PR']

export const graduationYearOptions: number[] = [2025, 2026, 2027, 2028]

export interface StructureFeature {
  id: string
  label: string
  description: string
  iconName: string
}

export const structureFeatures: StructureFeature[] = [
  {
    id: 'baile-gala',
    label: 'Baile de Gala com Atração Musical',
    description: 'Show ao vivo e pista de dança para a noite mais esperada',
    iconName: 'Music',
  },
  {
    id: 'colacao-cenografia',
    label: 'Colação Solene com Cenografia Completa',
    description: 'Palco, iluminação cênica e protocolo oficial',
    iconName: 'Sparkles',
  },
  {
    id: 'cobertura-4k',
    label: 'Cobertura Fotográfica 4K & Convite de Gala',
    description: 'Registro cinematográfico e convites impressos exclusivos',
    iconName: 'Camera',
  },
  {
    id: 'festas-intermediarias',
    label: 'Festas Intermediárias (Meio Médico / Meio Curso)',
    description: 'Eventos de integração ao longo do curso',
    iconName: 'PartyPopper',
  },
  {
    id: 'open-bar',
    label: 'Open Bar Premium & Gastronomia de Gala',
    description: 'Cardápio autoral e bar completo durante toda a festa',
    iconName: 'Martini',
  },
]

export const structureFeatureIcons: Record<string, LucideIcon> = {
  Music,
  Sparkles,
  Camera,
  PartyPopper,
  Martini,
}
