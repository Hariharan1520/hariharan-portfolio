import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { internshipData } from '../data/portfolioData';

export default function Internship() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="internship" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Ambient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-gradient-to-r from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-2">
            {internshipData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {internshipData.mainHeading}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{internshipData.supportingText}"
          </p>
        </motion.div>

        {/* EDITORIAL EXPERIENCE CARD (Full container width matching all major portfolio sections) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="editorial-card p-6 sm:p-8 sm:p-10 border-l-4 border-l-accent-blue relative overflow-hidden transition-all duration-300 hover:border-surface-border-highlight shadow-subtle group w-full"
        >
          {/* Header Row: Balanced Two-Column Layout */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-surface-border/60 pb-6 mb-6">
            {/* LEFT SIDE: Role & Organization */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight group-hover:text-white transition-colors">
                {internshipData.role}
              </h3>
              <p className="text-sm font-mono text-accent-blue font-semibold uppercase tracking-wider mt-1.5 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 shrink-0 text-accent-blue" />
                <span>{internshipData.organization}</span>
              </p>
            </div>

            {/* RIGHT SIDE: Duration & Location (Vertically aligned with title) */}
            <div className="flex flex-col items-start md:items-end text-xs sm:text-sm font-mono shrink-0 pt-0.5">
              <span className="text-text-primary font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                <span>{internshipData.duration}</span>
              </span>
              <span className="text-text-tertiary flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-text-tertiary" />
                <span>{internshipData.location}</span>
              </span>
            </div>
          </div>

          {/* Description Paragraph (Comfortable reading width) */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal mb-8 max-w-2xl">
            "{internshipData.description}"
          </p>

          {/* Bottom Metadata Grid Area (Visually connected with vertical accents) */}
          <div className="pt-6 border-t border-surface-border/60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {internshipData.metaDetails.map((detail, idx) => (
                <div key={idx} className="border-l-2 border-accent-blue/40 pl-3 py-1 bg-background-primary/40 rounded-r-md">
                  <span className="text-[10px] font-mono tracking-wider text-text-tertiary uppercase block mb-0.5">
                    {detail.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text-primary block truncate">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
