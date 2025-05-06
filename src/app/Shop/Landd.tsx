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
      src: "/branded-removebg-preview.PNG", 
      alt: "photo4", 
      header: "BRANDED", 
      text: "LAPTOPS"
    },
    {
      src: "/usb.PNG", 
      alt: "photo5", 
      header: " USB", 
      text: "KEYS "
    },
    {
      src: "/mse-removebg-preview.PNG", 
      alt: "photo6", 
      header: "WIREDLESS", 
      text: "MOUSE"
    },
  ];

  return (
    <div className="bg-white">

      <div className="block tablet:hidden">
      <section className="gallery py-9 bg h-100 overflow-x-hidden w-full text-center ml-8 rounded rounded-3xl">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={10}  // Space between each slide
            slidesPerView={1}  // Only one slide visible at a time
            className="h-[40vh] w-full" // Full width and 90% of the viewport height
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-between h-full w-full gap-6  overflow-hidden">
                  {/* Text on the Left */}
                  <div className="w-1/2 p-4 text-white font-bold text-xl rounded mt-[-100px]">
                    <h2 className="text-4xl text-[#202224] font-bold mb-20 mr-14">{image.header}</h2>
                    <p className="addStrokesmall text-base ml-20">{image.text}</p>
                  </div>
        
                  {/* Image on the Right */}

                  {/* mr-60 mb-40 */}
                  <div className="relative w-[20%] h-[30%] overflow-hidden mr-15 mb-40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="intrinsic" // Let the image resize based on intrinsic size
                      width={100} // Adjust the width to 250px (or less)
                      height={150} // Adjust the height to 250px (or less)
                      objectFit="contain" // Maintain aspect ratio and ensure the image doesn't stretch
                      className="block rounded"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <div className="hidden tablet:block">
        <section className="gallery py-9 bg h-100 overflow-x-hidden w-full text-center ml-8 rounded rounded-3xl">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}  // Space between each slide
            slidesPerView={1}  // Only one slide visible at a time
            className="h-[90vh] w-full" // Full width and 90% of the viewport height
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-between h-full w-full gap-6 mt-[-60px] overflow-hidden">
                  {/* Text on the Left */}
                  <div className="w-1/2 p-4 text-white font-bold text-xl rounded mt-[-100px]">
                    <h2 className="text-4xl text-[#202224] font-bold mb-20 mr-14">{image.header}</h2>
                    <p className="addStroke text-base ml-20">{image.text}</p>
                  </div>
        
                  {/* Image on the Right */}
                  <div className="relative w-[25%] h-[40%] overflow-hidden mr-60 mb-40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="intrinsic" // Let the image resize based on intrinsic size
                      width={160} // Adjust the width to 250px (or less)
                      height={250} // Adjust the height to 250px (or less)
                      objectFit="contain" // Maintain aspect ratio and ensure the image doesn't stretch
                      className="block rounded"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default ImageGallery;
