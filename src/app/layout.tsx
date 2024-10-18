// src/app/layout.tsx
// import { Header } from '@/components/Header'
// import { Footer } from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PhysioCare - Personalized Physiotherapy',
  description: 'Get your personalized physiotherapy care plan with PhysioCare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}