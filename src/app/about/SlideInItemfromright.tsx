"use client";

import React, { useEffect, useRef, useState } from "react";

type SlideInItemFromRightProps = {
  children: React.ReactNode;
};

const SlideInItemFromRight: React.FC<SlideInItemFromRightProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = itemRef.current;  // Store the reference in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the item is in view, trigger the animation
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // If it leaves the viewport, reset the animation
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer when the component unmounts
      }
    };
  }, []); // Empty array ensures this effect runs once when the component mounts

  return (
    <div
      ref={itemRef}
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default SlideInItemFromRight;
