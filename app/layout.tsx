import { Analytics } from '@vercel/analytics/react'
import { Urbanist } from 'next/font/google'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'A Fashion Site from Louise Lu',
  description: 'A Fashion Site from Louise Lu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
