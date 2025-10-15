import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll behavior for sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        sticky ? "bg-black/90 backdrop-blur-md shadow-md py-7" : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          Cart<span className="text-indigo-600">Sage</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-semibold">
          {["Home", "Services","Projects", "Testimonials", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-teal-400"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-indigo-600 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-white text-2xl font-semibold transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="hover:text-indigo-600 transition"
          >
            {item}
          </Link>
        ))}

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-indigo-600"
        >
          <FaTimes />
        </button>
      </div>
    </nav>
  );
}
