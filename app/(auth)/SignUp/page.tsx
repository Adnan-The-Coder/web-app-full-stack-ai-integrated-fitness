/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter";
import ToastMessage from "@/components/ui/ToastMessage"; 

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
    username: "",
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

  const onSignup = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/SignUp", user);
      addToast("Sign up successful! An email has been sent to verify your account.", 'success');
      
      const login_user = async () => {
        try {
          const response = await axios.post("/api/users/Login", user);
          console.log(response);
          router.push('/verifyemail');
        } catch (error: any) {
          console.log("Login Failed ", error.message);
          addToast(error.message, 'error');
        }
      };
      setTimeout(login_user, 3000); // Delay login after signup success
    } catch (error: any) {
      console.log("Sign Up failed ", error.message);
      addToast(error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <>
      <div className="py-8 min-h-screen bg-[#d8d8d9] flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-[#fff4f0] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#FE4F2A]">
            Create Your Account
          </h2>
          <div className="w-full">
            <form onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
              <div className="mb-4">
                <label htmlFor="username" className="flex items-center text-[#2d2a2a]">
                  <FaUser className="mr-2" />
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="Enter your username"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex items-center text-[#2d2a2a]">
                  <FaEnvelope className="mr-2" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="flex items-center text-[#2d2a2a]">
                  <FaLock className="mr-2" />
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
                <PasswordStrengthMeter password={user.password} />
              </div>
              <motion.button
                className={`w-full py-3 mt-5 bg-gradient-to-r from-[#fe8c00] to-[#f83600] text-white font-bold rounded-lg shadow-lg 
                  hover:from-[#f83600] hover:to-[#fe8c00] focus:outline-none 
                  focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                  transition duration-200 ${buttonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={onSignup}
                disabled={buttonDisabled || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? <FaSpinner className="animate-spin mx-auto" size={24} /> : "Sign Up"}
              </motion.button>
            </form>
            <div className="mt-4 text-sm text-gray-400 text-center">
              By signing up, you agree to our{" "}
              <Link href="/Terms-And-Conditions" target="_blanck" className="text-[#fe4f2a] hover:underline">
                terms and conditions
              </Link>.
            </div>
          </div>
          <div className="px-8 py-4 bg-[#ececec] bg-opacity-50 rounded-xl mt-4 flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href={'/login'} className='text-[#fe4f2a] hover:underline'>
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 p-4">
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </>
  );
};

export default Page;
