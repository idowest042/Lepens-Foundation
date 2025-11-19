import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AdminSignup from './Pages/AdminSignup'
import VerifyAccount from './Pages/VerifyAccount'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from './Pages/AdminLogin.jsx';
import Home from './Pages/Home.jsx';
import AdminMessages from './components/AdminMessages.jsx';
import { AuthStore } from './store/authStore.js';
const App = () => {
  const authUser = AuthStore((state) => state.authUser);
  const token = AuthStore((state) => state.token); // ← Add this
  const checkAuth = AuthStore((state) => state.checkAuth);
  const isCheckingAuth = AuthStore((state) => state.isCheckingAuth);
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <svg 
          className="w-10 h-10 animate-spin text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }
  
  // ✅ User is authenticated if they have BOTH authUser AND token (which means verified)
  const isAuthenticated = authUser && token;
  
  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Allow access if not authenticated */}
        <Route 
          path="/signup" 
          element={!isAuthenticated ? <AdminSignup /> : <Navigate to="/" />} 
        />
        
        {/* Allow access if user exists but not verified */}
        <Route 
          path="/verify" 
          element={authUser && !authUser.isVerified ? <VerifyAccount /> : <Navigate to="/" />} 
        />
        
        {/* Allow access if not authenticated */}
        <Route 
          path="/login" 
          element={!isAuthenticated ? <AdminLogin /> : <Navigate to="/" />} 
        />
        
        {/* Require authentication (verified + token) */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/messages" 
          element={isAuthenticated ? <AdminMessages /> : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  )
}

export default App