"use client"

import { useEffect, useRef } from "react"
import {Link} from "@/i18n/routing";
import { motion } from "framer-motion"
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
    const t = useTranslations();

  // Ensure video plays properly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="min-h-[560px] bg-black bg-opacity-50 relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="pt-[50px] sm:pt-[50px] md:pt-[100px] lg:pt-[140px] mx-auto max-w-4xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="welcome-style"
            className="mb-4"
          >
            <h1 className="py-4 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold text-white">
              {t('Hero.Title')}
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="through-style"
            className="mb-8"
          >
            <p className="text-[15px] sm:text-[20px] md:text-[22px] lg:text-[25px] text-white">
              {t('Hero.Subtitle')}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8"
          >
            <Link href="/Trainings">
              <button className="text-base sm:text-xl bg-[#000D85] px-6 py-3 rounded-3xl text-white font-medium hover:bg-[#000a6b] transition-colors duration-300 min-w-[200px] sm:min-w-0">
                {t('Hero.Engage_training')}
              </button>
            </Link>
            <Link href="/Trainings">
              <button className="text-base sm:text-xl bg-[#000D85] px-6 py-3 rounded-3xl text-white font-medium hover:bg-[#000a6b] transition-colors duration-300 min-w-[200px] sm:min-w-0">
                {t('Hero.Learn_software')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
