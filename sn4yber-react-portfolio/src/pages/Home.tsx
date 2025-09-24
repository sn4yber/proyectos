import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('@/components/Hero/Hero').then(m => ({ default: m.Hero })))
const About = lazy(() => import('@/components/About/About').then(m => ({ default: m.About })))
const Skills = lazy(() => import('@/components/Skills/Skills').then(m => ({ default: m.Skills })))
const Contact = lazy(() => import('@/components/Contact/Contact').then(m => ({ default: m.Contact })))

export const Home = () => {
  return (
    <main>
      <Suspense fallback={<div className="text-center text-lg py-10">Cargando sección...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="text-center text-lg py-10">Cargando sección...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="text-center text-lg py-10">Cargando sección...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="text-center text-lg py-10">Cargando sección...</div>}>
        <Contact />
      </Suspense>
    </main>
  )
}
