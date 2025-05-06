import React from 'react'
import SlideInItemFromRight from "./SlideInItemfromright";

const Choose = () => {
  return (
    <div className='w-[80%] h-auto m-auto flex mt-[-155px]' >

      <div className='tablet:hidden block'>
      <div className='container mx-auto' >
    <div className='flex flex-[1] mt-12 mb-12'>
      <div className='flex flex-[1] leading-4'>
                   <p>Choose FlexAcademy because we are committed to providing a transformative learning experience tailored to your success. With FlexAcademy, you are not just learning; you are preparing for a future full of opportunities.</p>
                        </div>
  
                        <div className='leftblue-small  flex-[1] '>
                         <h3 className='text-base text-white mt-8 ml-2'>WHY SHOULD YOU <p>CHOOSE US</p></h3>
                         </div>
    </div>
  </div>
      </div>

      
<SlideInItemFromRight>
  <div className=" hidden tablet:block largeTablet:hidden">
  <div className='container mx-auto' >
    <div className='flex flex-[1] mt-12'>
      <div className='flex flex-[1] leading-4'>
                   <p>Choose FlexAcademy because we are committed to providing a transformative learning experience tailored to your success. With FlexAcademy, you are not just learning; you are preparing for a future full of opportunities.</p>
                        </div>
  
                        <div className='leftblue-small  flex-[1] '>
                         <h3 className='text-base text-white mt-8 ml-2'>WHY SHOULD YOU <p>CHOOSE US</p></h3>
                         </div>
    </div>
  </div>
      </div>
</SlideInItemFromRight>

    {/* for large screens */}

    <SlideInItemFromRight>
      <div className="hidden largeTablet:block bigDesktop:hidden">
      <div className='container mx-auto'>
        <div className='flex flex-[1]'>
          <div className='flex  flex-col flex-[3] mr-12 '>
                   <p>Choose FlexAcademy because we are committed to providing a transformative learning experience tailored to your success. We offer flexible learning options, personalized guidance, and a focus on real-world application, so you can confidently take the next step in your career. With FlexAcademy, you are not just learning; you are preparing for a future full of opportunities.</p>
                        </div>
      
                        <div className='leftblue  flex-[1] mt-10 '>
                         <h3 className='text-base text-white mt-10 ml-2'>WHY SHOULD YOU <p>CHOOSE US</p></h3>
                         </div>
        </div>
      </div>
      </div>
    </SlideInItemFromRight>

        {/* for larger screens */}
         <SlideInItemFromRight>
           <div className='hidden bigDesktop:block'>
             <div className='container mx-auto'>
               <div className='flex flex-[1]'>
                 <div className='flex  flex-col flex-[3] mr-12 text-xl'>
                   <p>Choose FlexAcademy because we are committed to providing a transformative learning experience tailored to your success. We offer flexible learning options, personalized guidance, and a focus on real-world application, so you can confidently take the next step in your career. With FlexAcademy, you are not just learning; you are preparing for a future full of opportunities.</p>
                        </div>
           
                        <div className='leftblue  flex-[1] '>
                         <h3 className='text-base text-white mt-10 ml-2'>WHY SHOULD YOU <p>CHOOSE US</p></h3>
                         </div>
               </div>
             </div>
           </div>
         </SlideInItemFromRight>
    </div>
  )
}

export default Choose