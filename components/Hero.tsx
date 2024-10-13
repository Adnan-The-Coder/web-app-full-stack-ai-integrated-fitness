"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="max-w-5xl text-center p-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Fitness Journey
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us to transform your body and mind with personalized training and nutrition plans.
        </motion.p>
        <div className="flex justify-center gap-4">
          <Link href="/SignUp">
            <motion.button
              className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link href="/About">
            <motion.button
              className="border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-full hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
