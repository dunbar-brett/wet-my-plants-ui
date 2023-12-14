import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full flex-none md:w-64">Side Nav goes here</div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </body>
    </html>
  )
}
