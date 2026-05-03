import { useTranslations } from 'next-intl'

export function CTA() {
  const t = useTranslations('cta')

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
  ]

  return (
    <section id="cta" className="py-24 bg-beige-dark/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-forest/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber" />
          <span className="text-amber text-sm font-medium tracking-widest uppercase">
            {t('badge')}
          </span>
          <div className="w-8 h-px bg-amber" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-6 leading-tight">
          {t('title').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t('title').split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <p className="text-forest/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-forest/70">
              <svg className="w-4 h-4 text-amber flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button className="bg-forest text-beige px-8 py-4 text-base font-medium rounded hover:bg-forest-light transition-all duration-200 shadow hover:shadow-lg">
            {t('primary')}
          </button>
          <button className="border-2 border-forest text-forest px-8 py-4 text-base font-medium rounded hover:bg-forest/5 transition-all duration-200">
            {t('secondary')}
          </button>
        </div>

        {/* MFDS Disclaimer */}
        <div className="max-w-lg mx-auto flex items-start gap-2 p-4 bg-beige border border-beige-darker rounded text-left">
          <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-forest/55 leading-relaxed">{t('disclaimer')}</p>
        </div>
      </div>
    </section>
  )
}
