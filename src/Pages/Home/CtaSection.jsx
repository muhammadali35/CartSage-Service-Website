// src/components/CtaSection.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import ConsultationPopup from "../../components/ConsultatioPopup"; 

const BRAND_COLOR = "#4C93FF";

export default function CtaSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-4 sm:px-6 md:px-8 py-20 md:py-28 bg-[#0F172A] overflow-hidden font-sans">
     
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR}, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{
          background: `radial-gradient(circle, ${BRAND_COLOR}, transparent 80%)`,
        }}
        animate={{
          y: [0, 20, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let’s Create{" "}
          <span className="text-[#4C93FF]">Something Great</span>
          <br className="hidden sm:block" />
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We shift you from today’s reality to tomorrow’s potential, ensuring your
          vision becomes impactful and beautifully executed.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 15 }}
        >
          <Button
            content="LET’S BOOK A FREE CONSULTATION"
            onClick={() => setIsPopupOpen(true)}
            className={`!bg-[${BRAND_COLOR}] hover:!bg-[#3a84f0] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 `}
          />
        </motion.div>
      </div>

      {/* Popup */}
      <ConsultationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}