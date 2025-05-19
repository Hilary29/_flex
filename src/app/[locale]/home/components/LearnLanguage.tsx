"use client"
import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"

const LearnLanguage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-12 sm:py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto px-2"
          >
            At FlexAcademy, we offer comprehensive language learning and exam preparation services to help you achieve
            your goals.
          </motion.p>
        </div>
      </header>

      <section
        id="english-learning"
        className="py-10 sm:py-16 bg-white rounded-lg shadow-md mx-4 sm:mx-6 md:mx-8 lg:mx-auto my-8 max-w-7xl"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-8">
            English Language Courses
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-md sm:max-w-lg mx-auto mb-8 sm:mb-12">
            Master the English language with our comprehensive courses tailored to your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* General English Learning */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">General English Learning</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Improve your English skills for everyday communication, travel, and personal growth. Our courses cover
                grammar, vocabulary, listening, speaking, reading, and writing.
              </p>
              <div>
                <Link
                  href="https://wa.link/2jitkl"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md inline-block transition-all duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Business English Learning */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Business English Learning</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Enhance your professional English skills with courses designed for the business world. Learn
                industry-specific vocabulary, negotiation techniques, and effective communication for global workplaces.
              </p>
              <div>
                <Link
                  href="https://wa.link/60sp7l"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md inline-block transition-all duration-200"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LearnLanguage
