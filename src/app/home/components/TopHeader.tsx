import React, { useEffect, useState } from 'react';

type TopHeaderProps = {
  content: string[]; // List of content to be displayed
};

const TopHeader: React.FC<TopHeaderProps> = ({ content }) => {
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const maxContent = content.length;
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        // After fade-out, change content
        setCurrentContentIndex((prevIndex) => (prevIndex + 1) % maxContent);
        setFadeOut(false);
        setFadeIn(true);
      }, 500); // Wait for fade-out to complete before changing content

    }, 6000); // Change content every 6 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [content]);

  return (
    <div className="fixed top-0 left-0 right-0 tablet:py-0.5  largeTablet:py-2 bg-[#1B3D74] text-white text-center z-10">
      <div
        className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${fadeOut ? 'opacity-0' : ''}`}
      >
        <p className=":tablet:text-base phone:text-sm largeTablet:lg">{content[currentContentIndex]}</p>
      </div>
    </div>
  );
};

export default TopHeader;
