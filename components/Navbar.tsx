"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { FaDumbbell, FaRunning, FaChartLine, FaUserFriends } from 'react-icons/fa';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const controls = useAnimation();

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (isScrolled) {
        setIsServicesOpen(false); // Close services menu on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply animation when scrolled
  useEffect(() => {
    controls.start({
      opacity: scrolled ? 1 : 0.95,
      scale: scrolled ? 1 : 0.98,
      transition: { duration: 0.5 },
    });
  }, [scrolled, controls]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <motion.div
        animate={controls}
        className={`flex items-center justify-between ${
          scrolled ? 'max-w-4xl' : 'w-full'
        } ${
          scrolled ? 'bg-gradient-to-r from-green-800 to-green-900 text-white border border-green-600' : 'bg-transparent text-white'
        } mx-auto transition-all duration-500 ease-in-out`}
        style={{
          borderRadius: '12px',
          padding: '0.5rem',
          boxShadow: scrolled ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none',
        }}
      >
        {/* Header Section */}
        <div className="flex w-full items-center justify-between">
          {/* Left side menu */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <span className="font-orbitron text-2xl md:text-3xl">
                FitnessPro
              </span>
            </Link>
            <span className="bg-green-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
              Beta
            </span>
          </div>

          {/* Right side menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="font-orbitron text-white hover:text-yellow-400 text-lg md:text-2xl"
            >
              Services
            </button>
            <Link href="/docs/components" target="_blank">
              <span className="font-orbitron text-white hover:text-yellow-400 text-lg md:text-2xl">
                Components
              </span>
            </Link>
            <Link href="/About">
              <span className="font-orbitron text-white hover:text-yellow-400 text-lg md:text-2xl">
                About
              </span>
            </Link>
            <Link href="/SignUp">
              <span className="font-orbitron text-white hover:text-yellow-400 text-lg md:text-2xl">
                Sign Up
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl md:text-3xl text-white focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Dropdown menu for desktop */}
        {isServicesOpen && (
          <div className="hidden md:block absolute top-16 right-0 mt-2 w-64 bg-green-700 bg-opacity-90 p-4 rounded-lg shadow-lg grid grid-cols-2 gap-2">
            {/* Close button */}
            <button
              onClick={() => setIsServicesOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
            >
              ✕
            </button>

            <Link href="/Personal-Training" className="flex items-center text-white hover:text-yellow-400 py-2">
              <FaDumbbell className="text-2xl mr-2" />
              <span>Personal Training</span>
            </Link>
            <Link href="/Nutrition-Consulting" className="flex items-center text-white hover:text-yellow-400 py-2">
              <FaChartLine className="text-2xl mr-2" />
              <span>Nutrition Consulting</span>
            </Link>
            <Link href="/Workout-Plans" className="flex items-center text-white hover:text-yellow-400 py-2">
              <FaRunning className="text-2xl mr-2" />
              <span>Custom Workout Plans</span>
            </Link>
            <Link href="/Online-Classes" className="flex items-center text-white hover:text-yellow-400 py-2">
              <FaUserFriends className="text-2xl mr-2" />
              <span>Online Classes</span>
            </Link>
          </div>
        )}

        {/* Mobile menu items */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-green-700 bg-opacity-90 p-4 flex flex-col items-center rounded-lg">
            <div className="flex flex-col w-full items-start">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white w-full text-left py-2"
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="w-full bg-green-600 rounded-lg p-2">
                  <Link href="/Personal-Training" className="flex items-center text-white hover:text-yellow-400 py-2">
                    Personal Training
                  </Link>
                  <Link href="/Nutrition-Consulting" className="flex items-center text-white hover:text-yellow-400 py-2">
                    Nutrition Consulting
                  </Link>
                  <Link href="/Workout-Plans" className="flex items-center text-white hover:text-yellow-400 py-2">
                    Custom Workout Plans
                  </Link>
                  <Link href="/Online-Classes" className="flex items-center text-white hover:text-yellow-400 py-2">
                    Online Classes
                  </Link>
                </div>
              )}
              <Link href="/docs/components" target="_blank">
                <span className="font-orbitron text-white hover:text-yellow-400 text-lg py-2">
                  Components
                </span>
              </Link>
              <Link href="/About">
                <span className="font-orbitron text-white hover:text-yellow-400 text-lg py-2">
                  About
                </span>
              </Link>
              <Link href="/SignUp">
                <span className="font-orbitron text-white hover:text-yellow-400 text-lg py-2">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
