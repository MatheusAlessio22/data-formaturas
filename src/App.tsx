import Differentials from './components/Differentials'
import FAQ from './components/FAQ'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import GraduationSimulator from './components/GraduationSimulator'
import Header from './components/Header'
import Hero from './components/Hero'
import JourneyTimeline from './components/JourneyTimeline'
import ProjectsGallery from './components/ProjectsGallery'
import Testimonials from './components/Testimonials'
import TrustSafety from './components/TrustSafety'

function App() {
  return (
    <>
      <Header />
      <main className="bg-offwhite">
        <Hero />
        <Differentials />
        <JourneyTimeline />
        <ProjectsGallery />
        <GraduationSimulator />
        <TrustSafety />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
