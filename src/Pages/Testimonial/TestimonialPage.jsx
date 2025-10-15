import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import testimonialH from '../../assets/testimonialH.jpg'
import Testimonial from './Testimonial'
const TestimonialPage = () => {
  return (
    <>
      <SectionHeader title="Testimonials" bgImage={testimonialH} />
      <Testimonial/>
    </>
  )
}

export default TestimonialPage
