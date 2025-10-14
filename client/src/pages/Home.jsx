import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Feature from '../components/home/Feature'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      
      <div id="features">
        <Feature />
      </div>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="pricing">
        <Pricing />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <CTA />
      <Footer />
    </div>
  )
}

export default Home