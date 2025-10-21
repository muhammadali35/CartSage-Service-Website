import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ServicesSection from './Services'
import serviceH from '../../assets/optimized/HeroImgs/serviceHero.webp'
const ServicePage = () => {
  return (
    <>
         <SectionHeader title="Services" bgImage={serviceH} />
      <ServicesSection/>
    </>
  )
}

export default ServicePage
