import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Subject: '',
    Message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const formVariants = {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post('/admin/send-message', formData);
      
      if (response.data) {
        setIsSubmitted(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form after submission
        setFormData({
          FullName: '',
          Email: '',
          Subject: '',
          Message: ''
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || error?.response?.data?.msg || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFCEF] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5C899D] rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5C899D] rounded-full translate-y-24 -translate-x-24"></div>
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
            className="text-4xl md:text-5xl font-bold text-[#1F3B4D] mb-4"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"
            variants={itemVariants}
          />
          <motion.p
            className="text-xl text-[#1F3B4D] max-w-2xl mx-auto opacity-80"
            variants={itemVariants}
          >
            We'd love to hear from you. Whether you have questions, want to collaborate, or wish to support our programs, reach out anytime.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Contact Details */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-[#1F3B4D] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3B4D]">Address</h4>
                    <p className="text-[#1F3B4D] opacity-80">Plot 5, Agbani Road, Enugu, Nigeria</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3B4D]">Phone</h4>
                    <p className="text-[#1F3B4D] opacity-80">+234 813 648 8670</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F3B4D]">Email</h4>
                    <p className="text-[#1F3B4D] opacity-80">lepensfoundation@gmail.com</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-200"
                variants={itemVariants}
              >
                <h4 className="font-semibold text-[#1F3B4D] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="w-12 h-12 bg-gray-100 hover:bg-[#5C899D] rounded-full flex items-center justify-center transition-colors duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-[#1F3B4D] group-hover:text-white font-semibold text-sm">
                        {platform[0]}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              className="bg-gradient-to-r from-[#5C899D] to-[#8AB6C6] rounded-2xl p-6 text-center"
              variants={itemVariants}
            >
              <p className="text-white text-lg font-semibold italic">
                "Changing lives, one community at a time."
              </p>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.236258199999!2d7.486614!3d6.524396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d3c8c3d3c3%3A0x9f9b9c9c9c9c9c9c!2sAgbani%20Road%2C%20Enugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LEPENS Foundation Location"
                className="w-full h-48 lg:h-56"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F3B4D] mb-2">Thank You!</h3>
                  <p className="text-[#1F3B4D] opacity-80 mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#5C899D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a7688] transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#1F3B4D] mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label htmlFor="FullName" className="block text-sm font-medium text-[#1F3B4D] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="FullName"
                          name="FullName"
                          required
                          value={formData.FullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200"
                          placeholder="Your full name"
                          disabled={isSubmitting}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label htmlFor="Email" className="block text-sm font-medium text-[#1F3B4D] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="Email"
                          name="Email"
                          required
                          value={formData.Email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="Subject" className="block text-sm font-medium text-[#1F3B4D] mb-2">
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        id="Subject"
                        name="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200"
                        placeholder="What is this regarding?"
                        disabled={isSubmitting}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="Message" className="block text-sm font-medium text-[#1F3B4D] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="Message"
                        name="Message"
                        required
                        rows="5"
                        value={formData.Message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                        disabled={isSubmitting}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#5C899D] text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      whileHover={!isSubmitting ? { 
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(92, 137, 157, 0.4)"
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;