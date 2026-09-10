import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial Hero Visual Component — Final Polish Pass
 * Purely decorative, elegant SVG data visualization representing "DATA → ANALYSIS → INTELLIGENCE".
 * Increased scale (max-w-[480px]), borderless integration into dark canvas background.
 */
export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center p-2">
      {/* Soft Ambient Radial Depth */}
      <div className="absolute inset-0 bg-radial-gradient from-accent-blue/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Borderless Seamless Graphic Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        <svg
          viewBox="0 0 400 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Soft Ambient Gradient */}
            <linearGradient id="editorialAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="curveAccentGrad" x1="40" y1="200" x2="360" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="60%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
          </defs>

          {/* Minimal Grid Guidelines */}
          <line x1="40" y1="80" x2="360" y2="80" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />
          <line x1="40" y1="160" x2="360" y2="160" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />
          <line x1="40" y1="240" x2="360" y2="240" stroke="rgba(255, 255, 255, 0.05)" />

          <line x1="80" y1="40" x2="80" y2="280" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />
          <line x1="200" y1="40" x2="200" y2="280" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />
          <line x1="320" y1="40" x2="320" y2="280" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" />

          {/* Abstract Data Streams / Flow Lines */}
          <path
            d="M 40 240 Q 120 220, 180 170 T 320 100 T 360 80 L 360 240 L 40 240 Z"
            fill="url(#editorialAreaGrad)"
          />

          {/* Primary Intelligence Curve */}
          <path
            d="M 40 240 Q 120 220, 180 170 T 320 100 T 360 80"
            stroke="url(#curveAccentGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Analytical Reference Path */}
          <path
            d="M 40 260 C 110 240, 150 200, 220 180 C 290 160, 310 130, 360 120"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />

          {/* Quiet Data Points */}
          <circle cx="80" cy="230" r="3.5" fill="#3B82F6" />
          <circle cx="180" cy="170" r="4" fill="#3B82F6" />
          <circle cx="320" cy="100" r="4" fill="#60A5FA" />
          
          {/* Focal Node */}
          <circle cx="360" cy="80" r="5" fill="#F8FAFC" stroke="#3B82F6" strokeWidth="2" />

          {/* Subtle Outer Concentric Ring Accent around Focal Node */}
          <circle cx="360" cy="80" r="14" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>
    </div>
  );
}
