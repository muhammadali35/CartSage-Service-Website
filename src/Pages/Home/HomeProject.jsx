"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "../../Data/ProjectData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../components/Button"; // ✅ Added import

const categories = ["Amazon", "Web Development", "eBay", "Walmart"];
const BRAND_COLOR = "#4C93FF";

export default function HomeProject() {
  const [activeCategory, setActiveCategory] = useState("Amazon");
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [selectedProject]);

  const filteredProjects = projects
    .filter((p) => p.category === activeCategory)
    .slice(0, 3);

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

  const getImages = (project) => {
    return project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.image];
  };

  const getCategoryRoute = (category) => {
    const map = {
      Amazon: "/projects",
      eBay: "/projects",
      Walmart: "/projects",
      "Web Development": "/projects",
    };
    return map[category] || "/projects";
  };

  return (
    <section
      ref={ref}
      className="min-h-screen py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100 font-serif"
    >
      {/* Section Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-14 text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Discover Our Latest Projects
      </motion.h1>

      {/* Category Buttons (UNCHANGED) */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#4C93FF] text-white shadow-md"
                : "bg-white text-[#FF6B35] border hover:bg-[#FF6B35] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading
            ? [...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-[320px] sm:h-[360px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl"
                />
              ))
            : filteredProjects.map((project, i) => (
                <motion.div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  key={project.id}
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-white"
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 200, damping: 12 },
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[320px] sm:h-[360px] object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-5 transition-all duration-500 ease-out pointer-events-none z-10">
                    <Button
                      content="More Details"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className={`!bg-[${BRAND_COLOR}] hover:!bg-[#3a84f0] text-white px-6 sm:px-8 py-3  text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto`}
                    />
                  </div>
                </motion.div>
              ))}
        </motion.div>
      </AnimatePresence>

      {/* View More Projects Button */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        <a href={getCategoryRoute(activeCategory)}>
          <Button
            content={`View More ${activeCategory} Projects →`}
            onClick={() => {}}
            className={`!bg-[${BRAND_COLOR}] hover:!bg-[#3a84f0] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
          />
        </a>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] flex flex-col"
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

              <div className="w-full mx-0 overflow-hidden rounded-t-3xl mt-1 relative hide-scrollbar">
                <div className="w-full flex justify-center bg-gray-50">
                  <motion.img
                    key={galleryIndex}
                    src={getImages(selectedProject)[galleryIndex]}
                    alt={selectedProject.title}
                    className="w-full max-h-[60vh] h-auto object-contain"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {getImages(selectedProject).length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4C93FF] text-white p-2.5 rounded-full hover:bg-[#3a84f0] z-20"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4C93FF] text-white p-2.5 rounded-full hover:bg-[#3a84f0] z-20"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-6 pt-4 pb-7 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
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
                      className={`!bg-[${BRAND_COLOR}] hover:!bg-[#3a84f0] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
