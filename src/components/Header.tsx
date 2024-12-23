// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Phearion Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                Phearion
              </span>
              <span className="text-sm text-gray-600 hidden sm:block">Creating Digital Magic</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-8 items-center"
        >
          <Link
            href="#projects"
            className="relative group text-gray-700 hover:text-amber-600 transition-colors text-lg"
          >
            <span>Projects</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#team"
            className="relative group text-gray-700 hover:text-amber-600 transition-colors text-lg"
          >
            <span>Team</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#mission"
            className="relative group text-gray-700 hover:text-amber-600 transition-colors text-lg"
          >
            <span>Mission</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a
            href="https://github.com/phearion"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl md:hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                <Link
                  href="#projects"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Projects
                </Link>
                <Link
                  href="#team"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Team
                </Link>
                <Link
                  href="#mission"
                  onClick={handleLinkClick}
                  className="text-gray-700 hover:text-amber-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  Mission
                </Link>
                <a
                  href="https://github.com/phearion"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="text-center py-2 px-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-md transition-all"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;