"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const links = ["About", "Portfolios", "Services", "Testimonials", "Careers"];
  const [activeLink, setActiveLink] = useState(null);

  return (
    <footer className="relative bg-[#000000] text-white px-6 md:px-16 py-16 md:py-20 border-t border-gray-800 overflow-hidden">
      {/* Subtle animated background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20 blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* LEFT COLUMN: Branding */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            ThemeGenix
          </h3>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            Crafting digital experiences that inspire, engage, and convert.
          </p>
        </div>

        {/* CENTER COLUMN: Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {links.map((link, i) => (
              <motion.li
                key={i}
                className="relative w-fit cursor-pointer group font-medium text-gray-300"
                onClick={() => setActiveLink(link)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span
                  className={`${
                    activeLink === link
                      ? "text-indigo-400"
                      : "group-hover:text-indigo-400"
                  } transition-colors duration-300`}
                >
                  {link}
                </span>
                {activeLink === link && (
                  <motion.span
                    layoutId="activeLinkIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
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
          <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-indigo-400 flex-shrink-0" />
              <span>27 Division St, New York, NY 10002, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-indigo-400 flex-shrink-0" />
              <span className="font-medium text-white">+1 800 123 654 987</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400 flex-shrink-0" />
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
        className="relative z-10 mt-16 pt-8 border-t border-gray-800 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">ThemeGenix</span>. All rights reserved.
        </p>

        <div className="flex gap-5">
          {[FaFacebookF, FaInstagram, FaTwitter, FaDribbble].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label={`Follow us on ${["Facebook", "Instagram", "Twitter", "Dribbble"][i]}`}
            >
              <Icon className="text-xl" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}