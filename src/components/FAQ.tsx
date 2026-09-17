import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="faq" className="bg-white pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            Perguntas Frequentes
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl">
            Tudo o que a comissão precisa <em className="font-serif italic font-normal">saber</em>.
          </h2>
        </div>

        <div className="mt-14 border-t border-stone-200/70">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className="border-b border-stone-200/70">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-sans text-base font-semibold text-stone-900 sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg font-light text-[#800E0E]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-stone-600 sm:text-base">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
