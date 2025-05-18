"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/effect-fade"; 
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";

const languageImages = [
  {
    src: "/EnglishGallery.png",
    alt: "Learning English",
    caption: "Unlock the beauty of English conversations.",
  },
  {
    src: "/gallery3.jpg",
    alt: "Learning French",
    caption: "Master the art of French communication.",
  },
  {
    src: "/learn-german.png",
    alt: "Learning German",
    caption: "Dive into the world of German literature.",
  },
  {
    src: "/laern.png",
    alt: "Learning Japanese",
    caption: "Explore the elegance of Japanese culture.",
  },
];

const LanguageGallery: React.FC = () => {
  return (
    <section className="relative bg-sky-100 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center relative">
        <div className="w-full md:w-1/3 pr-4 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Discover the Joy of Learning Languages
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Immerse yourself in the world of languages. Each language opens new
            doors to culture, communication, and understanding.
          </p>
        </div>

        {/* Swiper Carousel (Responsive) */}
        <div className="w-full md:w-2/3">
          <Swiper
            modules={[Autoplay, EffectFade]} // Enable autoplay and fade effect
            autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto slide every 2.5 seconds
            loop={true} // Loop slides infinitely
            effect="fade" // Use fade effect for smoother transitions
            speed={1000} // Transition speed
            className="rounded-lg overflow-hidden shadow-md"
          >
            {languageImages.map((image, index) => (
              <SwiperSlide key={index} className="bg-white rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover rounded-lg"
                />
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 font-semibold">{image.caption}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LanguageGallery;