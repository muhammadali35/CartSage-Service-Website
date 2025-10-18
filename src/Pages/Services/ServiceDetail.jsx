"use client";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { servicesData } from "../../Data/ServiceData";
import { X } from "lucide-react";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === Number(id));
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    work: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!service) {
    return (
      <div className="text-center py-20 text-gray-600">
        Service not found
      </div>
    );
  }

  const Icon = service.icon;

  // Handle input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle send email
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_xxxxxx", // 🔹 Your EmailJS service ID
        "template_xxxxxx", // 🔹 Your EmailJS template ID
        {
          service_name: service.title,
          user_name: formData.name,
          user_contact: formData.contact,
          user_work: formData.work,
        },
        "public_key_xxxxxx" // 🔹 Your public key
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);
          setFormData({ name: "", contact: "", work: "" });
        },
        () => setSending(false)
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 🔹 Hero Section */}
<div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
  <motion.img
    src={service.image}
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
    className="absolute z-20 text-white text-4xl md:text-5xl font-extrabold tracking-wide text-center px-4"
  >
    {/* {service.title} */}
  </motion.h1>

  {/* ✅ CLASSIC SYMMETRICAL WAVE — Left = Right, Center = Peak */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
    <svg
      className="relative block w-full h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 
           C300,10 600,110 900,60 
           C1000,40 1100,50 1200,60 
           L1200,120 
           L0,120 
           Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
</div>
      {/* 🔹 Main Section */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-5">
            <Icon
              size={64}
              className="drop-shadow-lg"
              style={{ color: service.iconColor }}
            />
          </div>

          <h1 className="text-4xl md:text-5xl text-center font-bold mb-5">
            {service.title}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
            {service.desc}
          </p>

          {/* Features */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-green-500 text-lg">✔</span>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Get Service Button */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              Get Service
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 🔹 Modal Form */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] md:w-[450px] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                Request This Service
              </h2>

              {success ? (
                <p className="text-green-600 text-center font-medium">
                  ✅ Request sent successfully!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Service
                    </label>
                    <input
                      type="text"
                      value={service.title}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Work Details
                    </label>
                    <textarea
                      name="work"
                      value={formData.work}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    {sending ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
