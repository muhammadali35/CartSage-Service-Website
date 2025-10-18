// src/components/Layout/Nav.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Projects", "Testimonials", "Contact"];

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  };

  const currentPage = getCurrentPage();

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-serif ${
          sticky
            ? "bg-[#0F172A]/80 backdrop-blur-lg py-5 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="CartSage Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B35]"
            />
            <span className="text-xl md:text-3xl font-serif text-white">
              Cart<span className="text-[#2563EB]">Sage</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 text-lg ${
                    currentPage === item
                      ? "text-[#0EA5E9]"
                      : "text-white hover:text-[#0EA5E9]"
                  }`}
                >
                  {item}
                </Link>
                <span
                  className={`absolute bottom-[-6px] left-0 h-[2px] bg-[#0EA5E9] transition-all duration-300 ${
                    currentPage === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#0F172A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white text-xl font-medium z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-2xl text-[#FF6B35]"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className={`px-4 py-2 rounded-lg transition ${
              currentPage === item
                ? "text-[#0EA5E9] bg-[#0EA5E9]/10"
                : "hover:text-[#FF6B35]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}