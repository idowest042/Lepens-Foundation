import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { assets } from '../assets/asset.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const backgroundImages = [
    {
      url: assets.img1,
      alt: "Smiling child reading a book"
    },
    {
      url: assets.img2,
      alt: "Group of volunteers teaching in community"
    },
    {
      url: assets.img4,
      alt: "Teacher helping students with legal materials"
    }
  ];

  // Slower auto-rotate with longer delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8
      }
    }
  };

  const mediaVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.7
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(203, 161, 53, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const underlineVariants = {
    hover: {
      width: "100%",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <img 
              src={backgroundImages[currentImageIndex].url} 
              alt={backgroundImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay with Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 35, 66, 0.85) 0%, rgba(10, 35, 66, 0.75) 50%, rgba(10, 35, 66, 0.85) 100%)'
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Gold Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #CBA135 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #CBA135 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Background Image Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#CBA135] scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 lg:py-0 lg:flex-row lg:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Block */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 sm:mb-10 lg:mb-0">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2 sm:px-0"
              variants={textVariants}
            >
              Empowering Citizens Through{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#CBA135]">Legal Awareness</span>
                <motion.span
                  className="absolute bottom-1 left-0 w-0 h-2 md:h-3 bg-[#CBA135] opacity-40 hidden lg:block"
                  variants={underlineVariants}
                  whileHover="hover"
                />
              </span>
            </motion.h1>

            {/* Gold Accent Line */}
            <motion.div
              className="w-16 sm:w-20 h-1 bg-[#CBA135] mb-4 sm:mb-6 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: '5rem' }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={subtitleVariants}
            >
              <span className="text-[#CBA135] font-semibold">Law Enlightenment Project (Nkowa IWU)</span> — 
              Promoting Justice, Knowledge, and Civic Responsibility in Enugu State.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
              variants={subtitleVariants}
            >
              <Link to="/about" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto bg-[#CBA135] text-[#0A2342] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#d8b44c] transition-colors duration-200 shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link to="/radio" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto border-2 border-[#CBA135] text-[#CBA135] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#CBA135] hover:text-[#0A2342] transition-all duration-200 shadow-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Listen to Radio
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Media Block */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-0"
            variants={mediaVariants}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Video/Image Container */}
              <div className="block relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CBA135] bg-gradient-to-br from-[#0d2a4d] to-[#0A2342] backdrop-blur-sm group">
                {!isVideoPlaying ? (
                  <>
                    {/* YouTube Thumbnail */}
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#0d2a4d] to-[#0A2342] relative">
                      <img 
                        src="https://img.youtube.com/vi/79fRZaYijvc/maxresdefault.jpg"
                        alt="Law Enlightenment Project Introduction Video"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="relative z-10 text-center p-4 sm:p-8">
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#CBA135] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <svg 
                            className="w-8 h-8 sm:w-10 sm:h-10 text-[#0A2342]" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </motion.div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                          Introduction Video
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                          See Our Impact
                        </p>
                      </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <div className="bg-[#CBA135] text-[#0A2342] rounded-full p-4 sm:p-6 shadow-2xl">
                        <svg 
                          className="w-6 h-6 sm:w-8 sm:h-8" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* YouTube Embedded Player */}
                    <div className="aspect-video relative">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/79fRZaYijvc?autoplay=1&rel=0"
                        title="Law Enlightenment Project Introduction Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-2 right-2 z-30 bg-[#CBA135] text-[#0A2342] rounded-full p-2 shadow-lg hover:bg-[#d8b44c] transition-colors duration-200"
                      aria-label="Close video"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Floating Elements - Hidden on mobile for cleaner look */}
              <motion.div
                className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[#CBA135] rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="hidden sm:block absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-[#CBA135] rounded-full"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <motion.div
        className="hidden sm:block absolute bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#CBA135] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-[#CBA135] rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;