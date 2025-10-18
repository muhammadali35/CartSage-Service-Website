// src/components/ConsultationPopup.jsx
"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "" });
        setTimeout(() => {
          setSubmitSuccess(false);
          onClose(); // This will also unlock scroll
        }, 2000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSubmitError("Failed to send. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // 🔒 Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position and hide body scroll
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0"; // optional: prevent layout shift
    } else {
      // Restore scroll
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              Book Your Free Consultation
            </h2>

            {submitSuccess ? (
              <div className="text-green-600 text-center py-4">
                ✅ Message sent! We’ll contact you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  name="service"
                  placeholder="Service You're Interested In"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                {submitError && (
                  <p className="text-red-500 text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold text-white ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}

            {!submitSuccess && (
              <button
                onClick={onClose}
                className="mt-4 w-full text-gray-600 hover:text-black"
              >
                Cancel
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}