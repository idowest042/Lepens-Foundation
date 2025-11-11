import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { assets } from '../assets/asset.js';
import Navbar from '../Components/Navbar.jsx';
import {Link} from "react-router-dom"
import Footer from '../Components/Footer.jsx';

const ProgramsPage = () => {
  // Create separate refs for each section
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [impactRef, impactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'empowerment', name: 'Empowerment' },
    { id: 'community', name: 'Community' }
  ];

  const programs = [
    {
      id: 1,
      title: "Scholarship Program",
      category: "education",
      description: "Providing educational scholarships and support to underprivileged students from primary to tertiary education levels.",
      image: assets.img1,
      impact: "200+ Students Supported",
      features: ["Full tuition coverage", "Educational materials", "Mentorship", "Career guidance"],
      status: "active"
    },
    {
      id: 2,
      title: "Community Health Outreach",
      category: "healthcare",
      description: "Mobile health clinics and awareness campaigns providing essential healthcare services to rural communities.",
      image: assets.img2,
      impact: "50+ Communities Reached",
      features: ["Free medical checkups", "Health education", "Medication distribution", "Preventive care"],
      status: "active"
    },
    {
      id: 3,
      title: "Youth Skills Empowerment",
      category: "empowerment",
      description: "Vocational training and digital skills development programs for unemployed youth and young adults.",
      image: assets.img6,
      impact: "300+ Youth Trained",
      features: ["Digital literacy", "Entrepreneurship training", "Job placement", "Startup support"],
      status: "active"
    },
    {
      id: 4,
      title: "Legal Awareness Workshops",
      category: "community",
      description: "Educating communities about their legal rights and responsibilities through workshops and seminars.",
      image: assets.legal,
      impact: "5,000+ People Educated",
      features: ["Rights education", "Legal aid referrals", "Community paralegals", "Awareness campaigns"],
      status: "active"
    },
    {
      id: 5,
      title: "Women Entrepreneurship",
      category: "empowerment",
      description: "Empowering women with business skills and startup capital to become self-reliant entrepreneurs.",
      image: assets.img8,
      impact: "150+ Women Empowered",
      features: ["Business training", "Seed funding", "Market access", "Mentorship network"],
      status: "active"
    },
    {
      id: 6,
      title: "School Infrastructure",
      category: "education",
      description: "Building and renovating educational facilities in underserved communities across Enugu State.",
      image: assets.img7,
      impact: "15 Schools Renovated",
      features: ["Classroom construction", "Library setup", "Computer labs", "Playground development"],
      status: "upcoming"
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  const ProgramCard = ({ program }) => (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={program.image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            program.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {program.status === 'active' ? 'Active' : 'Upcoming'}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{program.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#1F3B4D] opacity-80 mb-4 leading-relaxed">
          {program.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-[#5C899D] font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{program.impact}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#1F3B4D] mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {program.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-[#1F3B4D] opacity-80">
                <svg className="w-3 h-3 text-[#5C899D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Transforming communities through comprehensive education, healthcare, and empowerment initiatives in Enugu State.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {[
                { number: "6", label: "Active Programs" },
                { number: "500+", label: "Lives Impacted" },
                { number: "25+", label: "Communities Served" },
                { number: "50+", label: "Dedicated Volunteers" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-[#5C899D] mb-2"
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-[#1F3B4D] font-semibold text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-[#FFFCEF] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#5C899D] text-white shadow-lg'
                      : 'bg-white text-[#1F3B4D] hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-[#FFFCEF]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </motion.div>

            {filteredPrograms.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-2">No programs found</h3>
                <p className="text-[#1F3B4D] opacity-80">
                  We don't have any programs in this category at the moment.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Program Impact Stories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={impactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Program Impact Stories</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Real stories of transformation from individuals and communities we've served
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              ref={impactRef}
              variants={containerVariants}
              initial="hidden"
              animate={impactInView ? "visible" : "hidden"}
            >
              <motion.div
                className="bg-gradient-to-br from-[#5C899D] to-[#8AB6C6] rounded-2xl p-8 text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">From Student to Teacher</h3>
                <p className="leading-relaxed mb-6 opacity-90">
                  "Thanks to LEPENS scholarship, I completed my education and now I'm teaching 
                  in my community. The cycle of empowerment continues through me to the next generation."
                </p>
                <div className="font-semibold">— Amina Yusuf, Scholarship Beneficiary</div>
              </motion.div>

              <motion.div
                className="bg-[#FFFCEF] rounded-2xl p-8 border border-gray-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">Entrepreneur Success</h3>
                <p className="text-[#1F3B4D] leading-relaxed mb-6 opacity-80">
                  "The skills empowerment program gave me the confidence and knowledge to start 
                  my fashion business. Today, I employ three other young people in my community."
                </p>
                <div className="font-semibold text-[#5C899D]">— Grace Johnson, Business Owner</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#5C899D] to-[#8AB6C6]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Support Our Programs</h2>
              <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Your support helps us expand our reach and create more impact in communities across Enugu State.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5C899D] transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Become a Partner
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

export default ProgramsPage;