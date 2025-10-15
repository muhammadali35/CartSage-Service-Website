"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "swiper/css";
import { testimonials } from "../../Data/Testimonials";

export default function HomeTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 bg-white px-6 md:px-12 font-sans">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900"
      >
        What Our Clients Say
      </motion.h1>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4500}
        loop={true}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 md:p-8 h-[420px] flex flex-col justify-between items-center text-center text-white cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => item.video && setSelectedVideo(item.video)}
            >
              {/* 🎥 If video testimonial */}
              {item.video ? (
                <>
                  <div className="w-full h-56 rounded-xl overflow-hidden mb-4 shadow-md">
                    <video
                      src={item.video}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80 mt-1">
                      {item.date} • {item.category}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mt-4 inline-block text-sm font-medium border-b-2 border-white hover:text-yellow-300 transition-all"
                    >
                      WATCH NOW →
                    </motion.button>
                  </div>
                </>
              ) : (
                /* 💬 Text testimonials */
                <>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/40 mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-80">{item.designation}</p>
                    <p className="mt-3 text-sm leading-relaxed opacity-90 line-clamp-4">
                      {item.text}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium border-b-2 border-white hover:text-yellow-300 transition-all"
                    >
                      Read on Fiverr →
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Video Popup */}
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
