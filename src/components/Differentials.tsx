import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Banknote, Briefcase, Building2, Camera, Clapperboard, FileCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { differentials } from '../data/differentials'
import type { Differential } from '../types'

const iconMap: Record<string, LucideIcon> = {
  Clapperboard,
  Banknote,
  FileCheck,
  Briefcase,
  Camera,
  Building2,
}

function TiltCard({ item }: { item: Differential }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 })
  const Icon = iconMap[item.iconName] ?? Building2

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="rounded-[2px] border border-stone-200/70 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#800E0E]/40 hover:shadow-md"
    >
      <span className="font-sans text-5xl font-semibold tracking-tight text-stone-200">{item.number}</span>

      <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#FDF2F2] text-[#800E0E]">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-sans text-xl font-semibold tracking-tight text-stone-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>

      {item.highlight && (
        <span className="mt-5 inline-block rounded-[2px] border border-[#800E0E]/20 bg-[#FDF2F2] px-3 py-1 text-xs font-semibold text-[#800E0E]">
          Confiança consolidada
        </span>
      )}
    </motion.div>
  )
}

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-[#FAF9F5] pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            O Padrão Data Formaturas
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            Engenharia de Eventos que <em className="font-serif italic font-normal">Elimina</em> a Preocupação da Comissão
          </h2>
          <p className="mt-4 text-base text-stone-600 sm:text-lg">
            Organizar uma formatura sem uma produtora sólida gera estresse, risco financeiro e sobrecarga para a
            comissão. Por isso, cada etapa é conduzida com processos testados em mais de mil eventos — para a
            turma viver a experiência sem se preocupar com a execução.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
