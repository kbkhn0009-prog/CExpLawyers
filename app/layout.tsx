import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Cormorant_Garamond } from "next/font/google"
import dynamic from "next/dynamic"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin", "cyrillic"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
})

const Analytics = dynamic(() => import("@vercel/analytics/next").then(mod => mod.Analytics))
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then(mod => mod.SpeedInsights))

export const metadata: Metadata = {
  title: "Consul Expert Lawyer | Юридическая защита с душой и интеллектом",
  description:
    "Диджитал-юридическое агентство с AI-консультантом. Кирилл Барбухин и Женя Малышева — команда юристов с 15+ лет опыта в сложных делах. Решаем задачи, которые другие боятся брать.",
  keywords: "юрист, юридические услуги, адвокат, консультация юриста, гражданское право, семейное право, наследственное право, AI юрист, юридический консультант",
  authors: [{ name: "Кирилл Барбухин, Женя Малышева" }],
  creator: "Consul Expert Lawyer",
  publisher: "Consul Expert Lawyer",
  metadataBase: new URL("https://www.consulexpert.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Consul Expert Lawyer | Юридическая защита с душой и интеллектом",
    description: "Диджитал-юристы Кирилл Барбухин и Женя Малышева. 15+ лет опыта. AI-консультант 24/7.",
    url: "https://www.consulexpert.ru",
    siteName: "Consul Expert Lawyer",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Consul Expert Lawyer - Юридическое агентство",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consul Expert Lawyer | Юридическая защита",
    description: "Диджитал-юристы с 15+ лет опыта. AI-консультант 24/7.",
    images: ["/og/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Consul Expert Lawyer",
    "alternateName": "Consul Expert",
    "url": "https://www.consulexpert.ru",
    "logo": "https://www.consulexpert.ru/logo.png",
    "description": "Диджитал-юридическое агентство с AI-консультантом",
    "founder": [
      {
        "@type": "Person",
        "name": "Кирилл Барбухин",
        "jobTitle": "Юрист-стратег, Основатель"
      },
      {
        "@type": "Person",
        "name": "Женя Малышева",
        "jobTitle": "Юрист-переговорщик, Сооснователь"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "streetAddress": "ул. Большая Дмитровка",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-XXX-XXX-XX-XX",
      "contactType": "customer service",
      "availableLanguage": ["Russian"]
    }
  }

  return (
    <html lang="ru" className={`${poppins.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

