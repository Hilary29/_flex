"use client";

import React, { useEffect, useRef, useState } from "react";

interface SlideUpContentProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUpContent: React.FC<SlideUpContentProps> = ({ children, delay = 0 }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = contentRef.current; // ✅ Store the current ref
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // ✅ Use the same element in cleanup
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } delay-${delay} ease-out`}
    >
      {children}
    </div>
  );
};

export default SlideUpContent;
