import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Manrope } from "next/font/google"
import "./globals.css"

const geistSans = GeistSans
const geistMono = GeistMono
const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BVPINC - Guiding Your Path to Success",
  description: "Non-tech society providing career guidance and placement support",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased dark`}>
      <head>
        <style>{`
html {
  font-family: ${geistSans.style.fontFamily};
  --font-sans: ${geistSans.variable};
  --font-mono: ${geistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
