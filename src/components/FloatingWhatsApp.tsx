import { MessageCircle } from 'lucide-react'

const floatingWhatsappUrl =
  'https://wa.me/5546999172056?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20a%20minha%20turma%20de%20formatura.'

export default function FloatingWhatsApp() {
  return (
    <a
      href={floatingWhatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Diretoria no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-[2px] border border-white/20 bg-[#800E0E] px-4 py-3.5 text-white shadow-lg transition-colors hover:bg-[#680A0A] sm:px-5"
    >
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
        <MessageCircle className="h-5 w-5" />
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-white bg-green-500" />
        </span>
      </span>
      <span className="hidden text-xs font-semibold uppercase tracking-wider sm:inline">
        Falar com a Diretoria
      </span>
    </a>
  )
}
