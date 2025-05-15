import React from 'react'
import SlideUpContent from './SlideUpContent'

const Test = () => {

  
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px]'>

      {/* for phones */}
       <div className="tablet:hidden block">
       <div className="w-[80%] h-auto mt-2 text-lg text-[#202224] font-medium leading-6 tracking-tight">
              <h1>We assist you in taking the right path for your future</h1>
    
            </div>
      </div>
  <SlideUpContent delay={8} >

    {/* for small screens */}
    <div className=" hidden tablet:block largeTablet:hidden">
    <div className="w-[80%] h-auto mt-8 text-3xl text-[#202224] font-medium leading-6 tracking-wide ">
              <h1>We assist you in taking the right path for your future</h1>
    
            </div>
        </div>
    
        {/* for large screens */}
    
        <div className="hidden largeTablet:block bigDesktop:hidden">
        <div className="w-[80%] h-auto mt-8 text-4xl text-[#202224] font-medium leading-8 tracking-wide ">
              <h1>We assist you in boosting your education </h1>
              <h1>   and taking the right path for your future</h1>
            </div>
    
        </div>
    
            {/* for larger screens */}
    
          <div className="hidden bigDesktop:block">
              <div className="w-[80%] h-auto mt-11 text-5xl text-[#202224] font-medium leading-10 ">
                <h1>We assist you in boosting your education </h1>
                <h1>   and taking the right path for your future</h1>
              </div>
                    </div>
  </SlideUpContent>
    </div>
  )
}

export default Test