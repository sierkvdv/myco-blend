import type { Metadata } from 'next'
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MYCO BLEND | 프리미엄 버섯 블렌드',
  description:
    '5가지 프리미엄 버섯 추출물 블렌드. 동충하초, 노루궁뎅이, 영지, 차가, 구름버섯. 본 제품은 식품이며, 질병의 예방·진단·치료를 목적으로 하지 않습니다.',
  keywords: ['버섯 파우더', '기능성 버섯', '동충하초', '영지버섯', '노루궁뎅이'],
}

type Locale = (typeof routing.locales)[number]

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${notoSerifKR.variable} ${notoSansKR.variable}`}>
      <body className="bg-beige font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
