import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle header background styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-background-primary/95 backdrop-blur-md border-b border-surface-border py-4 shadow-subtle'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="group focus:outline-none rounded-md py-1"
          >
            <span className="font-extrabold tracking-tight text-text-primary text-lg sm:text-xl group-hover:text-accent-blue transition-colors">
              {personalInfo.brandName}
            </span>
          </a>

          {/* Right: Desktop Links (lg:flex) */}
          <nav className="hidden lg:flex items-center space-x-7">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold tracking-wider text-text-secondary hover:text-text-primary transition-colors py-1 uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-[1px] bg-surface-border" />

            {/* GitHub Icon Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-secondary hover:text-text-primary transition-colors p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-accent-blue"
            >
              <Github className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Hamburger Controls (lg:hidden) */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-secondary hover:text-text-primary p-1.5"
            >
              <Github className="w-4.5 h-4.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-lg bg-background-secondary border border-surface-border text-text-primary hover:text-accent-blue transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Full Overlay Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-background-secondary border-b border-surface-border shadow-2xl overflow-hidden z-50"
            >
              <div className="max-w-content mx-auto px-6 py-6 space-y-3">
                <span className="text-[10px] font-mono text-accent-blue uppercase tracking-widest block mb-2 font-bold">
                  NAVIGATION MENU
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-lg bg-background-primary/60 border border-surface-border/60 text-sm font-semibold tracking-wider text-text-primary hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all uppercase"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary" />
                    </a>
                  ))}
                </div>

                <div className="pt-4 mt-2 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-tertiary">
                  <span className="text-accent-blue">HARIHARAN S.</span>
                  <span>Press ESC to close</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Semi-Transparent Backdrop Overlay for Outside Click to Close */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
