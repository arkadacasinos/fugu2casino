import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const fq2Display = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--fq2-display',
  display: 'swap',
})

const fq2Body = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--fq2-body',
  display: 'swap',
})

const SITE_URL = 'https://fugu2casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино',
  description:
    'Fugu Casino официальный сайт — играть онлайн в слоты и настольные игры без ограничений. Актуальное рабочее зеркало Фугу Казино, быстрая регистрация, щедрые бонусы и честные выплаты для каждого игрока.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Fugu Casino',
    title: 'Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино',
    description:
      'Fugu Casino официальный сайт — играть онлайн в слоты и настольные игры. Актуальное рабочее зеркало Фугу Казино, бонусы и честные выплаты.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Fugu Casino официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fugu Casino официальный сайт — играть онлайн, рабочее зеркало Фугу Казино',
    description:
      'Fugu Casino официальный сайт — играть онлайн в слоты и настольные игры. Актуальное рабочее зеркало Фугу Казино, бонусы и честные выплаты.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e4d3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${fq2Display.variable} ${fq2Body.variable}`}>
      <head>
        {/* Дополнительные пользовательские теги */}
        <meta name="keywords" content="fugu casino, fugu casino официальный сайт, fugu casino зеркало, fugu casino играть, фугу казино, фугу казино официальный, фугу казино зеркало рабочее, фугу казино играть, фугу казино онлайн" />
        <meta name="author" content="Fugu Casino" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Fugu Casino',
              url: SITE_URL,
              inLanguage: 'ru-RU',
              description:
                'Fugu Casino официальный сайт — играть онлайн в слоты и настольные игры. Актуальное рабочее зеркало Фугу Казино.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
