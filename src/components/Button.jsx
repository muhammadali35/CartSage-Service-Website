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
      className={`relative overflow-hidden group px-8 py-3 font-semibold text-white bg-indigo-600 rounded-full shadow-md transition-all duration-300 ease-out hover:shadow-xl active:scale-95 ${className}`}
    >
      {/* Background gradients are hidden until hover */}
      <span className="absolute inset-0 w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
      <span className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-500 to-purple-500 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

      {/* Visible Text */}
      <span className="relative z-10">
        {content || children}
      </span>
    </button>
  );
};

export default Button;
