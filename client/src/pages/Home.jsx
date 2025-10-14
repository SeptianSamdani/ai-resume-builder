import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Feature from '../components/home/Feature'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Home
