import type React from "react"
import type { Metadata } from "next"
import { Inter, Quicksand } from "next/font/google"
import "./globals.css"
import "../lib/i18n"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Monynha Softwares",
  description: "Democratizando a inovação com soluções inclusivas e acessíveis",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-brand: ${quicksand.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${quicksand.variable} antialiased`}>{children}</body>
    </html>
  )
}
