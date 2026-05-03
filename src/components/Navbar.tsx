'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useState } from 'react'

const localeLabels: Record<string, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
}

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-beige-dark">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif font-bold text-xl text-forest tracking-widest">
            {t('brand')}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#mushrooms" className="text-sm font-medium text-forest/70 hover:text-forest transition-colors">
              {t('mushrooms')}
            </a>
            <a href="#about" className="text-sm font-medium text-forest/70 hover:text-forest transition-colors">
              {t('about')}
            </a>
            <a href="#process" className="text-sm font-medium text-forest/70 hover:text-forest transition-colors">
              {t('process')}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-forest/50">
              {(['ko', 'en', 'ja'] as const).map((loc, i) => (
                <span key={loc} className="flex items-center gap-1">
                  {i > 0 && <span className="text-forest/30">|</span>}
                  <button
                    onClick={() => handleLocaleChange(loc)}
                    className={`hover:text-forest transition-colors ${
                      locale === loc ? 'text-forest font-semibold' : 'text-forest/50'
                    }`}
                  >
                    {localeLabels[loc]}
                  </button>
                </span>
              ))}
            </div>
            <a
              href="#cta"
              className="bg-forest text-beige px-4 py-2 text-sm font-medium rounded hover:bg-forest-light transition-colors"
            >
              {t('buy')}
            </a>
          </div>

          <button
            className="md:hidden text-forest"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-beige-dark space-y-3">
            <a href="#mushrooms" className="block text-sm text-forest/70 py-1" onClick={() => setMenuOpen(false)}>
              {t('mushrooms')}
            </a>
            <a href="#about" className="block text-sm text-forest/70 py-1" onClick={() => setMenuOpen(false)}>
              {t('about')}
            </a>
            <a href="#process" className="block text-sm text-forest/70 py-1" onClick={() => setMenuOpen(false)}>
              {t('process')}
            </a>
            <a href="#cta" className="block text-sm font-medium text-forest py-1" onClick={() => setMenuOpen(false)}>
              {t('buy')}
            </a>
            <div className="flex items-center gap-2 pt-2 border-t border-beige-dark">
              {(['ko', 'en', 'ja'] as const).map((loc) => (
                <button
                  key={loc}
                  onClick={() => { handleLocaleChange(loc); setMenuOpen(false) }}
                  className={`text-xs px-2 py-1 rounded ${
                    locale === loc
                      ? 'bg-forest text-beige'
                      : 'text-forest/50 hover:text-forest'
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
