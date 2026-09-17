import type { MouseEvent } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { company } from '../data/company'

const headerWhatsappUrl = `${company.contact.whatsappHref}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar uma proposta para a formatura da minha turma.',
)}`

const navLinks = [
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#simulador', label: 'Simulador' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#faq', label: 'FAQ' },
]

function scrollToTop(e: MouseEvent) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function scrollToHash(href: string) {
    return (e: MouseEvent) => {
      e.preventDefault()
      setIsMenuOpen(false)
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#FAF9F5]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" onClick={scrollToTop} className="flex items-center">
          <img src="/logo.png" alt="Data Formaturas" className="h-11 w-auto object-contain md:h-12" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollToHash(link.href)}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#800E0E]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={company.contact.phoneHref}
            className="hidden text-sm font-medium text-stone-700 transition-colors hover:text-[#800E0E] xl:inline"
          >
            {company.contact.phone}
          </a>
          <a
            href={headerWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-[2px] bg-[#800E0E] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-sm transition-all hover:bg-[#680A0A] sm:px-6"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-stone-200/70 text-stone-700 transition-colors hover:border-[#800E0E]/40 hover:text-[#800E0E] lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-stone-200/70 bg-[#FAF9F5] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={scrollToHash(link.href)}
                  className="rounded-[2px] px-3 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-white hover:text-[#800E0E]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={company.contact.phoneHref}
                className="mt-1 rounded-[2px] px-3 py-3 text-sm font-medium text-stone-500"
              >
                {company.contact.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
