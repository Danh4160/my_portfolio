import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/navbar"
import ActiveSectionProvider from '@/context/active-section'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Dan Hosi | Portfolio',
  description: 'Hey I am Dan!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 text-gray-950 relative pt-32">
        <div 
          className="absolute top-[2rem] w-[30rem] h-[30rem] left-[40rem] z-100 rounded-full blur-[10rem] bg-blue-300">
        </div>

        <div 
          className="absolute top-[2rem] w-[30rem] h-[30rem] right-[40rem] z-100 rounded-full blur-[10rem] bg-red-300">
        </div>
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  )
}

