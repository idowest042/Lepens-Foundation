import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { assets } from '../assets/asset.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    }, 6000); // Increased from 5000 to 6000ms

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
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
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
      x: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
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

  // FIXED: Smoother background transitions with overlap
  const backgroundVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2, // Slower transition
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing
      }
    },
    exit: {
      opacity: 0,
      scale: 1.02, // Reduced scale to minimize blur effect
      transition: {
        duration: 1.2, // Slower exit
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background Images - IMPROVED TRANSITIONS */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync"> {/* Changed from "wait" to "sync" for overlap */}
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
        
        {/* Dark Overlay with Gradient - Reduced opacity for less blue */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 35, 66, 0.75) 0%, rgba(10, 35, 66, 0.6) 50%, rgba(10, 35, 66, 0.8) 100%)'
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5" // Reduced opacity
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Gold Gradient Orbs - Reduced opacity */}
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#CBA135] scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between py-20 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Block */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={textVariants}
            >
              Empowering Citizens Through{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Legal Awareness</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-0 h-3 bg-[#CBA135] opacity-40"
                  variants={underlineVariants}
                  whileHover="hover"
                />
              </span>
            </motion.h1>

            {/* Gold Accent Line */}
            <motion.div
              className="w-20 h-1 bg-[#CBA135] mb-6 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
              variants={subtitleVariants}
            >
              <span className="text-[#CBA135] font-semibold">Law Enlightenment Project (Nkowa IWU)</span> — 
              Promoting Justice, Knowledge, and Civic Responsibility in Enugu State.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={subtitleVariants}
            >
              <Link to="/about">
              <motion.button
                className="bg-[#CBA135] text-[#0A2342] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d8b44c] transition-colors duration-200 shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
              </Link>
              <Link to="/radio">
              <motion.button
                className="border-2 border-[#CBA135] text-[#CBA135] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#CBA135] hover:text-[#0A2342] transition-all duration-200 shadow-lg"
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
            className="lg:w-1/2 flex justify-center lg:justify-end"
            variants={mediaVariants}
          >
            <div className="relative w-full max-w-lg">
              {/* Video/Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CBA135] bg-gradient-to-br from-[#0d2a4d] to-[#0A2342] backdrop-blur-sm">
                {/* Placeholder for future video */}
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#0d2a4d] to-[#0A2342]">
                  <div className="text-center p-8">
                    <motion.div
                      className="w-20 h-20 bg-[#CBA135] rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg 
                        className="w-10 h-10 text-[#0A2342]" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Introduction Video
                    </h3>
                    <p className="text-gray-300">
                      See Our Impact
                    </p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="bg-[#CBA135] text-[#0A2342] rounded-full p-6 shadow-2xl">
                    <svg 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#CBA135] rounded-full"
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
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#CBA135] rounded-full"
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-[#CBA135] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#CBA135] rounded-full mt-2"
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