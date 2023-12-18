import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/navbar"
import Introduction from '@/components/introduction'

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
      <body className="bg-white text-white relative h-[5000px] pt-32">
        <div 
          className="absolute top-[2rem] w-[30rem] h-[30rem] left-[40rem] z-100 rounded-full blur-[10rem] bg-blue-300">
        </div>

        <div 
          className="absolute top-[2rem] w-[30rem] h-[30rem] right-[40rem] z-100 rounded-full blur-[10rem] bg-red-300">
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}

