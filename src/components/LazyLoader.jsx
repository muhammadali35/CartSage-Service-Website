"use client";
import React from 'react';
import logo from '../assets/logo.jpg';

const LazyLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/10 font-serif overflow-hidden">
      {/* Animated Logo Container – Glassmorphism + Gradient Border */}
      <div
        className="relative mb-8 flex items-center justify-center rounded-full"
        style={{
          width: '140px',
          height: '140px',
          background: 'linear-gradient(120deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(76, 147, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(76, 147, 255, 0.12)',
          borderRadius: '50%',
          animation: 'gentleFloat 4s ease-in-out infinite',
        }}
      >
        {/* Inner Glowing Ring */}
        <div
          className="absolute inset-0 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(76,147,255,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Logo */}
        <img
          src={logo}
          alt="CartSage"
          className="relative w-24 h-24 object-contain transition-opacity duration-500"
        />
      </div>

      {/* Brand Title – Serif, Refined, Centered */}
      <h1 className="text-3xl md:text-4xl font-medium text-gray-800 text-center max-w-md px-4 leading-tight tracking-tight">
        Welcome to <span className="font-semibold text-[#4C93FF]">CartSage</span>
      </h1>

      {/* Subtle Status + Animated Dots */}
      <p className="mt-3 text-gray-500 text-sm md:text-base flex items-center gap-1.5">
        <span>Initializing</span>
        <span className="flex h-1.5 w-1.5">
          <span className="animate-[ping_1.8s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-[#4C93FF]/40 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4C93FF]"></span>
        </span>
      </p>

      {/* Custom Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }

            /* Optional: Add fade-in for smoother entry */
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            body {
              margin: 0;
              overflow: hidden;
            }

            @media (max-width: 640px) {
              .text-3xl { font-size: 1.75rem; }
              .w-24 { width: 72px; height: 72px; }
              [style*="width: 140px"] {
                width: 110px !important;
                height: 110px !important;
              }
            }
          `,
        }}
      />
    </div>
  );
};

export default LazyLoader;