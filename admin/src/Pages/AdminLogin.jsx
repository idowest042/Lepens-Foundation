import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStore } from "../store/authStore";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 const login = AuthStore((state) => state.login);
const isLoggingIn = AuthStore((state) => state.isLoggingIn);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await login(formData, navigate);
      // Navigation is handled in the store after successful login
    } catch (error) {
      // Error is already handled in the store
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#CBA135",
      boxShadow: "0 0 0 3px rgba(203, 161, 53, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="min-h-screen bg-[#0A2342] flex items-center justify-center px-4 py-8">
      <motion.div
        className="max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <div className="flex justify-center mb-4">
            <motion.img 
              src={assets.logo}
              alt="LEPENS Foundation" 
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <h1 className="text-3xl font-bold text-white">LEPENS Foundation</h1>
          <p className="text-[#F5F7FA] opacity-80 mt-2">Admin Portal</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-[#0A2342] mb-2 text-center"
            variants={itemVariants}
          >
            Welcome Back
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-center mb-8"
            variants={itemVariants}
          >
            Sign in to your admin account
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-[#0A2342] mb-2">
                Email Address
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
                variants={inputVariants}
                whileFocus="focus"
                whileTap="tap"
                disabled={isLoggingIn}
              />
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-[#0A2342] mb-2">
                Password
              </label>
              <div className="relative">
                <motion.input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                  whileTap="tap"
                  disabled={isLoggingIn}
                />
                <motion.button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#CBA135] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isLoggingIn}
                >
                  <AnimatePresence mode="wait">
                    {showPassword ? (
                      <motion.svg
                        key="eye-off"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="eye"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div
              className="text-right"
              variants={itemVariants}
            >
              <Link
                to="/forgot-password"
                className="text-sm text-[#CBA135] hover:text-[#b8912d] font-semibold transition-colors duration-200"
              >
                Forgot your password?
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-[#CBA135] text-[#0A2342] py-4 rounded-lg font-semibold hover:bg-[#b8912d] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              variants={buttonVariants}
              whileHover={isLoggingIn ? {} : "hover"}
              whileTap={isLoggingIn ? {} : "tap"}
            >
              <AnimatePresence mode="wait">
                {isLoggingIn ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A2342]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </motion.div>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sign In
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          {/* Signup Link */}
          <motion.div
            className="mt-6 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#CBA135] hover:text-[#b8912d] font-semibold transition-colors duration-200"
              >
                Create account
              </Link>
            </p>
          </motion.div>

          {/* Security Note */}
          <motion.div
            className="mt-6 p-4 bg-[#F5F7FA] rounded-lg"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-600 text-center">
              Secure admin portal access. Your session will be protected.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-8"
          variants={itemVariants}
        >
          <p className="text-[#F5F7FA] opacity-70 text-sm">
            © {new Date().getFullYear()} LEPENS Foundation. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;