export const metadata = {
  title: 'Mi Tiendita Juntos',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import PreguntasRespuestas from '@/components/preguntas-respuestas'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      {/* <Testimonials /> */}
      <PreguntasRespuestas />
      <Newsletter />
    </>
  )
}
