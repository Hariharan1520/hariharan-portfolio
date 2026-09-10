import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye, X, CheckCircle2 } from 'lucide-react';
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

  return (
    <section id="leadership" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Background Depth */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[300px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-2">
            {leadershipSectionData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {leadershipSectionData.mainHeading}
          </h2>
          <p className="text-base text-text-secondary leading-relaxed font-normal mt-4">
            "{leadershipSectionData.supportingText}"
          </p>
        </motion.div>

        {/* Editorial Leadership Entries List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-0 divide-y divide-surface-border/60 border-t border-b border-surface-border/60"
        >
          {leadershipSectionData.items.map((item) => {
            const proofImg = item.imageKey ? leadershipAssetMap[item.imageKey] : null;

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                className="py-6 px-3 flex items-center justify-between gap-4 transition-all duration-200 group hover:bg-background-card-hover hover:translate-x-1 rounded-lg"
              >
                <div className="flex items-baseline space-x-4">
                  {/* Number Badge */}
                  <span className="text-xs font-mono text-accent-blue/70 font-semibold min-w-[24px]">
                    {item.number}
                  </span>

                  <div>
                    {/* Role Title */}
                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors leading-snug">
                      {item.role}
                    </h3>

                    {/* Organization if present */}
                    {item.organization && (
                      <p className="text-xs font-mono text-text-tertiary mt-1">
                        {item.organization}
                      </p>
                    )}
                  </div>
                </div>

                {/* Clean Icon-Only Action Control */}
                {proofImg ? (
                  <button
                    onClick={() => setSelectedProof({ title: `${item.role} ${item.organization ? '— ' + item.organization : ''}`, img: proofImg })}
                    aria-label={`View certificate for ${item.role} ${item.organization || ''}`}
                    title={`View certificate for ${item.role}`}
                    className="p-2.5 rounded-lg bg-background-secondary border border-surface-border text-accent-blue hover:text-white hover:bg-accent-blue hover:border-accent-blue transition-all shrink-0 focus:outline-none shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
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

      {/* LEADERSHIP LIGHTBOX MODAL */}
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
              aria-label="Leadership certificate modal"
              className="relative max-w-4xl w-full bg-background-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-border/60 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
                    VERIFIED LEADERSHIP ASSET
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
