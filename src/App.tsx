import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './style.css';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'light' | 'dark') || 'dark';
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync Theme class on document body
  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Scrollspy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSectionId = 'hero';
      const scrollPosition = window.scrollY + 200; // Offset for header height

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          const id = section.getAttribute('id');
          if (id) currentSectionId = id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item');

    const revealCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    });

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Premium background glow elements */}
      <div className="bg-glow-halo"></div>
      <div className="bg-fine-grid"></div>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
