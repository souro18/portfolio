import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Soumalina Majumdar',
  description: 'Portfolio of soumalina majumdar',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed flex w-full justify-between items-center px-4 md:px-12 h-20">
          <h3 className='text-lg bold'><Link href={'/'}>Porfolio</Link></h3>
          <nav>
            <Link href={'/project'}>projects</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
