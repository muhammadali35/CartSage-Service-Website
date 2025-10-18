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

      {/* ✅ MODERN SYMMETRICAL WAVE — Clean & Smooth */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]" // Thoda height badhaya for better visibility
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 
               C300,10 600,110 900,60 
               C1000,45 1100,50 1200,60 
               L1200,120 
               L0,120 
               Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}