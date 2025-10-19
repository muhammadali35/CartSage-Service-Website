// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import LazyLoader from './components/LazyLoader'; 
const Navbar = lazy(() => import('./components/Layout/Nav'));
const Footer = lazy(() => import('./components/Layout/Footer'));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const Home = lazy(() => import('./Pages/Home/Home'));
const ServicePage = lazy(() => import("./Pages/Services/ServicePage"));
const ServiceDetailPage = lazy(() => import("./Pages/Services/ServiceDetail"));
const ProjectPage = lazy(() => import("./Pages/Projects/ProjectPage"));
// const TestimonialPage = lazy(() => import("./Pages/Testimonial/TestimonialPage"));
const ContactPage = lazy(() => import("./Pages/Contact/ContactPage"));

function App() {
  return (
    <Suspense fallback={<LazyLoader />}> 
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </Router>
    </Suspense>
  );
}

export default App;