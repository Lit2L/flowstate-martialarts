import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon } from 'lucide-react'

// import { env } from "@/process.env.mjs";

import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/mickasmt/next-saas-stripe-starter',
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 }
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e))

  return (
    <section className='space-y-6 py-20 sm:py-28 lg:py-36'>
      <div className='container flex max-w-5xl flex-col items-center gap-5 text-center'>
        <Link
          href='https://www.instagram.com/_flowstatemartialarts/'
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm', rounded: 'full' }),
            'px-4'
          )}
          target='_blank'
        >
          <span className='mr-3'>🎉</span>
          <span className='hidden md:flex'>Follow Us &nbsp;</span>On Instagram!
          <InstagramIcon className='ml-2 size-3.5' />
        </Link>
        {/*
        <div className='text-balance font-heading text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-[66px]'>
          <h1 className='text-gradient_indigo-purple font-extrabold'>
            Flow State
          </h1>
          <p className='text-gradient_blue pt-3 font-geist text-lg font-extrabold sm:text-xl md:text-2xl lg:text-3xl'>
            Martial Arts
          </p>
        </div> */}
        <div className=''>
          <Image
            src='/_static/flowstate1.png'
            alt='Flow State Logo'
            width={400}
            height={400}
            className='mx-auto mb-4'
          />
        </div>
        <p
          className='max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          On The Way..
          {/* Are you ready to take yourself to the next level? Flow State Martial */}
          {/* Arts is here to help you achieve your goals, whether you're a beginner
          or an experienced martial artist. Our expert instructors will guide
          you through every step of your journey, helping you build strength,
          confidence, and discipline. Join us today and discover the
          transformative power of martial arts! */}
        </p>
        {/*
        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Link
            href='/pricing'
            prefetch={true}
            className={cn(
              buttonVariants({ size: 'lg', rounded: 'full' }),
              'gap-2'
            )}
          >
            <span>See Info</span>
            <Icons.arrowRight className='size-4' />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
