import { motion } from 'framer-motion'
import { Award, FileCheck, MapPin, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { trustPillars } from '../data/trustPillars'

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  ShieldCheck,
  FileCheck,
  Award,
}

export default function TrustSafety() {
  return (
    <section id="seguranca" className="bg-white pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            Governança &amp; Blindagem Financeira
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            A tranquilidade de quem nunca <em className="font-serif italic font-normal">falhou</em> em 20 anos de
            história.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {trustPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName] ?? ShieldCheck
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-[2px] border border-stone-200/70 bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#FDF2F2] text-[#800E0E]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-stone-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
