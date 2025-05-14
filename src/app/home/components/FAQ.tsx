"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FAQ = {
  id: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is FLEX ACADEMY?",
    answer:
      "Flex Academy is a leading training center focused on empowering individuals with the skills needed to succeed in today's fast-paced digital world. We offer hands-on courses in modern technologies. Flex Academy is the perfect place to unlock your potential and achieve your goals.",
  },
  {
    id: "faq-2",
    question: "What is the difference between long term and short term programs?",
    answer:
      "A short term program is a program of less than 6 months where at the end an attestation is delivered to you, while a long term program is a one year program at the end of which you write the DQP exam and an attestation is delivered to you.",
  },
  {
    id: "faq-3",
    question: "Can we have a discount?",
    answer: "We most of the time do promos and offer discounts in some courses. CONTACT US TO KNOW MORE.",
  },
  {
    id: "faq-4",
    question: "Which certificate do you deliver?",
    answer: "We offer you a MINEFOP-APPROVED CERTIFICATE.",
  },
  {
    id: "faq-5",
    question: "How can we have a DQP?",
    answer:
      "As school resumes, you come and deposit your files for a long term training (a training of your choice) and start your school.",
  },
  {
    id: "faq-6",
    question: "What are training sessions?",
    answer:
      "We have 2 training sessions (MORNING AND EVENING) this permits everyone even those working to get trained with us.",
  },
  {
    id: "faq-7",
    question: "Do you offer online courses?",
    answer:
      "Yes, we offer flexible online learning options for many of our courses. Our virtual classroom provides the same quality education with the convenience of learning from anywhere.",
  },
  {
    id: "faq-8",
    question: "How do I enroll in a course?",
    answer:
      "Enrollment is easy! You can register online through our website, visit our campus in person, or contact our admissions team by phone. We'll guide you through the process and help you select the right program for your goals.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  // Toggle FAQ answer visibility
  const toggleAnswer = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id)
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="text-center mb-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#373839] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#535557] max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers! Check out the FAQs section to find the most common questions about FLEX
            ACADEMY.
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
                  "bg-[#A6DBF4] rounded-lg overflow-hidden shadow-sm transition-all duration-200",
                  activeIndex === faq.id ? "shadow-md" : "",
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
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            If you couldn&apos;t find the answer to your question, feel free to contact our support team.
          </p>
          <Button className="bg-[#1b3d74] hover:bg-[#152f58]">Contact Us</Button>
        </motion.div>
      </div>
    </section>
  )
}
