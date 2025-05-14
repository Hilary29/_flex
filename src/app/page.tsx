"use client";
import { useEffect } from "react";
import AOS from "aos";

// import type { NextPage } from "next";
import TopNavbar from "./home/components/TopNavbar";
/* import Navbar from "./home/components/Navbar"; */
import HeroSection from "./home/components/hero_section";
import Test from "./home/components/Test";
import Software from "./home/components/Software";
import Trainings from "./home/components/Trainings";
import VIP_trainings from "./home/components/VIP_trainings";
import Tech_Products from "./home/components/Tech_Products";
import Testimonials from "./home/components/Testimonials";
import FAQ from "./home/components/FAQ";
import Footer from "./home/components/Footer";
import Header from "./home/components/Header";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Header />
      {/*       <div className="mt-24">
        <Navbar />
      </div> */}
      <div className="pt-28 ">
        <HeroSection />
      </div>
      <Test />
      <Trainings />
      <Software />
      <VIP_trainings />
      <Tech_Products />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
