"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import TrainingCard from "./training-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

type TrainingType = {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
};

const getTrainingsData = (
  t: ReturnType<typeof useTranslations>
): TrainingType[] => [
  {
    id: "graphic-design",
    title: t("Trainings.GRAPHIC_DESIGN"),
    image: "/infographie.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Graphic design is in high demand across various industries, offering career opportunities in fields like marketing, advertising, web development, and branding.",
  },
  {
    id: "web-development",
    title: t("Trainings.WEB_DEVELOPMENT"),
    image: "/developpement_web.png",
    alt: "Codes on a PC",
    description:
      "Learning web development opens up endless opportunities to create dynamic, interactive websites and applications, empowering you to bring your ideas to life and shape the digital world.",
  },
  {
    id: "office-secretary",
    title: t("Trainings.OFFICE_SECRETARY"),
    image: "/secretaratbureatque.png",
    alt: "Woman sitting presenting something",
    description:
      "Office secretary skills can provide you with essential organizational and communication abilities, opening doors to a wide range of administrative roles and making you an invaluable asset in any professional setting.",
  },
  {
    id: "executive-secretary",
    title: t("Trainings.EXECUTIVE_SECRETARY"),
    image: "/secretaratdedrecrton.png",
    alt: "Woman sitting presenting something",
    description:
      "Becoming an executive secretary will equip you with valuable organizational and communication skills, opening doors to exciting career opportunities and the chance to make a real impact in any organization.",
  },
  {
    id: "accounting-secretary",
    title: t("Trainings.ACCOUNTING_SECRETARY"),
    image: "/secretaratcomptable.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Mastering accounting secretary skills will empower you with essential financial knowledge, making you a key asset to any organization and opening up a range of career opportunities in the financial and administrative fields.",
  },
  {
    id: "digital-marketing",
    title: t("Trainings.DIGITAL_MARKETING"),
    image: "/maretngdgtal.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Learning digital marketing empowers you to connect with people, drive results, and stay at the forefront of industry trends in an ever-evolving digital landscape.",
  },
  {
    id: "logistics-transport",
    title: t("Trainings.LOGISTICS_AND_TRANSPORT"),
    image: "/logstcsettransport.png",
    alt: "People beside the port",
    description:
      "Step into the dynamic world of logistics and transport, where you'll navigate supply chains, optimize routes, and master last-mile delivery to keep goods moving efficiently across the globe.",
  },
  {
    id: "custom-transit",
    title: t("Trainings.CUSTOM_AND_TRANSIT"),
    image: "/douanettransit.png",
    alt: "Beside the port",
    description:
      "By learning logistics and transport, you gain the expertise to manage the flow of goods and services efficiently across the globe, contributing to smoother operations, cost savings, and better customer experiences.",
  },
  {
    id: "it-maintenance",
    title: t("Trainings.IT_MAINTENANCE"),
    image: "/maintenance.png",
    alt: "Man repairing a PC",
    description:
      "Mastering IT maintenance empowers you to keep systems running efficiently, solve technical issues quickly, and play a vital role in supporting the technology that drives businesses and everyday life.",
  },
  {
    id: "community-management",
    title: t("Trainings.COMMUNITY_MANAGEMENT"),
    image: "/communtymanagement.png",
    alt: "People discussing on a project",
    description:
      "Community management gives you the opportunity to create and nurture vibrant, engaged spaces where people can connect, share ideas, and work together to build something meaningful.",
  },
  {
    id: "video-editing",
    title: t("Trainings.VIDEO_EDITING"),
    image: "/montagevdeo.png",
    alt: "Camera image",
    description:
      "Video editing allows you to transform raw footage into captivating stories, giving you the power to engage audiences and communicate ideas in a dynamic and creative way.",
  },
  {
    id: "telecommunication",
    title: t("Trainings.TELECOMMUNICATION"),
    image: "/telecpmmuncaton.png",
    alt: "Signals",
    description:
      "Step into the world of telecommunication, where concepts like bandwidth, 5G, and IoT are transforming industries and creating endless opportunities for those ready to innovate!",
  },
];

export default function Trainings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const t = useTranslations();
  const trainingsData = getTrainingsData(t);

  // Filter trainings based on search term and category
  const filteredTrainings = trainingsData.filter((training) => {
    const matchesSearch =
      training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      training.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false;

    if (category === "all") return matchesSearch;

    // Example categories - in a real app, you'd have proper categorization
    const techCourses = [
      "WEB DEVELOPMENT",
      "IT MAINTENANCE",
      "TELECOMMUNICATION",
    ];
    const businessCourses = [
      "DIGITAL MARKETING",
      "ACCOUNTING SECRETARY",
      "EXECUTIVE SECRETARY",
      "OFFICE SECRETARY",
    ];
    const creativeCourses = [
      "GRAPHIC DESIGN",
      "VIDEO EDITING",
      "COMMUNITY MANAGEMENT",
    ];
    const logisticsCourses = ["LOGISTICS AND TRANSPORT", "CUSTOM AND TRANSIT"];

    if (category === "tech" && techCourses.includes(training.title))
      return matchesSearch;
    if (category === "business" && businessCourses.includes(training.title))
      return matchesSearch;
    if (category === "creative" && creativeCourses.includes(training.title))
      return matchesSearch;
    if (category === "logistics" && logisticsCourses.includes(training.title))
      return matchesSearch;

    return false;
  });

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

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for a training..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("Trainings.All_Categories")}</SelectItem>
              <SelectItem value="tech">{t("Trainings.Technology")}</SelectItem>
              <SelectItem value="business">{t("Trainings.Business")}</SelectItem>
              <SelectItem value="creative">{t("Trainings.Creative")}</SelectItem>
              <SelectItem value="logistics">{t("Trainings.Logistics")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredTrainings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No trainings found matching your criteria.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setCategory("all");
            }}
          >
            {t("Trainings.Reset_filters")}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTrainings.map((training, index) => (
            <TrainingCard
              key={training.id}
              training={training}
              index={index}
              showDescription={true}
            />
          ))}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center pt-12">
        <Button className="bg-[#000D85] hover:bg-[#010a62] px-6 py-4 rounded-full">
          <span className="flex items-center text-base md:text-xl justify-center gap-1 ">
            {t("Header.Register")} <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </section>
  );
}
