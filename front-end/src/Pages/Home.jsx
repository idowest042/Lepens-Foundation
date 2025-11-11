import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Service from '../Components/Service'
import Testimonials from '../Components/Testimonials'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <About />
        <Service />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home