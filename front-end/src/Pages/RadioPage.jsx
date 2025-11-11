import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const RadioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFCEF] pt-20">
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br bg-[#0A2342] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">LEPENS Radio</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Amplifying voices, sharing stories, and connecting communities through the power of radio broadcasting.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-[#5C899D] to-[#8AB6C6] rounded-full flex items-center justify-center mx-auto mb-8"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#1F3B4D] mb-6"
                variants={itemVariants}
              >
                Broadcasting Soon
              </motion.h2>

              <motion.div
                className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-8"
                variants={itemVariants}
              />

              <motion.p
                className="text-xl text-[#1F3B4D] opacity-80 mb-8 leading-relaxed max-w-2xl mx-auto"
                variants={itemVariants}
              >
                We're currently developing an innovative radio platform to bring legal awareness, 
                educational content, and community stories directly to you. Stay tuned for updates 
                on our launch schedule and programming lineup.
              </motion.p>

              <motion.div
                className="bg-[#FFFCEF] rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Legal Education</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Understanding your rights and responsibilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Community Voices</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Stories and interviews from our communities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Educational Content</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Learning programs and skill development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Live Discussions</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Interactive sessions with experts</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Notification Signup */}
              <motion.div
                className="mt-12 bg-gradient-to-r bg-[#0A2342] rounded-2xl p-8 text-white max-w-2xl mx-auto"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
                <p className="opacity-90 mb-6">
                  Be the first to know when we launch. Enter your email to receive updates about our radio programming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-[#1F3B4D] focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <motion.button
                    className="bg-white text-[#5C899D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Notify Me
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RadioPage;