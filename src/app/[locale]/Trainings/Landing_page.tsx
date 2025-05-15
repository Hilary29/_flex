"use client"; 
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageGallery = () => {
  const images = [
    {
      src: "/train.PNG", 
      alt: "photo4", 
      header: "LEARN ANY TRAINING WITH US", 
      text: "Empower your future by gaining the knowledge and skills you need – join our training and transform your potential into success."
    },
    {
      src: "/word-removebg-preview.PNG", 
      alt: "photo5", 
      header: "SPECIALISE IN ANY SOFTWARE", 
      text: "Master this software and empower yourself with the skills to work smarter, faster, and more efficiently."
    },
    {
      src: "/security.PNG", 
      alt: "photo6", 
      header: "CHOOSE A SPECIAL TRAINING", 
      text: "Mastering cybersecurity is not just a skill—it's a responsibility; join the fight to safeguard the future of our digital world!."
    },
  ];

  return (
    <div className="bg-white">
      <div className="largeTablet:hidden block">
      <section className="gallery py-9 bg h-100 overflow-x-hidden w-[1200px] text-center ml-8 rounded rounded-3xl mt-[-70px] mb-[-90px]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}  // Space between each slide
          className="h-100 w-full float-left"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-between h-[90vh] w-[98vw] md:h-700 gap-6 mt-[-60px]"> {/* Reduced margin-top of slide */}
                {/* Text on the Left with reduced top margin */}
                <div className="w-1/2 p-4 text-white font-bold text-xl rounded mt-4">
                  <h2 className="text-2xl text-[#202224] font-semibold mb-4">{image.header}</h2>
                  <p className="text-base text-[#373839]">{image.text}</p>
                </div>
                {/* Image on the Right with reduced top margin */}
                <div className="relative w-[40%] h-[30%] mt-4"> {/* Reduced margin-top of image container */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="block rounded"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      </div>
      <div className="hidden largeTablet:block">
        <section className="gallery py-9 bg h-100 overflow-x-hidden w-full text-center ml-8 rounded rounded-3xl">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}  // Space between each slide
            slidesPerView={1}  // Only one slide visible at a time
            className="h-[90vh] w-full" // Full width and 90% of the viewport height
          >
            {images.map((image, index) => {
              // Split the header into words and extract the first two words
              const words = image.header.split(' ');
              const firstWord = words[0];
              const secondWord = words[1];
              const remainingText = words.slice(2).join(' ');
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-between h-full w-full gap-6 mt-4 overflow-hidden">
                    {/* Text on the Left */}
                    <div className="w-1/2 p-4 text-white font-bold text-xl rounded mt-[-50px]">
                      <h2 className="text-2xl font-semibold text-[#202224]">
                        {/* Render the first two words with different colors */}
                        <span className="text-[#1B3D74]">{firstWord}</span>
                        <span className="text-[#1B3D74]"> {secondWord}</span>
                        {/* Render the remaining text */}
                        {remainingText && ` ${remainingText}`}
                      </h2>
                      <p className="text-base text-[#373839] mt-4">{image.text}</p>
                    </div>
        
                    {/* Image on the Right */}
                    <div className="relative w-1/2 h-full mt-4 overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="block rounded"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default ImageGallery;
