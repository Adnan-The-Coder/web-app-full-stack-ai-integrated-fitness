"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#d9d9d9] p-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=100&id=57197&format=png&color=000000"
            alt="Shakti.io Logo"
            className="w-7 h-7"
          />
          <Link href="/" className="text-[#fe4f2a] text-2xl font-semibold">Shakti.io</Link>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="/" className="text-gray-600 hover:text-[#fe4f2a] transition-all">Home</a>
          <a href="#about" className="text-gray-600 hover:text-[#fe4f2a] transition-all">About Us</a>
          <a href="#services" className="text-gray-600 hover:text-[#fe4f2a] transition-all">Services</a>
          <a href="/plans" className="text-gray-600 hover:text-[#fe4f2a] transition-all">Plans</a>
        </div>
        <div>
          <a href="/signup" className="bg-[#fe4f2a] text-white px-8 py-3 rounded-full hidden md:block transition-all text-sm">
            Sign Up
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl text-[#fe4f2a]" />
            ) : (
              <FaBars className="text-2xl text-[#fe4f2a]" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-55 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed inset-y-0 z-50 left-0 w-3/5 bg-[#d9d9d9] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-start p-5 space-y-4 h-full">
          <Link href="/" className="text-gray-600 hover:text-[#fe4f2a] transition-all text-lg">Home</Link>
          <Link href="#about" className="text-gray-600 hover:text-[#fe4f2a] transition-all text-lg">About Us</Link>
          <Link href="#services" className="text-gray-600 hover:text-[#fe4f2a] transition-all text-lg">Services</Link>
          <Link href="/plans" className="text-gray-600 hover:text-[#fe4f2a] transition-all text-lg">Plans</Link>
          <Link href="/signup" className="bg-[#fe4f2a] text-white px-4 py-2 rounded-full transition-all text-md">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
