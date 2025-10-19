"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import brand from "./../../assets/agency.jpg";

const progressData = [
  { title: "Amazon Services", value: 90 },
  { title: "EBay Services", value: 80 },
  { title: "Walmart Services", value: 85 },
  { title: "Web Development", value: 95 },
];

export default function BrandServicesSection() {
  const [animatedValues, setAnimatedValues] = useState(
    progressData.map(() => 0)
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      setAnimatedValues(progressData.map(() => 0));
      controls.start({ opacity: 1, y: 0 });

      progressData.forEach((item, i) => {
        let start = 0;
        const interval = setInterval(() => {
          start += 1;
          setAnimatedValues((prev) => {
            const updated = [...prev];
            updated[i] = Math.min(start, item.value);
            return updated;
          });
          if (start >= item.value) {
            clearInterval(interval);
          }
        }, 15);
      });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-[90vh] md:min-h-[100vh] grid md:grid-cols-2 font-serif overflow-hidden"
    >
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-[40vh] md:h-full relative order-2 md:order-1"
      >
        <img
          src={brand}
          alt="Brand Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#4C93FF] flex flex-col justify-center px-5 sm:px-8 md:px-12 py-10 md:py-0 text-white relative order-1 md:order-2 font-serif"
      >
        <div className="relative z-10 max-w-lg mx-auto w-full">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-3 font-serif"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            We Offer a Wide Range of Brand Services
          </motion.h2>

          <motion.p
            className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-serif"
            initial={{ y: 15, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            We are a creative agency working with Amazon, eBay, Walmart, and web
            clients — building insightful strategy, creating unique designs, and
            delivering results that matter.
          </motion.p>

          <div className="space-y-4 sm:space-y-5">
            {progressData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <div className="flex justify-between font-semibold text-white text-sm sm:text-base mb-1.5 font-serif">
                  <span>{item.title}</span>
                  <span>{animatedValues[i]}%</span>
                </div>
                <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[#FF6B35]"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedValues[i]}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}