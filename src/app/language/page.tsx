"use client"

import React from 'react'
import Header2 from '../home/components/Header2'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import FAQ from '../home/components/FAQ'
import Testimonials from '../home/components/Testimonials'
import Tech_Products from '../home/components/Tech_Products'
import VIP_trainings from '../home/components/VIP_trainings'
import Hero from '../home/components/Hero'


const Page = () => {
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <Header2 />
      <div className='mt-0'>
        <Hero />
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
