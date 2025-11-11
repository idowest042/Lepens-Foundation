import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { assets } from '../assets/asset.js';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import {Link} from "react-router-dom";

const LegalAwarenessPage = () => {
  // Create separate refs for each section
  const [overviewRef, overviewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [topicsRef, topicsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [workshopsRef, workshopsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [resourcesRef, resourcesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storiesRef, storiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('overview');

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

  const legalTopics = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Fundamental Rights",
      description: "Understanding your constitutional rights and how to protect them in daily life situations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Property & Land Rights",
      description: "Knowledge about land ownership, property inheritance, and preventing land disputes."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Employment Rights",
      description: "Workers' rights, minimum wage, safe working conditions, and contract understanding."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Family Law",
      description: "Marriage rights, child protection, domestic violence laws, and inheritance matters."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Health Rights",
      description: "Access to healthcare, patient rights, and understanding medical consent."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Education Rights",
      description: "Right to education, school policies, and protection against discrimination in education."
    }
  ];

  const workshops = [
    {
      title: "Community Legal Clinics",
      description: "Free legal advice sessions conducted in local communities by volunteer lawyers and paralegals.",
      frequency: "Monthly",
      duration: "3 hours"
    },
    {
      title: "Rights Awareness Workshops",
      description: "Interactive sessions focusing on fundamental human rights and how to exercise them.",
      frequency: "Bi-weekly",
      duration: "2 hours"
    },
    {
      title: "Digital Legal Literacy",
      description: "Training on online rights, digital privacy, and understanding technology-related laws.",
      frequency: "Quarterly",
      duration: "4 hours"
    },
    {
      title: "Women's Legal Empowerment",
      description: "Specialized workshops addressing legal issues affecting women and girls.",
      frequency: "Monthly",
      duration: "3 hours"
    }
  ];

  const resources = [
    {
      type: "Guide",
      title: "Know Your Rights Handbook",
      description: "Comprehensive guide covering basic legal rights in simple language."
    },
    {
      type: "Poster",
      title: "Emergency Legal Contacts",
      description: "Quick reference poster with essential legal aid contacts and emergency numbers."
    },
    {
      type: "Video",
      title: "Legal Rights Explained",
      description: "Short animated videos explaining complex legal concepts in local languages."
    },
    {
      type: "App",
      title: "LEPENS Legal Assistant",
      description: "Mobile application providing legal information and connecting to legal aid services."
    }
  ];

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal Awareness Program</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Empowering communities through legal education, rights awareness, and access to justice in Enugu State.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              ref={overviewRef}
              variants={containerVariants}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-[#1F3B4D] mb-6">Legal Empowerment for All</h2>
                <div className="space-y-4 text-[#1F3B4D] opacity-80 leading-relaxed">
                  <p>
                    Our Legal Awareness Program is designed to bridge the gap between communities and 
                    the justice system. We believe that knowledge of the law is the first step toward 
                    empowerment and protection of rights.
                  </p>
                  <p>
                    Through workshops, community outreach, and educational materials, we equip 
                    individuals with the legal knowledge needed to navigate daily challenges, 
                    protect their rights, and access justice when needed.
                  </p>
                  <p>
                    Since inception, we have educated over 5,000 community members across Enugu State, 
                    helping them understand and exercise their legal rights effectively.
                  </p>
                </div>
                
              </motion.div>

              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={assets.img3 || "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
                    alt="Legal awareness workshop in community"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-[#5C899D]">5,000+</div>
                  <div className="text-sm text-[#1F3B4D]">People Educated</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[#5C899D] text-white rounded-2xl shadow-xl p-6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Communities Reached</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Legal Topics */}
        <section className="py-20 bg-[#FFFCEF]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={topicsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Key Legal Topics Covered</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Comprehensive legal education covering essential areas that affect daily life
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              ref={topicsRef}
              variants={containerVariants}
              initial="hidden"
              animate={topicsInView ? "visible" : "hidden"}
            >
              {legalTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-[#5C899D] rounded-full flex items-center justify-center text-white mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1F3B4D] mb-3">{topic.title}</h3>
                  <p className="text-[#1F3B4D] opacity-80 leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Workshops & Programs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={workshopsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Workshops & Training Programs</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Interactive learning sessions designed to make legal knowledge accessible to everyone
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              ref={workshopsRef}
              variants={containerVariants}
              initial="hidden"
              animate={workshopsInView ? "visible" : "hidden"}
            >
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  className="bg-[#FFFCEF] rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">{workshop.title}</h3>
                  <p className="text-[#1F3B4D] opacity-80 mb-6 leading-relaxed">
                    {workshop.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-[#5C899D] font-semibold">
                      Frequency: {workshop.frequency}
                    </div>
                    <div className="text-sm text-[#5C899D] font-semibold">
                      Duration: {workshop.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-[#FFFCEF]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Free Legal Resources</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Accessible materials to help you understand and protect your rights
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              ref={resourcesRef}
              variants={containerVariants}
              initial="hidden"
              animate={resourcesInView ? "visible" : "hidden"}
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="inline-block bg-[#5C899D] text-white text-xs px-3 py-1 rounded-full mb-3">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-bold text-[#1F3B4D] mb-2">{resource.title}</h3>
                  <p className="text-[#1F3B4D] opacity-80 text-sm">
                    {resource.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={storiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Impact Stories</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Real stories of empowerment through legal knowledge
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              ref={storiesRef}
              variants={containerVariants}
              initial="hidden"
              animate={storiesInView ? "visible" : "hidden"}
            >
              <motion.div
                className="bg-gradient-to-br from-[#5C899D] to-[#8AB6C6] rounded-2xl p-8 text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Land Rights Protected</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  "After attending LEPENS' property rights workshop, I was able to prevent an illegal 
                  land grab in my community. The knowledge I gained helped me understand the proper 
                  documentation needed and the legal steps to protect our family land."
                </p>
                <div className="font-semibold">— Mr. Chukwuma Eze, Community Leader</div>
              </motion.div>

              <motion.div
                className="bg-[#FFFCEF] rounded-2xl p-8 border border-gray-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">Workplace Rights Asserted</h3>
                <p className="text-[#1F3B4D] leading-relaxed mb-6 opacity-80">
                  "The employment rights session gave me the confidence to address unfair treatment 
                  at my workplace. I learned about my rights to fair wages and safe working conditions, 
                  and was able to successfully negotiate better terms with my employer."
                </p>
                <div className="font-semibold text-[#5C899D]">— Adaora Nwosu, Factory Worker</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#5C899D] to-[#8AB6C6]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              ref={ctaRef}
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Legal Awareness Movement</h2>
              <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Empower yourself and your community with legal knowledge. Together, we can build a more just society.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5C899D] transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                 Contact Us 
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LegalAwarenessPage;