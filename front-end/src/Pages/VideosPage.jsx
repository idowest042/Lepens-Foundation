import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-toastify';

const VideosPage = () => {
  // Create separate refs for each section
  const [comingSoonRef, comingSoonInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [initiativesRef, initiativesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send all required fields for the contact/subscription form
      const subscriptionData = {
        FullName: 'Video Gallery Subscriber',
        Email: email,
        Subject: 'Video Gallery Launch Notification',
        Message: 'I would like to be notified when the LEPENS Video Gallery launches.'
      };

      const response = await axiosInstance.post('/admin/send-message', subscriptionData);
      
      if (response.data) {
        setIsSubscribed(true);
        toast.success('Successfully subscribed! We\'ll notify you when we launch.');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || error?.response?.data?.msg || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Video Gallery</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Watch inspiring stories, educational content, and impact documentation from LEPENS Foundation's initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center"
              ref={comingSoonRef}
              variants={containerVariants}
              initial="hidden"
              animate={comingSoonInView ? "visible" : "hidden"}
            >
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-[#5C899D] to-[#8AB6C6] rounded-full flex items-center justify-center mx-auto mb-8"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#1F3B4D] mb-6"
                variants={itemVariants}
              >
                Video Content Coming Soon
              </motion.h2>

              <motion.div
                className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-8"
                variants={itemVariants}
              />

              <motion.p
                className="text-xl text-[#1F3B4D] opacity-80 mb-8 leading-relaxed max-w-2xl mx-auto"
                variants={itemVariants}
              >
                We're currently producing high-quality video content to showcase our impact, 
                share educational materials, and tell the inspiring stories of the communities we serve. 
                Our video gallery will be launching soon with powerful visual storytelling.
              </motion.p>

              <motion.div
                className="bg-[#FFFCEF] rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto mb-12"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-6">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Impact Stories</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Real stories of transformation from our programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Educational Content</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Legal awareness and community education videos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Community Features</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Spotlights on community initiatives and volunteers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#5C899D] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#1F3B4D]">Program Updates</h4>
                      <p className="text-[#1F3B4D] opacity-80 text-sm">Latest developments and success stories</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Notification Signup */}
              <motion.div
                className="bg-gradient-to-r from-[#5C899D] to-[#8AB6C6] rounded-2xl p-8 text-white max-w-2xl mx-auto"
                variants={itemVariants}
              >
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
                    <p className="opacity-90">
                      Thank you for subscribing. We'll notify you when our video gallery launches.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-4">Be the First to Watch</h3>
                    <p className="opacity-90 mb-6">
                      Get notified when we launch our video gallery and release new content. 
                      Stay updated with our latest visual stories and educational materials.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-lg text-[#1F3B4D] focus:outline-none focus:ring-2 focus:ring-white"
                        disabled={isSubmitting}
                        required
                      />
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-[#5C899D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                        whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#5C899D]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribing...
                          </>
                        ) : (
                          'Notify Me'
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Current Initiatives Preview */}
        <section className="py-20 bg-[#FFFCEF]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={initiativesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Video Initiatives in Production</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                We're currently working on these exciting video projects
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              ref={initiativesRef}
              variants={containerVariants}
              initial="hidden"
              animate={initiativesInView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Legal Rights Explained",
                  description: "Animated series breaking down complex legal concepts for community understanding",
                  status: "In Production"
                },
                {
                  title: "Community Impact Stories",
                  description: "Documentary-style features showcasing real transformation from our programs",
                  status: "Filming"
                },
                {
                  title: "Educational Workshops",
                  description: "Recorded sessions from our legal awareness and empowerment workshops",
                  status: "Editing"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-[#5C899D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3B4D] mb-3">{project.title}</h3>
                  <p className="text-[#1F3B4D] opacity-80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {project.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VideosPage;