import React from "react";
import { motion } from "framer-motion";

const ScrollingText = () => {
  const items = [
     "Professional Website Development & SEO",
    "End-to-End Amazon Store Management",
    "eBay Listing Optimization & Growth",
    "Walmart Marketplace Strategy & Execution",
    "Real-Time Inventory & Order Sync",
    "Data-Driven Performance Analytics"
  ];

  const duplicatedItems = [...items, ...items];

  const itemVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div
      className="relative bg-gradient-to-r from-[#4C93FF] via-[#3b82f6] to-[#4C93FF] py-6 sm:py-8 overflow-hidden w-full font-serif"
      role="marquee"
      aria-label="Scrolling services list"
    >
      <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#4C93FF] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#4C93FF] to-transparent z-10"></div>

      <div className="scroller flex gap-6 sm:gap-8 md:gap-10">
        {duplicatedItems.map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center"
            variants={itemVariants}
            whileHover="hover"
            role="listitem"
            tabIndex={0}
          >
            <span className="text-white text-lg sm:text-xl md:text-2xl">●</span>
            <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium mx-2 sm:mx-3 md:mx-4 whitespace-nowrap font-serif">
              {text}
            </span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .scroller {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
        .scroller:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .scroller { animation-duration: 28s; }
        }
        @media (min-width: 1280px) {
          .scroller { animation-duration: 18s; }
        }
        div[role="marquee"] {
          background-size: 200% 100%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;