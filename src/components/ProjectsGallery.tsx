import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { galleryItems } from '../data/gallery'
import type { GalleryCategory, GalleryItem } from '../types'

type FilterKey = GalleryCategory | 'todos'

const filters: { key: FilterKey; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'gala', label: 'Bailes de Gala' },
  { key: 'colacao', label: 'Colações Solenes' },
  { key: 'ensaio', label: 'Ensaios Fotográficos' },
  { key: 'cenografia', label: 'Cenografia & LED' },
]

const categoryLabels: Record<GalleryCategory, string> = {
  gala: 'Baile de Gala',
  colacao: 'Colação Solene',
  ensaio: 'Ensaio Fotográfico',
  cenografia: 'Cenografia & LED',
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('todos')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'todos') return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!selectedItem) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelectedItem(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem])

  function handleCtaClick() {
    setSelectedItem(null)
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="portfolio" className="bg-[#FAF9F5] pt-28 pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            Portfólio de Espetáculos
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl lg:text-5xl">
            Grandes histórias que ganharam palcos <em className="font-serif italic font-normal">inesquecíveis</em>.
          </h2>
          <p className="mt-4 text-base text-stone-600 sm:text-lg">
            Conheça alguns dos bailes e cerimônias mais luxuosos do Sudoeste do Paraná, produzidos pela Data
            Formaturas em duas décadas de história.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-1 rounded-[2px] border border-stone-200/70 bg-[#F2EFEB] p-1.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-[2px] px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'bg-[#800E0E] text-white shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group flex flex-col overflow-hidden rounded-[2px] border border-stone-200/70 bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#800E0E]/40 hover:shadow-md"
            >
              <div className={`relative overflow-hidden ${index % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover [filter:saturate(0.9)_contrast(1.05)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800E0E]/20 via-transparent to-transparent mix-blend-multiply" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans text-base font-semibold tracking-tight text-stone-900">
                    {item.course} {item.institution}
                  </h3>
                  <span className="shrink-0 rounded-[2px] border border-stone-200/70 bg-[#F3F1EB] px-2.5 py-1 text-[11px] font-semibold text-stone-600">
                    {item.year}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-stone-500">
                  {item.city} • {item.venue}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2px] bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-[2px] bg-white/90 text-stone-600 shadow-sm transition-colors hover:text-[#800E0E]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="h-full w-full object-cover [filter:saturate(0.9)_contrast(1.05)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#800E0E]/20 via-transparent to-transparent mix-blend-multiply" />
              </div>

              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
                  {categoryLabels[selectedItem.category]}
                </span>
                <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-stone-900">{selectedItem.title}</h3>
                <p className="mt-2 text-sm text-stone-600">
                  {selectedItem.institution} • {selectedItem.city} • {selectedItem.venue} • {selectedItem.year}
                </p>

                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="mt-6 rounded-[2px] bg-[#800E0E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-300 hover:bg-[#680A0A]"
                >
                  Quero Esse Padrão na Minha Formatura
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
