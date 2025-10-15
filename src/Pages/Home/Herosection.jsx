import { motion } from "framer-motion";
import hero from "../../assets/hero3.jpg";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center gap-y-4  text-center md:text-left text-white px-6 md:px-16 w-full md:w-1/2 min-h-screen"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-12  ">
            We Make  Creative <span className="ml-10"> Things  Everyday </span>
          </h1>
          <p className="text-gray-300 text-lg mb-5 max-w-md mt-3">
            We are a digital agency that helps create immersive and engaging
            user experiences that grow your business.
          </p>
        <Button content="View Our Projects" className="bg-indigo-600 hover:bg-indigo-700 px-20"/>
        </motion.div>

        {/* Right Image (full side) */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full md:w-1/2 h-[400px] md:h-auto"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${hero})`,
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
