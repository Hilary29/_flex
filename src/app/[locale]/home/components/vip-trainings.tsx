"use client"


import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import TrainingPlanCard from "./training-plan-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useTranslations } from "next-intl";

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

const getTrainingPlansData = (
  t: ReturnType<typeof useTranslations>): TrainingPlan[] => [
  {
    id: "vip",
    title: t("Vip.VIP_TRAININGS"),
    subtitle: t("Vip.subtitle_1"),
    features: [
      { id: "vip-1", text: t("Vip.vip_1") },
      { id: "vip-2", text: t("Vip.vip_2") },
      { id: "vip-3", text: t("Vip.vip_3") },
      { id: "vip-4", text: t("Vip.vip_4") },
    ],
    color: "bg-gradient-to-br from-[#1b3d74] to-[#2a5cb3]",
  },
  {
    id: "special",
    title: t("Vip.SPECIAL_TRAININGS"),
    subtitle: t("Vip.subtitle_2"),
    features: [
      { id: "special-1", text: t("Vip.special_1") },
      { id: "special-2", text: t("Vip.special_2") },
      { id: "special-3", text: t("Vip.special_3") },
      { id: "special-4", text: t("Vip.special_4") },
    ],
    color: "bg-gradient-to-br from-[#373839] to-[#535557]",
    popular: true,
  },
]

export default function VipTrainings() {
  const t = useTranslations();
  const trainingPlans = getTrainingPlansData(t)


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
          {t("Vip.Title")}
        </h2>
        <p className="text-lg sm:text-xl text-[#535557] max-w-3xl mx-auto">
          {t("Vip.Subtitle")}</p>
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
        <h3 className="text-xl font-semibold mb-4">{t("Why_Choose_us.subtitle")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: t("Why_Choose_us.Expert_Instructors") },
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: t("Why_Choose_us.Flexible_Schedule")},
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: t("Why_Choose_us.Practical_Approach") },
            { icon: <CheckCircle2 className="h-8 w-8 text-green-500" />, text: t("Why_Choose_us.Career_Support") },
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
