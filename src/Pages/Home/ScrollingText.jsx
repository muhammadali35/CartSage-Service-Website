// src/components/ScrollingText.jsx
import React from "react";

const ScrollingText = () => {
  const items = [
    "End-to-End Amazon Store Management",
    "eBay Listing Optimization & Growth",
    "Walmart Marketplace Strategy & Execution",
    "Real-Time Inventory & Order Sync",
    "Data-Driven Performance Analytics"
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-[#2563EB] py-8 overflow-hidden w-full whitespace-nowrap">
      {/* ✅ Single container with duplicated content */}
      <div className="scroller flex gap-10">
        {duplicatedItems.map((text, i) => (
          <React.Fragment key={i}>
            <span className="text-[#FF6B35] text-2xl">•</span>
            <span className="text-white text-lg md:text-xl font-semibold mx-2">
              {text}
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* ✅ Seamless infinite scroll with perfect timing */}
      <style jsx>{`
        .scroller {
          display: inline-flex;
          animation: scroll 24s linear infinite;
          /* Start immediately — no delay */
          animation-timing-function: linear;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px)); /* Stop exactly at midpoint */
          }
        }

        /* Optional: Pause on hover */
        .scroller:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;