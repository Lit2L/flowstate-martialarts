import { NavMobile } from '@/components/layout/mobile-nav'
import { NavBar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/site-footer'
import SiteHeader from '@/components/sections/site-header'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='w-full'>
      {/* <NavMobile /> */}
      {/* <NavBar scroll={true} /> */}
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}
