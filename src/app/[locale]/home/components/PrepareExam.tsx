"use client"
import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"

interface Exam {
  name: string
  description: string
  useCase: string
  link: string
}

const PrepareExam = () => {
  const englishExams: Exam[] = [
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
      useCase: "Used for university admissions in English-speaking countries, particularly the USA.",
      link: "https://wa.link/kzqk9w",
    },
    {
      name: "IETLS",
      description: "International English Language Testing System",
      useCase: "Required for immigration, work, and study in countries like the UK, Canada, and Australia.",
      link: "https://wa.link/84ijv5",
    },
    {
      name: "TOEIC",
      description: "Test of English for International Communication",
      useCase: "Designed for workplace communication, often required by international companies.",
      link: "https://wa.link/pn9369",
    },
  ]

  const frenchExams: Exam[] = [
    {
      name: "TCF",
      description: "Test de Connaissance du Français",
      useCase: "Required for French citizenship applications and university admissions in France.",
      link: "https://wa.link/jksc6l",
    },
    {
      name: "TEF",
      description: "Test d'Évaluation de Français",
      useCase: "Used for immigration to Canada and admission to French-speaking universities.",
      link: "https://wa.link/kp1isd",
    },
    {
      name: "DELF",
      description: "Diplôme d'Études en Langue Française",
      useCase:
        "A French language proficiency certification for non-native speakers. It assesses levels A1 to B2 of the Common European Framework of Reference for Languages (CEFR), often used for educational, professional, and immigration purposes.",
      link: "https://wa.link/ae8ryp",
    },
    {
      name: "DALF",
      description: "Diplôme Approfondi de Langue Française",
      useCase:
        "An advanced French language certification, covering levels C1 and C2 of the CEFR. It is ideal for individuals seeking to demonstrate high proficiency in French for academic, professional, or cultural purposes.",
      link: "https://wa.link/2978pe",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            At FlexAcademy, we offer comprehensive language learning and exam preparation services to help you achieve
            your goals.
          </motion.p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          id="english-exams"
          className="py-16 bg-white rounded-xl shadow-lg mb-12"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              English Language Exams
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
              Prepare for important English proficiency exams with our tailored preparation plans.
            </motion.p>

            {/* Exam Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {englishExams.map((exam, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{exam.name}</h3>
                  <p className="text-gray-700 text-center mb-4">{exam.description}</p>
                  <p className="text-gray-600 text-sm text-center mb-6 flex-grow">
                    <strong>Purpose:</strong> {exam.useCase}
                  </p>
                  <Link
                    href={exam.link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:translate-y-[-2px] transition-all duration-300 inline-block"
                  >
                    Start Preparation
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          id="french-exams"
          className="py-16 bg-white rounded-xl shadow-lg"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              French Language Exams
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
              Get ready for French proficiency exams with our specialized preparation programs.
            </motion.p>

            {/* Exam Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {frenchExams.map((exam, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{exam.name}</h3>
                  <p className="text-gray-700 text-center mb-4">{exam.description}</p>
                  <p className="text-gray-600 text-sm text-center mb-6 flex-grow">
                    <strong>Purpose:</strong> {exam.useCase}
                  </p>
                  <Link
                    href={exam.link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transform hover:translate-y-[-2px] transition-all duration-300 inline-block"
                  >
                    Start Preparation
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default PrepareExam
