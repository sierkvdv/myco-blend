'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'

export function Hero() {
  const t = useTranslations('hero')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/880001953253302356.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-beige/70" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-forest/5 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-amber/8 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-amber" />
              <span className="text-amber text-sm font-medium tracking-widest uppercase">
                {t('tagline')}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-tight">
              {t('title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('title').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-forest/70 text-lg leading-relaxed max-w-md">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#mushrooms"
                className="bg-forest text-beige px-7 py-3.5 font-medium rounded hover:bg-forest-light transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {t('cta_primary')}
              </a>
              <a
                href="#about"
                className="border border-forest text-forest px-7 py-3.5 font-medium rounded hover:bg-forest/5 transition-all duration-200"
              >
                {t('cta_secondary')}
              </a>
            </div>

            {/* MFDS Disclaimer */}
            <div className="flex items-start gap-2 p-3 bg-forest/5 rounded border-l-2 border-amber">
              <svg className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-forest/60 leading-relaxed">{t('disclaimer')}</p>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-forest/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-amber/20 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Center circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-forest/10 to-amber/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-5xl font-bold text-forest/20 leading-none">菌</div>
                  <div className="font-serif text-lg text-forest/40 mt-1 tracking-widest">MYCO</div>
                </div>
              </div>

              {/* Mushroom dots around ring */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-10 h-10 rounded-full bg-beige border border-beige-dark shadow-sm flex items-center justify-center text-lg"
                  style={{
                    top: `${50 - 42 * Math.cos((angle * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {['🍄', '🌿', '🍂', '❄️', '🦃'][i]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-beige-dark">
          {[
            { value: '5', label: '핵심 버섯' },
            { value: '100%', label: '자실체 추출' },
            { value: '3rd', label: '독립 기관 검증' },
            { value: '無', label: '필러·합성 첨가물' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-forest">{stat.value}</div>
              <div className="text-xs text-forest/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
