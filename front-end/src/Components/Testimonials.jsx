import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Amina Yusuf",
      role: "Scholarship Beneficiary",
      quote: "The LEPENS Foundation gave me a chance to continue my education when I had lost all hope. Their scholarship changed my life and opened doors I never thought possible.",
    },
    {
      name: "Mr. Chukwudi Eze",
      role: "Community Leader",
      quote: "Their outreach programs have transformed our community. The health awareness campaign helped reduce preventable illnesses and empowered our people with knowledge.",
    },
    {
      name: "Grace Johnson",
      role: "Skills Empowerment Trainee",
      quote: "Thanks to LEPENS, I now have digital skills that helped me secure my first remote job. Their mentorship program is truly inspiring and life-changing.",
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section id="testimonials" className="py-20 bg-[#0A2342] relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-8xl">❝</div>
        <div className="absolute bottom-20 right-20 text-8xl">❞</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFCEF] mb-4">
            What People Say About Us
          </h2>
          <div className="w-24 h-1 bg-[#F5E6A1] mx-auto rounded-full mb-6" />
          <p className="text-xl text-[#FFFCEF] opacity-90 max-w-2xl mx-auto">
            Hear from those whose lives have been transformed through our initiatives
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="relative h-80 md:h-72 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto w-full">
                  {/* Quote Icon */}
                  <div className="text-4xl text-[#F5E6A1] mb-6 text-center">❝</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-[#FFFCEF] text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="text-center">
                    <h4 className="text-[#FFFCEF] font-bold text-lg md:text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#F5E6A1] text-sm md:text-base">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-[#FFFCEF] group-hover:text-[#F5E6A1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-[#FFFCEF] group-hover:text-[#F5E6A1] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#F5E6A1] scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg text-[#FFFCEF] mb-6 opacity-90">
            Join our community of changemakers
          </p>
          <Link to="/contact">
          <motion.button
            className="bg-[#F5E6A1] text-[#5C899D] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:bg-[#f8edc0]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 30px -8px rgba(245, 230, 161, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Involved
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;