"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import TrainingCard from "./training-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {getTrainingsData} from "@/lib/trainings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


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

      <div className="hidden flex-col sm:flex-row gap-4 mb-8">
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
      <div className="flex justify-center mt-8">
        <Link href="/Trainings" className="bg-[#000D85] hover:bg-[#010a62] px-6 py-3 rounded-full">
          <span className="flex items-center text-base md:text-xl text-white font-semibold justify-center gap-1 ">
            {t("Header.See_more")} <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
        </div>
    </section>
  );
}
