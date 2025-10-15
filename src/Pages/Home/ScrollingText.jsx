import React from "react";

const ScrollingText = () => {
  return (
    <div className="bg-indigo-600 py-7 overflow-hidden whitespace-nowrap">
      <div className="animate-scroll inline-flex gap-10 text-white text-xl md:text-2xl font-bold">
        <span className="mx-4 text-[#e5ff00]">*</span> We Give Unparalleled Flexibility
        <span className="mx-4 text-[#e5ff00]">*</span> We Give Unparalleled Flexibility
        <span className="mx-4 text-[#e5ff00]">*</span> We Give Unparalleled Flexibility
        <span className="mx-4 text-[#e5ff00]">*</span> We Give Unparalleled Flexibility
        <span className="mx-4 text-[#e5ff00]">*</span> We Give Unparalleled Flexibility
      </div>
    </div>
  );
};

export default ScrollingText;
