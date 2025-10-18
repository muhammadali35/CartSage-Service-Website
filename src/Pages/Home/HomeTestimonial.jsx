// src/components/HomeTestimonials.jsx
"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { testimonials } from "../../Data/Testimonials";

export default function HomeTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const autoplayOptions = {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <section className="py-20 bg-white px-4 md:px-12 font-sans overflow-hidden relative">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-black"
      >
        What Our Clients Say
      </motion.h1>

      <div
        className="relative max-w-7xl mx-auto"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={autoplayOptions}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={800}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive, isPrev, isNext }) => (
                <motion.div
                  className={`rounded-2xl shadow-xl p-6 h-[420px] text-white text-center cursor-pointer transition-all duration-700 bg-gradient-to-br from-[#FF6B35] to-[#F55C23]`} // ✅ Brand Orange Gradient
                  onClick={() => item.video && setSelectedVideo(item.video)}
                  style={{
                    transform: isActive
                      ? "translateZ(100px) scale(1.05) rotateY(0deg)"
                      : isPrev
                      ? "translateX(-50px) rotateY(25deg) scale(0.9)"
                      : isNext
                      ? "translateX(50px) rotateY(-25deg) scale(0.9)"
                      : "scale(0.85)",
                    opacity: isActive ? 1 : 0.7,
                    transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  {/* 🎥 Video testimonial */}
                  {item.video ? (
                    <>
                      <div className="w-full h-52 rounded-xl overflow-hidden mb-4 shadow-md">
                        <video
                          src={item.video}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-xs opacity-80 mt-1 mb-2">
                        {item.date} • {item.category}
                      </p>
                      <motion.button
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="mt-2 text-sm font-medium border-b-2 border-white hover:border-[#FFD5B5] hover:text-[#FFD5B5] transition-all"
                      >
                        WATCH NOW →
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/40 mb-3 mx-auto"
                      />
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm opacity-80 mb-2">
                        {item.designation}
                      </p>
                      <p className="text-[15px] leading-relaxed opacity-90 line-clamp-4 mb-4 px-2">
                        {item.text}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium border-b-2 border-white hover:border-[#FFD5B5] hover:text-[#FFD5B5] transition-all"
                      >
                        Read on Fiverr →
                      </a>
                    </>
                  )}
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Arrows — Orange Theme */}
        <button
          className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 
          bg-white shadow-lg rounded-full p-2 md:p-3 z-20 
          hover:bg-[#FF6B35] hover:text-white transition-all"
        >
          <ChevronLeft size={26} className="text-[#FF6B35]" />
        </button>

        <button
          className="next-btn absolute right-0 top-1/2 -translate-y-1/2 
          bg-white shadow-lg rounded-full p-2 md:p-3 z-20 
          hover:bg-[#FF6B35] hover:text-white transition-all"
        >
          <ChevronRight size={26} className="text-[#FF6B35]" />
        </button>
      </div>

      {/* 🔹 Video Popup — Orange Close Button */}
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
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 bg-[#FF6B35] text-white hover:bg-[#F55C23] transition-all rounded-full shadow-xl w-12 h-12 flex items-center justify-center"
              >
                <X size={28} />
              </button>

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