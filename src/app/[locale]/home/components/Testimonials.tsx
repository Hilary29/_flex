"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import SlideUpContent from "./SlideUpContent";
import { useTranslations } from "next-intl";

const getTestimonials = (t: ReturnType<typeof useTranslations>) => [
  {
    content: t("Testimonials.Testimonial_1"),
    author: "EUGENIE",
  },
  {
    content: t("Testimonials.Testimonial_2"),
    author: "MERVEILLE",
  },
];

// Reusable testimonial card component
const TestimonialCard = ({
  content,
  author,
}: {
  content: string;
  author: string;
}) => {
  return (
    <div className="bg-gradient-to-br from-[#1b3d74] to-[#2a5cb3] rounded-xl shadow-lg text-white p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      <div className="absolute top-4 left-4 opacity-20">
        <Quote size={32} />
      </div>
      <div className="pt-6">
        <p className="text-lg font-light leading-relaxed mb-8">{content}</p>
        <div className="absolute bottom-6 right-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            {author.charAt(0)}
          </div>
          <p className="font-medium tracking-wide">{author}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const testimonials = getTestimonials(t);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#1b3d74] mb-4">{t("Testimonials.Title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1b3d74] to-[#2a5cb3] mx-auto"></div>
      </div>

      {/* Mobile view (single column) */}
      <div className="md:hidden space-y-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            content={testimonial.content}
            author={testimonial.author}
          />
        ))}
      </div>

      {/* Tablet view (wrapped in SlideUpContent) */}
      <div className="hidden md:block lg:hidden">
        <SlideUpContent>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>
        </SlideUpContent>
      </div>

      {/* Desktop view (two columns) */}
      <div className="hidden lg:block">
        <SlideUpContent>
          <div className="grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>
        </SlideUpContent>
      </div>
    </section>
  );
};

export default Testimonials;
