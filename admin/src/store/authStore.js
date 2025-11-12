import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const AuthStore = create(
  persist(
    (set, get) => ({
      isLoggingIn: false,
      isSignup: false,
      authUser: null,
      isCheckingAuth: true,
      isLoggingOut: false,
      verificationInProgress: false,
      token: null,

      signup: async (data, navigate) => {
        set({ isSignup: true });
        try {
          const response = await axiosInstance.post("/auth/signup", data);
          
          console.log("📥 Signup response:", response.data);
          
          const userId = response.data.userId;
          
          const userData = {
            id: userId,
            email: data.email,
            name: data.name,
            isVerified: false
          };
          
          console.log("💾 Saving authUser:", userData);
          
          set({ authUser: userData });
          toast.success("Verify your Email");
          
          if (navigate) {
            navigate("/verify");
          }
        } catch (error) {
          console.error("Signup Error:", error.response?.data || error.message);
          toast.error(error.response?.data?.message || "Signup failed.");
          throw error;
        } finally {
          set({ isSignup: false });
        }
      },

      verifyUser: async (data) => {
        set({ verificationInProgress: true });
        try {
          console.log("📤 Sending verification:", data);
          
          const response = await axiosInstance.post("/auth/verify", {
            userId: data.userId,
            code: data.code
          });
          
          console.log("📥 Verification response:", response.data);
          
          const userData = {
            id: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            isVerified: true
          };
          
          console.log("💾 Setting verified user and token");
          console.log("User:", userData);
          console.log("Token:", response.data.token);
          
          set({ 
            authUser: userData,
            token: response.data.token
          });
          
          // Verify it was saved
          setTimeout(() => {
            const currentState = get();
            console.log("🔍 State after verification:");
            console.log("authUser:", currentState.authUser);
            console.log("token:", currentState.token);
            
            // Check localStorage
            const stored = localStorage.getItem("auth-storage");
            console.log("📦 LocalStorage content:", stored);
          }, 100);
          
          toast.success("Verification successful!");
          return response.data;
        } catch (error) {
          console.error("❌ Verification Error:", error.response?.data || error.message);
          toast.error(error.response?.data?.message || "Verification failed.");
          throw error;
        } finally {
          set({ verificationInProgress: false });
        }
      },

      login: async (data, navigate) => {
        set({ isLoggingIn: true });
        try {
          const response = await axiosInstance.post("/auth/login", data);
          
          console.log("📥 Login response:", response.data);
          
          set({ 
            authUser: response.data.user,
            token: response.data.token
          });
          
          // Verify it was saved
          setTimeout(() => {
            const currentState = get();
            console.log("🔍 State after login:");
            console.log("authUser:", currentState.authUser);
            console.log("token:", currentState.token);
            
            // Check localStorage
            const stored = localStorage.getItem("auth-storage");
            console.log("📦 LocalStorage content:", stored);
          }, 100);
          
          toast.success("Login successful!");
          
          if (navigate) {
            navigate("/");
          }
          
          return response.data;
        } catch (error) {
          console.error("Login Error:", error.response?.data || error.message);
          toast.error(error.response?.data?.message || "Wrong Email or password");
          throw error;
        } finally {
          set({ isLoggingIn: false });
        }
      },

      logout: (navigate) => {
        set({ authUser: null, token: null });
        toast.success("Logged out");
        if (navigate) {
          navigate("/login");
        }
      },

      checkAuth: async () => {
        console.log("🔍 ===== CHECK AUTH STARTED =====");
        set({ isCheckingAuth: true });
        
        const currentState = get();
        const token = currentState.token;
        const authUser = currentState.authUser;
        
        console.log("Current authUser:", authUser);
        console.log("Current token:", token);
        
        // Check localStorage directly
        const stored = localStorage.getItem("auth-storage");
        console.log("📦 LocalStorage raw:", stored);
        
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            console.log("📦 LocalStorage parsed:", parsed);
          } catch (e) {
            console.error("Failed to parse localStorage:", e);
          }
        }

        if (!token) {
          console.log("❌ No token found, setting authUser to null");
          set({ isCheckingAuth: false, authUser: null });
          return;
        }

        try {
          console.log("📤 Calling /auth/check-auth with token");
          const response = await axiosInstance.get("/auth/check-auth", {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          console.log("✅ Auth check successful:", response.data);
          
          set({ authUser: response.data });
        } catch (error) {
          console.error("❌ Auth Check Error:", error.response?.data || error.message);
          set({ authUser: null, token: null });
        } finally {
          set({ isCheckingAuth: false });
          console.log("🔍 ===== CHECK AUTH ENDED =====");
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        authUser: state.authUser,
        token: state.token,
      }),
    }
  )
);