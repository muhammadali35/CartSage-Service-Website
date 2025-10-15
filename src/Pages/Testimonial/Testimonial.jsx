"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { testimonials } from "../../Data/Testimonials";

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-6 md:px-12 font-sans">
      {/* 🔹 Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900"
      >
        What Our Clients Say
      </motion.h1>

      {/* 🔹 Grid of Testimonials */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* 🎥 Video Testimonial */}
            {item.video ? (
              <div
                className="bg-white rounded-xl overflow-hidden shadow-lg relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                onClick={() => setSelectedVideo(item.video)}
              >
                <div className="relative w-full h-64 md:h-72 overflow-hidden">
                  <video
                    src={item.video}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
                </div>

                <div className="absolute bottom-0 p-6 text-white z-10">
                  <p className="text-sm opacity-90 mb-1">
                    {item.date} • {item.category}
                  </p>
                  <h3 className="text-xl font-semibold leading-snug mb-2">
                    {item.title}
                  </h3>
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-block text-sm font-medium border-b-2 border-white hover:text-teal-300 transition-all"
                  >
                    WATCH NOW →
                  </motion.button>
                </div>
              </div>
            ) : (
              /* 💬 Text Testimonial */
              <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <p className="text-gray-700 italic">"{item.text}"</p>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.designation}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all text-sm"
                >
                  Read on Fiverr →
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 🔹 Popup Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 bg-white/90 text-gray-900 hover:bg-red-600 hover:text-white transition-all rounded-full shadow-xl w-12 h-12 flex items-center justify-center border border-gray-300"
              >
                <X size={28} />
              </button>

              {/* Video */}
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
