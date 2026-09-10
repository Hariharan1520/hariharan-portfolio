import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, Maximize2, X, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { certificationsSectionData } from '../data/portfolioData';

// Import real certificate assets (images & PDFs)
import awsCloudImg from '../assets/certificates/AWS Cloud Foundations.jpg';
import tcsIonImg from '../assets/certificates/TCS ion NQT.jpg';
import databasesSqlImg from '../assets/certificates/Databases and SQL for Data Science with Python.jpg';
import codeClashImg from '../assets/certificates/Code Clash 2025.jpg';
import aimlGeoDataPdf from '../assets/certificates/AIML for GeoData Analysis.pdf';
import deepLearningDevPdf from '../assets/certificates/Deeplearning for developers.pdf';
import linguaskillPdf from '../assets/certificates/Linguaskill Test Report.pdf';
import sqlAdvancedPdf from '../assets/certificates/SQL(Advanced).pdf';
import mlPythonRPdf from '../assets/certificates/machine learning using python and R.pdf';

const certificateAssetMap = {
  awsCloud: { file: awsCloudImg, type: 'image' },
  tcsIon: { file: tcsIonImg, type: 'image' },
  databasesSql: { file: databasesSqlImg, type: 'image' },
  codeClash: { file: codeClashImg, type: 'image' },
  aimlGeoData: { file: aimlGeoDataPdf, type: 'pdf' },
  deepLearningDev: { file: deepLearningDevPdf, type: 'pdf' },
  linguaskill: { file: linguaskillPdf, type: 'pdf' },
  sqlAdvanced: { file: sqlAdvancedPdf, type: 'pdf' },
  mlPythonR: { file: mlPythonRPdf, type: 'pdf' },
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
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
    <section id="certifications" className="py-24 border-t border-surface-border/60 relative overflow-hidden">
      {/* Soft Background Depth */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-gradient-to-l from-accent-blue/5 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

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
            {certificationsSectionData.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {certificationsSectionData.mainHeading}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal max-w-2xl mt-4">
            "{certificationsSectionData.supportingText}"
          </p>
        </motion.div>

        {/* 3-COLUMN CERTIFICATE GALLERY GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certificationsSectionData.certifications.map((cert) => {
            const assetInfo = cert.assetKey ? certificateAssetMap[cert.assetKey] : null;

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="editorial-card p-5 flex flex-col justify-between group hover:border-surface-border-highlight transition-all duration-300 shadow-subtle"
              >
                <div>
                  {/* Certificate Preview Card Wrapper */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[4/3] rounded-lg border border-surface-border/80 bg-background-primary overflow-hidden cursor-pointer group/preview mb-4 flex items-center justify-center p-2 shadow-inner"
                  >
                    {assetInfo && assetInfo.type === 'image' ? (
                      <img
                        src={assetInfo.file}
                        alt={`${cert.title} Certificate`}
                        loading="lazy"
                        className="w-full h-full object-contain p-2 filter contrast-[1.02] transition-transform duration-500 group-hover/preview:scale-105"
                      />
                    ) : (
                      /* PDF Card Representation */
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-background-secondary/40 rounded">
                        <FileText className="w-10 h-10 text-accent-blue/80 mb-2 group-hover/preview:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
                          VERIFIED PDF DOCUMENT
                        </span>
                      </div>
                    )}

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-background-primary/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-mono font-medium shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{cert.fileType === 'pdf' ? 'VIEW PDF' : 'VIEW CERTIFICATE'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
                      {cert.number}
                    </span>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase">
                      {cert.fileType === 'pdf' ? 'PDF DOCUMENT' : 'IMAGE CERTIFICATE'}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>

                  {cert.issuer && (
                    <p className="text-xs font-mono text-text-tertiary">
                      {cert.issuer}
                    </p>
                  )}
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-mono text-accent-blue/80 hover:text-accent-blue font-semibold flex items-center space-x-1 transition-colors focus:outline-none"
                  >
                    <span>{cert.fileType === 'pdf' ? 'OPEN PDF' : 'VIEW FULL'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue/70" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
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
              aria-label="Certification modal"
              className="relative max-w-4xl w-full bg-background-card border border-surface-border rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-surface-border/60 mb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded border border-accent-blue/20">
                      CERTIFICATE #{selectedCert.number}
                    </span>
                    <span className="text-xs font-mono text-text-tertiary uppercase">
                      {selectedCert.fileType === 'pdf' ? 'PDF DOCUMENT' : 'VERIFIED CERTIFICATE'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.issuer && (
                    <p className="text-xs font-mono text-text-tertiary mt-1">
                      {selectedCert.issuer}
                    </p>
                  )}
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-background-secondary border border-surface-border text-text-tertiary hover:text-text-primary hover:border-surface-border-highlight transition-all focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Asset Display (Image or Embedded PDF Viewer) */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-2 rounded-lg bg-background-primary/80 border border-surface-border/40">
                {selectedCert.assetKey && certificateAssetMap[selectedCert.assetKey]?.type === 'image' ? (
                  <img
                    src={certificateAssetMap[selectedCert.assetKey].file}
                    alt={`${selectedCert.title} Full View`}
                    className="max-h-[65vh] w-auto object-contain rounded filter contrast-[1.02]"
                  />
                ) : selectedCert.assetKey ? (
                  <div className="w-full flex flex-col items-center justify-center py-6">
                    <iframe
                      src={certificateAssetMap[selectedCert.assetKey].file}
                      title={selectedCert.title}
                      className="w-full h-[55vh] rounded border border-surface-border/40 mb-4 bg-white/5"
                    />
                    <a
                      href={certificateAssetMap[selectedCert.assetKey].file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-mono font-medium shadow"
                    >
                      <span>OPEN FULL PDF IN NEW TAB</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : null}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="flex items-center space-x-1.5 text-accent-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Asset</span>
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
