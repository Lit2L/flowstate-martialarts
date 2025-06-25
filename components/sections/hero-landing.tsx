import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, InstagramIcon } from 'lucide-react'

// import { env } from "@/process.env.mjs";

import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

import { Badge } from '../ui/badge'
import PostVideo from './post-video'

export default async function HeroLanding() {
  return (
    <section className='w-full space-y-6 border-4 py-20 sm:py-28 lg:py-36'>
      <div className='flex h-full w-full flex-col justify-between'>
        <div className='container max-w-5xl items-center gap-5 text-center'>
          <Link
            href='https://www.instagram.com/_flowstatemartialarts/'
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'px-4'
            )}
            target='_blank'
          >
            <Badge className='mr-3'>🎉</Badge>
            <Badge className='hidden md:flex'>
              Follow Us &nbsp;On Instagram!
              <InstagramIcon className='ml-2 size-3.5' />
            </Badge>
          </Link>

          <div className='relative z-0 flex min-h-screen w-full flex-col items-center border-4 lg:min-h-[768px]'>
            <div className='absolute z-10 h-full w-full bg-background/50' />
            <div className='absolute -z-10'>
              <PostVideo />
            </div>
            <div className='flex h-[800px] flex-col justify-between border-4 sm:h-full'>
              <div className='z-20 mx-auto max-w-3xl text-center'>
                <h1 className='text-balance font-geist text-3xl font-bold sm:text-5xl/tight lg:text-6xl/tight'>
                  Flow State
                </h1>
                <h2 className='mt-3 text-balance font-heading text-xl font-bold sm:text-3xl lg:text-4xl'>
                  Martial Arts
                </h2>
              </div>
              <div className='z-10'>
                <p className='mx-auto max-w-lg text-pretty text-base/7 sm:text-lg/8'>
                  Martial Arts is a transformative journey that empowers
                  individuals to achieve their full potential through the
                  practice of martial arts. Our program combines physical
                  training, mental discipline, and personal growth to help you
                  unlock your inner strength and confidence.
                </p>
              </div>
              <div className='z-20 mx-auto grid gap-3 sm:flex sm:justify-center'>
                <Button size='lg'>Try A Free Class</Button>
                <Button size='lg' variant={'link'}>
                  Learn More <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
