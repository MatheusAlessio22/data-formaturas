import type { LucideIcon } from 'lucide-react'

export interface HeroStat {
  value: string
  label: string
  sublabel?: string
  icon?: LucideIcon
}

export interface PartnerUniversity {
  name: string
  campus: string
  acronym: string
  logoText: string
}

export interface Differential {
  id: string
  number: string
  title: string
  description: string
  highlight: boolean
  iconName: string
}

export interface JourneyStage {
  step: number
  title: string
  timeFrame: string
  description: string
  deliverables: string[]
  iconName: string
}

export type GalleryCategory = 'gala' | 'colacao' | 'ensaio' | 'cenografia'

export interface GalleryItem {
  id: string
  title: string
  category: GalleryCategory
  institution: string
  course: string
  city: string
  year: number
  venue: string
  imageUrl: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  course: string
  institution: string
  city: string
  quote: string
  rating: number
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
}

export type EducationLevel = 'ensino-medio' | 'tecnico' | 'graduacao' | 'pos-graduacao'

export interface SimulatorState {
  step: number
  educationLevel: EducationLevel
  course: string
  city: string
  studentCount: number
  graduationYear: number
  features: string[]
  estimatedPackage: string
}
