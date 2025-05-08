import React from 'react'
import Image from 'next/image'
import SlideUpContent from './SlideUpContent'
import ButtonPurchase from './ButtonPurchase'

const Tech_Products = () => {
  return (
    <div className='w-[80%] h-auto m-auto '>
<div className="tablet:hidden block">
<div className="text-[#373839] text-xl font-medium mt-[-80px]">
        <h2>Get accessories for trainings here</h2>
      </div>
      <div className='text-[#535557] text-lg font-medium mt-2'>
        <p>We propose quality training accessories to our students</p>
      </div>

      <div className=''>
        <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 pt-2 justify-items-center'>
        <Image className=''
                                src="/key.png"
                                alt="USB key"
                                width={70}
                                height={70}
                                />

        <div className='mt-12 flex w-full '>
          <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] flex-1 px-3 py-1 '>USB KEY</button>
         <ButtonPurchase>PURCHASE</ButtonPurchase>
        </div>
        </div>


        <div className='bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center mt-4 rounded-lg'>
        <Image className=''
                                src="/laptop.png"
                                alt="LAPTOP"
                                width={70}
                                height={70}
                                />

        <div className='mt-14 flex w-full mb-[-8px] '>
          <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1  '>LAPTOP</button>
         <ButtonPurchase>PURCHASE</ButtonPurchase>
        </div>
        </div> 

        <div className='bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center mt-4 rounded-lg'>
        <Image
                                src="/charger.png"
                                alt="charger"
                                width={70}
                                height={70}
                                />

        <div className='mt-12 w-full flex mb-[-8px] '>
          <button className=' rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>CHARGER</button>
         <ButtonPurchase>PURCHASE</ButtonPurchase>
        </div>
        </div>

        <div className='bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center mt-4 rounded-lg'>
        <Image
                                src="/MOUSE.png"
                                alt="MOUSE"
                                width={70}
                                height={70}
                                />

        <div className='mt-12 flex w-full mb-[-8px] '>
          <button className=' rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>MOUSE</button>
          <ButtonPurchase>PURCHASE</ButtonPurchase>
        </div>
        </div>

        <div className='bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center mt-4 rounded-lg'>
        <Image
                                src="/EYER.png"
                                alt="KEYBOARD"
                                width={70}
                                height={70}
                                />

        <div className='mt-12 w-full flex mb-[-8px] '>
          <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>KEYBOARD</button>
          <ButtonPurchase>PURCHASE</ButtonPurchase>
        </div>
        </div>

      </div>
</div>

<SlideUpContent>
  <div className=" hidden tablet:block largeTablet:hidden">
  <div className="text-[#373839] text-xl font-medium mt-[-80px]">
          <h2>Get accessories for trainings here</h2>
        </div>
        <div className='text-[#535557] text-lg font-medium mt-2'>
          <p>We propose quality training accessories to our students</p>
        </div>
  
        <div className='grid grid-cols-2 grid-rows-3 gap-4 align-items: stretch justify-evenly content-evenly 	'>

          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 pt-2 justify-items-center'>
          <Image className=''
                                  src="/key.png"
                                  alt="USB key"
                                  width={70}
                                  height={70}
                                  />
  
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] flex-1 px-3 py-1  '>USB KEY</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
  
          <div className='bg-white rounded-lg border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/laptop.png"
                                  alt="LAPTOP"
                                  width={70}
                                  height={70}
                                  />
  
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>LAPTOP</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
  
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/charger.png"
                                  alt="charger"
                                  width={70}
                                  height={70}
                                  />
  
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>CHARGER</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
  
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/MOUSE.png"
                                  alt="MOUSE"
                                  width={70}
                                  height={70}
                                  />
  
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>MOUSE</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
  
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/EYER.png"
                                  alt="KEYBOARD"
                                  width={70}
                                  height={70}
                                  />
  
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>KEYBOARD</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
  
        </div>
  </div>
</SlideUpContent>

    {/* for large screens */}

<div className="hidden largeTablet:block bigDesktop:hidden">
    <SlideUpContent>
      <div className="join ">
          <h2>Get accessories for trainings here</h2>
        </div>
        <div className='practical_softwares'>
          <p>We propose quality training accessories to our students</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-4 align-items: stretch justify-evenly content-evenly '>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 pt-2 justify-items-center'>
          <Image className=''
                                  src="/key.png"
                                  alt="USB key"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] flex-1 px-3 py-1 '>USBKEY</button>
            
             <ButtonPurchase>PURCHASE</ButtonPurchase>
            
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/laptop.png"
                                  alt="LAPTOP"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>LAPTOP</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/charger.png"
                                  alt="charger"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>CHARGER</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/MOUSE.png"
                                  alt="MOUSE"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>MOUSE</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/EYER.png"
                                  alt="KEYBOARD"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>KEYBOARD</button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
        </div>
    </SlideUpContent>

</div>

        {/* for larger screens */}
        <div className='hidden bigDesktop:block'>
        <SlideUpContent>
          <div className="join ">
          <h2>Get accessories for trainings here</h2>
                </div>
                <div className='practical_softwares'>
          <p>We propose quality training accessories to our students</p>
                </div>
          
                <div className='flex justify-evenly 	'>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 pt-2 justify-items-center'>
          <Image className=''
                                  src="/key.png"
                                  alt="USB key"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className=' rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] flex-1 px-3 py-1 '>USB KEY</button>
    <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/laptop.png"
                                  alt="LAPTOP"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>LAPTOP</button>
<ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/charger.png"
                                  alt="charger"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>CHARGER</button>
          <ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/MOUSE.png"
                                  alt="MOUSE"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 flex w-full'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>MOUSE</button>
<ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          <div className='rounded-lg bg-white border-2 border-[#1B3D74] px-6 py-2 justify-items-center'>
          <Image
                                  src="/EYER.png"
                                  alt="KEYBOARD"
                                  width={70}
                                  height={70}
                                  />
          <div className='mt-12 w-full flex'>
            <button className='rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-1 '>KEYBOARD</button>
<ButtonPurchase>PURCHASE</ButtonPurchase>
          </div>
          </div>
          
                </div>
        </SlideUpContent>
        </div>
    </div>
    
  )
}

export default Tech_Products

