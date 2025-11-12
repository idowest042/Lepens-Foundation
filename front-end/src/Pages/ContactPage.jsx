import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { axiosInstance } from '../lib/axios';
import { toast } from 'react-toastify';

const ContactPage = () => {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Get in touch with LEPENS Foundation. We're here to answer your questions and discuss how we can work together to create positive change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                variants={itemVariants}
              >
                <div>
                  <h2 className="text-3xl font-bold text-[#1F3B4D] mb-4">Get in Touch</h2>
                  <p className="text-[#1F3B4D] opacity-80 leading-relaxed">
                    Whether you have questions about our programs, want to volunteer, or are interested in partnership opportunities, we'd love to hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <motion.div
                  className="bg-[#FFFCEF] rounded-2xl shadow-lg p-8 border border-gray-100"
                  variants={itemVariants}
                >
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
                        <h4 className="font-semibold text-[#1F3B4D]">Our Office</h4>
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
                        <h4 className="font-semibold text-[#1F3B4D]">Phone Number</h4>
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
                        <h4 className="font-semibold text-[#1F3B4D]">Email Address</h4>
                        <p className="text-[#1F3B4D] opacity-80">lepensfoundation@gmail.com</p>
                      </div>
                    </motion.div>

                    {/* Office Hours */}
                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-[#5C899D] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1F3B4D]">Office Hours</h4>
                        <p className="text-[#1F3B4D] opacity-80">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-[#1F3B4D] opacity-80">Saturday: 9:00 AM - 1:00 PM</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="bg-gradient-to-r from-[#5C899D] to-[#8AB6C6] rounded-2xl p-6 text-white"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="/program"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Explore Our Programs</span>
                    </motion.a>
                    <motion.a
                      href="/about"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 group"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Learn About Our Mission</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold text-[#1F3B4D] mb-6">Send us a Message</h2>
                
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
                      Your message has been sent successfully. We'll get back to you within 24-48 hours.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-[#5C899D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a7688] transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label htmlFor="FullName" className="block text-sm font-medium text-[#1F3B4D] mb-2">
                          Full Name *
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
                          Email Address *
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
                        Subject *
                      </label>
                      <select
                        id="Subject"
                        name="Subject"
                        required
                        value={formData.Subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        <option value="">Select a subject</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="partnership">Partnership</option>
                        <option value="donation">Donation Information</option>
                        <option value="programs">Program Information</option>
                        <option value="other">Other</option>
                      </select>
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
                        rows="6"
                        value={formData.Message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C899D] focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Please describe how we can help you..."
                        disabled={isSubmitting}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#5C899D] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-[#FFFCEF]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#1F3B4D] mb-4">Visit Our Office</h2>
              <div className="w-24 h-1 bg-[#5C899D] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-[#1F3B4D] opacity-80 max-w-2xl mx-auto">
                Find us at our Enugu office. We welcome visitors during our office hours.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.236258199999!2d7.486614!3d6.524396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d3c8c3d3c3%3A0x9f9b9c9c9c9c9c9c!2sAgbani%20Road%2C%20Enugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LEPENS Foundation Location"
                className="w-full"
              />
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;