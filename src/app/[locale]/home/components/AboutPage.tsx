"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null); // Reference for the text container
  const [isTextVisible, setIsTextVisible] = useState(false); // Track visibility of the text

  // Detect when the text section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true); // Trigger animation when the section is in view
        } else {
          setIsTextVisible(false); // Reset animation when the section leaves the viewport
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-[500px] mb-8 md:mb-0 md:pr-8">
          <Image
            src="/aboutUs.png"
            alt="About Us"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div
          ref={textRef} 
          className={`w-full md:w-1/2 ${
            isTextVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          } transition-transform duration-600 ease-out`}
        >
          <h1 className="text-3xl md:text-[65px] font-bold text-blue-900 mb-8">
            About Us
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Welcome to our language learning platform! We are dedicated to helping
            individuals unlock the power of communication through immersive and
            interactive language courses.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our mission is to bridge cultural gaps by empowering learners with the
            skills they need to communicate confidently in multiple languages.
          </p>
          <p className="text-gray-700 text-lg">
            With a team of experienced instructors and cutting-edge technology, we
            provide personalized learning experiences tailored to your needs.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md">
            <Link href="/AboutPage">
            Learn More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;