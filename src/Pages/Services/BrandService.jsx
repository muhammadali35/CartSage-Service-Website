// src/components/BrandServicesSection.jsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import brand from "./../../assets/agency.jpg";

const progressData = [
  { title: "Amazon Services", value: 90 },
  { title: "eBay Services", value: 80 },
  { title: "Walmart Services", value: 85 },
  { title: "Web Development", value: 95 },
];

export default function BrandServicesSection() {
  const [animatedValues, setAnimatedValues] = useState(
    progressData.map(() => 0)
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

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
            updated[i] = start;
            return updated;
          });
          if (start >= item.value) {
            clearInterval(interval);
          }
        }, 20);
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-[105vh] grid md:grid-cols-2 font-sans overflow-hidden"
    >
      {/* Left Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full h-full relative"
      >
        <img
          src={brand}
          alt="Brand Services"
          className="w-full h-full object-cover"
        />
        {/* Optional: subtle overlay to match right side */}
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Right Content — Brand Colors Applied */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-[#0F172A] flex flex-col justify-center px-6 md:px-10 py-8 text-white relative"
      >
        {/* Overlay for depth (optional) */}
        <div className="absolute inset-0 bg-[#0F172A]/80 z-0"></div>

        <div className="relative z-10">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold leading-tight mb-3"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            We Offer a Wide <br /> Range of Brand <br /> Services
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base md:text-xl leading-relaxed mb-6 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            We are a creative agency working with Amazon, eBay, Walmart, and Web
            clients — building insightful strategy, creating unique designs and
            delivering results that matter.
          </motion.p>

          {/* Progress Bars — Orange Brand Color */}
          <div className="space-y-5">
            {progressData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
              >
                <div className="flex justify-between font-bold mb-1 text-white">
                  <span>{item.title}</span>
                  <span>{animatedValues[i]}%</span>
                </div>
                <div className="w-full bg-gray-700 h-[8px] rounded-full overflow-hidden">
                  <motion.div
                    className="h-[8px] rounded-full bg-[#FF6B35]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedValues[i]}%` }}
                    transition={{ duration: 0.01 }}
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