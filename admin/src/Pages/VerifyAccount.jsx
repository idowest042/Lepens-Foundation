import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AuthStore } from "../store/authStore";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const VerifyAccount = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  // ✅ Fixed: Call each selector separately to avoid infinite loop
  const verifyUser = AuthStore((state) => state.verifyUser);
  const verificationInProgress = AuthStore((state) => state.verificationInProgress);
  const authUser = AuthStore((state) => state.authUser);

  // Redirect if already verified/authUser exists
  useEffect(() => {
    if (authUser && authUser.isVerified) {
      navigate('/');
    }
  }, [authUser, navigate]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      document.getElementById(`code-${index - 1}`)?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const pasteArray = pasteData.split('');
      const newCode = [...verificationCode];
      pasteArray.forEach((digit, index) => {
        if (index < 6) newCode[index] = digit;
      });
      setVerificationCode(newCode);
      
      // Focus the next empty input or last input
      const nextEmptyIndex = newCode.findIndex(code => code === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      document.getElementById(`code-${focusIndex}`)?.focus();
    }
  };

 const handleVerify = async (e) => {
  e.preventDefault();
  
  const code = verificationCode.join('');
  if (code.length !== 6) {
    toast.error('Please enter the complete 6-digit verification code');
    return;
  }

  const userId = authUser?.id || authUser?._id;
  console.log("Sending verification with:", { userId, code, authUser }); // ← Debug log

  if (!userId) {
    toast.error('User ID not found. Please sign up again.');
    navigate('/signup');
    return;
  }

  try {
    await verifyUser({ userId, code });
    navigate('/');
  } catch (error) {
    setVerificationCode(['', '', '', '', '', '']);
  }
};

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // TODO: Replace with actual resend endpoint
      // await axiosInstance.post('/auth/resend-verification', { email: authUser?.email });
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Verification code sent to your email');
    } catch (error) {
      toast.error('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
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
      scale: 1.05,
      borderColor: "#CBA135",
      boxShadow: "0 0 0 3px rgba(203, 161, 53, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
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
          <p className="text-[#F5F7FA] opacity-80 mt-2">Verify Your Account</p>
        </motion.div>

        {/* Verification Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-[#0A2342] mb-2 text-center"
            variants={itemVariants}
          >
            Enter Verification Code
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-center mb-8"
            variants={itemVariants}
          >
            We've sent a 6-digit verification code to your email address
          </motion.p>

          <form onSubmit={handleVerify} className="space-y-6">
            {/* Code Inputs */}
            <motion.div
              className="flex justify-between gap-2"
              variants={itemVariants}
            >
              {verificationCode.map((digit, index) => (
                <motion.input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#CBA135] transition-colors duration-200"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileTap="tap"
                  disabled={verificationInProgress}
                />
              ))}
            </motion.div>

            {/* Verify Button */}
            <motion.button
              type="submit"
              disabled={verificationInProgress || verificationCode.some(code => code === '')}
              className="w-full bg-[#CBA135] text-[#0A2342] py-4 rounded-lg font-semibold hover:bg-[#b8912d] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: verificationInProgress ? 1 : 1.02 }}
              whileTap={{ scale: verificationInProgress ? 1 : 0.98 }}
            >
              <AnimatePresence mode="wait">
                {verificationInProgress ? (
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
                    Verifying...
                  </motion.div>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Verify Account
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>

          {/* Resend Code */}
          <motion.div
            className="mt-6 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-600">
              Didn't receive the code?{' '}
              <button
                onClick={handleResendCode}
                disabled={isResending}
                className="text-[#CBA135] hover:text-[#b8912d] font-semibold transition-colors duration-200 disabled:opacity-50"
              >
                {isResending ? 'Sending...' : 'Resend Code'}
              </button>
            </p>
          </motion.div>

          {/* Help Text */}
          <motion.div
            className="mt-6 p-4 bg-[#F5F7FA] rounded-lg"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-600 text-center">
              Check your email inbox for the verification code. It may take a few minutes to arrive.
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

export default VerifyAccount;