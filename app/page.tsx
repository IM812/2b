import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { Competencies } from '@/components/home/competencies'
import { FlagshipProjects } from '@/components/home/flagship-projects'
import { Stats } from '@/components/home/stats'
import { Process } from '@/components/home/process'
import { Industries } from '@/components/home/industries'
import { AboutPreview } from '@/components/home/about-preview'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Competencies />
      <FlagshipProjects />
      <Stats />
      <Process />
      <Industries />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
