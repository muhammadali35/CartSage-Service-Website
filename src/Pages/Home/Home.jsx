import React from 'react'
import HeroSection from './Herosection'
import ScrollingText from './ScrollingText'
import Services from '../Services/Services'
import BrandServicesSection from '../Services/BrandService'
// import Project from '../Projects/Project'
import Testimonial from '../Testimonial/Testimonial'
import CDATASection from './CtaSection'
import HomeProject from './HomeProject'
import HomeTestimonials from './HomeTestimonial'
const Home = () => {
  return (
    <>
     <HeroSection/> 
     <ScrollingText/>
     <Services/>
     <BrandServicesSection/>
     <HomeProject/>
     <HomeTestimonials/>
     <CDATASection/>
      
    </>
  )
}

export default Home
