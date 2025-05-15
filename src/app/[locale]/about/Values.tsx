import React from 'react'
import SlideInItem from "./SlideInItem";

const Values = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px] flex mt-[-155px] '>
      <div className='tablet:hidden block'>
      <div className='container mx-auto'>
    <div className='flex flex-[1] mb-14'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>OUR VALUES</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p>At FlexAcademy, our values are at the heart of everything we do. We are committed to fostering a culture of excellence, integrity, and innovation. We prioritize respect, collaboration, and continuous improvement, ensuring that each individual’s growth and success is our shared goal..</p>
                </div>
    </div>
  </div>
      </div>
      
<SlideInItem>
  <div className="  hidden tablet:block largeTablet:hidden">
  <div className='container mx-auto'>
    <div className='flex flex-[1]'>
      <div className='flex  flex-col flex-[1] ml-20'>
                  <div className='blueright-small '>
                    <h3 className='text-base text-white mt-6 ml-5'>OUR VALUES</h3>
                  </div>
                </div>
                <div className='flex-[3] mr-30 leading-4'>
                  <p>At FlexAcademy, our values are at the heart of everything we do. We are committed to fostering a culture of excellence, integrity, and innovation. We prioritize respect, collaboration, and continuous improvement, ensuring that each individual’s growth and success is our shared goal..</p>
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
                <h3 className='text-lg text-white mt-12 ml-5'>OUR VALUES</h3>
              </div>
            </div>
            <div className='flex-[3] mr-15'>
              <p>At FlexAcademy, our values are at the heart of everything we do. We are committed to fostering a culture of excellence, integrity, and innovation. We believe in empowering our students by providing them with the knowledge, tools, and support they need to succeed. We prioritize respect, collaboration, and continuous improvement, ensuring that each individual’s growth and success is our shared goal. At FlexAcademy, we are dedicated to creating an environment that encourages learning, inspires confidence, and builds lasting relationships.</p>
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
                <h3 className='text-lg text-white mt-12 ml-5'>OUR VALUES</h3>
              </div>
            </div>
            <div className='flex-[3] mr-15 text-xl'>
              <p>At FlexAcademy, our values are at the heart of everything we do. We are committed to fostering a culture of excellence, integrity, and innovation. We believe in empowering our students by providing them with the knowledge, tools, and support they need to succeed. We prioritize respect, collaboration, and continuous improvement, ensuring that each individual’s growth and success is our shared goal. At FlexAcademy, we are dedicated to creating an environment that encourages learning, inspires confidence, and builds lasting relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </SlideInItem>
</div>
  )
}

export default Values