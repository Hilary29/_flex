"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Info, X } from "lucide-react"
import RegisterButton from "./RegisterButton"
import { useTranslations } from "next-intl";

export type SoftwareType = {
  id: string
  title: string
  logo: string
  alt: string
  category: string
  description?: string
}

interface SoftwareCardProps {
  software: SoftwareType
}

export default function SoftwareCard({ software }: SoftwareCardProps) {
  const [showInfo, setShowInfo] = useState(false)
  const t = useTranslations();

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative border-2 border-[#1b3d74] rounded-lg overflow-hidden h-full flex flex-col"
    >
      {/* Info Button */}
      {software.description && (
        <button
          onClick={() => setShowInfo(true)}
          className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full hover:bg-white transition-colors"
          aria-label={`Show information about ${software.title}`}
        >
          <Info className="h-5 w-5 text-[#1b3d74]" />
        </button>
      )}

      {/* Logo */}
      <div className="flex-1 flex items-center justify-center p-6 min-h-[180px]">
        <Image
          src={software.logo || "/placeholder.svg"}
          alt={software.alt}
          width={90}
          height={90}
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Buttons */}
      <div className="flex w-full border-t-2 border-[#1b3d74]">
        <button className="text-[#1b3d74] bg-white w-1/2 py-3 font-medium tracking-tight">{software.title}</button>
        <RegisterButton className="bg-[#000D85] hover:bg-[#010a62] w-1/2 rounded-none">{t("Header.Register")}</RegisterButton>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/95 flex flex-col p-4 z-20"
        >
          <button onClick={() => setShowInfo(false)} className="self-end p-1" aria-label="Close information">
            <X className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <Image
              src={software.logo || "/placeholder.svg"}
              alt={software.alt}
              width={60}
              height={60}
              className="object-contain"
            />
            <h3 className="text-lg font-bold text-[#1b3d74]">{software.title}</h3>
            <p className="text-gray-700">{software.description}</p>
            <RegisterButton className="mt-auto">REGISTER NOW</RegisterButton>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
