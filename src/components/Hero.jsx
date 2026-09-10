import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile/profile.jpeg';

export default function Hero() {
  // Fast, subtle Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
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
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-10 overflow-hidden">
      {/* Soft Background Depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-b from-accent-blue/8 via-transparent to-transparent blur-[130px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Personal Brand & Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Label */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <span className="text-xs font-mono text-accent-blue uppercase tracking-wider">
                  {personalInfo.status}
                </span>
              </div>
            </motion.div>

            {/* Primary Personal Identity */}
            <motion.div variants={itemVariants} className="mb-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Professional Role */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gradient-accent">
                {personalInfo.primaryTitle}
              </h2>
            </motion.div>

            {/* Specialties Metadata */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-text-tertiary uppercase">
                {personalInfo.specialtiesString}
              </p>
            </motion.div>

            {/* Personal Statement */}
            <motion.div variants={itemVariants} className="mb-8 max-w-xl">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                "{personalInfo.shortDescription}"
              </p>
            </motion.div>

            {/* Editorial Action Buttons & Secondary Coding Link */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {/* Secondary CTA */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-background-card hover:bg-background-card-hover border border-surface-border text-text-primary font-medium text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-surface-border"
              >
                <span>GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2 text-text-tertiary" />
              </a>

              {/* Secondary CTA 2: LEETCODE */}
              {personalInfo.leetcode && (
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-background-card hover:bg-background-card-hover border border-surface-border text-text-primary font-medium text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-surface-border"
                >
                  <span>LEETCODE</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2 text-text-tertiary" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Real Editorial Profile Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[4/5] rounded-xl border border-surface-border overflow-hidden bg-background-secondary shadow-subtle group">
              <img
                src={profileImg}
                alt="Hariharan S. Profile Photograph"
                loading="eager"
                decoding="async"
                style={{ objectPosition: '68% 18%' }}
                className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle Dark Gradient Overlay for Seamless Integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator Guidance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 relative z-10"
      >
        <a
          href="#projects"
          className="inline-flex items-center space-x-2 text-xs font-mono text-text-tertiary hover:text-text-secondary transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
