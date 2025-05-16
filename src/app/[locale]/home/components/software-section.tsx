"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import SoftwareCard, { type SoftwareType } from "./software-card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl";

const softwareData: SoftwareType[] = [
  {
    id: "word",
    title: "MICROSOFT WORD",
    logo: "/word-logo-8.png",
    alt: "WORD LOGO",
    category: "office",
    description: "Master document creation, formatting, and professional writing with Microsoft Word.",
  },
  {
    id: "mail",
    title: "MAIL",
    logo: "/112-gmail_email_mail-512.png",
    alt: "EMAIL LOGO",
    category: "communication",
    description: "Learn effective email management, organization, and professional communication.",
  },
  {
    id: "sage",
    title: "SAGE",
    logo: "/sage-removebg-preview1.png",
    alt: "SAGE LOGO",
    category: "business",
    description: "Gain expertise in accounting, financial management, and business operations with Sage.",
  },
  {
    id: "wordpress",
    title: "WORDPRESS",
    logo: "/Logo.png",
    alt: "WORDPRESS LOGO",
    category: "web",
    description: "Build professional websites and blogs with the world's most popular content management system.",
  },
  {
    id: "powerpoint",
    title: "POWER POINT",
    logo: "/powerpoint1.png",
    alt: "POWER POINT LOGO",
    category: "office",
    description: "Create engaging presentations and visual content with Microsoft PowerPoint.",
  },
  {
    id: "odoo",
    title: "ODOO",
    logo: "/Logo-1.png",
    alt: "ODOO LOGO",
    category: "business",
    description: "Learn comprehensive business management with this all-in-one enterprise solution.",
  },
  {
    id: "excel",
    title: "EXCEL",
    logo: "/excel-logo-0.png",
    alt: "EXCEL LOGO",
    category: "office",
    description: "Master data analysis, calculations, and visualization with Microsoft Excel.",
  },
  {
    id: "photoshop",
    title: "PHOTOSHOP",
    logo: "/Logo-2.png",
    alt: "PHOTOSHOP LOGO",
    category: "design",
    description: "Create and edit professional images with the industry-standard photo editing software.",
  },
]

export default function SoftwareSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const t = useTranslations();
  
  // Filter software based on search term and active tab
  const filteredSoftware = softwareData.filter((software) => {
    const matchesSearch = software.title.toLowerCase().includes(searchTerm.toLowerCase())
    if (activeTab === "all") return matchesSearch
    return software.category === activeTab && matchesSearch
  })

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#373839] mb-3">
          {t("Trainings.Title")}
        </h2>
        <p className="text-lg sm:text-xl text-[#535557] max-w-3xl mx-auto">
          {t("Trainings.Subtitle")}
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for software..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="office">Office</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {filteredSoftware.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No software found matching your search.</p>
          <button
            className="mt-4 px-4 py-2 bg-[#1b3d74] text-white rounded-md hover:bg-[#152f58] transition-colors"
            onClick={() => {
              setSearchTerm("")
              setActiveTab("all")
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSoftware.map((software) => (
            <SoftwareCard key={software.id} software={software} />
          ))}
        </motion.div>
      )}
    </section>
  )
}
