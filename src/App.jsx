import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
