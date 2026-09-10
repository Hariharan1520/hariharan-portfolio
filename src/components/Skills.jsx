import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
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
      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <section id="skills" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Ambient Radial Background Depth */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[300px] bg-gradient-to-l from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

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
            {skillsData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {skillsData.mainHeadingLine1} <br className="hidden sm:inline" />
            <span className="text-gradient-accent">{skillsData.mainHeadingLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{skillsData.supportingText}"
          </p>
        </motion.div>

        {/* CORE STACK AREA */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            <h3 className="text-xs font-mono tracking-widest text-text-tertiary uppercase">
              {skillsData.coreStackTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5">
            {skillsData.coreStackItems.map((item, idx) => {
              const isCoreLang = item.name === 'Python' || item.name === 'Java';

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`editorial-card p-4 flex flex-col justify-between border-l-2 transition-all duration-200 ${
                    isCoreLang
                      ? 'border-l-accent-blue bg-accent-blue/5 hover:border-accent-blue hover:shadow-subtle'
                      : 'border-l-accent-blue/50 hover:border-surface-border-highlight hover:shadow-subtle'
                  }`}
                >
                  <span className={`text-sm font-bold block mb-1 ${isCoreLang ? 'text-white' : 'text-text-primary'}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider block">
                    {item.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* EDITORIAL CATEGORY BREAKDOWN SYSTEM (01 - 05) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-0 divide-y divide-surface-border/60 border-t border-b border-surface-border/60"
        >
          {skillsData.categories.map((cat) => (
            <motion.div
              key={cat.number}
              variants={itemVariants}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* LEFT SIDE: Category Number & Title */}
              <div className="lg:col-span-4 flex items-baseline space-x-4">
                <span className="text-sm font-mono text-accent-blue/70 font-semibold tracking-wider">
                  {cat.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary tracking-wide group-hover:text-accent-blue transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* RIGHT SIDE: Technical Skill Tags */}
              <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                {cat.items.map((skill, sIdx) => {
                  const isCoreLang = skill === 'Python' || skill === 'Java';

                  return (
                    <span
                      key={sIdx}
                      className={`px-3.5 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                        isCoreLang
                          ? 'bg-accent-blue/15 border-accent-blue/40 text-white font-bold hover:border-accent-blue hover:bg-accent-blue/20 hover:shadow-blue-glow'
                          : 'bg-background-card/80 border-surface-border text-text-primary hover:text-white hover:border-accent-blue/40 hover:bg-background-card-hover hover:shadow-blue-glow'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SECTION FOOTER */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="pt-10 mt-6 flex items-center justify-between text-xs font-mono text-text-tertiary tracking-widest uppercase"
        >
          <span>{skillsData.sectionFooter}</span>
          <span className="hidden sm:inline text-[11px] text-surface-border">✦ ✦ ✦</span>
        </motion.div>

      </div>
    </section>
  );
}
