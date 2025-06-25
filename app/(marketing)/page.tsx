import { infos } from '@/config/landing'
import BookingSection from '@/components/booking-section'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import Powered from '@/components/sections/powered'
import PreviewLanding from '@/components/sections/preview-landing'
import Testimonials from '@/components/sections/testimonials'

export default function IndexPage() {
  return (
    <div className='min-h-screen w-full max-w-full'>
      <HeroLanding />
      {/* <HeroSection /> */}

      {/* <BookingSection /> */}
    </div>
  )
}
