import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  const stats = [
    { value: t('stat1_value'), label: t('stat1_label') },
    { value: t('stat2_value'), label: t('stat2_label') },
    { value: t('stat3_value'), label: t('stat3_label') },
    { value: t('stat4_value'), label: t('stat4_label') },
  ]

  return (
    <section id="about" className="py-24 bg-forest text-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber text-sm font-medium tracking-widest uppercase">
                {t('badge')}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-beige leading-tight">
              {t('title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('title').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div className="space-y-4">
              <p className="text-beige/75 leading-relaxed">
                {t('description1')}
              </p>
              <p className="text-beige/75 leading-relaxed">
                {t('description2')}
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-beige/10 rounded-xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-forest-light p-8 flex flex-col items-center justify-center text-center group hover:bg-forest-dark transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-amber mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-beige/60 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative quote */}
        <div className="mt-16 pt-16 border-t border-beige/10 text-center">
          <blockquote className="font-serif text-xl sm:text-2xl text-beige/40 italic max-w-2xl mx-auto">
            &ldquo;오직 자연이 만든 것만을, 가장 순수한 형태로.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
