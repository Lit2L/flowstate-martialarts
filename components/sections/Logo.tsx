'use client'

import Image from 'next/image'

import { useTheme } from '@/hooks/use-theme'

function Logo() {
  const { theme } = useTheme()
  return (
    <Image
      src={
        theme === 'light'
          ? '/_static/flowstatelogo1.png'
          : '/_static/flowstatelogo1.png'
      }
      alt='Nerds Kickboxing Club'
      width={200}
      height={200}
      priority
      className='mx-auto opacity-60 transition-all duration-300'
    />
  )
}

export default Logo
