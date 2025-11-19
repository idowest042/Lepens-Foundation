import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { assets } from '../assets/asset.js';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const MeetTheTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedBio, setExpandedBio] = useState(null);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Pedro Ndubuisi Manuwa",
      role: "CEO, NGOFUNDS Consulting Company (Nigeria, UAE, USA)",
      image: assets.pedro,
      shortBio: "A doctorate degree holder in Leadership and Management with extensive experience across multiple fields. Dr. Pedro is a financial facilitator and leads finance and donor relations for LEPENS through his company, NGOFUNDS.",
      longBio: "Dr. Pedro Manuwa brings decades of professional leadership expertise and oversees funding partnerships, donor affairs, and financial facilitation for the LEPENS Foundation."
    },
    {
      id: 2,
      name: "Ikechukwu Maximus Ugwuoke, Esq.",
      role: "Director / Coordinator, LEPENS",
      image: assets.ike,
      shortBio: "Director and Coordinator of LEPENS. A legal practitioner with deep experience in litigation, human rights advocacy, and public legal education. Leads the project's statewide legal enlightenment mission.",
      longBio: `Ikechukwu is an accomplished legal practitioner with extensive experience in litigation, human rights advocacy, and public legal education. As the Director and Coordinator of LEPENS, he spearheads the foundation's mission to bring legal enlightenment to communities across the state.

With a passion for justice and community empowerment, Maximus has dedicated his career to making legal knowledge accessible to all. His expertise spans various areas of law, with a particular focus on human rights and civic education.

Under his leadership, LEPENS has reached thousands of individuals through workshops, community outreach programs, and legal awareness campaigns. His commitment to "Maximum Welfare" drives the foundation's vision of creating a legally empowered society where every citizen understands their rights and responsibilities.`
    },
    {
      id: 3,
      name: "Joy Obianuju Nnani, MCArb.",
      role: "Legal Practitioner & ADR Consultant",
      image: assets.joy,
      shortBio: "Joy is a legal practitioner and certified Alternative Dispute Resolution consultant committed to justice, legal empowerment, and peaceful conflict resolution.",
      longBio: "Joy brings specialized expertise in Alternative Dispute Resolution to the LEPENS Foundation. Her commitment to justice and legal empowerment complements the foundation's mission to provide accessible legal education and peaceful conflict resolution mechanisms to communities across Enugu State."
    },
    {
      id: 4,
      name: "Olanrewaju Oluwaseyi",
      role: "IT Specialist & Business Consultant",
      image: assets.oluwa,
      shortBio: "Oluwaseyi is a Cybersecurity Trainer, Network & System Engineer, IT Business Development Consultant, and Social Media Director/Manager for the Law Enlightenment Project Enugu State (LEPENS).",
      longBio: "Oluwaseyi brings specialized expertise in IT and cybersecurity to the LEPENS Foundation. His commitment to leveraging technology for social impact complements the foundation's mission to provide accessible legal education and support to communities across Enugu State."
    }
  ];

  const toggleBio = (memberId) => {
    setExpandedBio(expandedBio === memberId ? null : memberId);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#0A2342] pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2342] to-[#1a3a5f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet the Team</h1>
            <div className="w-24 h-1 bg-[#CBA135] mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
              The professionals driving the mission and vision of the LEPENS Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Profile Image */}
                <div className="p-8 pb-6">
                  <motion.div
                    className="relative mx-auto w-48 h-48"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135] to-[#e0b84c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 pt-0">
                  <motion.h3
                    className="text-2xl font-bold text-[#0A2342] mb-2 text-center"
                    variants={itemVariants}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p
                    className="text-[#CBA135] font-semibold text-center mb-4 leading-relaxed"
                    variants={itemVariants}
                  >
                    {member.role}
                  </motion.p>

                  <motion.p
                    className="text-gray-600 leading-relaxed mb-6"
                    variants={itemVariants}
                  >
                    {member.shortBio}
                  </motion.p>

                  {/* Read More Section */}
                  <AnimatePresence>
                    {expandedBio === member.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {member.longBio}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => toggleBio(member.id)}
                    className="flex items-center justify-center space-x-2 text-[#CBA135] hover:text-[#b8912d] font-semibold transition-colors duration-200 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{expandedBio === member.id ? 'Read Less' : 'Read More'}</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: expandedBio === member.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Gold Accent Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-[#CBA135] opacity-0 hover:opacity-20 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a3a5f] to-[#0A2342]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Collective Mission</h2>
            <div className="w-16 h-1 bg-[#CBA135] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-white opacity-90 leading-relaxed max-w-3xl mx-auto">
              Together, we are committed to transforming communities through legal education, 
              empowerment, and sustainable development initiatives across Enugu State and beyond.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default MeetTheTeam;