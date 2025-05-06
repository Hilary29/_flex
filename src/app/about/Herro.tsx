import React from 'react'
import Image from 'next/image'


const Herro = () => {

  return (
    <div className="flex w-[80%] h-[auto] mt-8 m-[auto]">

      <div className='tablet:hidden block'>
      <div className='container mx-auto'>
  <div className='flex flex-[1]'>
    <div className='flex gap-8 flex-col flex-[1] mt-20' >
                  <h2 className='text-xl font-bold text-[#202224] leading-5'>KNOWING MORE ABOUT US</h2>
                  <div className='text-lg font-medium text-[#202224] ml-4'>

                    <p className='ml-1 mt-[-2] '>visit us today to learn more!</p>
                  </div>
                  <Image
                     src="/excellent_icon_logo.svg"
                     alt="excellent icon"
                     width={50}
                     height={50}
                     />
              </div>
    
    
                <div className=' flex-[1] '>
    
    
                <Image className='absolute mt-8'
               src="/Images.PNG"
                 alt="someone curiouse to know something"
                width={200}
                 height={200}
                 />
                </div>
  </div>
</div>
      </div>

      
<div className="  hidden tablet:block largeTablet:hidden">
<div className='container mx-auto'>
  <div className='flex flex-[1]'>
    <div className='flex gap-4 flex-col flex-[1] mt-20' >
                  <h2 className='text-xl font-bold text-[#202224] leading-5'>KNOWING MORE ABOUT US</h2>
                  <div className='text-xl font-medium text-[#202224] leading-tight ml-8'>

                    <p className='ml-1 mt-[-2] '>visit us today to learn more!</p>
                  </div>
                  <Image
                     src="/excellent_icon_logo.svg"
                     alt="excellent icon"
                     width={50}
                     height={50}
                     />
              </div>
    
    
                <div className=' herro-about-small flex-[1] '>
    
    
                <Image className='relative left-40 top-20'
               src="/Images.PNG"
                 alt="someone curiouse to know something"
                width={200}
                 height={200}
                 />
                </div>
  </div>
</div>
    </div>

    {/* for large screens */}

    <div className='hidden largeTablet:block desktop:hidden'>
    <div className='container mx-auto'>
  <div className='flex flex-[1]'>
    <div className='flex gap-4 flex-col flex-[1] mt-20' >
                  <h2 className='text-xl font-bold text-[#202224] leading-5'>KNOWING MORE ABOUT US</h2>
                  <div className='text-xl font-medium text-[#202224] leading-tight ml-8'>

                    <p className='ml-1 mt-[-2] '>visit us today to learn more!</p>
                  </div>
                  <Image
                     src="/excellent_icon_logo.svg"
                     alt="excellent icon"
                     width={50}
                     height={50}
                     />
              </div>
    
    
                <div className=' herro-about-small flex-[1] '>
    
    
                <Image className='relative left-40 top-20'
               src="/Images.PNG"
                 alt="someone curiouse to know something"
                width={200}
                 height={200}
                 />
                </div>
  </div>
</div>
    </div>

    <div className="hidden desktop:block bigDesktop:hidden">
    <div className='container mx-auto'>
      <div className='flex flex-[1]'>
        <div className='flex gap-8 flex-col flex-[1] mt-20' >
                  <h2 className='text-2xl font-bold text-[#202224] leading-5'>KNOWING MORE ABOUT US</h2>
                  <div className='text-xl font-medium text-[#202224] leading-tight ml-8'>
                    <p >Discover the exceptional</p>
                    <p >  opportunties at our school </p>
                    <p className='ml-20 mt-5'>visit us today to learn more!</p>
                  </div>
                  <Image
                     src="/excellent_icon_logo.svg"
                     alt="excellent icon"
                     width={70}
                     height={70}
                     />
              </div>
        
        
                <div className=' herro-about flex-[1] '>
        
        
                <Image className='relative left-40 '
               src="/Images.PNG"
                 alt="someone curiouse to know something"
                width={260}
                 height={260}
                 />
                </div>
      </div>
    </div>

    </div>

        {/* for larger screens */}
        <div className='hidden bigDesktop:block'>
          <div className='container mx-auto'>
            <div className='flex flex-[1]'>
              <div className='flex gap-8 flex-col flex-[1] mt-20' >
                  <div  className='text-4xl font-bold text-[#202224] leading-8'>
                      <h2> KNOWING MORE ABOUT US</h2>
                    </div>
                  
                  <div className='text-xl font-medium text-[#202224] leading-tight ml-8'>
                    <p >Discover the exceptional opportunties at our</p>
                    <p > school, where a commitment to excellence in</p>
                    <p >education meets a vibrant inclusive community</p>
                    <p className='ml-20 mt-5'>visit us today to learn more!</p>
                  </div>
                  <Image
                     src="/excellent_icon_logo.svg"
                     alt="excellent icon"
                     width={70}
                     height={70}
                     />
              </div>
              
              
                <div className=' herro-about flex-[1] '>
              
              
                <Image className='relative left-60 '
               src="/Images.PNG"
                 alt="someone curiouse to know something"
                width={260}
                 height={260}
                 />
                </div>
            </div>
          </div>
        </div>

</div>
  )
}

export default Herro