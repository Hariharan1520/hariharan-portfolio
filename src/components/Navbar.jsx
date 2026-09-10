import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-primary/90 backdrop-blur-md border-b border-surface-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          className="group focus:outline-none rounded-md py-1"
        >
          <span className="font-extrabold tracking-tight text-text-primary text-lg sm:text-xl group-hover:text-accent-blue transition-colors">
            {personalInfo.brandName}
          </span>
        </a>

        {/* Right: Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-7">
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

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-text-secondary hover:text-text-primary p-1.5"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-text-secondary hover:text-text-primary focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-background-secondary border-b border-surface-border overflow-hidden"
          >
            <div className="px-6 py-5 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-semibold tracking-wider text-text-secondary hover:text-text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
