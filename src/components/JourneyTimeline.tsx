import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Banknote, Camera, GraduationCap, PartyPopper, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { journeyStages } from '../data/journey'

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Banknote,
  Camera,
  GraduationCap,
  PartyPopper,
}

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="jornada" className="bg-white pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            A Jornada da Sua Turma
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            Do Primeiro Ano da Faculdade até a Noite Mais{' '}
            <em className="font-serif italic font-normal">Inesquecível</em> da Sua Vida.
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#E5E3DC] lg:block" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-[#800E0E] lg:block"
          />

          <div className="flex flex-col gap-10 lg:gap-16">
            {journeyStages.map((stage, index) => {
              const Icon = iconMap[stage.iconName] ?? Sparkles
              const isEven = index % 2 === 0

              return (
                <div key={stage.step} className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
                  <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-[2px] border-2 border-[#800E0E] bg-white lg:flex" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`rounded-[2px] border border-stone-200/70 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${
                      isEven ? 'lg:col-start-1' : 'lg:col-start-2'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-[#FDF2F2] text-[#800E0E]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-[#800E0E]">
                        FASE {String(stage.step).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-4 font-sans text-xl font-semibold tracking-tight text-stone-900">{stage.title}</h3>
                    <p className="mt-1 text-sm font-medium text-stone-500">{stage.timeFrame}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">{stage.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {stage.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="rounded-[2px] border border-stone-200/70 bg-[#F3F1EB] px-3 py-1 text-xs font-medium text-stone-600"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
