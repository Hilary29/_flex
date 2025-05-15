"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type TrainingType = {
  id: string
  title: string
  image: string
  alt: string
  description?: string
}

interface TrainingCardProps {
  training: TrainingType
  index: number
  showDescription?: boolean
  className?: string
}

export default function TrainingCard({ training, index, showDescription = false, className }: TrainingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn("group h-full flex flex-col", className)}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image
          src={training.image || "/placeholder.svg"}
          alt={training.alt}
          width={450}
          height={250}
          className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />

        {showDescription && training.description && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm md:text-base">{training.description}</p>
          </div>
        )}
      </div>

      <div className="flex w-full gap-2 mt-auto">
        <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-[#1b3d74]/5 focus:outline-none focus:ring-2 focus:ring-[#1b3d74]/50">
          {training.title}
        </button>

      </div>
    </motion.div>
  )
}
