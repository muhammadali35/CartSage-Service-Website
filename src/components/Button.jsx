// src/components/Button.jsx
import React from "react";

const Button = ({
  content,
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden group px-8 py-3 font-semibold text-white bg-brand-orange rounded-full shadow-md transition-all duration-300 ease-out hover:shadow-xl active:scale-95 ${className}`}
    >
      {/* ✅ SINGLE LEFT-TO-RIGHT SHINE EFFECT */}
      <span className="absolute inset-0 bg-gradient-to-r from-brand-orange-hover via-brand-orange to-brand-orange-hover opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>

      {/* Visible Text */}
      <span className="relative z-10">
        {content || children}
      </span>
    </button>
  );
};

export default Button;