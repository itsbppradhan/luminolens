import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono, Rethink_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { dark } from '@clerk/themes'

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';



const geistSans = Rethink_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LuminoLens: LuminoLens',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    appearance={{
        baseTheme: dark, // toggle this if you're using dark mode
      }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="fixed flex justify-end items-center p-4 gap-4 h-16 w-full backdrop-blur-3xl bg-white/40 dark:bg-black/40 z-50">
            <Link href="/"><Image src="/logo.jpg" alt="LuminoLens Logo" width={40} height={40} className="rounded-full" /></Link>
            <Link className='font-bold text-xl hidden md:block' href="/">LuminoLens</Link>
            <span className="w-full" />
            <ModeToggle />
            <SignedOut>
              <SignInButton>
                <Button variant="outline">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
              <Button>
                Sign Up
              </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </header>
            <div className='h-16'/>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}