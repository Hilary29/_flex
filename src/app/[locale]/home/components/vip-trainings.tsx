"use client"


import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import TrainingPlanCard from "./training-plan-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Define training plan types
export type TrainingFeature = {
  id: string
  text: string
}

export type TrainingPlan = {
  id: string
  title: string
  subtitle?: string
  features: TrainingFeature[]
  color: string
  popular?: boolean
}

// Training plans data
const trainingPlans: TrainingPlan[] = [
  {
    id: "vip",
    title: "VIP TRAININGS",
    features: [
      { id: "vip-1", text: "Do you want to book a teacher?" },
      { id: "vip-2", text: "Do you want a training in a super fast mode?" },
      { id: "vip-3", text: "Do you want any other training?" },
      { id: "vip-4", text: "Any other worry?" },
    ],
    color: "bg-gradient-to-br from-[#1b3d74] to-[#2a5cb3]",
  },
  {
    id: "special",
    title: "SPECIAL TRAININGS",
    subtitle: "We offer top quality tech related trainings",
    features: [
      { id: "special-1", text: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING" },
      { id: "special-2", text: "CYBERSECURITY AND CRYPTOSYSTEMS" },
      { id: "special-3", text: "ALGORITHMS AND DATA STRUCTURE" },
      { id: "special-4", text: "CLOUD COMPUTING" },
    ],
    color: "bg-gradient-to-br from-[#373839] to-[#535557]",
    popular: true,
  },
]

export default function VipTrainings() {


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#373839] mb-3">
          We offer trainings for everyone
        </h2>
        <p className="text-lg sm:text-xl text-[#535557] max-w-3xl mx-auto">Choose the plan that is right for you</p>
      </motion.div>

      {/* Mobile view: Tabs for switching between plans */}
      <div className="block md:hidden mb-8">
        <Tabs defaultValue="vip" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="vip">VIP</TabsTrigger>
            <TabsTrigger value="special">SPECIAL</TabsTrigger>
          </TabsList>
          {trainingPlans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id} className="mt-6">
              <TrainingPlanCard plan={plan} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Desktop view: Side-by-side cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12"
      >
        {trainingPlans.map((plan, index) => (
          <TrainingPlanCard key={plan.id} plan={plan} index={index} />
        ))}
      </motion.div>

      {/* Additional information section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Why Choose Our Training Programs?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: "Expert Instructors" },
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: "Flexible Schedule" },
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: "Practical Approach" },
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: "Career Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
            >
              {item.icon}
              <p className="mt-2 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
