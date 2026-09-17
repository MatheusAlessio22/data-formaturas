import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../data/company'
import { partnerUniversities } from '../data/universities'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="border-t border-stone-200/70 bg-[#F3F1EB]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#800E0E]">
            As datas para os próximos anos já estão sendo reservadas pelas comissões
          </span>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl">
            Prontos para criar a noite mais marcante da vida da sua turma?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-stone-600 sm:text-lg">
            Garanta a data da sua turma agora. Agende uma visita à nossa sede ou receba a equipe da Data
            Formaturas na sua universidade.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-[2px] border border-stone-200/80 bg-stone-50 p-4 text-center">
            <p className="font-body text-xs text-stone-700 sm:text-sm">
              ⚠️ <strong className="font-semibold text-stone-900">Atenção comissões:</strong> as datas nos
              principais centros de eventos da região (Marreco, Santa Fé, Arrudão) costumam ser reservadas com
              18 a 24 meses de antecedência. Garanta a exclusividade da sua turma antes que outro curso feche
              a data.
            </p>
          </div>

          <a
            href={company.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#800E0E] px-9 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#680A0A]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com a Diretoria no WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <img src="/logo.png" alt="Data Formaturas" className="h-11 w-auto object-contain" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-600">
              Há mais de 20 anos transformando a formatura de turmas do Sudoeste do Paraná em marcos
              inesquecíveis, com segurança jurídica e excelência do primeiro ano ao baile de gala.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Dados Oficiais</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-stone-600">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#800E0E]" />
                <span>
                  {company.address.street}, {company.address.neighborhood} — {company.address.city} -{' '}
                  {company.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#800E0E]" />
                <a href={company.contact.phoneHref} className="hover:text-[#800E0E]">
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#800E0E]" />
                <a href={company.contact.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-[#800E0E]">
                  WhatsApp: {company.contact.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#800E0E]" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-[#800E0E]">
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Instituições Atendidas</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-stone-600">
              {partnerUniversities.map((uni) => (
                <li key={uni.acronym}>{uni.logoText}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-stone-400">Atendimento</p>
            <p className="mt-2 text-sm text-stone-600">{company.businessHours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200/70">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-xs text-stone-500">
            © 2026 Data Formaturas. Todos os direitos reservados. Francisco Beltrão - PR.
          </p>
        </div>
      </div>
    </footer>
  )
}
