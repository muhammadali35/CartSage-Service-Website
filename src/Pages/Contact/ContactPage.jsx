import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import contactH from '../../assets/contact2.png'
import Contact from './Contact'
const ContactPage = () => {
  return (
    <>
    <SectionHeader title="Contact Us" bgImage={contactH} />
    <Contact/>
    </>
  )
}

export default ContactPage
