"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Language Learner",
    image: "/Jim.jpg",
    content:
      "Learning a new language with this platform was an incredible experience. The courses were engaging and interactive.",
  },
  {
    name: "Jane Smith",
    role: "Professional Translator",
    image: "/gallery1.jpg",
    content:
      "I highly recommend this platform for anyone looking to improve their language skills. The instructors are knowledgeable and supportive.",
  },
  {
    name: "Alex Johnson",
    role: "International Student",
    image: "/Thiago.jpg",
    content:
      "This platform helped me prepare for my exams and adapt to a new culture. I couldn't have done it without their guidance.",
  },
];

const TestimonialPage: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
          What Our Students Say
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-lg mx-auto">
          Discover real stories from our satisfied learners who have achieved
          success with our language learning platform.
        </p>

        <Swiper
          modules={[Autoplay, EffectFade]} // Enable autoplay and fade effect
          autoplay={{ delay: 6000, disableOnInteraction: false }} // Auto slide every 6 seconds
          loop={true} // Loop slides infinitely
          className="rounded-lg overflow-hidden shadow-md"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-700 text-base mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} Profile`}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialPage;