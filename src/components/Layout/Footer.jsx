"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Footer() {
  const links = ["About", "Portfolios", "Services", "Testimonials", "Careers"];
  const [activeLink, setActiveLink] = useState(null);

  return (
    <footer className="relative bg-[#000000] text-white px-8 md:px-20 py-20 border-t border-gray-800 overflow-hidden">
      {/* Soft glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-900 to-black blur-3xl"
      />

      <div className="relative grid md:grid-cols-3 gap-12 z-10">
        {/* LEFT COLUMN */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-8 text-white">
            Get valuable strategy, culture, and brand insights straight to your inbox
          </h3>

          <div className="relative group mb-5">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full border-b border-gray-600 focus:outline-none pb-3 pr-10 placeholder-gray-400 bg-transparent text-gray-200"
            />
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 bottom-3 text-gray-300 text-lg cursor-pointer"
            >
              ↗
            </motion.span>
          </div>

          <p className="text-sm text-gray-500">
            By signing up, you agree to our Privacy Policy. We treat your info responsibly.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-8 text-white">Links</h4>
          <ul className="space-y-4">
            {links.map((link, i) => (
              <motion.li
                key={i}
                className="relative w-fit cursor-pointer group font-medium"
                onClick={() => setActiveLink(link)}
                whileHover="hover"
              >
                <span
                  className={`${
                    activeLink === link
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-indigo-400"
                  } transition-colors duration-300`}
                >
                  {link}
                </span>

                {/* Animated underline */}
                <motion.span
                  variants={{
                    hover: { width: "100%", opacity: 1 },
                    initial: {
                      width: activeLink === link ? "100%" : "0%",
                      opacity: 0.3,
                    },
                  }}
                  animate={
                    activeLink === link
                      ? { width: "100%", opacity: 1 }
                      : { width: "0%", opacity: 0.3 }
                  }
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"
                />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-8 text-white">Contact</h4>
          <p className="text-gray-400 leading-relaxed">
            27 Division St, New York, <br /> NY 10002, USA
          </p>
          <p className="mt-3 font-medium text-indigo-400">+1 800 123 654 987</p>
          <p className="text-gray-400">frisk.agency@mail.com</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-sm text-gray-500">
          © 2025 <span className="font-semibold text-white">ThemeGenix</span>. All rights reserved.
        </p>

        <div className="flex gap-6 text-lg">
          {[FaFacebookF, FaInstagram, FaTwitter, FaDribbble].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer text-gray-400 hover:text-indigo-400"
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
