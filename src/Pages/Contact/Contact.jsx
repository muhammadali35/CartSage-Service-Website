"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Briefcase, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Amazon",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const ServiceID = "service_90wsw7f";
  const TemplateID = "template_3k3cbrv"; 
  const UserID = "dgKWBXF_Ub2bbtZXr";

 

  const templateParams = {
    Service: formData.service,
    Name: formData.name,
    email: formData.email, // Ensure this matches a template placeholder
    contact: formData.phone,
    Work_Detail: formData.message,
    time: new Date().toLocaleString(),
    Location: formData.location,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        ServiceID,
        TemplateID,
        templateParams,
        UserID
      )
      .then(
        () => {
          setStatus("✅ Message Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Amazon",
            location: "",
            message: "",
          });
        },
        () => setStatus("❌ Failed to send message. Try again!")
      );
  };

  return (
    <section className="relative py-24 bg-white font-sans overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
      >
        Get in Touch ✉️
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-10">
        {/* Left Info Section */}
        <div className="space-y-8">
          <InfoBox
            icon={<Mail className="text-indigo-600 w-10 h-10" />}
            title="Email Us"
            text="support@yourdomain.com"
          />
          <InfoBox
            icon={<Phone className="text-indigo-600 w-10 h-10" />}
            title="Call Us"
            text="+92 300 1234567"
          />
          <InfoBox
            icon={<MapPin className="text-indigo-600 w-10 h-10" />}
            title="Visit Us"
            text="Lahore, Pakistan"
          />
        </div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <InputField icon={<User />} name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
            <InputField icon={<Mail />} name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
            <InputField icon={<Phone />} name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />

            <div className="relative">
              <Briefcase className="absolute left-4 top-3.5 text-indigo-500" size={18} />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-gray-50"
              >
                <option>Amazon</option>
                <option>Web Development</option>
                <option>eBay</option>
                <option>Walmart</option>
              </select>
            </div>

            <InputField icon={<MapPin />} name="location" value={formData.location} onChange={handleChange} placeholder="Your Location" />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-indigo-500" size={18} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Project Details..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-gray-50 transition-all resize-none"
            />
          </div>

          {/* Button */}
          <div className="text-center pt-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(99, 102, 241, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg font-semibold rounded-full transition-all overflow-hidden shadow-md hover:shadow-xl"
            >
              Send Message 🚀
            </motion.button>

            {status && (
              <p className="mt-4 text-gray-700 font-medium text-center">{status}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

// 🔹 Reusable Input Component
function InputField({ icon, name, value, onChange, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-3.5 text-indigo-500">{icon}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none bg-gray-50 transition-all"
      />
    </div>
  );
}

// 🔹 Contact Info Box Component
function InfoBox({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
    >
      {icon}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </motion.div>
  );
}
