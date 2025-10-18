// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import hero from "../../assets/hero5.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-serif">
      {/* ✅ Background Image with Subtle Zoom Animation */}
      <motion.img
        src={hero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
      />

      {/* ✅ Full Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* ✅ Content — Centered */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center text-white max-w-2xl">
          {/* ✅ Title: Slide from Left */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Grow Your Sales on Amazon, eBay & Walmart — Hands-Free
          </motion.h1>

          {/* ✅ Description: Fade In */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="text-gray-200 text-lg md:text-xl mb-8 px-2"
          >
            Smart systems. Real results. End-to-end Amazon, eBay, and Walmart management.
          </motion.p>

          {/* ✅ Button: Slide from Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          >
            <Link to="/projects">
              <Button content="View Our Projects" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;