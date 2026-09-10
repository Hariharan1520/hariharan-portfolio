import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary relative selection:bg-accent-blue/20 selection:text-white">
      {/* Soft Ambient Background Depth */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-accent-blue/8 via-transparent to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Main Content Layout Shell */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internship />
          <Achievements />
          <Certifications />
          <Leadership />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
