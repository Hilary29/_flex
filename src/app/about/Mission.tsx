import React from 'react'
import SlideInItem from "./SlideInItem";

const Mission = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px] flex mt-[-155px] '>

      <div className='tablet:hidden block'>
      <div className='container mx-auto'>
    <div className='flex flex-[1]mb-[-100px] mt-10'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>OUR MISSION</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p> At FlexAcademy, our mission is to provide high-quality, accessible training that equips individuals with the skills needed to succeed in today’s dynamic world.</p>
                </div>
    </div>
  </div>
      </div>

      
<SlideInItem>
  <div className="hidden tablet:block largeTablet:hidden">
  <div className='container mx-auto'>
    <div className='flex flex-[1] mb-30'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>OUR MISSION</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p> At FlexAcademy, our mission is to provide high-quality, accessible training that equips individuals with the skills needed to succeed in today’s dynamic world.</p>
                </div>
    </div>
  </div>
      </div>
</SlideInItem>

    {/* for large screens */}

    <SlideInItem>
      <div className="hidden largeTablet:block bigDesktop:hidden">
      <div className='container mx-auto'>
        <div className='flex flex-[1] mb-30'>
          <div className='flex  flex-col flex-[1] ml-20'>
              <div className='blueright '>
                <h3 className='text-lg text-white mt-12 ml-5'>OUR MISSION</h3>
              </div>
            </div>
            <div className='flex-[3] mr-15'>
              <p>
              At FlexAcademy, our mission is to provide high-quality, accessible training that equips individuals with the skills needed to succeed in today’s dynamic world. We are dedicated to offering practical, hands-on learning experiences, expert guidance, and personalized support to help our students reach their full potential. Through continuous innovation and a student-centered approach, we aim to create a positive impact on both personal and professional growth, preparing individuals to excel in their careers and contribute to a brighter future.</p>
            </div>
        </div>
      </div>
      </div>
    </SlideInItem>

        {/* for larger screens */}
      
    <SlideInItem>
      <div className='hidden bigDesktop:block'>
        <div className='container mx-auto'>
          <div className='flex flex-[1] mb-30'>
            <div className='flex  flex-col flex-[1] ml-20'>
              <div className='blueright '>
                <h3 className='text-lg text-white mt-12 ml-5'>OUR MISSION</h3>
              </div>
            </div>
            <div className='flex-[3] mr-15 text-xl'>
              <p>
              At FlexAcademy, our mission is to provide high-quality, accessible training that equips individuals with the skills needed to succeed in today’s dynamic world. We are dedicated to offering practical, hands-on learning experiences, expert guidance, and personalized support to help our students reach their full potential. Through continuous innovation and a student-centered approach, we aim to create a positive impact on both personal and professional growth, preparing individuals to excel in their careers and contribute to a brighter future.</p>
            </div>
          </div>
        </div>
      </div>
    </SlideInItem>
</div>
  )
}

export default Mission