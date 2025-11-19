import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

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

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [kpisRef, kpisInView] = useInView({
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
      title: "Environmental Laws",
      description: "Understanding Enugu State's environmental regulations, waste management laws, and community responsibilities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Property & Land Rights",
      description: "Knowledge about land ownership, property inheritance, and preventing land disputes under state laws."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Traffic Laws",
      description: "Road safety regulations, traffic offenses, penalties, and driver responsibilities in Enugu State."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Gender-Based Violence Laws",
      description: "Protection against domestic violence, sexual harassment, and support systems for survivors."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Public Health Laws",
      description: "Health regulations, sanitation requirements, and public health compliance obligations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Civic Obligations",
      description: "Understanding your duties as a citizen, tax obligations, and community responsibilities."
    }
  ];

  const workshops = [
    {
      title: "Community Legal Aid Clinics",
      description: "Pro bono assistance for vulnerable groups with guidance on dispute resolution and court processes across all 17 LGAs of Enugu State.",
      frequency: "Ongoing",
      duration: "2 years"
    },
    {
      title: "Weekly Legal Enlightenment Programs",
      description: "Daily radio, video, and social media legal enlightenment programs handled by the project's team of four lawyers, covering simplified Enugu State laws.",
      frequency: "Weekly",
      duration: "Continuous"
    },
    {
      title: "Legal Compliance Awareness",
      description: "Sensitization on civic obligations and penalties under state laws including Environmental Laws, Public Health Laws, Traffic Laws, and Gender-Based Violence Laws.",
      frequency: "Monthly",
      duration: "2-3 hours"
    },
    {
      title: "Stakeholder Engagement Sessions",
      description: "Collaborative sessions with the Ministry of Justice, CSOs, and community leaders to strengthen legal literacy and sustainable outreach.",
      frequency: "Quarterly",
      duration: "Half-day"
    }
  ];

  const resources = [
    {
      type: "Guide",
      title: "Know Your Rights Handbook",
      description: "Comprehensive guide covering basic legal rights in simple language."
    },
    {
      type: "Compendium",
      title: "LEPENS State Law Compendium",
      description: "Summary of key Enugu State laws in simplified, accessible format."
    },
    {
      type: "Video",
      title: "Legal Rights Explained",
      description: "Short animated videos explaining complex legal concepts in local languages."
    },
    {
      type: "Digital",
      title: "Weekly Video/Radio Content",
      description: "Regular legal enlightenment content delivered by project lawyers."
    }
  ];

  const timelineYear1 = [
    {
      period: "Months 1–3: Oct–Dec 2025",
      title: "Foundation & Launch",
      activities: [
        "Establish project office",
        "Conduct stakeholder mapping",
        "Launch website, radio schedule, and social media platforms",
        "Develop simplified content on notable Enugu State laws"
      ]
    },
    {
      period: "Months 4–6: Jan–Mar 2026",
      title: "Program Implementation",
      activities: [
        "Begin structured legal literacy programs (including state laws)",
        "Distribute educational materials on Enugu State laws",
        "Begin weekly digital video/radio enlightenment with four project lawyers"
      ]
    },
    {
      period: "Months 7–9: Apr–Jun 2026",
      title: "Community Engagement",
      activities: [
        "Establish community legal aid clinics",
        "Deliver outreach sessions focusing on compliance with state laws",
        "Mid-year monitoring and evaluation"
      ]
    },
    {
      period: "Months 10–12: Jul–Sept 2026",
      title: "Strategy Refinement",
      activities: [
        "Review strategy and refine content delivery",
        "Expand public engagement with more focus on state laws",
        "Sustainability planning"
      ]
    }
  ];

  const timelineYear2 = [
    {
      period: "Months 13–15: Oct–Dec 2026",
      title: "Expansion Phase",
      activities: [
        "Expand outreach to all LGAs",
        "Build partnerships with CSOs and donors",
        "Establish long-term funding channels"
      ]
    },
    {
      period: "Months 16–18: Jan–Mar 2027",
      title: "Impact Assessment",
      activities: [
        "Conduct comprehensive impact assessment",
        "Strengthen legal literacy tools and resources",
        "Advance sustainability planning"
      ]
    },
    {
      period: "Months 19–24: Apr–Oct 2027",
      title: "Evaluation & Publication",
      activities: [
        "Final evaluation of project outcomes",
        "Publish 'LEPENS State Law Compendium'",
        "Disseminate project results and best practices"
      ]
    }
  ];

  const kpis = [
    {
      metric: "Citizens Reached",
      target: "Through education on state laws",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      metric: "Radio/Video Episodes",
      target: "Per month",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      metric: "Legal Aid Clinics",
      target: "Established across LGAs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      metric: "Awareness Increase",
      target: "In Enugu State laws",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      metric: "Legal Compliance",
      target: "Measurable improvement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      metric: "Vulnerable Groups",
      target: "Accessing legal aid",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#FFFCEF]">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-[#0A2342] to-[#1F3B4D] overflow-hidden">
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
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Empowering communities through legal education, rights awareness, and access to justice in Enugu State.
            </p>
            
            {/* Project Scope Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-sm font-semibold">All 17 LGAs of Enugu State</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-sm font-semibold">2-Year Program</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-sm font-semibold">Priority: Vulnerable Groups</span>
              </div>
            </div>
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
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-6">Legal Education and Awareness</h2>
              <div className="space-y-4 text-[#1F3B4D] opacity-80 leading-relaxed">
                <p>
                  <strong>Weekly dissemination</strong> of simplified legal content, including key provisions of Enugu State laws through multiple channels.
                </p>
                <p>
                  <strong>Daily radio, video, and social media</strong> legal enlightenment programs handled by the project's team of four dedicated lawyers.
                </p>
                <p>
                  <strong>Legal compliance education</strong> on civic obligations and penalties under state laws, with targeted public awareness campaigns on Environmental Laws, Public Health Laws, Traffic Laws, Gender-Based Violence Laws, and more.
                </p>
                <p>
                  <strong>Community-based approach</strong> reaching all 17 Local Government Areas of Enugu State, with priority given to vulnerable groups requiring legal assistance.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                <div className="text-2xl font-bold text-[#5C899D]">17</div>
                <div className="text-sm text-[#1F3B4D]">LGAs Covered</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#5C899D] text-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Project Lawyers</div>
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
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Enugu State Laws Covered</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
              Comprehensive legal education on state-specific laws that affect daily life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={topicsRef}
            variants={containerVariants}
            initial="hidden"
            animate={topicsInView ? "visible" : "hidden"}
          >
            {legalTopics.map((topic) => (
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
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Programs & Services</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
              Multiple channels for legal education and community support
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            ref={workshopsRef}
            variants={containerVariants}
            initial="hidden"
            animate={workshopsInView ? "visible" : "hidden"}
          >
            {workshops.map((workshop) => (
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
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Legal Resources</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
              Educational materials to help you understand your rights
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            ref={resourcesRef}
            variants={containerVariants}
            initial="hidden"
            animate={resourcesInView ? "visible" : "hidden"}
          >
            {resources.map((resource) => (
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

      {/* Project Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">2-Year Project Timeline</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
              Strategic milestones for comprehensive legal literacy across Enugu State
            </p>
          </motion.div>

          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
          >
            {/* Year 1 */}
            <div className="mb-12">
              <motion.div 
                className="bg-gradient-to-r from-[#5C899D] to-[#8AB6C6] text-white rounded-lg p-4 mb-6 inline-block"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold">Year 1: Foundation & Implementation</h3>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {timelineYear1.map((phase) => (
                  <motion.div
                    key={phase.period}
                    className="bg-[#FFFCEF] rounded-xl p-6 border-l-4 border-[#5C899D]"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-sm text-[#5C899D] font-semibold mb-2">{phase.period}</div>
                    <h4 className="text-xl font-bold text-[#1F3B4D] mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-[#1F3B4D] opacity-80">
                          <svg className="w-5 h-5 text-[#5C899D] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Year 2 */}
            <div>
              <motion.div 
                className="bg-gradient-to-r from-[#1F3B4D] to-[#5C899D] text-white rounded-lg p-4 mb-6 inline-block"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold">Year 2: Expansion & Sustainability</h3>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {timelineYear2.map((phase) => (
                  <motion.div
                    key={phase.period}
                    className="bg-[#FFFCEF] rounded-xl p-6 border-l-4 border-[#1F3B4D]"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-sm text-[#5C899D] font-semibold mb-2">{phase.period}</div>
                    <h4 className="text-xl font-bold text-[#1F3B4D] mb-4">{phase.title}</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-[#1F3B4D] opacity-80">
                          <svg className="w-5 h-5 text-[#5C899D] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-20 bg-[#FFFCEF]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={kpisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Key Performance Indicators</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
              Measurable outcomes to track program success and community impact
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={kpisRef}
            variants={containerVariants}
            initial="hidden"
            animate={kpisInView ? "visible" : "hidden"}
          >
            {kpis.map((kpi) => (
              <motion.div
                key={kpi.metric}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center text-white mb-4">
                  {kpi.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1F3B4D] mb-2">{kpi.metric}</h3>
                <p className="text-[#1F3B4D] opacity-80 text-sm">{kpi.target}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Post-Program Continuity Note */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-[#5C899D] to-[#8AB6C6] rounded-2xl p-8 text-white"
            variants={itemVariants}
            initial="hidden"
            animate={kpisInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-4">🌟 Project Continuity Plan</h3>
            <p className="mb-4 opacity-90">
              Beyond the 2-year implementation period, LEPENS is committed to sustainable legal education through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Annual updates of simplified legal guides on state laws</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Volunteer network to sustain legal enlightenment</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Integration with Ministry of Justice structures</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Ongoing community-based legal clinics</span>
              </div>
            </div>
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
              <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">Understanding State Laws</h3>
              <p className="text-[#1F3B4D] leading-relaxed mb-6 opacity-80">
                "The weekly radio programs helped me understand my obligations under Enugu State environmental 
                laws. Now I know how to properly dispose of waste and the penalties for non-compliance. 
                This knowledge has made me a more responsible citizen."
              </p>
              <div className="font-semibold text-[#5C899D]">— Adaora Nwosu, Small Business Owner</div>
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
              Empower yourself and your community with legal knowledge. Together, we can build a more just society in Enugu State.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#5C899D] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Involved
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5C899D] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
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