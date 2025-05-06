import React from 'react'
import SlideInItemFromRight from "./SlideInItemfromright";

const Vision = () => {
  return (
    <div className='w-[80%] h-auto m-auto flex mt-[-155px]' >

      <div className='tablet:hidden block'>
      <div className='container mx-auto' >
    <div className='flex flex-[1] mt-12 mb-14'>
      <div className='flex flex-[1] leading-4'>
                   <p>At FlexAcademy, our vision is to be a leading training center that empowers individuals to unlock their full potential. We aim to create a transformative learning experience that equips our students with the skills and confidence to thrive in an ever-evolving world.</p>
                        </div>
  
                        <div className='leftblue-small  flex-[1] '>
                         <h3 className='text-base text-white mt-8 ml-2'>OUR VISION</h3>
                         </div>
    </div>
  </div>
      </div>

      
<SlideInItemFromRight>
  <div className=" hidden tablet:block largeTablet:hidden">
  <div className='container mx-auto' >
    <div className='flex flex-[1] mt-12'>
      <div className='flex flex-[1] leading-4'>
                   <p>At FlexAcademy, our vision is to be a leading training center that empowers individuals to unlock their full potential. We aim to create a transformative learning experience that equips our students with the skills and confidence to thrive in an ever-evolving world.</p>
                        </div>
  
                        <div className='leftblue-small  flex-[1] '>
                         <h3 className='text-base text-white mt-8 ml-2'>OUR VISION</h3>
                         </div>
    </div>
  </div>
      </div>
</SlideInItemFromRight>

    {/* for large screens */}

    <SlideInItemFromRight>
      <div className="hidden largeTablet:block bigDesktop:hidden">
      <div className='container mx-auto'>
        <div className='flex flex-[1] mt-12'>
          <div className='flex  flex-col flex-[3] mr-12'>
              <p>
              At FlexAcademy, our vision is to be a leading training center that empowers individuals to unlock their full potential. We aim to create a transformative learning experience that equips our students with the skills and confidence to thrive in an ever-evolving world. Through innovation, collaboration, and a commitment to excellence, we strive to inspire personal and professional growth, helping our students achieve success and make a meaningful impact in their careers and communities.</p>
              </div>
      
              <div className='leftblue  flex-[1] '>
               <h3 className='text-base text-white mt-10 ml-2'>OUR VISION</h3>
               </div>
        </div>
      </div>
      </div>
    </SlideInItemFromRight>

        {/* for larger screens */}
    <SlideInItemFromRight>
      <div className='hidden bigDesktop:block'>
        <div className='container mx-auto'>
          <div className='flex flex-[1] mt-12'>
            <div className='flex  flex-col flex-[3] mr-12 text-xl'>
              <p>
              At FlexAcademy, our vision is to be a leading training center that empowers individuals to unlock their full potential. We aim to create a transformative learning experience that equips our students with the skills and confidence to thrive in an ever-evolving world. Through innovation, collaboration, and a commitment to excellence, we strive to inspire personal and professional growth, helping our students achieve success and make a meaningful impact in their careers and communities.</p>
              </div>
      
              <div className='leftblue  flex-[1] '>
               <h3 className='text-base text-white mt-10 ml-4'>OUR VISION</h3>
               </div>
          </div>
        </div>
      </div>
    </SlideInItemFromRight>
</div>
  )
}

export default Vision