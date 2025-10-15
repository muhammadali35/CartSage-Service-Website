"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAmazon, FaEbay } from "react-icons/fa";
import { SiWalmart, SiWebflow } from "react-icons/si";
import { servicesData } from "../../Data/ServiceData";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden font-serif">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          What We Can Do for Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg"
        >
          Building strong brands through design, technology, and creativity.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            }}
            className="bg-[#fafafa] p-10 rounded-3xl  border border-gray-100 hover:border-transparent hover:bg-white cursor-pointer transition-all duration-300"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-8">{service.desc}</p>

            <Link
              to={`/services/${service.id}`}
              className="inline-flex items-center font-semibold text-black group"
            >
              <span className="border-b border-black pb-[2px] group-hover:border-transparent transition-all duration-200">
                View Details
              </span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
