import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { writingData } from '../data/portfolioData';

export default function Writing() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const article = writingData.article;

  return (
    <section id="blog" className="py-24 border-t border-surface-border/60 relative overflow-hidden scroll-mt-16">
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
            {writingData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {writingData.mainHeading}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{writingData.supportingText}"
          </p>
        </motion.div>

        {/* Featured Editorial Article Card */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="editorial-card p-6 sm:p-8 sm:p-10 border-l-4 border-l-accent-blue relative overflow-hidden transition-all duration-300 hover:border-surface-border-highlight shadow-subtle group w-full"
        >
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border/60 pb-5 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-accent-blue font-bold tracking-widest uppercase bg-accent-blue/10 px-2.5 py-1 rounded border border-accent-blue/20">
                {article.category}
              </span>
              <span className="hidden sm:inline text-surface-border text-xs">|</span>
              <span className="text-xs font-mono text-text-tertiary tracking-wider uppercase">
                {article.metadata}
              </span>
            </div>

            <span className="text-[11px] font-mono text-text-tertiary flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              <span>PUBLISHED ON {article.platform.toUpperCase()}</span>
            </span>
          </div>

          {/* Article Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-snug">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary group-hover:text-white hover:text-accent-blue transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50 rounded-sm inline-block"
            >
              {article.title}
            </a>
          </h3>

          {/* Article Description */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal mb-8 max-w-3xl">
            {article.description}
          </p>

          {/* Supporting Category Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider mr-1">
              FOCUS:
            </span>
            <span className="px-3 py-1 rounded-md bg-background-secondary border border-surface-border text-xs font-mono text-text-secondary">
              {article.category}
            </span>
            {article.supportingCategories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-background-secondary border border-surface-border text-xs font-mono text-text-secondary"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Action Row / Call to Action */}
          <div className="pt-6 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-xs sm:text-sm font-mono font-medium tracking-wide transition-all duration-200 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent-blue/50 group/cta"
            >
              <span>{article.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>

            <div className="text-xs font-mono text-text-tertiary">
              EXTERNAL PUBLICATION ↗
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
