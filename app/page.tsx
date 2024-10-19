import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner/>
    <About/>
    <Footer/>
    </>
  );
}
