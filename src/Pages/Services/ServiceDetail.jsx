"use client";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { servicesData } from "../../Data/ServiceData";
import { X } from "lucide-react";
import servicehero from "../../assets/hero3.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === Number(id));
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    work: "",
    email: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (showModal) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showModal]);

  useEffect(() => {
    if (service) {
      emailjs.init("dgKWBXF_Ub2bbtZXr");
    }
  }, [service]);

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg font-serif">
        Service not found
      </div>
    );
  }

  const Icon = service.icon;
  const ServiceID = "service_90wsw7f";
  const TemplateID = "template_3k3cbrv";
  const UserID = "dgKWBXF_Ub2bbtZXr";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      Service: service.title,
      Name: formData.name,
      email: formData.email,
      contact: formData.contact,
      Work_Detail: formData.work,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(ServiceID, TemplateID, templateParams, UserID)
      .then(() => {
        toast.success("✅ Request sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({ name: "", contact: "", work: "", email: "" });
        setTimeout(() => setShowModal(false), 1000);
      })
      .catch(() => {
        toast.error("❌ Failed to send. Please try again.", {
          position: "top-right",
          autoClose: 4000,
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ marginTop: '12px', marginLeft: '12px' }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-serif">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] sm:h-[450px] flex flex-col items-center justify-center overflow-hidden">
          <motion.img
            src={servicehero}
            alt={service.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute z-20 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold px-4 text-center font-serif"
          >
            {service.title}
          </motion.h1>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Icon
                size={64}
                className="drop-shadow-lg"
                style={{ color: service.iconColor }}
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 font-serif">
              {service.title}
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 text-center px-2 font-serif">
              {service.desc}
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center font-serif">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm font-serif"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-green-500 mt-0.5">✔</span>
                  <span className="text-gray-700 text-sm sm:text-base font-serif">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#4C93FF] to-[#3a7fd9] text-white font-semibold shadow-md hover:scale-105 transition-transform font-serif"
              >
                Get Service
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative font-serif"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                  <X size={24} />
                </button>

                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 text-gray-800 font-serif">
                  Request This Service
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={service.title}
                      readOnly
                      className="w-full px-4 py-2.5 border rounded-xl bg-gray-100 text-gray-700 font-serif"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-[#4C93FF] outline-none font-serif"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-[#4C93FF] outline-none font-serif"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      placeholder="Contact"
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-[#4C93FF] outline-none font-serif"
                    />
                  </div>
                  <div>
                    <textarea
                      name="work"
                      value={formData.work}
                      onChange={handleChange}
                      required
                      placeholder="Work Details"
                      rows="3"
                      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-[#4C93FF] outline-none font-serif"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-[#4C93FF] to-[#3a7fd9] text-white rounded-xl font-semibold font-serif"
                  >
                    {sending ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}