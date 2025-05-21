"use client";

import React from "react";
import Header2 from "../home/components/Header2";
import TopNavbar from "../home/components/TopNavbar";
import Footer from "../home/components/Footer";
import FAQ from "../home/components/FAQ";
import Testimonials from "../home/components/Testimonials";
import Hero from "../home/components/Hero";
import FeatureShowcase from "../home/components/FeatureShowcase";
import LanguageGallery from "../home/components/LanguageGallery";
import AboutPage from "../home/components/AboutPage";
import ImmigrationPage from "../home/components/ImmigrationPage";
import StatisticsPage from "../home/components/StatisticsPage";
/* import TestimonialPage from '../home/components/TestimonialPage' */

const Page = () => {
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Header2 />
      <div className="mt-0">
        <Hero />
      </div>
      <FeatureShowcase />
      <LanguageGallery />
      <AboutPage />
      <ImmigrationPage />
      <Testimonials />
      <StatisticsPage/>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
