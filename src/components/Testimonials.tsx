import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-[#FAF9F5] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            Vozes de Quem Confiou
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            O que dizem os presidentes de <em className="font-serif italic font-normal">comissão</em>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="flex flex-col rounded-[2px] border border-stone-200/70 bg-white p-8"
            >
              <div className="flex gap-0.5 text-[#800E0E]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="mt-6 border-t border-stone-200/70 pt-5">
                <p className="font-sans text-sm font-semibold text-stone-900">{testimonial.author}</p>
                <p className="mt-0.5 text-xs text-stone-500">
                  {testimonial.role} · {testimonial.course} {testimonial.institution}
                </p>
                <span className="mt-4 inline-block rounded-[2px] border border-stone-200/70 bg-[#F3F1EB] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
                  Formatura Entregue em {testimonial.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
