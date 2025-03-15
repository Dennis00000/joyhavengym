import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Welcome to Joyhaven",
  description: "Where every rep builds your best self! Join our fitness community today.",
  keywords: "gym, fitness, workout, personal training, joyhaven, strength training, cardio",
  authors: [{ name: "Joyhaven Fitness" }],
  openGraph: {
    title: "Joyhaven - Elevate Your Fitness",
    description: "Welcome to Joyhaven, where every rep builds your best self! Join our fitness community today.",
    url: "https://joyhaven.com",
    siteName: "Joyhaven Fitness",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Joyhaven Fitness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: "v0.dev",
  metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'