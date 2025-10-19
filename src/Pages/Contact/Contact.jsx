"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Briefcase, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify"; // ✅
import "react-toastify/dist/ReactToastify.css"; // ✅

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Amazon",
    location: "",
    message: "",
  });

  const ServiceID = "service_90wsw7f";
  const TemplateID = "template_3k3cbrv";
  const UserID = "dgKWBXF_Ub2bbtZXr";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      Service: formData.service,
      Name: formData.name,
      email: formData.email,
      contact: formData.phone,
      Work_Detail: formData.message,
      time: new Date().toLocaleString(),
      Location: formData.location,
    };

    toast.info("Sending your message...", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      draggable: false,
      theme: "light",
    });

    emailjs
      .send(ServiceID, TemplateID, templateParams, UserID)
      .then(() => {
        toast.dismiss(); // ✅ Remove "Sending..." toast
        toast.success("✅ Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Amazon",
          location: "",
          message: "",
        });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("❌ Failed to send. Please try again.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };

  return (
    <>
      {/* ✅ ToastContainer inside component */}
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
      />

      <section className="relative py-16 md:py-24 bg-white font-serif overflow-hidden px-4 sm:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-16 text-gray-900"
        >
          Get in Touch ✉️
        </motion.h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Info Section */}
          <div className="space-y-6 md:space-y-8">
            <InfoBox
              icon={<Mail className="text-[#4C93FF] w-8 h-8 sm:w-10 sm:h-10" />}
              title="Email Us"
              text="hello@CartSage.com"
            />
            <InfoBox
              icon={<Phone className="text-[#4C93FF] w-8 h-8 sm:w-10 sm:h-10" />}
              title="Call Us"
              text="+1 223 371 1195"
            />
            <InfoBox
              icon={<MapPin className="text-[#4C93FF] w-8 h-8 sm:w-10 sm:h-10" />}
              title="Visit Us"
              text="27 Division St, New York, NY 10002, USA"
            />
          </div>

          {/* Right Form Section */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                icon={<User className="text-[#4C93FF]" />}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <InputField
                icon={<Mail className="text-[#4C93FF]" />}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <InputField
                icon={<Phone className="text-[#4C93FF]" />}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <div className="relative">
                <Briefcase className="absolute left-4 top-3.5 text-[#4C93FF]" size={18} />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#4C93FF] focus:ring-2 focus:ring-[#4C93FF]/20 outline-none transition-all bg-gray-50"
                >
                  <option>Amazon</option>
                  <option>Web Development</option>
                  <option>eBay</option>
                  <option>Walmart</option>
                </select>
              </div>

              <InputField
                icon={<MapPin className="text-[#4C93FF]" />}
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-[#4C93FF]" size={18} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Project Details..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#4C93FF] focus:ring-2 focus:ring-[#4C93FF]/20 outline-none bg-gray-50 transition-all resize-none"
              />
            </div>

            {/* Button */}
            <div className="text-center pt-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(76, 147, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-[#4C93FF] to-[#3a7fd9] text-white text-base sm:text-lg font-semibold rounded-full transition-all overflow-hidden shadow-md hover:shadow-lg"
              >
                Send Message 🚀
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}

// 🔹 Reusable Input Component
function InputField({ icon, name, value, onChange, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-3.5 text-[#4C93FF]">{icon}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#4C93FF] focus:ring-2 focus:ring-[#4C93FF]/20 outline-none bg-gray-50 transition-all"
      />
    </div>
  );
}

// 🔹 Contact Info Box Component
function InfoBox({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-start gap-4 sm:gap-6 bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
    >
      {icon}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{text}</p>
      </div>
    </motion.div>
  );
}