import type { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { heroEyebrow, heroHeadline, heroStats, heroSubheadline } from '../data/hero'
import { partnerUniversities } from '../data/universities'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

function scrollToHash(href: string) {
  return (e: MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  return (
    <section className="bg-offwhite pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-[2px] border border-stone-200/80 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#800E0E] shadow-sm"
          >
            <span>{heroEyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 font-sans text-4xl font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
          >
            {heroHeadline.prefix} <em className="font-serif italic font-normal text-stone-800">{heroHeadline.highlight}</em>
            {heroHeadline.suffix}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            {heroSubheadline}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#simulador"
              onClick={scrollToHash('#simulador')}
              className="rounded-[2px] bg-[#800E0E] px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.06em] text-white transition-all hover:bg-[#680A0A]"
            >
              Simular Projeto da Minha Turma
            </a>
            <a
              href="#portfolio"
              onClick={scrollToHash('#portfolio')}
              className="rounded-[2px] border border-stone-300 px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.06em] text-stone-700 transition-colors hover:bg-stone-100"
            >
              Ver Formaturas Realizadas
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex divide-x divide-stone-300"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex-1 px-5 first:pl-0">
                <p className="font-sans text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-stone-600 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2px] border-[6px] border-white shadow-md">
            <img
              src="/hero-bg.jpg"
              alt="Turma de formandos em traje de gala celebrando a formatura com a Data Formaturas"
              className="aspect-square w-full object-cover [filter:saturate(0.9)_contrast(1.05)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800E0E]/20 via-transparent to-transparent mix-blend-multiply" />
          </div>

          <div className="absolute inset-x-4 bottom-4 rounded-[2px] border border-stone-200/70 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#800E0E]">
              Comissão de Administração • Celebração Data Formaturas
            </p>
            <p className="mt-1.5 font-body text-xs italic text-stone-600">
              &ldquo;Fechamos no 2º ano da faculdade. No dia da colação e do baile foi tudo impecável: zero
              imprevistos e uma estrutura monumental.&rdquo;
            </p>
            <p className="mt-1 text-[11px] font-medium text-stone-500">
              — Comissão de Formatura UNIPAR (Turma 2021)
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-y border-stone-200/70 bg-offwhite-subtle py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max">
          <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 pr-16">
            {[...partnerUniversities, ...partnerUniversities, ...partnerUniversities].map((uni, i) => (
              <span
                key={`group1-${uni.acronym}-${i}`}
                className="whitespace-nowrap text-sm font-medium tracking-wide text-stone-500"
              >
                {uni.logoText}
              </span>
            ))}
          </div>

          <div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-around gap-16 pr-16">
            {[...partnerUniversities, ...partnerUniversities, ...partnerUniversities].map((uni, i) => (
              <span
                key={`group2-${uni.acronym}-${i}`}
                className="whitespace-nowrap text-sm font-medium tracking-wide text-stone-500"
              >
                {uni.logoText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
