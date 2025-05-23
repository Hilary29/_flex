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
    <div className="fixed top-0 left-0 right-0 py-0.5 lg:py-1 bg-[#000D85] text-white font-semibold text-center z-50">
      <div
        className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${fadeOut ? 'opacity-0' : ''}`}
      >
        <p className="text-xs md:text-sm lg:text-base ">{content[currentContentIndex]}</p>
      </div>
    </div>
  );
};

export default TopHeader;
