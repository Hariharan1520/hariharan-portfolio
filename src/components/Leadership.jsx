import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Users, Maximize2, X, CheckCircle2 } from 'lucide-react';
import { leadershipSectionData } from '../data/portfolioData';

// Import real leadership certificate/proof assets
import igniteImg from '../assets/leadership/IGNITE.jpg';
import invictusTreasurerImg from '../assets/leadership/INVICTUS-TREASURER.jpg';

const leadershipAssetMap = {
  ignite: igniteImg,
  invictusTreasurer: invictusTreasurerImg,
};

export default function Leadership() {
  const [selectedProof, setSelectedProof] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProof(null);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const featured = leadershipSectionData.featured;
  const featuredProofImg = featured.imageKey ? leadershipAssetMap[featured.imageKey] : null;

  return (
    <section id="leadership" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Background Depth */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[300px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Section Header & Featured Role Showcase */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-2">
                {leadershipSectionData.sectionLabel}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
                {leadershipSectionData.mainHeading}
              </h2>
              <p className="text-base text-text-secondary leading-relaxed font-normal mt-4">
                "{leadershipSectionData.supportingText}"
              </p>
            </div>

            {/* FEATURED PRESIDENT SHOWCASE BOX */}
            <div className="editorial-card p-6 border-l-4 border-l-accent-blue shadow-subtle group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-accent-blue font-bold tracking-widest uppercase bg-accent-blue/10 px-2.5 py-1 rounded border border-accent-blue/20">
                  HIGHEST ROLE
                </span>
                <Users className="w-4 h-4 text-accent-blue" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary group-hover:text-white transition-colors leading-snug mb-1">
                {featured.role}
              </h3>

              <p className="text-sm font-mono text-text-tertiary mb-4">
                {featured.organization}
              </p>

              {/* Real Proof Image Thumbnail if available */}
              {featuredProofImg && (
                <div
                  onClick={() => setSelectedProof({ title: `${featured.role} — ${featured.organization}`, img: featuredProofImg })}
                  className="relative aspect-[16/9] rounded-lg border border-surface-border/80 bg-background-primary overflow-hidden cursor-pointer group/proof shadow-inner mt-4"
                >
                  <img
                    src={featuredProofImg}
                    alt={`${featured.role} Certificate Proof`}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 filter contrast-[1.02] group-hover/proof:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background-primary/60 opacity-0 group-hover/proof:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>VIEW PROOF</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Editorial Leadership Entries List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 space-y-0 divide-y divide-surface-border/60 border-t border-b border-surface-border/60"
          >
            {leadershipSectionData.items.map((item) => {
              const proofImg = item.imageKey ? leadershipAssetMap[item.imageKey] : null;

              return (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  className="py-6 px-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200 group hover:bg-background-card-hover hover:translate-x-1 rounded-lg"
                >
                  <div className="flex items-baseline space-x-4">
                    {/* Number Badge */}
                    <span className="text-xs font-mono text-accent-blue/70 font-semibold min-w-[24px]">
                      {item.number}
                    </span>

                    <div>
                      {/* Role Title */}
                      <h4 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors leading-snug">
                        {item.role}
                      </h4>

                      {/* Organization if present */}
                      {item.organization && (
                        <p className="text-xs font-mono text-text-tertiary mt-1">
                          {item.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Proof Thumbnail or Indicator */}
                  {proofImg ? (
                    <button
                      onClick={() => setSelectedProof({ title: `${item.role} ${item.organization ? '— ' + item.organization : ''}`, img: proofImg })}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-background-secondary border border-surface-border text-xs font-mono text-accent-blue hover:border-accent-blue/40 transition-all shrink-0 focus:outline-none"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>PROOF</span>
                    </button>
                  ) : (
                    <div className="shrink-0 hidden sm:block">
                      <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-blue transition-colors" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>

      {/* LEADERSHIP PROOF MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
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
              aria-label="Leadership proof modal"
              className="relative max-w-4xl w-full bg-background-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-border/60 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
                    LEADERSHIP PROOF
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight mt-1">
                    {selectedProof.title}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProof(null)}
                  className="p-2 rounded-lg bg-background-secondary border border-surface-border text-text-tertiary hover:text-text-primary hover:border-surface-border-highlight transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Viewport */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-2 rounded-lg bg-background-primary/80 border border-surface-border/40">
                <img
                  src={selectedProof.img}
                  alt={`${selectedProof.title} Proof Full View`}
                  className="max-h-[65vh] w-auto object-contain rounded filter contrast-[1.02]"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="flex items-center space-x-1.5 text-accent-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Leadership Asset</span>
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
