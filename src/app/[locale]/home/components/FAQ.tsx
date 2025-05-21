"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const getFaqsData = (t: ReturnType<typeof useTranslations>): FAQ[] => [
  {
    id: "faq-1",
    question: t("FAQ.Question_1"),
    answer: t("FAQ.Answer_1"),
  },
  {
    id: "faq-2",
    question: t("FAQ.Question_2"),
    answer: t("FAQ.Answer_2"),
  },
  {
    id: "faq-3",
    question: t("FAQ.Question_3"),
    answer: t("FAQ.Answer_3"),
  },
  {
    id: "faq-4",
    question: t("FAQ.Question_4"),
    answer: t("FAQ.Answer_4"),
  },
  {
    id: "faq-5",
    question: t("FAQ.Question_5"),
    answer: t("FAQ.Answer_5"),
  },
  {
    id: "faq-6",
    question: t("FAQ.Question_6"),
    answer: t("FAQ.Answer_6"),
  },
  {
    id: "faq-7",
    question: t("FAQ.Question_7"),
    answer: t("FAQ.Answer_7"),
  },
  {
    id: "faq-8",
    question: t("FAQ.Question_8"),
    answer: t("FAQ.Answer_8"),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const t = useTranslations();
  const faqs = getFaqsData(t);
  // Toggle FAQ answer visibility
  const toggleAnswer = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#373839] mb-4">
            {t("FAQ.Title")}
          </h2>
          <p className="text-lg text-[#535557] max-w-3xl mx-auto">
            {t("FAQ.Subtitle")}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  "bg-[#e5f7ff] rounded-lg overflow-hidden shadow-sm transition-all duration-200",
                  activeIndex === faq.id ? "shadow-md" : ""
                )}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => toggleAnswer(faq.id)}
                  aria-expanded={activeIndex === faq.id}
                  aria-controls={`answer-${faq.id}`}
                >
                  <span className="font-bold text-lg text-[#202224] pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    {activeIndex === faq.id ? (
                      <Minus className="h-5 w-5 text-[#1b3d74]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#1b3d74]" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === faq.id && (
                    <motion.div
                      id={`answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-blue-200">
                        <p className="text-[#535557]">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm border border-blue-100"
        >
          <h3 className="text-xl font-semibold mb-2">{t("FAQ.Still_have_questions")}</h3>
          <p className="text-gray-600 mb-6">
            {t("FAQ.description")}
          </p>
          <Button className="bg-[#1b3d74] hover:bg-[#152f58]">
            {t("FAQ.Contact_us")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
