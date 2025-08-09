import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'
import { Contact } from '@/components/Contact/Contact'

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
