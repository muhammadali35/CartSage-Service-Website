import { motion } from "framer-motion";
import hero from "../../assets/optimized/hero5.webp";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-serif">
      <motion.img
        src={hero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>

      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-8 lg:px-12">
        <div className="text-center text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6 font-serif"
          >
            Skyrocket Your Sales on Amazon, eBay & Walmart
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-2 sm:px-4 max-w-2xl mx-auto font-serif"
          >
            Effortless management with smart automation. Boost your e-commerce success with proven strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          >
            <Link to="/projects">
              <Button
                content="Explore Our Solutions"
                className="bg-[#4C93FF] hover:bg-indigo-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg rounded-full shadow-md hover:shadow-lg transition duration-300 font-serif"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;