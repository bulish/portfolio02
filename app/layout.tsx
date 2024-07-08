import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/app.scss'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// components
import { Header } from '@components/shared/Header'
import { SocialsPanel } from '@components/shared/SocialsPanel'
import { NamePanel } from '@components/shared/NamePanel'
import { Toaster } from 'sonner'
import SessionProvider from '@components/SessionProvider'
import { getServerSession } from 'next-auth'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { PrimeReactProvider } from 'primereact/api'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>
        <SessionProvider session={session}>
          <Header />
          <div className="relative min-h-screen flex w-full max-width--no-padding">
            <SocialsPanel />
            <div className="flex-grow">{children}</div>
            <NamePanel />
          </div>
          <Toaster position="bottom-center" richColors expand={true} />
          <ConfirmDialog className='confirm bg-bordersColor p-4 rounded-lg' />
        </SessionProvider>
        </PrimeReactProvider>
      </body>
    </html>
  )
}
