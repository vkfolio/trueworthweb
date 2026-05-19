import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'
import HeroSection from '../sections/HeroSection'
import PhilosophySection from '../sections/PhilosophySection'
import FeaturesSection from '../sections/FeaturesSection'
import IpadSection from '../sections/IpadSection'
import CinematicSection from '../sections/CinematicSection'

export default function Home() {
  return (
    <div className="relative bg-[#FFFFFF]">
      <Navigation />
      <main>
        <ErrorBoundary name="HeroSection"><HeroSection /></ErrorBoundary>
        <ErrorBoundary name="PhilosophySection"><PhilosophySection /></ErrorBoundary>
        <ErrorBoundary name="FeaturesSection"><FeaturesSection /></ErrorBoundary>
        <ErrorBoundary name="IpadSection"><IpadSection /></ErrorBoundary>
        <ErrorBoundary name="CinematicSection"><CinematicSection /></ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
