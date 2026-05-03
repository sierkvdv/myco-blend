import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-forest-dark text-beige/70">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-serif font-bold text-2xl text-beige tracking-widest">
              {t('brand')}
            </div>
            <p className="text-sm text-beige/50">{t('tagline')}</p>

            {/* MFDS Disclaimer box */}
            <div className="mt-6 p-4 bg-beige/5 rounded border border-beige/10">
              <div className="text-xs font-semibold text-amber mb-2">{t('disclaimer_title')}</div>
              <p className="text-xs text-beige/50 leading-relaxed">{t('disclaimer_full')}</p>
            </div>
          </div>

          {/* Links column 1 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-beige/30 uppercase tracking-widest mb-4">
              Navigation
            </div>
            {[
              { label: t('links_product'), href: '#mushrooms' },
              { label: t('links_about'), href: '#about' },
              { label: t('links_process'), href: '#process' },
              { label: t('links_faq'), href: '#faq' },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="block text-sm text-beige/55 hover:text-beige transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Links column 2 */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-beige/30 uppercase tracking-widest mb-4">
              Support
            </div>
            {[
              { label: t('links_contact'), href: '#contact' },
              { label: t('links_privacy'), href: '#privacy' },
              { label: t('links_terms'), href: '#terms' },
            ].map((link) => (
              <a key={link.href} href={link.href}
                className="block text-sm text-beige/55 hover:text-beige transition-colors">
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <span className="text-xs border border-amber/30 text-amber/70 px-2 py-1 rounded">
                {t('mfds_note')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-beige/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-beige/30">{t('copyright')}</p>
          <div className="flex items-center gap-2 text-xs text-beige/30">
            <span>본 제품은 식품이며, 질병의 예방·진단·치료를 목적으로 하지 않습니다.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
