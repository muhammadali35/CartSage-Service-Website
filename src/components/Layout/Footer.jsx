"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";


export default function Footer() {
  const [activeLink, setActiveLink] = useState(null);
  const navItems = ["Home", "Services", "Projects", "Testimonials", "Contact"];

  return (
    <footer
      className="relative bg-[#262D3E] text-white px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20 border-t border-gray-800 overflow-hidden font-sans"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Subtle animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-[#4C93FF]/20 via-transparent to-purple-900/20 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {/* LEFT COLUMN: Branding */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            CartSage
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed max-w-xs">
            Crafting digital experiences that inspire, engage, and convert.
          </p>
        </div>

        {/* CENTER COLUMN: Links */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navItems.map((link, i) => (
              <motion.li
                key={i}
                className="relative w-fit cursor-pointer group font-medium text-white"
                onClick={() => setActiveLink(link)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                  className={`${
                    activeLink === link
                      ? "text-[#4C93FF]"
                      : "group-hover:text-[#4C93FF]"
                  } transition-colors duration-300 text-sm sm:text-base`}
                  aria-label={`Navigate to ${link} page`}
                >
                  {link}
                </Link>
                {activeLink === link && (
                  <motion.span
                    layoutId="activeLinkIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4C93FF] to-purple-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: Contact */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
            Get in Touch
          </h4>
          <div className="space-y-4 text-White text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#4C93FF] flex-shrink-0" />
              <span>27 Division St, New York, NY 10002, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#4C93FF] flex-shrink-0" />
              <span className="font-medium text-white">+1 800 123 654 987</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#4C93FF] flex-shrink-0" />
              <span>hello@themegenix.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 sm:mt-16 pt-8 border-t border-white max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
      >
        <p className="text-xs sm:text-sm text-white text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#4C93FF]">
CartSage</span>. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-5">
          {[FaFacebookF, FaInstagram, FaTwitter, TbBrandFiverr].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#4C93FF] transition-colors duration-200"
              aria-label={`Follow us on ${["Facebook", "Instagram", "Twitter", "Dribbble"][i]}`}
            >
              <Icon className="text-lg sm:text-xl" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .text-shadow-sm {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </footer>
  );
}