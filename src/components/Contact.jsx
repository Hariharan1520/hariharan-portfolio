import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';
import { contactSectionData } from '../data/portfolioData';

export default function Contact() {
  // Framer Motion animation variants
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
    <section id="contact" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Ambient Radial Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Large Headline & Primary Email CTA */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-mono text-accent-blue tracking-widest uppercase block mb-3">
                {contactSectionData.sectionLabel}
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1]">
                {contactSectionData.mainHeadingLine1} <br />
                <span className="text-gradient-accent">{contactSectionData.mainHeadingLine2}</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal mt-6 max-w-xl">
                "{contactSectionData.supportingText}"
              </p>
            </div>

            {/* Primary Email Action Button */}
            <div className="pt-2">
              <a
                href={contactSectionData.emailMailto}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent-blue/50 group"
              >
                <span>{contactSectionData.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Clean Editorial Contact Panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 space-y-0 divide-y divide-surface-border/60 border-t border-b border-surface-border/60"
          >
            {/* ITEM 1: EMAIL */}
            <motion.div variants={itemVariants} className="py-6 px-2 group">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent-blue" />
                  EMAIL
                </span>
                <a
                  href={contactSectionData.emailMailto}
                  className="text-xs font-mono text-accent-blue/80 group-hover:text-accent-blue flex items-center gap-1 transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <a
                href={contactSectionData.emailMailto}
                className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors break-all block"
              >
                {contactSectionData.email}
              </a>
            </motion.div>

            {/* ITEM 2: LINKEDIN */}
            <motion.div variants={itemVariants} className="py-6 px-2 group">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
                  LINKEDIN
                </span>
                <a
                  href={contactSectionData.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent-blue/80 group-hover:text-accent-blue flex items-center gap-1 transition-colors"
                >
                  <span>View LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <a
                href={contactSectionData.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors break-all block"
              >
                {contactSectionData.linkedin.displayUrl}
              </a>
            </motion.div>

            {/* ITEM 3: GITHUB */}
            <motion.div variants={itemVariants} className="py-6 px-2 group">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-accent-blue" />
                  GITHUB
                </span>
                <a
                  href={contactSectionData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-accent-blue/80 group-hover:text-accent-blue flex items-center gap-1 transition-colors"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <a
                href={contactSectionData.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors break-all block"
              >
                {contactSectionData.github.displayUrl}
              </a>
            </motion.div>

            {/* ITEM 4: LEETCODE */}
            {contactSectionData.leetcode && (
              <motion.div variants={itemVariants} className="py-6 px-2 group">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-accent-blue" />
                    LEETCODE
                  </span>
                  <a
                    href={contactSectionData.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent-blue/80 group-hover:text-accent-blue flex items-center gap-1 transition-colors"
                  >
                    <span>View LeetCode</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <a
                  href={contactSectionData.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-blue transition-colors break-all block"
                >
                  {contactSectionData.leetcode.displayUrl}
                </a>
              </motion.div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
