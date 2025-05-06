import React from 'react'
import SlideUpContent from './SlideUpContent'

const Testimonials = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px]'>

      <div className='tablet:hidden block'>
      <h2 className='text-[#373839] text-xl font-medium mt-[0.5px]'>TESTIMONIALS</h2>
          <div className=' '>
            <div className='justify-evenly content-around'>
        
                <div className='bg-[#1b3d74] text-white px-10 py-10 relative '>
                    <h3>
                    FlexAcademy is a very dynamic center where lectures are very well explained and respect is given to every student
                    </h3>
                    <div className='absolute bottom-3 right-8 mt-6'>
                      <p>EUGENIE.</p>
                    </div>
                </div>
                <div className='bg-[#1b3d74] text-white px-10 py-10 relative mt-12'>
                    <h3>
                    I had the best training experience in flex academy. Oustanding methods of teaching,  very dynamic teachers, 100% practical courses they are one of the best
                    </h3>
                    <div className='absolute bottom-3 right-8 mt-6'>
                      <p>MERVEILLE.</p>
                    </div>
                </div>
            </div>
          </div>
      </div>

<SlideUpContent>
  <div className="hidden tablet:block largeTablet:hidden">
  <h2 className='text-[#373839] text-xl font-medium mt-[0.5px]'>TESTIMONIALS</h2>
            <div className=' '>
              <div className='justify-evenly content-around'>
  
                  <div className='bg-[#1b3d74] text-white px-10 py-10 relative '>
                      <h3>
                      FlexAcademy is a very dynamic center where lectures are very well explained and respect is given to every student
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>EUGENIE.</p>
                      </div>
                  </div>
                  <div className='bg-[#1b3d74] text-white px-10 py-10 relative mt-12'>
                      <h3>
                      I had the best training experience in flex academy. Oustanding methods of teaching,  very dynamic teachers, 100% practical courses they are one of the best
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>MERVEILLE.</p>
                      </div>
                  </div>
              </div>
            </div>
  
      </div>
</SlideUpContent>

    {/* for large screens */}

    <div className="hidden largeTablet:block bigDesktop:hidden">
    <SlideUpContent>
      <h2 className='join'>TESTIMONIALS</h2>
            <div className=' '>
              <div className='flex w-full gap-x-20 justify-evenly content-around'>
      
                  <div className='rounded-2xl w-1/2 bg-[#1b3d74] text-white px-10 py-10 relative '>
                      <h3>
                      FlexAcademy is a very dynamic center where lectures are very well explained and respect is given to every student
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>EUGENIE.</p>
                      </div>
                  </div>
                  <div className='rounded-2xl  w-1/2 bg-[#1b3d74] text-white px-10 py-10 relative'>
                      <h3>
                      I had the best training experience in flex academy. Oustanding methods of teaching,  very dynamic teachers, 100% practical courses they are one of the best
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>MERVEILLE.</p>
                      </div>
                  </div>
              </div>
            </div>
    </SlideUpContent>

    </div>

        {/* for larger screens */}
      <div className='hidden bigDesktop:block'>
        <SlideUpContent>
          <h2 className='join'>TESTIMONIALS</h2>
            <div className=' '>
              <div className='flex w-full gap-x-20 justify-evenly content-around'>
          
                  <div className='rounded-2xl  w-1/2 bg-[#1b3d74] text-white px-10 py-10 relative '>
                      <h3>
                      FlexAcademy is a very dynamic center where lectures are very well explained and respect is given to every student
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>EUGENIE.</p>
                      </div>
                  </div>
                  <div className=' rounded-2xl  w-1/2 bg-[#1b3d74] text-white px-10 py-10 relative'>
                      <h3>
                      I had the best training experience in flex academy. Oustanding methods of teaching,  very dynamic teachers, 100% practical courses they are one of the best
                      </h3>
                      <div className='absolute bottom-3 right-8 mt-6'>
                        <p>MERVEILLE.</p>
                      </div>
                  </div>
              </div>
            </div>
        </SlideUpContent>
      </div>
    </div>
  )
}

export default Testimonials