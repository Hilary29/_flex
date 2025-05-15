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
     { src: "/WhatsApp Image 2024-11-05 at 15.58.10.JPEG", alt: "photo2" },
    { src: "/WhatsApp Image 2024-11-05 at 15.58.10 (1).JPEG", alt: "photo4" },
    { src: "/WhatsApp Image 2024-11-05 at 15.58.01.JPEG", alt: "photo5" },
    { src: "/WhatsApp Image 2024-11-05 at 15.58.05.JPEG", alt: "photo6" },
  ];
  return (

    <div className="bg-white">

      <div className='tablet:hidden block'>
      <div className="join">
      <h3 className='mt-[20px] ml-[20px]'>OUR CAMPUS</h3>
      </div>
      <section className="gallery py-9 bg h-100 overflow-x-hidden width={250} height={250} text-center ml-8 rounded rounded-3xl ">

        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          // effect="fade"
          className="h-100 w-full float-left"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[25vh] w-[88vw] md:h-700 relative md:left-72 rounded rounded-xl ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className="block h-full w-[950px] md:h-[50px md:[50px]] rounded rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      </div>
                <div className="hidden tablet:block">
  
        <div className="join">
        <h3 className='mt-[100px] ml-[200px]'>OUR CAMPUS</h3>
        </div>
        <section className="gallery py-9 bg h-100 overflow-x-hidden width={250} height={250} text-center ml-8 rounded rounded-3xl ">
  
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            // effect="fade"
            className="h-100 w-full float-left"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-[75vh] w-[48vw] md:h-700 relative md:left-72 rounded rounded-3xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="block h-full w-[950px] md:h-[50px md:[50px]] rounded rounded-3xl"
                  />
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








// import React from 'react'
// import Image from 'next/image'

// const Campus = () => {
//   return (
//     <div className='w-[80%] h-auto m-auto pt-[20px] '>

// <div className=" tablet:hidden block">
// <div className="join ">
//             <h3 className='mt-[100px]'>OUR CAMPUS</h3>
//           </div>
//           <div className='grid grid-cols-2 grid-rows-2 gap-4 align-items: stretch justify-evenly content-evenly '>
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.10.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.10 (1).JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.01.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.05.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
//           </div>
//     </div>

//     {/* for large screens */}

//     <div className="hidden tablet:block desktop:hidden">
//     <div className="join ">
//             <h3 className='mt-[100px]'>OUR CAMPUS</h3>
//           </div>
//           <div className='flex justify-evenly'>
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.10.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.10 (1).JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.01.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
          
//             <Image
//                                     src="/WhatsApp Image 2024-11-05 at 15.58.05.JPEG"
//                                     alt="logo"
//                                     width={250}
//                                     height={250}
//                                     />
//           </div>

//     </div>

//         {/* for larger screens */}
//         <div className='hidden desktop:block'>
//           <div className="join ">
//             <h3 className='mt-[100px]'>OUR CAMPUS</h3>
//           </div>
//           <div className='flex justify-evenly'>
  
//      <Image
//                              src="/WhatsApp Image 2024-11-05 at 15.58.10.JPEG"
//                              alt="logo"
//                              width={250}
//                              height={250}
//                              />
//      <Image
//                              src="/WhatsApp Image 2024-11-05 at 15.58.10 (1).JPEG"
//                              alt="logo"
//                              width={250}
//                              height={250}
//                              />
//      <Image
//                              src="/WhatsApp Image 2024-11-05 at 15.58.01.JPEG"
//                              alt="logo"
//                              width={250}
//                              height={250}
//                              />
//      <Image
//                              src="/WhatsApp Image 2024-11-05 at 15.58.05.JPEG"
//                              alt="logo"
//                              width={250}
//                              height={250}
//                              />
  

//           </div>
//         </div>
//     </div>
//   )
// }

// export default Campus