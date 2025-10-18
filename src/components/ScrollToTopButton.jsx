// components/ScrollToTopButton.jsx
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [borderWidth, setBorderWidth] = useState(2); // default border

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    
      setIsVisible(scrollY > 300);

      
      if (windowHeight > 0) {
        const progress = Math.min(scrollY / windowHeight, 1);
        const newBorderWidth = 2 + Math.floor(progress * 4); 
        setBorderWidth(newBorderWidth);
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

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-28 right-6 bg-[#FF6B35]  text-white p-3 rounded-full shadow-lg hover:bg-[#4C93FF] transition-all duration-300 z-50"
      style={{
        borderWidth: `${borderWidth}px`,
        borderStyle: 'solid',
        borderColor: '#FF6B35',
        transition: 'border-width 0.1s ease-out', // smooth border change
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;