"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const footerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-500 to-green-600 -z-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      {/* Footer Content */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Fitness Brand Branding */}
          <div className="w-full md:w-1/4">
            <h1 className="text-3xl font-bold mb-4">FitnessAiAPP</h1>
            <p className="text-lg">Empowering you to achieve your fitness goals.</p>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link href="/Personal-Training"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Personal Training</motion.span></Link></li>
              <li><Link href="/Nutrition-Consulting"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Nutrition Consulting</motion.span></Link></li>
              <li><Link href="/Workout-Plans"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Custom Workout Plans</motion.span></Link></li>
              <li><Link href="/Online-Classes"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Online Classes</motion.span></Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link href="/About"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">About Us</motion.span></Link></li>
              <li><Link href="/Terms"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Terms of Service</motion.span></Link></li>
              <li><Link href="/Privacy"><motion.span whileHover={{ scale: 1.1 }} className="inline-block hover:text-yellow-400 transition-all">Privacy Policy</motion.span></Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li><a href="mailto:info@FitnessAiAPP.com" className="hover:text-yellow-400 transition-all">Email</a></li>
              <li><a href="https://twitter.com/FitnessAiAPP" className="hover:text-yellow-400 transition-all">Twitter</a></li>
              <li><a href="https://www.facebook.com/FitnessAiAPP" className="hover:text-yellow-400 transition-all">Facebook</a></li>
              <li><a href="https://instagram.com/FitnessAiAPP" className="hover:text-yellow-400 transition-all">Instagram</a></li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom Section */}
      <div className="bg-green-800 py-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} FitnessAiAPP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
