import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Maximize2, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsSectionData } from '../data/portfolioData';

// Import real Sales Forecasting System screenshots (1 - 6)
import sales1 from '../assets/projects/Sales/1.png';
import sales2 from '../assets/projects/Sales/2.png';
import sales3 from '../assets/projects/Sales/3.png';
import sales4 from '../assets/projects/Sales/4.png';
import sales5 from '../assets/projects/Sales/5.png';
import sales6 from '../assets/projects/Sales/6.png';

// Import real Stock Market Analysis System screenshots (1 - 6)
import stock1 from '../assets/projects/Stock/1.png';
import stock2 from '../assets/projects/Stock/2.png';
import stock3 from '../assets/projects/Stock/3.png';
import stock4 from '../assets/projects/Stock/4.png';
import stock5 from '../assets/projects/Stock/5.png';
import stock6 from '../assets/projects/Stock/6.png';

// Centralized mapping of real screenshots by project number
const projectScreenshots = {
  "01": [
    { id: "sales-1", src: sales1, title: "Sales Forecasting System — Main Overview Dashboard", index: 1 },
    { id: "sales-2", src: sales2, title: "Sales Analytics — Performance & Outlet Breakdown", index: 2 },
    { id: "sales-3", src: sales3, title: "Time-Series Trends — Hourly & Seasonal Sales", index: 3 },
    { id: "sales-4", src: sales4, title: "Prophet Engine — Sales Forecasting Model", index: 4 },
    { id: "sales-5", src: sales5, title: "Product Analytics — Category & Waste Analysis", index: 5 },
    { id: "sales-6", src: sales6, title: "Interactive Filters & Inventory Evaluation", index: 6 },
  ],
  "02": [
    { id: "stock-1", src: stock1, title: "Stock Market Platform — Main Analysis Dashboard", index: 1 },
    { id: "stock-2", src: stock2, title: "Technical Indicators & Interactive Price Chart", index: 2 },
    { id: "stock-3", src: stock3, title: "BiLSTM Deep Learning — Price Forecasting Engine", index: 3 },
    { id: "stock-4", src: stock4, title: "FinBERT NLP — Financial Sentiment Analysis", index: 4 },
    { id: "stock-5", src: stock5, title: "Real-Time Stock Market Data Stream & Metrics", index: 5 },
    { id: "stock-6", src: stock6, title: "REST API Architecture & Model Evaluation", index: 6 },
  ],
};

export default function Projects() {
  const [modalState, setModalState] = useState(null); // { projectNumber: '01', activeIndex: 0 }

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalState(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!modalState) return;
    const screenshots = projectScreenshots[modalState.projectNumber];
    const prevIndex = (modalState.activeIndex - 1 + screenshots.length) % screenshots.length;
    setModalState({ ...modalState, activeIndex: prevIndex });
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!modalState) return;
    const screenshots = projectScreenshots[modalState.projectNumber];
    const nextIndex = (modalState.activeIndex + 1) % screenshots.length;
    setModalState({ ...modalState, activeIndex: nextIndex });
  };

  return (
    <section id="projects" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Ambient Depth */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[350px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-2">
            {projectsSectionData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {projectsSectionData.mainHeadingLine1} <br className="hidden sm:inline" />
            <span className="text-gradient-accent">{projectsSectionData.mainHeadingLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{projectsSectionData.supportingText}"
          </p>
        </motion.div>

        {/* STACKED PROJECT SHOWCASES */}
        <div className="space-y-24">
          {projectsSectionData.projects.map((project) => {
            const screenshots = projectScreenshots[project.number] || [];
            const featuredShot = screenshots[0];
            const thumbnailShots = screenshots.slice(1);

            return (
              <motion.div
                key={project.number}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="editorial-card p-6 sm:p-10 relative overflow-hidden transition-all duration-300 hover:border-surface-border-highlight shadow-subtle group"
              >
                {/* Project Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border/60 pb-5 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono text-accent-blue font-bold">
                      {project.number} / 02
                    </span>
                    <span className="text-xs font-mono text-text-tertiary tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-text-tertiary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    <span>VERIFIED SYSTEM SCREENSHOTS (6)</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight mb-6 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* REAL PROJECT SCREENSHOTS GALLERY AREA */}
                <div className="my-8 space-y-3">
                  {/* 1. Main Featured Screenshot */}
                  {featuredShot && (
                    <div
                      onClick={() => setModalState({ projectNumber: project.number, activeIndex: 0 })}
                      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl border border-surface-border bg-background-secondary/80 overflow-hidden cursor-pointer group/featured shadow-inner flex items-center justify-center p-2"
                    >
                      <img
                        src={featuredShot.src}
                        alt={featuredShot.title}
                        loading="lazy"
                        className="w-full h-full object-contain filter contrast-[1.02] transition-transform duration-500 group-hover/featured:scale-[1.01]"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-background-primary/50 opacity-0 group-hover/featured:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium shadow-lg">
                          <Maximize2 className="w-4 h-4" />
                          <span>VIEW SCREENSHOT 1 OF 6</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 2. Secondary Thumbnails Bar (Screenshots 2 to 6) */}
                  <div className="grid grid-cols-5 gap-2 sm:gap-3">
                    {thumbnailShots.map((shot, tIdx) => (
                      <div
                        key={shot.id}
                        onClick={() => setModalState({ projectNumber: project.number, activeIndex: tIdx + 1 })}
                        className="relative aspect-[16/10] rounded-lg border border-surface-border bg-background-primary overflow-hidden cursor-pointer group/thumb transition-all duration-200 hover:border-accent-blue/60 hover:shadow-subtle"
                      >
                        <img
                          src={shot.src}
                          alt={shot.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter contrast-[1.02] transition-transform duration-300 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-background-primary/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white/90">
                          0{tIdx + 2}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Gallery Caption guidance */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary pt-1">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                      <span>REAL PRODUCTION SYSTEM UI</span>
                    </span>
                    <span>CLICK ANY SCREENSHOT TO ENLARGE</span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal my-6 max-w-3xl">
                  "{project.description}"
                </p>

                {/* KEY CAPABILITIES */}
                <div className="mb-6 pt-4 border-t border-surface-border/40">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest block mb-4">
                    KEY CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center space-x-2 text-xs font-medium text-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="mb-8 pt-4 border-t border-surface-border/40">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest block mb-3">
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-background-secondary border border-surface-border text-xs font-medium text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-surface-border/60">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white font-medium text-sm tracking-wide transition-all shadow-subtle"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-background-secondary/60 border border-surface-border text-xs font-mono text-text-tertiary cursor-not-allowed">
                      LIVE SYSTEM AVAILABLE UPON REQUEST
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-background-secondary hover:bg-background-card-hover border border-surface-border text-text-primary font-medium text-sm tracking-wide transition-all"
                  >
                    <Github className="w-4 h-4 mr-2 text-text-tertiary" />
                    <span>GITHUB</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 text-text-tertiary" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* SECTION FOOTER */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="pt-12 mt-12 flex items-center justify-between text-xs font-mono text-text-tertiary tracking-widest uppercase border-t border-surface-border/60"
        >
          <span>{projectsSectionData.sectionFooter}</span>
          <span className="hidden sm:inline text-[11px] text-surface-border">✦ ✦ ✦</span>
        </motion.div>

      </div>

      {/* SCREENSHOT FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {modalState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalState(null)}
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
              aria-label="Project screenshot viewer modal"
              className="relative max-w-5xl w-full bg-background-card border border-surface-border rounded-xl p-5 sm:p-6 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-border/60 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
                    SCREENSHOT {modalState.activeIndex + 1} OF 6
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-text-primary tracking-tight mt-1">
                    {projectScreenshots[modalState.projectNumber][modalState.activeIndex]?.title}
                  </h4>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setModalState(null)}
                  className="p-1.5 rounded-lg bg-background-secondary border border-surface-border text-text-tertiary hover:text-text-primary hover:border-surface-border-highlight transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image Viewport with Previous & Next Navigation Controls */}
              <div className="relative flex-1 overflow-auto flex items-center justify-center p-2 rounded-lg bg-background-primary/90 border border-surface-border/40 group/viewer">
                {/* Previous Button */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background-secondary/80 border border-surface-border text-text-primary hover:bg-accent-blue hover:text-white transition-all shadow-md z-10 focus:outline-none"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Active Image */}
                <img
                  src={projectScreenshots[modalState.projectNumber][modalState.activeIndex]?.src}
                  alt={projectScreenshots[modalState.projectNumber][modalState.activeIndex]?.title}
                  className="max-h-[70vh] w-auto object-contain rounded filter contrast-[1.02]"
                />

                {/* Next Button */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background-secondary/80 border border-surface-border text-text-primary hover:bg-accent-blue hover:text-white transition-all shadow-md z-10 focus:outline-none"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Footer with Thumbnail Selector */}
              <div className="pt-3 mt-3 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
                <span className="flex items-center space-x-1.5 text-accent-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real System Interface</span>
                </span>

                {/* Quick Thumbnail Navigation Row inside Modal */}
                <div className="flex items-center space-x-1.5">
                  {projectScreenshots[modalState.projectNumber].map((shot, idx) => (
                    <button
                      key={shot.id}
                      onClick={() => setModalState({ ...modalState, activeIndex: idx })}
                      className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono transition-all ${
                        idx === modalState.activeIndex
                          ? 'bg-accent-blue text-white font-bold'
                          : 'bg-background-secondary border border-surface-border text-text-tertiary hover:text-white'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <span>Press ESC or click outside to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
