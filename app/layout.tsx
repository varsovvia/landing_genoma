import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GENOMA - Pixel Art Portfolio',
  description: 'Crisp pixel art for games & retro aesthetics. Explore sprites, tilesets, characters, and more.',
  keywords: 'pixel art, sprites, tilesets, game art, retro aesthetics',
  authors: [{ name: 'GENOMA' }],
  openGraph: {
    title: 'GENOMA - Pixel Art Portfolio',
    description: 'Crisp pixel art for games & retro aesthetics',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}
