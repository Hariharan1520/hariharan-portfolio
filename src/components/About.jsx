import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Award, CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

// Import 3 real recognition photos from src/assets/about/
import recPhoto1 from '../assets/about/1.jpg';
import recPhoto2 from '../assets/about/2.jpg';
import recPhoto3 from '../assets/about/3.JPEG';

const recognitionPhotos = [
  { id: 1, src: recPhoto1, alt: "Recognition Moment 1 — Featured Award Presentation" },
  { id: 2, src: recPhoto2, alt: "Recognition Moment 2 — Technical Competition Showcase" },
  { id: 3, src: recPhoto3, alt: "Recognition Moment 3 — Leadership & Academic Achievement" },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Motion animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Background Radial Gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label & Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-2">
            {aboutData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
            {aboutData.title}
          </h2>
        </motion.div>

        {/* Two-Column Editorial Layout (Compact & Balanced Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: About Content & Metadata */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Primary Intro Paragraph */}
            <p className="text-base sm:text-lg text-text-primary leading-relaxed font-normal">
              {aboutData.introParagraph}
            </p>

            {/* Secondary Paragraph */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              {aboutData.secondaryParagraph}
            </p>

            {/* Editorial Metadata Grid */}
            <div className="pt-5 border-t border-surface-border/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.metaDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-accent-blue/30 pl-3 py-0.5"
                  >
                    <span className="text-[11px] font-mono tracking-wider text-text-tertiary uppercase block mb-0.5">
                      {detail.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-text-primary block">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Real Recognition Photo Collage (Compact 58/42 Ratio) */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* Visual Subsection Header */}
            <div className="flex items-center space-x-2 mb-2.5">
              <Award className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-xs font-mono text-accent-blue font-semibold tracking-widest uppercase">
                RECOGNITION
              </span>
            </div>

            {/* Editorial Photo Collage Grid (Photo 1 ~58% width, Photo 2 & 3 ~42% stacked width, compact height) */}
            <div className="grid grid-cols-12 gap-2.5 h-[230px] sm:h-[250px]">
              
              {/* Photo 1: Featured Image (Reduced Height, Centered Content) */}
              <div
                onClick={() => setSelectedImage(recognitionPhotos[0])}
                className="col-span-7 h-full relative rounded-lg border border-surface-border overflow-hidden bg-background-secondary shadow-subtle group cursor-pointer"
              >
                <img
                  src={recognitionPhotos[0].src}
                  alt={recognitionPhotos[0].alt}
                  loading="lazy"
                  style={{ objectPosition: 'center 15%' }}
                  className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-accent-blue text-white text-[11px] font-mono font-medium shadow-lg">
                    <Maximize2 className="w-3 h-3" />
                    <span>VIEW</span>
                  </span>
                </div>
              </div>

              {/* Photo 2 & 3: Supporting Stacked Images */}
              <div className="col-span-5 flex flex-col gap-2.5 h-full">
                
                {/* Photo 2 */}
                <div
                  onClick={() => setSelectedImage(recognitionPhotos[1])}
                  className="relative flex-1 min-h-0 rounded-lg border border-surface-border overflow-hidden bg-background-secondary shadow-subtle group cursor-pointer"
                >
                  <img
                    src={recognitionPhotos[1].src}
                    alt={recognitionPhotos[1].alt}
                    loading="lazy"
                    style={{ objectPosition: 'center 20%' }}
                    className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-accent-blue text-white text-[10px] font-mono font-medium shadow-lg">
                      <Maximize2 className="w-2.5 h-2.5" />
                      <span>VIEW</span>
                    </span>
                  </div>
                </div>

                {/* Photo 3 */}
                <div
                  onClick={() => setSelectedImage(recognitionPhotos[2])}
                  className="relative flex-1 min-h-0 rounded-lg border border-surface-border overflow-hidden bg-background-secondary shadow-subtle group cursor-pointer"
                >
                  <img
                    src={recognitionPhotos[2].src}
                    alt={recognitionPhotos[2].alt}
                    loading="lazy"
                    style={{ objectPosition: 'center 20%' }}
                    className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-accent-blue text-white text-[10px] font-mono font-medium shadow-lg">
                      <Maximize2 className="w-2.5 h-2.5" />
                      <span>VIEW</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Subtle Collage Caption */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span>RECOGNITION MOMENTS</span>
              </span>
              <span>CLICK TO ENLARGE</span>
            </div>

          </motion.div>

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Recognition photo modal"
              className="relative max-w-4xl w-full bg-background-card border border-surface-border rounded-xl p-5 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-border/60 mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-accent-blue" />
                  <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest">
                    RECOGNITION PHOTO
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-background-secondary border border-surface-border text-text-tertiary hover:text-text-primary hover:border-surface-border-highlight transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Full Image Viewport */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-2 rounded-lg bg-background-primary/80 border border-surface-border/40">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[72vh] w-auto object-contain rounded filter contrast-[1.02]"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-3 mt-3 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="flex items-center space-x-1.5 text-accent-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Authentic Recognition Photo</span>
                </span>
                <span>Press ESC or click outside to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
