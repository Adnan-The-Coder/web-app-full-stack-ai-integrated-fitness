/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa"; // Importing React Icons
import ToastMessage from "@/components/ui/ToastMessage"; // Import your ToastMessage component

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

const Page: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [nextId, setNextId] = useState(0);

  const addToast = (message: string, type: 'success' | 'error') => {
    const newToast = { id: nextId, message, type };
    setToasts((prev) => [...prev, newToast]);
    setNextId((prev) => prev + 1);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      removeToast(newToast.id);
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/Login", user);
      console.log(response);
      
      // Show success toast
      addToast("Login successful! Redirecting...", 'success');
  
      // Wait for 2 seconds before redirecting
      setTimeout(() => {
        setLoading(false); // Ensure loading state is set before redirect
        router.push('/Dashboard');
      }, 2000);
    } catch (error: any) {
      setLoading(false); // Ensure loading is false in case of error
      if (error.response?.status === 400) {
        addToast("Wrong credentials. Please try again.", 'error');
      } else if (error.response?.status === 500) {
        addToast("Internal server error. Please try again later.", 'error');
      } else {
        console.log(error.message);
        addToast("An unexpected error occurred. Please try again.", 'error');
      }
    }
  };
  

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <>
    {/* <div className="py-8 min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"> */}
    <div className="py-8 min-h-screen bg-[#d8d8d9] flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-[#fff4f0] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center min-h-screen py-2"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FE4F2A]">
          Welcome Back
        </h2>
        <div className="p-8 w-full">
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="text-black flex items-center">
                <FaEnvelope className="mr-2" />
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-black flex items-center">
                <FaLock className="mr-2" />
                Password
              </label>
              <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="flex items-center mb-6">
              <Link href="/forgot-password" className="text-sm text-[#FE4F2A] hover:underline">
                Forgot password?
              </Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 bg-gradient-to-r from-[#fe8c00] to-[#f83600] text-white font-bold rounded-lg shadow-lg 
                hover:from-[#f83600] hover:to-[#fe8c00] focus:outline-none 
                focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                focus:ring-offset-gray-900 transition duration-200 ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={buttonDisabled || loading}
            >
              {loading ? <FaSpinner className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
            </motion.button>
          </form>
        </div>
        <div className="px-8 py-4 bg-[#f2d3c7] rounded-xl bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Don`t have an account?{" "}
            <Link href="/SignUp" className="text-[#f83600] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
      <div className="absolute top-0 right-0 p-4">
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </div>
  </>
  );
};

export default Page;
