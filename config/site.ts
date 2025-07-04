import { SidebarNavItem, SiteConfig } from 'types'

// import { env } from "@/process.env.mjs";

const site_url = process.env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'Flow State',
  description:
    'Get your project off to an explosive start with Flow State - Martial Arts! Harness the power of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui and Stripe to build your next big thing.',
  url: site_url || 'https://flowstate-martialarts.com',
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: 'https://instagram.com/_flowstatemartialarts',
    github: 'https://github.com/mickasmt/next-saas-stripe-starter'
  },
  mailSupport: 'support@saas-starter.com'
}

export const footerLinks: SidebarNavItem[] = [
  // {
  //   title: 'Company',
  //   items: [
  //     { title: 'About', href: '#' },
  //     { title: 'Enterprise', href: '#' },
  //     { title: 'Terms', href: '/terms' },
  //     { title: 'Privacy', href: '/privacy' }
  //   ]
  // }
  // {
  //   title: 'Product',
  //   items: [
  //     { title: 'Security', href: '#' },
  //     { title: 'Customization', href: '#' },
  //     { title: 'Customers', href: '#' },
  //     { title: 'Changelog', href: '#' }
  //   ]
  // },
  // {
  //   title: 'Docs',
  //   items: [
  //     { title: 'Introduction', href: '#' },
  //     { title: 'Installation', href: '#' },
  //     { title: 'Components', href: '#' },
  //     { title: 'Code Blocks', href: '#' }
  //   ]
  // }
]
