import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/asset.js';

const Services = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
    }
  };

  const programs = [
    {
      image: assets.img1,
      title: "Legal Education & Awareness",
      description: "Weekly dissemination of simplified legal content on the Constitution, national laws, and Enugu State laws through radio, video, and social media platforms handled by qualified lawyers.",
      stats: "Daily Content Delivery"
    },
    {
      image: assets.img4,
      title: "Community Legal Aid Clinics",
      description: "Free pro bono legal assistance for vulnerable groups including women, children, youths, and persons with disabilities. Providing guidance on dispute resolution and court processes.",
      stats: "17 LGAs Coverage"
    },
    {
      image: assets.img8,
      title: "Legal Compliance & Enforcement",
      description: "Public awareness campaigns on state-specific laws including Environmental Laws, Public Health Laws, Traffic Laws, and Gender-Based Violence Laws to improve compliance.",
      stats: "Statewide Sensitization"
    },
    {
      image: assets.img2,
      title: "Access to Justice",
      description: "Strengthening the relationship between citizens and justice institutions through transparent education, ensuring every resident understands their rights and available justice pathways.",
      stats: "Justice for All"
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#FFFCEF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%235C899D' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '600px 600px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-4"
            variants={titleVariants}
          >
            Our Programs & Initiatives
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#d8b44c] mx-auto rounded-full"
            variants={titleVariants}
          />
          <motion.p
            className="text-xl text-[#2C3E50] mt-6 max-w-3xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Empowering citizens with knowledge of the law, improving access to justice, and fostering a culture of legal compliance across Enugu State
          </motion.p>
        </motion.div>

        {/* Programs Grid with Images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group"
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100">
                {/* Image Container */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="text-xs font-semibold text-[#0A2342]">
                      {program.stats}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0A2342] mb-3 group-hover:text-[#CBA135] transition-colors duration-300 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-[#2C3E50] text-opacity-80 mb-6 flex-1 leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CBA135] group-hover:border-opacity-30 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-lg text-[#2C3E50] mb-4">
            Join us in promoting justice, knowledge, and civic responsibility
          </p>
          <p className="text-base text-[#2C3E50] text-opacity-70">
            Making the law accessible to every citizen across all 17 LGAs of Enugu State
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;