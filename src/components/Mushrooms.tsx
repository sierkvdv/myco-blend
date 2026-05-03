import { useTranslations } from 'next-intl'
import Image from 'next/image'

const mushroomKeys = ['cordyceps', 'lions_mane', 'reishi', 'chaga', 'turkey_tail'] as const

const mushroomIcons: Record<string, string> = {
  cordyceps: '🌾',
  lions_mane: '🦁',
  reishi: '🍄',
  chaga: '🪨',
  turkey_tail: '🌈',
}

const mushroomImages: Record<string, string> = {
  cordyceps: '/images/cordyceps.png',
  lions_mane: '/images/lionsmane.png',
  reishi: '/images/reishi.png',
  chaga: '/images/chaga.png',
  turkey_tail: '/images/turkeytail.png',
}

const mushroomColors: Record<string, { bg: string; accent: string }> = {
  cordyceps: { bg: 'from-amber/10 to-amber/5', accent: 'bg-amber' },
  lions_mane: { bg: 'from-forest/10 to-forest/5', accent: 'bg-forest' },
  reishi: { bg: 'from-red-900/10 to-red-900/5', accent: 'bg-red-800' },
  chaga: { bg: 'from-stone-500/10 to-stone-500/5', accent: 'bg-stone-600' },
  turkey_tail: { bg: 'from-teal-700/10 to-teal-700/5', accent: 'bg-teal-700' },
}

export function Mushrooms() {
  const t = useTranslations('mushrooms')

  return (
    <section id="mushrooms" className="py-24 bg-beige-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-amber" />
            <span className="text-amber text-sm font-medium tracking-widest uppercase">Ingredients</span>
            <div className="w-8 h-px bg-amber" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            {t('title')}
          </h2>
          <p className="text-forest/60 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Mushroom cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mushroomKeys.map((key, index) => {
            const colors = mushroomColors[key]
            return (
              <div
                key={key}
                className={`group relative bg-gradient-to-br ${colors.bg} border border-beige-darker rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Card number */}
                <div className="absolute top-4 right-4 font-serif text-5xl font-bold text-forest/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Mushroom image */}
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={mushroomImages[key]}
                    alt={key}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Name */}
                <h3 className="font-serif text-xl font-bold text-forest mb-1">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-xs text-forest/40 italic mb-3">
                  {t(`items.${key}.latin`)}
                </p>

                {/* Origin badge */}
                <span className="inline-block text-xs bg-beige text-forest/60 px-2 py-0.5 rounded mb-4 border border-beige-darker">
                  {t(`items.${key}.origin`)}
                </span>

                {/* Description */}
                <p className="text-sm text-forest/65 leading-relaxed mb-5">
                  {t(`items.${key}.description`)}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-beige-darker">
                  <span className="text-xs text-forest/50">
                    {t(`items.${key}.traditional_use`)}
                  </span>
                  <span className={`text-xs text-white px-2 py-0.5 rounded-full ${colors.accent}`}>
                    {t(`items.${key}.beta_glucan`)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
