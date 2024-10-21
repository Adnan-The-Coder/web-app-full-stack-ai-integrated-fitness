'use client'

import { useEffect, useState } from 'react';
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import ExtraServices from '@/components/ExtraServices';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-3 bg-[#fe4f2a] text-white rounded-full transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <img src="https://img.icons8.com/?size=100&id=39805&format=png&color=FFFFFF" alt="" className='w-6' />
    </button>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Services />
      <ExtraServices/>
      <Footer />
      <BackToTop />
    </>
  );
}
