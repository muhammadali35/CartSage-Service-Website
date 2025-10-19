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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const autoplayOptions = {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  };

  return (
    <section
      className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-12 font-serif overflow-visible relative"
      role="region"
      aria-label="Testimonials Section"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-14 text-gray-900 font-serif"
      >
        What Our Clients Say
      </motion.h1>

      <div className="relative max-w-7xl mx-auto pb-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={autoplayOptions}
          slidesPerView={3}
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          speed={800}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          role="list"
          aria-label="Testimonials carousel"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} role="listitem">
              {({ isActive, isPrev, isNext }) => (
                <motion.div
                  className="rounded-2xl shadow-xl p-6 sm:p-8 h-[400px] sm:h-[420px] text-white text-center cursor-pointer transition-all duration-700 bg-gradient-to-br from-[#4C93FF] to-[#2A7AE4] font-serif"
                  onClick={() => item.video && setSelectedVideo(item.video)}
                  style={{
                    transform: isActive
                      ? "translateZ(80px) scale(1.03) rotateY(0deg)"
                      : isPrev
                      ? "translateX(-30px) rotateY(15deg) scale(0.92)"
                      : isNext
                      ? "translateX(30px) rotateY(-15deg) scale(0.92)"
                      : "scale(0.85)",
                    opacity: isActive ? 1 : 0.75,
                    zIndex: isActive ? 10 : 1,
                    transition: "transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.7s ease",
                  }}
                  tabIndex={0}
                  role="article"
                  aria-label={`Testimonial: ${item.title || item.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      item.video && setSelectedVideo(item.video);
                    }
                  }}
                >
                  {item.video ? (
                    <>
                      <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4 shadow-md bg-black/20 flex items-center justify-center">
                        <video
                          src={item.video}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          aria-label={`Preview of testimonial video: ${item.title}`}
                          onError={(e) => console.error("Video failed to load:", e)}
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold font-serif">{item.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90 mt-1 mb-3 font-serif">
                        {item.date} • {item.category}
                      </p>
                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-sm sm:text-base font-medium border-b border-white/80 hover:border-white transition-colors duration-200 font-serif"
                        aria-label={`Watch full video testimonial: ${item.title}`}
                      >
                        WATCH NOW →
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/50 mb-3 mx-auto shadow-md"
                      />
                      <h3 className="text-lg sm:text-xl font-semibold font-serif">{item.name}</h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-3 font-serif">{item.designation}</p>
                      <p className="text-sm sm:text-[15px] leading-relaxed opacity-95 line-clamp-4 mb-4 px-2 font-serif">
                        {item.text}
                      </p>
                      <a
                        href={item.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-white font-medium border-b border-white/80 hover:border-white transition-colors duration-200 inline-block font-serif"
                        aria-label={`Read full review by ${item.name} on Fiverr`}
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

        {/* Navigation Arrows */}
        <button
          className="prev-btn absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2.5 sm:p-3 z-30 hover:bg-[#4C93FF] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4C93FF]/60 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="text-[#4C93FF] group-hover:text-white" />
        </button>
        <button
          className="next-btn absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2.5 sm:p-3 z-30 hover:bg-[#4C93FF] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4C93FF]/60 group"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className="text-[#4C93FF] group-hover:text-white" />
        </button>
      </div>

      {/* Video Popup */}
      <AnimatePresence>
        {selectedVideo && isClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex justify-center items-center px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Video testimonial popup"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 font-serif"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 bg-[#4C93FF] text-white hover:bg-[#2A7AE4] transition-colors rounded-full shadow-lg w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4C93FF]/50"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto aspect-video bg-black"
                aria-label="Full testimonial video"
                onError={(e) => console.error("Popup video failed to load:", e)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .mySwiper {
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .mySwiper {
            padding: 0 30px;
          }
          .prev-btn,
          .next-btn {
            top: calc(50% + 24px);
          }
        }
      `}</style>
    </section>
  );
}