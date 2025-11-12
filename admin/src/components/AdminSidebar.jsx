import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthStore } from "../store/authStore";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const AdminSidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const logout = AuthStore((state) => state.logout);
  const authUser = AuthStore((state) => state.authUser);

  const handleLogout = async () => {
    try {
      await logout(navigate);
      setShowLogoutModal(false);
      setShowUserMenu(false);
      setShowMobileMenu(false);
    } catch (error) {
      toast.error('Logout failed. Please try again.');
    }
  };

  const menuItems = [
    {
      name: 'Messages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      path: '/admin/messages'
    }
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-[#0A2342] text-white shadow-2xl fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/admin/dashboard')}
            >
              <img 
                src={assets.logo}
                alt="LEPENS" 
                className="h-10 w-10"
              />
              <div className="hidden sm:block">
                <h2 className="text-lg font-bold text-[#CBA135]">LEPENS Foundation</h2>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </motion.div>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#CBA135] text-[#0A2342] shadow-lg' 
                        : 'hover:bg-[#CBA135]/10 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`${isActive ? 'text-[#0A2342]' : 'text-[#CBA135]'}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center gap-4">
              {/* User Profile Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 hover:bg-[#CBA135]/10 px-3 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 bg-[#CBA135] rounded-full flex items-center justify-center text-[#0A2342] font-bold">
                    {authUser?.name?.charAt(0).toUpperCase() || 'A'}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="font-semibold text-white text-sm">{authUser?.name || 'Admin'}</p>
                    <p className="text-xs text-gray-400">{authUser?.email || ''}</p>
                  </div>
                  <svg 
                    className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl py-2 z-50"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="font-semibold text-[#0A2342]">{authUser?.name || 'Admin'}</p>
                        <p className="text-sm text-gray-600">{authUser?.email || ''}</p>
                      </div>

                      {/* Logout Button */}
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setShowLogoutModal(true);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 hover:bg-[#CBA135]/10 rounded-lg transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {showMobileMenu ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0A2342] border-t border-[#CBA135]/20 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {/* User Info Mobile */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#CBA135]/20">
                  <div className="w-12 h-12 bg-[#CBA135] rounded-full flex items-center justify-center text-[#0A2342] font-bold text-lg">
                    {authUser?.name?.charAt(0).toUpperCase() || 'A'}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{authUser?.name || 'Admin'}</p>
                    <p className="text-xs text-gray-400">{authUser?.email || ''}</p>
                  </div>
                </div>

                {/* Menu Items Mobile */}
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        navigate(item.path);
                        setShowMobileMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive 
                          ? 'bg-[#CBA135] text-[#0A2342]' 
                          : 'hover:bg-[#CBA135]/10 text-white'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`${isActive ? 'text-[#0A2342]' : 'text-[#CBA135]'}`}>
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  );
                })}

                {/* Logout Button Mobile */}
                <motion.button
                  onClick={() => {
                    setShowMobileMenu(false);
                    setShowLogoutModal(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-red-400 transition-all"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16" />

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] px-4"
            onClick={() => setShowLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full"
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A2342] mb-2">
                  Confirm Logout
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Are you sure you want to logout? You'll need to sign in again to access the admin panel.
                </p>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setShowLogoutModal(false)}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  
                  <motion.button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Logout
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;