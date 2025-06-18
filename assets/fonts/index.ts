import { Inter as FontSans, Urbanist } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontUrban = Urbanist({
  subsets: ['latin'],
  variable: '--font-urban'
})

export const fontHeading = localFont({
  src: './horizon_outlined.otf',
  variable: '--font-heading'
})

export const fontGeist = localFont({
  src: './horizon.otf',
  variable: '--font-geist'
})
