"use client"

import React from 'react'
import Header2 from '../home/components/Header2'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import FAQ from '../home/components/FAQ'
import Testimonials from '../home/components/Testimonials'
import Tech_Products from '../home/components/Tech_Products'
import VIP_trainings from '../home/components/VIP_trainings'
import HeroSection from '../home/components/hero_section'


const Page = () => {
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Header2 />
      <div className='mt-28'>
        <HeroSection />
      </div>
      <VIP_trainings />
      <Tech_Products />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Page
