import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { footerData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-surface-border/60 bg-background-primary relative overflow-hidden">
      {/* Soft Ambient Depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-accent-blue/5 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-12">
          
          {/* LEFT: Personal Brand Metadata */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xl font-extrabold text-text-primary tracking-tight">
              {footerData.name}
            </h3>
            <span className="text-xs font-mono font-semibold text-accent-blue tracking-widest uppercase block">
              {footerData.role}
            </span>
            <p className="text-xs font-mono text-text-tertiary leading-relaxed pt-1">
              {footerData.specialties}
            </p>
          </div>

          {/* CENTER: Editorial Section Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-widest block mb-4">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerData.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-all duration-200 inline-block hover:-translate-y-0.5 focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Social & Direct Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-widest block mb-4">
              CONNECT
            </span>
            <ul className="space-y-2.5">
              {footerData.socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.url}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="text-xs font-mono text-text-tertiary hover:text-accent-blue transition-colors duration-200 inline-flex items-center space-x-1 group focus:outline-none focus:text-accent-blue"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Thin Horizontal Divider */}
        <div className="border-t border-surface-border/60" />

        {/* BOTTOM: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
          <p className="tracking-wider">{footerData.copyrightText}</p>
          <p className="tracking-widest text-[11px] text-text-tertiary/80">{footerData.tagline}</p>
        </div>

      </div>
    </footer>
  );
}
