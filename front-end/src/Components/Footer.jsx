import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { assets } from '../assets/asset.js';

const Footer = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#0A2342] relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FFFCEF] to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About / Logo Section */}
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-[#FFFCEF] mb-2">LEPENS</div>
              {/* Alternatively, use your logo image */}
              {/* <img src={assets.logo} alt="LEPENS Foundation" className="h-10 w-auto brightness-0 invert" /> */}
            </motion.div>
            <p className="text-[#FFFCEF] text-opacity-90 leading-relaxed mb-6">
              LEPENS Foundation is dedicated to empowering individuals and communities through education, healthcare, and sustainable programs.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-[#FFFCEF] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/program' },
                { name: 'Contact', path: '/contact' },
                { name: 'Legal Awareness', path: '/legal-awareness' }
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.path}
                    className="text-[#FFFCEF] text-opacity-80 hover:text-opacity-100 transition-all duration-300 inline-block relative group"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFFCEF] transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs / Services */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-[#FFFCEF] mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {[
                'Education Support',
                'Healthcare Outreach',
                'Youth Empowerment',
                'Community Development',
                'Legal Awareness'
              ].map((program) => (
                <li key={program}>
                  <motion.a
                    className="text-[#FFFCEF] text-opacity-80 hover:text-opacity-100 transition-all duration-300 inline-block relative group"
                    whileHover={{ x: 5 }}
                  >
                    {program}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFFCEF] transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact / Social Media */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-[#FFFCEF] mb-6">Contact Info</h3>
            <div className="space-y-4 mb-6">
              <motion.div 
                className="flex items-center space-x-3 text-[#FFFCEF] text-opacity-80 hover:text-opacity-100 transition-opacity duration-300"
                whileHover={{ x: 3 }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Plot 5, Agbani Road, Enugu, Nigeria</span>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 text-[#FFFCEF] text-opacity-80 hover:text-opacity-100 transition-opacity duration-300"
                whileHover={{ x: 3 }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">+234 813 648 8670</span>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 text-[#FFFCEF] text-opacity-80 hover:text-opacity-100 transition-opacity duration-300"
                whileHover={{ x: 3 }}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">lepensfoundation@gmail.com</span>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-sm font-semibold text-[#FFFCEF] mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(255, 252, 239, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <div className="text-[#FFFCEF] group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-white/20 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[#FFFCEF] text-opacity-70 text-sm">
              © {new Date().getFullYear()} LEPENS Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;