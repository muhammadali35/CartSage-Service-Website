// src/components/CtaSection.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import ConsultationPopup from "../../components/ConsultatioPopup"; // Fixed typo

export default function CtaSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 py-32 bg-[#0F172A] overflow-hidden font-sans">
      {/* Overlay: subtle dark layer (optional, for depth) */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* ✅ Animated Blob — Brand Colors (Orange + Teal) */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-[#FF6B35] to-[#0EA5E9] rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, 40, -40, 0], 
          y: [0, 30, -30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Content on top */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Create <br className="hidden md:block" /> Something Great
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We shift you from today’s reality to tomorrow’s potential, ensuring your
          vision becomes impactful and beautifully executed.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
        >
          <Button
            content="LET’S BOOK A FREE CONSULTATION"
            onClick={() => setIsPopupOpen(true)}
            className="!bg-[#FF6B35] hover:!bg-[#F55C23] text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
          />
        </motion.div>
      </div>

      {/* Reusable Popup */}
      <ConsultationPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
}