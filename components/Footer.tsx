"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import shakti from '../images/shakti.png'

const footerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#d9d9d94e]">
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-500 to-green-600 -z-10"
      />
      <div
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/4">
            <div className='flex gap-2 pb-2'>
              <Image src={shakti} alt="logo" width={45} height={45}/>
              <Link href="/" className='text-[#fe4f2a] text-2xl font-semibold'>Shakti.io</Link>
            </div>
            <p className="text-md md:text-md">Your fitness journey made smarter and simpler.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4 text-[#fe4f2a]">Services</h2>
            <ul className="space-y-2">
              <li><Link href="#services" className="inline-block hover:text-[#fe4f2a] transition-all">Health Assistant</Link></li>
              <li><Link href="#services" className="inline-block hover:text-[#fe4f2a] transition-all">Cohort Support</Link></li>
              <li><Link href="#services" className="inline-block hover:text-[#fe4f2a] transition-all">Learning Hub</Link></li>
              <li><Link href="#services" className="inline-block hover:text-[#fe4f2a] transition-all">Fitness Plan</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4 text-[#fe4f2a]">Company</h2>
            <ul className="space-y-2">
            <li><Link href="/" className="inline-block hover:text-[#fe4f2a] transition-all">Home</Link></li>
              <li><Link href="#about" className="inline-block hover:text-[#fe4f2a] transition-all">About Us</Link></li>
              <li><Link href="/Terms" className="inline-block hover:text-[#fe4f2a] transition-all">Terms of Service</Link></li>
              <li><Link href="/Privacy" className="inline-block hover:text-[#fe4f2a] transition-all">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4 text-[#fe4f2a]">Contact</h2>
            <ul className="space-y-2">
              <div className='flex flex-row gap-2 items-center'>
                <Image src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="" width={20} height={20}/>
              <li>
                <Link href="mailto:info@FitnessAiAPP.com" className="hover:text-[#fe4f2a] transition-all">Email</Link>
              </li>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" width={20} height={20}/>
              <li>
                <Link href="https://twitter.com/FitnessAiAPP" className="hover:text-[#fe4f2a] transition-all">Linkedin</Link>
                </li>
                </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="" width={20} height={20}/>
              <li>
                <Link href="https://www.facebook.com/FitnessAiAPP" className="hover:text-[#fe4f2a] transition-all">Facebook</Link>
                </li>
                </div>
              <div className='flex flex-row gap-2 items-center'>
                <Image src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" width={20} height={20}/>
              <li>
                <Link href="https://instagram.com/FitnessAiAPP" className="hover:text-[#fe4f2a] transition-all">Instagram</Link>
                </li>
                </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#fff5f1] py-4 text-center text-sm text-black">
        <p>&copy; {new Date().getFullYear()} Shakti.io All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
