import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/asset.js';
import { Link } from "react-router-dom"

const About = () => {
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

  const valueVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const coreValues = [
    {
      icon: "•",
      title: "Project Goal",
      description: "To promote legal awareness and education—particularly on the Laws of Enugu State—enhance access to justice, and foster a culture of legal compliance across the state."
    },
    {
      icon: "•",
      title: "Project Objectives",
      description: "Increase public understanding of national laws and Enugu State laws, including newly enacted legislation."
    },
    {
      icon: "•",
      title: "Legal Education and Awareness",
      description: "Weekly dissemination of simplified legal content, including key provisions of Enugu State laws."
    },
    {
      icon: "•",
      title: "Legal Compliance and Enforcement",
      description: "Sensitization on civic obligations and penalties under state laws Public awareness campaigns on state-specific laws (e.g., Environmental Laws, Public Health Laws, Traffic Laws, Gender-Based Violence Laws, etc.)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FFFCEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <div className="lg:w-1/2">
            {/* Headline */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6"
              variants={itemVariants}
            >
              About <span className="text-[#5C899D]">LEPENS</span> Foundation
            </motion.h2>

            {/* Mission Summary */}
            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <div className="w-16 h-1 bg-[#5C899D] mb-4"></div>
              <p className="text-lg md:text-xl text-[#2C3E50] leading-relaxed">
               The Law Enlightenment Project (Nkowa Iwu) Enugu State – LEPENS is a citizen-focused initiative dedicated to simplifying the law and bringing legal knowledge directly to every home, community, institution, and digital space in Enugu State.
                The project provides free legal education on the Constitution, national laws, and especially the Laws of Enugu State, ensuring residents understand their rights, duties, and available justice pathways.
LEPENS is implemented in partnership with the Enugu State Ministry of Justice and supported by legal professionals, social media experts, and community actors united by the mission to make the law accessible to all.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              className="space-y-6 mb-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4">Project Framework</h3>
              <div className="grid gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={valueVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="text-2xl flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#2C3E50] mb-2">
                        {value.title}
                      </h4>
                      <p className="text-[#2C3E50] text-opacity-80">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <p className="text-xl font-semibold text-[#2C3E50] mb-6">
                Join us in shaping a more just and empowered society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                <motion.button
                  className="bg-[#5C899D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a7688] transition-colors duration-200 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(92, 137, 157, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Volunteer With Us
                </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={assets.img2 || "https://images.unsplash.com/photo-1551833994-6a13e3fbfeff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"} 
                  alt="LEPENS volunteers teaching in community"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-[#5C899D]">500+</div>
                <div className="text-sm text-[#2C3E50]">Lives Impacted</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#5C899D] text-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Active Volunteers</div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#5C899D] rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#5C899D] rounded-full opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>

            {/* Image Caption */}
            <motion.p
              className="text-center mt-4 text-[#2C3E50] text-opacity-70 italic"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              LEPENS volunteers conducting legal awareness workshop in Enugu community
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;