import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, MessageCircle } from 'lucide-react'
import { company } from '../data/company'
import {
  cityOptions,
  courseOptions,
  graduationYearOptions,
  institutionOptions,
  structureFeatureIcons,
  structureFeatures,
  turmaTypeOptions,
} from '../data/simulator'
import type { EducationLevel } from '../types'

const DEFAULT_SELECTED_FEATURES = ['baile-gala', 'colacao-cenografia', 'cobertura-4k']

function getPackageTier(score: number) {
  if (score >= 6) {
    return {
      name: 'Projeto Exclusivo Diamante',
      tagline: 'Estrutura de altíssimo padrão, cenografia monumental e experiência completa do início ao fim.',
    }
  }
  if (score >= 3) {
    return {
      name: 'Projeto Personalizado Gold',
      tagline: 'Equilíbrio perfeito entre sofisticação e praticidade para a comissão.',
    }
  }
  return {
    name: 'Projeto Essencial Silver',
    tagline: 'Base sólida e elegante para começar o planejamento da turma.',
  }
}

export default function GraduationSimulator() {
  const [turmaType, setTurmaType] = useState<EducationLevel>('graduacao')
  const [course, setCourse] = useState(courseOptions[0])
  const [institution, setInstitution] = useState(institutionOptions[0])
  const [city, setCity] = useState(cityOptions[0])
  const [studentCount, setStudentCount] = useState(40)
  const [year, setYear] = useState(graduationYearOptions[1])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(DEFAULT_SELECTED_FEATURES)

  function toggleFeature(id: string) {
    setSelectedFeatures((current) =>
      current.includes(id) ? current.filter((f) => f !== id) : [...current, id],
    )
  }

  const score = useMemo(() => {
    let s = selectedFeatures.length
    if (studentCount >= 60) s += 1
    if (studentCount >= 90) s += 1
    return s
  }, [selectedFeatures, studentCount])

  const tier = useMemo(() => getPackageTier(score), [score])

  const selectedLabels = useMemo(
    () => structureFeatures.filter((f) => selectedFeatures.includes(f.id)).map((f) => f.label),
    [selectedFeatures],
  )

  const whatsappUrl = useMemo(() => {
    const turmaLabel = turmaTypeOptions.find((t) => t.value === turmaType)?.label ?? ''
    const message = `Olá! Somos a comissão de formatura de ${course} (${turmaLabel} - ${institution}), em ${city}. Somos aproximadamente ${studentCount} formandos, com formatura prevista para ${year}. Gostaríamos de receber um estudo de viabilidade para o ${tier.name} com os seguintes itens: ${
      selectedLabels.join(', ') || 'a definir com a equipe'
    }. Podemos agendar uma conversa?`
    return `${company.contact.whatsappHref}?text=${encodeURIComponent(message)}`
  }, [turmaType, course, institution, city, studentCount, year, tier, selectedLabels])

  return (
    <section id="simulador" className="bg-[#FAF9F5] pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            Planejamento Inteligente
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            Simule a formatura dos sonhos da sua turma em{' '}
            <em className="font-serif italic font-normal">minutos</em>.
          </h2>
          <p className="mt-4 text-base text-stone-600 sm:text-lg">
            Ajuste os parâmetros do seu curso e receba um estudo prévio de viabilidade personalizado
            diretamente com nossos diretores.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Etapa 01 · Identificação</p>

              <div className="mt-4 inline-flex flex-wrap gap-1 rounded-[2px] border border-stone-200/70 bg-[#F2EFEB] p-1.5">
                {turmaTypeOptions.map((option) => {
                  const isActive = turmaType === option.value
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setTurmaType(option.value)}
                      className={`rounded-[2px] px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'bg-[#800E0E] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className="text-sm font-medium text-stone-700">Curso</span>
                  <div className="relative mt-1.5">
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full appearance-none rounded-[2px] border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-colors focus:border-[#800E0E]"
                    >
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-stone-700">Instituição</span>
                  <div className="relative mt-1.5">
                    <select
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full appearance-none rounded-[2px] border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-colors focus:border-[#800E0E]"
                    >
                      {institutionOptions.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-stone-700">Cidade</span>
                  <div className="relative mt-1.5">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full appearance-none rounded-[2px] border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-colors focus:border-[#800E0E]"
                    >
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                  </div>
                </label>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Etapa 02 · Dimensão &amp; Prazo</p>

              <div className="mt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-stone-700">Número de Formandos</span>
                  <span className="font-sans text-2xl font-semibold tracking-tight text-[#800E0E]">
                    {studentCount}
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={120}
                  step={1}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="range-luxury mt-3 w-full accent-[#800E0E]"
                />
                <div className="mt-1 flex justify-between text-xs text-stone-400">
                  <span>15</span>
                  <span>120</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-sm font-medium text-stone-700">Ano Previsto para a Formatura</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {graduationYearOptions.map((y) => {
                    const isActive = year === y
                    return (
                      <button
                        key={y}
                        type="button"
                        onClick={() => setYear(y)}
                        className={`rounded-[2px] border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? 'border-[#800E0E] bg-[#800E0E] text-white'
                            : 'border-stone-200/70 bg-white text-stone-600 hover:border-[#800E0E]/40'
                        }`}
                      >
                        {y}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                Etapa 03 · Estrutura Desejada
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {structureFeatures.map((feature) => {
                  const Icon = structureFeatureIcons[feature.iconName]
                  const isSelected = selectedFeatures.includes(feature.id)
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-start gap-3 rounded-[2px] border p-4 text-left transition-all duration-300 ${
                        isSelected
                          ? 'border-[#800E0E]/40 bg-[#FDF2F2]'
                          : 'border-stone-200/70 bg-white hover:border-[#800E0E]/30'
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] ${
                          isSelected ? 'bg-[#800E0E] text-white' : 'bg-[#F2EFEB] text-stone-500'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-stone-900">{feature.label}</p>
                        <p className="mt-0.5 text-xs text-stone-500">{feature.description}</p>
                      </div>
                      <div
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border ${
                          isSelected ? 'border-[#800E0E] bg-[#800E0E] text-white' : 'border-stone-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-[2px] border border-stone-200/70 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] lg:sticky lg:top-32"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
              Categoria Recomendada
            </span>
            <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-stone-900">{tier.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{tier.tagline}</p>

            <div className="mt-6 space-y-3 border-t border-stone-200/70 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Curso</span>
                <span className="font-medium text-stone-800">{course}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Instituição</span>
                <span className="font-medium text-stone-800">{institution}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Cidade</span>
                <span className="font-medium text-stone-800">{city}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Formandos</span>
                <span className="font-medium text-stone-800">{studentCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Ano Previsto</span>
                <span className="font-medium text-stone-800">{year}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-stone-200/70 pt-6">
              <p className="text-sm font-medium text-stone-700">Itens selecionados</p>
              <ul className="mt-3 space-y-2">
                {selectedLabels.length === 0 && (
                  <li className="text-sm text-stone-400">Nenhum item selecionado ainda.</li>
                )}
                {selectedLabels.map((label) => (
                  <li key={label} className="flex items-start gap-2 text-sm text-stone-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#800E0E]" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#800E0E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-md transition-all hover:bg-[#680A0A]"
            >
              <MessageCircle className="h-4 w-4" />
              Receber Estudo de Viabilidade no WhatsApp da Diretoria
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
