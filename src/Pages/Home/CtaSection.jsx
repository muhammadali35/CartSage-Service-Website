"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../../Components/Button";

export default function CtaSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 py-32 bg-[#D7FC00] overflow-hidden font-sans">
      {/* Subtle animated gradient blob (background effect) */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-green-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Create <br className="hidden md:block" /> Something Great
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-black/80 max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We shift you from today’s reality to tomorrow’s potential, ensuring your
        vision becomes impactful and beautifully executed.
      </motion.p>

      {/* Built-in Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        <Button
          content="LET’S TALK WITH US"
          onClick={() => console.log("CTA button clicked")}
          className="!bg-black hover:!bg-indigo-700 text-white px-10 py-4 text-lg"
        />
      </motion.div>

      {/* Scroll Up Button (bottom-right corner) */}
      <motion.a
        href="#top"
        className="absolute bottom-8 right-8 bg-black text-white rounded-full p-3 shadow-md hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.a>
    </section>
  );
}
