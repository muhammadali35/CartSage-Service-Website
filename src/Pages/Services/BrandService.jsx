"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import brand from './../../assets/brand.jpg'

const progressData = [
  { title: "BRANDING", value: 86, color: "bg-black" },
  { title: "DEVELOPMENT", value: 69, color: "bg-black" },
  { title: "MARKETING", value: 92, color: "bg-black" },
  { title: "STRATEGY", value: 78, color: "bg-black" },
];

export default function BrandServicesSection() {
  const [animatedValues, setAnimatedValues] = useState(
    progressData.map(() => 0)
  );

  useEffect(() => {
    progressData.forEach((item, i) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
        if (start >= item.value) clearInterval(interval);
      }, 15);
    });
  }, []);

  return (
    <section className="w-full min-h-[80vh] grid md:grid-cols-2 font-serif">
      {/* Left Image */}
      <div className="w-full h-full">
        <img
          src={brand}
          alt="Brand Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="bg-[#4f46e5] flex flex-col justify-center px-8 md:px-16 py-12 text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight  mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          We Offer a Wide <br /> Range of Brand <br /> Services
        </motion.h2>

        <motion.p
          className="text-white text-lg leading-relaxed mb-10 max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We are a creative agency working with brands building insightful
          strategy, creating unique designs and crafting value.
        </motion.p>

        {/* Progress Bars */}
        <div className="space-y-6">
          {progressData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex justify-between  font-bold mb-2">
                <span>{item.title}</span>
                <span>{animatedValues[i]}%</span>
              </div>
              <div className="w-full  h-[4px] rounded-full overflow-hidden">
                <motion.div
                  className={`${item.color} h-[4px]`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
