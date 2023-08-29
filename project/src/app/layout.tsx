import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Explore from './components/explore'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelas Belajar Design & Web Development BuildWithAngga',
  description: 'buildwithangga.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F6F8FE]`}>
        <header>
        <Explore />
        <Navbar/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
