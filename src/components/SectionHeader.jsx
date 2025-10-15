"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title, bgImage }) {
  return (
    <section
      className="relative h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-white text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
      >
        {title}
      </motion.h1>

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 mt-4 flex items-center gap-2 text-white/90 text-lg"
      >
        <Link
          to="/home"
          className="hover:text-white transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <ChevronRight className="w-5 h-5 text-white/70" />
        <p className="text-white font-semibold">{title}</p>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.14-30.13,172-41.86
               C564.57,2.9,623.72-0.71,681.27,1.29
               c60.36,2.08,119.28,13.73,178.6,24.72
               c95.54,17.6,191.28,35.32,288.36,42.26V120H0V16.48
               c93.55,27.17,182,47.69,275.24,56.39
               C300.4,74.54,311.16,60.4,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
