"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "../../Data/ProjectData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/Button"; 

const categories = ["Amazon", "Web Development", "eBay", "Walmart"];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("Amazon");
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(
    (p) => p.category === activeCategory
  );

  const closeModal = () => {
    setSelectedProject(null);
    setGalleryIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject?.screenshots) return;
    setGalleryIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevImage = () => {
    if (!selectedProject?.screenshots) return;
    setGalleryIndex((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100 font-serif"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Discover Our Latest Projects
      </motion.h1>

      {/* ✅ Category Buttons (unchanged) */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 font-serif ${
              activeCategory === cat
                ? "bg-[#4C93FF] text-white shadow-md"
                : "bg-white text-[#FF6B35] border hover:bg-[#FF6B35] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading
            ? [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[360px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl"
                />
              ))
            : filteredProjects.map((project, i) => (
                <motion.div
                  onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                  key={project.id}
                  className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group bg-white"
                  whileHover={{
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 150, damping: 10 },
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[360px] object-fill"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-14 transition-all duration-500 ease-out pointer-events-none z-10">
                    <Button
                      content="More Details"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="!bg-[#FF6B35] hover:!bg-[#3a84f0] text-white px-6 py-2.5 font-semibold rounded-2xl shadow-md hover:shadow-lg transition duration-300 pointer-events-auto font-serif"
                    />
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </AnimatePresence>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-[95%] md:w-[80%] lg:w-[65%] max-h-[90vh] overflow-y-auto p-8 hide-scrollbar font-serif"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-black z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
              >
                <X size={28} />
              </button>

              {selectedProject.category === "Web Development" ? (
                <div className="relative flex flex-col items-center">
                  <div className="relative w-full h-[400px] mb-6 overflow-hidden rounded-2xl">
                    <motion.img
                      key={galleryIndex}
                      src={
                        selectedProject.screenshots
                          ? selectedProject.screenshots[galleryIndex]
                          : selectedProject.image
                      }
                      alt="project screenshot"
                      className="w-full h-full object-contain rounded-2xl bg-gray-50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {selectedProject.screenshots?.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4C93FF]/70 hover:bg-[#4C93FF] text-white p-3 rounded-full z-20"
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4C93FF]/70 hover:bg-[#4C93FF] text-white p-3 rounded-full z-20"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-center">
                    {selectedProject.desc}
                  </p>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        content="Visit Project"
                        onClick={() => {}}
                        className="!bg-[#FF6B35] hover:!bg-[#3a84f0] text-white px-6 py-2 font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 font-serif"
                      />
                    </a>
                  )}
                </div>
              ) : (
                <div className="relative flex flex-col items-center">
                  <div className="relative w-full h-[500px] mb-6">
                    <motion.img
                      key={galleryIndex}
                      src={
                        selectedProject.screenshots
                          ? selectedProject.screenshots[galleryIndex]
                          : selectedProject.image
                      }
                      alt="project screenshot"
                      className="rounded-2xl w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {selectedProject.screenshots?.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4C93FF]/70 hover:bg-[#4C93FF] text-white p-3 rounded-full z-20"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4C93FF]/70 hover:bg-[#4C93FF] text-white p-3 rounded-full z-20"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {selectedProject.title}
                  </h2>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hide scrollbar globally */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
