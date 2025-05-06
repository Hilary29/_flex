import React from 'react'
import SlideInItem from "./SlideInItem";

const Whole = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px] flex mt-10 '>

      <div className='tablet:hidden block'>
      <div className='container mx-auto'>
    <div className='flex flex-[1] mb-12'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>WHO WE ARE</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p>FlexAcademy is a dynamic training center dedicated to empowering individuals with the skills they need to succeed in todays fast-paced world.
                    Whether you are looking to advance your career or learn something new, FlexAcademy is here to guide you every step of the way.</p>
                </div>
    </div>
  </div>
      </div>
<SlideInItem>
  <div className=" hidden tablet:block largeTablet:hidden">
  <div className='container mx-auto'>
    <div className='flex flex-[1]'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>WHO WE ARE</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p>FlexAcademy is a dynamic training center dedicated to empowering individuals with the skills they need to succeed in todays fast-paced world.
                    Whether you are looking to advance your career or learn something new, FlexAcademy is here to guide you every step of the way.</p>
                </div>
    </div>
  </div>
      </div>
</SlideInItem>

    {/* for large screens */}

    <SlideInItem>
      <div className="hidden largeTablet:block bigDesktop:hidden">
      <div className='container mx-auto'>
        <div className='flex flex-[1]'>
          <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright '>
                    <h3 className='text-lg text-white mt-12 ml-5'>WHO WE ARE</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-15'>
                  <p>FlexAcademy is a dynamic training center dedicated to empowering individuals with the skills they need to succeed in todays fast-paced world. Offering a wide range of courses across various fields, we provide hands-on learning experiences, expert instructors, and a supportive community to help our students unlock their full potential.
                    Whether you are looking to advance your career or learn something new, FlexAcademy is here to guide you every step of the way.</p>
                </div>
        </div>
      </div>
      </div>
    </SlideInItem>

        {/* for larger screens */}
      
        <SlideInItem>
          <div className='hidden bigDesktop:block'>
            <div className='container mx-auto'>
              <div className='flex flex-[1]'>
                <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright '>
                    <h3 className='text-lg text-white mt-12 ml-5'>WHO WE ARE</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-15 text-xl'>
                  <p>FlexAcademy is a dynamic training center dedicated to empowering individuals with the skills they need to succeed in todays fast-paced world. Offering a wide range of courses across various fields, we provide hands-on learning experiences, expert instructors, and a supportive community to help our students unlock their full potential.
                    Whether you are looking to advance your career or learn something new, FlexAcademy is here to guide you every step of the way.</p>
                </div>
                        </div>
              </div>
            </div>
        </SlideInItem>
    </div>


  )
}

export default Whole

