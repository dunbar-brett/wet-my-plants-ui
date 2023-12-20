import { Montserrat } from 'next/font/google';
import './globals.css';
import SideNav from '@/app/ui/sidenav';
import Image from 'next/image';

const monts = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monts.className} antialiased`}>
        {/* <div className="w-full flex-none md:w-64">Side Nav goes here</div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">
            <div className="min-h-[18%] bg-plant-green bg-plant-pattern flex justify-center items-center md:overflow-y-auto">
              <Image
                src="/hero-image.svg"
                alt="Wet My Plants Logo"
                width={100}
                height={24}
                priority
              ></Image>
            </div>
            <main className="flex min-h-screen flex-col p-6 md:overflow-y-auto md:p-12 bg-gray-200 bg-plant-pattern-gray">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
