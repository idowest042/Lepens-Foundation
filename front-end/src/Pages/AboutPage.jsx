import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/asset.js';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Create separate refs for each section
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
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

  const stats = [
    { number: "500+", label: "Lives Impacted" },
    { number: "50+", label: "Active Volunteers" },
    { number: "25+", label: "Communities Reached" },
    { number: "5+", label: "Years of Service" }
  ];

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Our Mission",
      description: "To empower underprivileged communities through education, healthcare, and sustainable development programs that create lasting change."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Our Vision",
      description: "A world where every individual has access to quality education, healthcare, and opportunities to reach their full potential."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Our Values",
      description: "Integrity, Compassion, Empowerment, Collaboration, and Sustainable Impact guide everything we do."
    }
  ];

  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-[#FFFCEF] ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br bg-[#0A2342] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center text-white mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About LEPENS Foundation</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Transforming lives through education, empowerment, and sustainable community development in Enugu State and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            ref={valuesRef}
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-[#FFFCEF] shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#1F3B4D] mb-4">{value.title}</h3>
                <p className="text-[#1F3B4D] opacity-80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#FFFCEF]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            ref={storyRef}
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#1F3B4D] opacity-80 leading-relaxed">
                <p>
                 he Law Enlightenment Project (Nkowa Iwu) Enugu State – LEPENS is a citizen-focused initiative dedicated to simplifying the law and bringing legal knowledge directly to every home, community, institution, and digital space in Enugu State. The project provides free legal education on the Constitution, national laws, and especially the Laws of Enugu State, ensuring residents understand their rights, duties, and available justice pathways.
                </p>
                <p>
                 LEPENS is implemented in partnership with the Enugu State Ministry of Justice and supported by legal professionals, social media experts, and community actors united by the mission to make the law accessible to all.
                </p>
              </div>
              
            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={assets.logo} 
                  alt="LEPENS Foundation team in community"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-[#5C899D]">2018</div>
                <div className="text-sm text-[#1F3B4D]">Year Founded</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#5C899D] mb-2"
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#1F3B4D] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, partner with us, or support our programs, 
              there are many ways to get involved and create lasting impact.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#5C899D] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;