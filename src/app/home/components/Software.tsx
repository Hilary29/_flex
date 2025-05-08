import React from 'react'
import Image from 'next/image'
import SlideUpContent from './SlideUpContent'
import RegisterButton from './RegisterButton'

const Software = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px]'>

      <div  className="tablet:hidden block">
      <div className="text-[#373839] text-xl font-medium mt-[0.5px]">
            <h2>Join us to learn any specific software of your choice</h2>
          </div>
          <div className='text-[#535557] text-lg font-medium mt-2'>
            <p>we offer 100% practical courses in any softwares of your choice</p>
          </div>
  
  <div className='' >
              <div className='border-2 border-[#1b3d74] justify-items-center mb-6 rounded-lg'>
              <Image className=' py-8 mt-14'
                    src="/word-logo-8.png"
                    alt="WORD LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 rounded-lg '>MICROSOFT WORD</button>
              <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 rounded-lg border-[#1b3d74] justify-items-center mb-6'>
              <Image className=' py-8 mt-8 '
                    src="/112-gmail_email_mail-512.png"
                    alt="EMAIL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>MAIL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center mb-6 rounded-lg'>
              <Image className=' py-8 mt-6'
                    src="/sage-removebg-preview1.png"
                    alt="SAGE LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-16'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>SAGE</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center mb-6 rounded-lg'>
              <Image className=' py-8 '
                    src="/Logo.png"
                    alt="WORDPRESS LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-0.5 py-2 tracking-tight leading-3 rounded-lg'>WORDPRESS</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center mb-6 rounded-lg'>
              <Image className=' py-8'
                    src="/powerpoint1.png"
                    alt="POWER POINT LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12 justify-items-center'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>POWER POINT</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 rounded-lg border-[#1b3d74] justify-items-center mb-6'>
              <Image className=' py-8 mt-14'
                    src="/Logo-1.png"
                    alt="ODOO LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>ODOO</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 rounded-lg border-[#1b3d74] justify-items-center mb-6'>
              <Image className=' py-8'
                    src="/excel-logo-0.png"
                    alt="EXCELL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-14'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>EXCELL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 rounded-lg border-[#1b3d74] justify-items-center mb-6'>
              <Image className=' py-8'
                    src="/Logo-2.png"
                    alt="PHOTOSHOP LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-0.5 py-2 tracking-tight leading-3 '>PHOTOSHOP</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
             </div>
      </div>

<div className=" hidden tablet:block largeTablet:hidden">
<SlideUpContent delay={3}>
  
  <div className="text-[#373839] text-xl font-medium mt-[0.5px]">
            <h2>Join us to learn any specific software of your choice</h2>
          </div>
          <div className='text-[#535557] text-lg font-medium mt-2'>
            <p>we offer 100% practical courses in any softwares of your choice</p>
          </div>
  
  <div className=' grid grid-cols-2 grid-rows-4 gap-4 align-items: stretch justify-evenly content-evenly ' >
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8 mt-14'
                    src="/word-logo-8.png"
                    alt="WORD LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 '>MICROSOFT WORD</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8 mt-8'
                    src="/112-gmail_email_mail-512.png"
                    alt="EMAIL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>MAIL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8 mt-6'
                    src="/sage-removebg-preview1.png"
                    alt="SAGE LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-16'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>SAGE</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8 '
                    src="/Logo.png"
                    alt="WORDPRESS LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-0.5 py-2 tracking-tight leading-3 '>WORDPRESS</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8'
                    src="/powerpoint1.png"
                    alt="POWER POINT LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12 rounded-lg justify-items-center'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>POWER POINT</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8 mt-14'
                    src="/Logo-1.png"
                    alt="ODOO LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] bg-white rounded-lg border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>ODOO</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8'
                    src="/excel-logo-0.png"
                    alt="EXCELL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-14'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 '>EXCELL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] rounded-lg justify-items-center'>
              <Image className=' py-8'
                    src="/Logo-2.png"
                    alt="PHOTOSHOP LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] rounded-lg bg-white border-2 border-t-[#1b3d74] w-1/2 px-0.5 py-2 tracking-tight leading-3 '>PHOTOSHOP</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
             </div>
      </SlideUpContent>
</div>

    {/* for large screens */}

    <div className="hidden largeTablet:block bigDesktop:hidden">

    <SlideUpContent delay={3}>
      <div className="text-[#373839] text-2xl font-medium">
            <h2>Join us to learn any specific software of your choice</h2>
          </div>
          <div className='text-[#535557] text-xl font-medium'>
            <p>we offer 100% practical courses in any softwares of your choice</p>
          </div>
      <div className=' grid grid-cols-3 grid-rows-2 gap-4 align-items: stretch justify-evenly content-evenly ' >
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-14'
                    src="/word-logo-8.png"
                    alt="WORD LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg '>MICROSOFT WORD</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-8'
                    src="/112-gmail_email_mail-512.png"
                    alt="EMAIL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>MAIL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-6'
                    src="/sage-removebg-preview1.png"
                    alt="SAGE LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-16'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>SAGE</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 '
                    src="/Logo.png"
                    alt="WORDPRESS LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 rounded-lg '>WORDPRESS</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/powerpoint1.png"
                    alt="POWER POINT LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12 justify-items-center'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg '>POWER POINT</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-14'
                    src="/Logo-1.png"
                    alt="ODOO LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>ODOO</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/excel-logo-0.png"
                    alt="EXCELL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-14'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>EXCELL</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/Logo-2.png"
                    alt="PHOTOSHOP LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 rounded-lg '>PHOTOSHOP</button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
             </div>
    </SlideUpContent>
    </div>

        {/* for larger screens */}
      <div className="hidden bigDesktop:block">
        <SlideUpContent delay={3}>
          <div className="join ">
            <h2>Join us to learn any software of your choice</h2>
          </div>
          <div className='practical_softwares'>
            <p>we offer 100% practical courses in any specific softwares of your choice</p>
          </div>
          <div className=' grid grid-cols-4 grid-rows-2 gap-4 align-items: stretch justify-evenly content-evenly ' >
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-14'
                    src="/word-logo-8.png"
                    alt="WORD LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>MICROSOFT WORD</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-8'
                    src="/112-gmail_email_mail-512.png"
                    alt="EMAIL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg '>MAIL</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-6'
                    src="/sage-removebg-preview1.png"
                    alt="SAGE LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-16'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>SAGE</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 '
                    src="/Logo.png"
                    alt="WORDPRESS LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>WORDPRESS</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/powerpoint1.png"
                    alt="POWER POINT LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12 justify-items-center'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg '>POWER POINT</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8 mt-14'
                    src="/Logo-1.png"
                    alt="ODOO LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>ODOO</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/excel-logo-0.png"
                    alt="EXCELL LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-14'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>EXCELL</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
              <div className='border-2 border-[#1b3d74] justify-items-center rounded-lg'>
              <Image className=' py-8'
                    src="/Logo-2.png"
                    alt="PHOTOSHOP LOGO"
                    width={90}
                    height={90}
                  />
              <div className='flex w-full mt-12'>
                <button className='text-[#1b3d74] bg-white border-2 border-t-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 rounded-lg'>PHOTOSHOP</button>
               <RegisterButton>REGISTER</RegisterButton>
              </div>
              </div>
             </div>
        </SlideUpContent>
      </div>

    </div>
  )
}

export default Software