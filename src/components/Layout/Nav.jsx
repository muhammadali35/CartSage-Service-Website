import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";
import Button from "../Button";
import ConsultationPopup from "../ConsultatioPopup";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = ["Home", "Services", "Projects", "Contact"];

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  };

  const currentPage = getCurrentPage();

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-serif ${
          sticky
            ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-lg shadow-[#4C93FF]/20 py-4"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="CartSage Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#4C93FF] shadow-md transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Cart<span className="text-[#4C93FF] text-shadow-sm">Sage</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10 items-center">
            <ul className="flex space-x-6 lg:space-x-10 items-center">
              {navItems.map((item) => (
                <li key={item} className="relative group">
                  <Link
                    to={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className={`font-medium transition-colors duration-300 text-base lg:text-lg ${
                      currentPage === item
                        ? "text-[#4C93FF] text-shadow-sm"
                        : "text-white hover:text-[#4C93FF]"
                    }`}
                  >
                    {item}
                  </Link>
                  <span
                    className={`absolute bottom-[-6px] left-0 h-[2px] bg-[#4C93FF] transition-all duration-300 ${
                      currentPage === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>

            <Button
              content="Book Free Consultation"
              onClick={() => setPopupOpen(true)}
              className="!bg-[#FF6B35] hover:!bg-[#3a84f0] text-white px-6 py-2.5 font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300 pointer-events-auto font-serif "
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white hover:text-[#4C93FF] focus:outline-none focus:ring-2 focus:ring-[#4C93FF]/50 rounded-md transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#0F172A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-white text-lg font-medium z-50 md:hidden shadow-lg shadow-[#4C93FF]/20`}
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-[#4C93FF] hover:text-[#3b82f6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4C93FF]/50 rounded-md"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className={`px-6 py-3 rounded-lg w-full text-center transition-all duration-200 ${
              currentPage === item
                ? "text-[#4C93FF] bg-[#4C93FF]/10 text-shadow-sm"
                : "text-white hover:text-[#4C93FF] hover:bg-[#4C93FF]/5"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}

        <Button
          content="Free Consultation"
          onClick={() => {
            setMenuOpen(false);
            setPopupOpen(true);
          }}
          className="mt-4"
        />
      </motion.div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      )}

      <ConsultationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}