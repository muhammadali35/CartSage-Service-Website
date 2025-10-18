import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
// import Services from './Pages/Services/Services'
// import Testimonials from './Pages/Testimonials/Testimonials'
// import Contact from './Pages/Contact/Contact'
import Navbar from './components/Layout/Nav'
import ServiceDetailPage from "./Pages/Services/ServiceDetail";
import ServicePage from "./Pages/Services/ServicePage";
import ProjectPage from "./Pages/Projects/ProjectPage";
import TestimonialPage from "./Pages/Testimonial/TestimonialPage";
import Contact from "./Pages/Contact/Contact";
import Footer from './components/Layout/Footer'
import ContactPage from "./Pages/Contact/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";



function App() {


  return (
    <>
     <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path='/testimonials' element={<TestimonialPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
       <Route path="/services/:id" element={<ServiceDetailPage />} />
      
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
           <Route path='/' element={<Home/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
      <Footer/>
      <WhatsAppButton/>
      <ScrollToTopButton/>
     </Router>
    </>
  )
}

export default App
