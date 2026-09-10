import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Maximize2, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { achievementsSectionData } from '../data/portfolioData';

// Import real uploaded achievement certificate images
import paperPresentationImg from '../assets/achievements/paper presentation.jpg';
import solderWarImg from '../assets/achievements/Solder War.jpg';
import ideaPitchingImg from '../assets/achievements/Idea pitching.jpg';
import challengeShowcaseImg from '../assets/achievements/Challenge Showcase.jpg';
import techThriveImg from '../assets/achievements/Tech Thrive.jpg';

// Map imageKey to imported asset
const certificateMap = {
  paperPresentation: paperPresentationImg,
  solderWar: solderWarImg,
  ideaPitching: ideaPitchingImg,
  challengeShowcase: challengeShowcaseImg,
  techThrive: techThriveImg,
};

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedAchievement(null);
      }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="achievements" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Background Depth */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

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
            {achievementsSectionData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {achievementsSectionData.mainHeading}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{achievementsSectionData.supportingText}"
          </p>
        </motion.div>

        {/* 2-COLUMN EDITORIAL CERTIFICATE SHOWCASE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {achievementsSectionData.achievements.map((ach) => {
            const certImg = ach.imageKey ? certificateMap[ach.imageKey] : null;

            return (
              <motion.div
                key={ach.id}
                variants={cardVariants}
                className="editorial-card p-6 flex flex-col justify-between group hover:border-surface-border-highlight transition-all duration-300 shadow-subtle"
              >
                <div>
                  {/* Real Certificate Image Card Box */}
                  {certImg ? (
                    <div
                      onClick={() => setSelectedAchievement(ach)}
                      className="relative aspect-[4/3] rounded-lg border border-surface-border/80 bg-background-primary overflow-hidden cursor-pointer group/img mb-6 shadow-inner"
                    >
                      <img
                        src={certImg}
                        alt={`${ach.title} Certificate`}
                        loading="lazy"
                        className="w-full h-full object-contain p-2 filter contrast-[1.02] transition-transform duration-500 group-hover/img:scale-105"
                      />
                      
                      {/* Dark Overlay with View Action Prompt */}
                      <div className="absolute inset-0 bg-background-primary/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>VIEW CERTIFICATE</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] rounded-lg border border-surface-border/60 bg-background-secondary/60 flex items-center justify-center p-6 mb-6">
                      <Award className="w-12 h-12 text-accent-blue/40" />
                    </div>
                  )}

                  {/* Rank & Date Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded border border-accent-blue/20">
                      {ach.rank}
                    </span>
                    {ach.date && (
                      <span className="text-xs font-mono text-text-tertiary">
                        {ach.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Event Context */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary group-hover:text-white transition-colors leading-snug mb-1">
                    {ach.title}
                  </h3>

                  {ach.event && (
                    <p className="text-sm font-mono text-text-tertiary mt-1 leading-normal">
                      {ach.event}
                    </p>
                  )}
                </div>

                {/* Bottom Action Trigger */}
                {certImg && (
                  <div className="pt-6 mt-6 border-t border-surface-border/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedAchievement(ach)}
                      className="text-xs font-mono text-accent-blue/80 hover:text-accent-blue font-semibold flex items-center space-x-1.5 transition-colors focus:outline-none"
                    >
                      <span>VIEW FULL CERTIFICATE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <span className="text-[11px] font-mono text-text-tertiary/70 uppercase">VERIFIED</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* FULLSCREEN LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.imageKey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Achievement certificate modal"
              className="relative max-w-4xl w-full bg-background-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-border/60 mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
                      {selectedAchievement.rank}
                    </span>
                    {selectedAchievement.date && (
                      <span className="text-xs font-mono text-text-tertiary">
                        {selectedAchievement.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-text-primary tracking-tight">
                    {selectedAchievement.title}
                  </h3>
                  {selectedAchievement.event && (
                    <p className="text-sm font-mono text-text-tertiary mt-1">
                      {selectedAchievement.event}
                    </p>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 rounded-lg bg-background-secondary border border-surface-border text-text-tertiary hover:text-text-primary hover:border-surface-border-highlight transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewport */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-2 rounded-lg bg-background-primary/80 border border-surface-border/40">
                <img
                  src={certificateMap[selectedAchievement.imageKey]}
                  alt={`${selectedAchievement.title} Certificate Full View`}
                  className="max-h-[65vh] w-auto object-contain rounded filter contrast-[1.02]"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="flex items-center space-x-1.5 text-accent-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Resume Achievement</span>
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
