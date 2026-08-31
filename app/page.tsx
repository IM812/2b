import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { Competencies } from '@/components/home/competencies'
import { FlagshipProjects } from '@/components/home/flagship-projects'
import { Stats } from '@/components/home/stats'
import { AboutPreview } from '@/components/home/about-preview'
import { LatestNews } from '@/components/home/latest-news'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Competencies />
      <FlagshipProjects />
      <Stats />
      <AboutPreview />
      <LatestNews />
      <ContactCta />
    </>
  )
}
