import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/asset.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Legal Awareness', href: '/legal-awareness' },
    { name: 'Radio & Podcast', href: '/radio' },
    { name: 'Videos', href: '/videos' },
    { name: 'Programs', href: '/program' },
    { name: 'Contact', href: '/contact' },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    hover: { width: "100%" }
  };

  return (
    <motion.nav
      className={`navbar-container fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A2342] shadow-lg' : 'bg-[#0A2342]'
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased navbar height */}
          {/* Logo - Larger and more prominent */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="logo cursor-pointer">
              <img 
                src={assets.logo} 
                alt="LEPENS Logo" 
                className="h-12 w-auto md:h-16 lg:h-20 transition-all duration-300" // Much larger logo
              />
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-[#CBA135] px-3 py-2 text-base font-medium transition-colors duration-200 relative"
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#CBA135]"
                      variants={underlineVariants}
                      initial="hidden"
                      whileHover="hover"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Involved Button - Desktop */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-[#CBA135] text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-[#b8912d] transition-colors duration-200 text-base">
              Get Involved
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:text-[#CBA135] hover:bg-[#0A2342] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-8 w-8" // Larger hamburger icon
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-[#F5F7FA] px-2 pt-2 pb-3 space-y-1 shadow-lg rounded-b-lg">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-[#0A2342] hover:text-[#CBA135] block px-3 py-3 rounded-md text-lg font-medium transition-colors duration-200" // Larger mobile text
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Link to="/contact">
                <motion.div
                  className="px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                    <button className="w-full bg-[#CBA135] text-[#0A2342] px-6 py-3 rounded-md font-semibold hover:bg-[#b8912d] transition-colors duration-200 text-base">
                      Get Involved
                    </button>
                </motion.div>
                 </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;