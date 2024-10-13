"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAppleAlt, FaHeartbeat, FaUsers, FaVideo, FaRocket, FaMedkit, FaTrophy, FaClipboardList, FaComments, FaCog } from 'react-icons/fa';
import fitnessLogo from '../public/fitness-logo.png'; // Replace with your image path

const functionalities = [
  { icon: <FaAppleAlt />, text: "Tailored fitness and nutrition plans" },
  { icon: <FaMedkit />, text: "Customized meal plans" },
  { icon: <FaHeartbeat />, text: "Monitor essential health parameters" },
  { icon: <FaRocket />, text: "Personalized health care assistance" },
  { icon: <FaUsers />, text: "Community support" },
  { icon: <FaCog />, text: "AI-driven fitness routines" },
  { icon: <FaTrophy />, text: "Gamification & rewards" },
  { icon: <FaVideo />, text: "Educational content: videos, audios" },
  { icon: <FaClipboardList />, text: "Webinars and workshops" },
  { icon: <FaComments />, text: "Virtual consultations" },
];

const ExperienceHealth: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-green-400 to-green-600 text-white relative">
      <motion.div
        className="mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={fitnessLogo} alt="Fitness Logo" width={150} height={150} className="rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl w-full">
        {functionalities.map((func, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-green-700 rounded-lg shadow-md p-4 text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl mb-2">{func.icon}</div>
            <p className="text-sm">{func.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHealth;
