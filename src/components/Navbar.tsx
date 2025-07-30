import React from 'react';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-white text-xl font-bold">Jonathan Kim</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
            <a href="#experience" className="text-white hover:text-blue-300 transition-colors">Experience</a>
            <a href="#projects" className="text-white hover:text-blue-300 transition-colors">Projects</a>
            <a href="#skills" className="text-white hover:text-blue-300 transition-colors">Skills</a>
            <a href="#achievements" className="text-white hover:text-blue-300 transition-colors">Achievements</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#achievements" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Achievements
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-blue-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
