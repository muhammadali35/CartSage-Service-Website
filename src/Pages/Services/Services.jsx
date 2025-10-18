"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../../Data/ServiceData";

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-white text-black overflow-hidden font-serif">
      <div className="text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          What We Can Do for Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Building strong brands through design, technology, and creativity.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto px-4">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.025,
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              y: -5,
            }}
            className="bg-[#fafafa] p-8 sm:p-10 rounded-3xl border border-gray-100 hover:border-transparent hover:bg-white cursor-pointer transition-all duration-300"
          >
            <div className="mb-5 text-4xl text-[#FF6B35]">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-7 leading-relaxed">{service.desc}</p>

            <Link
              to={`/services/${service.id}`}
              className="inline-flex items-center font-semibold group"
            >
              <span className="border-b border-[#FF6B35] pb-[2px] group-hover:border-transparent transition-all duration-200 text-[#FF6B35]">
                View Details
              </span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform text-[#FF6B35]">
                ↗
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

   
    </section>
  );
}