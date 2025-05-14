"use client"

import { motion } from "framer-motion"
import { CircleIcon, TrendingUp, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import RegisterButton from "./RegisterButton"
import type { TrainingPlan } from "./vip-trainings"

interface TrainingPlanCardProps {
  plan: TrainingPlan
  index?: number
}

export default function TrainingPlanCard({ plan, index = 0 }: TrainingPlanCardProps) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.2,
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
      className={cn(
        "relative rounded-xl overflow-hidden shadow-lg flex flex-col h-full",
        plan.popular ? "border-2 border-[#1b3d74]" : "border border-gray-200",
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#1b3d74] text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center">
            <Award className="h-3 w-3 mr-1" />
            POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className={cn("p-6 text-white", plan.color)}>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.title}</h3>
        {plan.subtitle && <p className="text-sm md:text-base opacity-90">{plan.subtitle}</p>}
      </div>

      {/* Features */}
      <div className="flex-1 p-6 bg-white">
        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <motion.li
              key={feature.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-3 mt-1">
                <CircleIcon className="h-5 w-5 text-[#1b3d74]" />
              </div>
              <p className="text-gray-700">{feature.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <RegisterButton className="w-full">
          <span className="flex items-center justify-center">
            REGISTER
            <TrendingUp className="ml-2 h-4 w-4" />
          </span>
        </RegisterButton>
      </div>
    </motion.div>
  )
}
