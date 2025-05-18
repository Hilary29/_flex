"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"

const ImmigrationPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <section className="relative bg-white py-24 px-4 md:px-8 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/immigrate.jpg"
            alt="Immigration Services"
            fill
            objectFit="cover"
            className="object-center brightness-50"
          />
        </div>
        <div className="relative container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Are Here to Assist You with Your Immigration Needs
          </h1>
          <p className="text-lg md:text-xl text-white max-w-lg mx-auto mb-8">
            Thanks to our numerous partners, we can provide you with assistance
            for immigration into any country of your choice be it in Africa or
            any other part of the globe
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md">
            <Link href="/ImmigrationPage">
            Learn More
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;