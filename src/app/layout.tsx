import type { Metadata } from "next"

import "@/styles/globals.css"

import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Warframe Info App",
  description: "Warframe information app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="px-5">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
