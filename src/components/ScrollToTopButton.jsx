// components/ScrollToTopButton.jsx
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;

     
      setIsVisible(scrollY > 300);

      
      if (windowHeight > 0) {
        const progress = Math.min(scrollY / windowHeight, 1);
        setScrollProgress(progress * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

 
  const size = 56; 
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className="fixed bottom-28 right-6 z-50"
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Circular Progress Indicator */}
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          style={{ transformOrigin: "center" }}
        >
          {/* Background circle (inactive track) */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#333"
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity="0.2"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#3a84f0"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.1s ease-out",
            }}
          />
        </svg>

        {/* Arrow Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center bg-[#FF6B35] text-white rounded-full shadow-lg hover:bg-[#4C93FF] transition-colors duration-300"
          style={{
            width: size - 8,
            height: size - 8,
            top: 4,
            left: 4,
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;