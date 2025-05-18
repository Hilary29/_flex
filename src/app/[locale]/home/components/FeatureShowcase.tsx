"use client";
import Image from "next/image";
import Link from "next/link";

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      title: "Learn a Language",
      description: "Master a new language with our interactive courses.",
      image: "/learn-language.jpg",
      link: "../../Services/LearnLanguage",
    },
    {
      title: "Prepare for an Exam",
      description: "Get ready for important exams with tailored preparation plans.",
      image: "/prepare-exam.jpg",
      link: "../../Services/PrepareExam",
    },
    {
      title: "Take a Level Test",
      description: "Assess your current language proficiency with our level test.",
      image: "/level-test.jpg",
      link: "",
    },
    {
      title: "See Our Other Trainings",
      description: "Explore additional training programs to enhance your skills.",
      image: "/trainings.jpg",
      link: "",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900 animate-fade-in-up">
          What We Offer
        </h2>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
            <Link href={feature.link}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 animate-fade-in-up">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm animate-fade-in-up delay-200">
                  {feature.description}
                </p>
              </div>
            </Link>
            </div>
          ))}
        </div>

        {/* Exam Registration Assistance */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-center mb-4 text-blue-900">
            Need Help with Exam Registration?
          </h3>
          <p className="text-gray-700 max-w-lg mx-auto">
            We provide assistance with exam registration for all major language proficiency tests. Contact us for more details!
          </p>
          <button className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;