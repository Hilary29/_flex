import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=''>
        <div className='w-[80%] h-auto m-auto pt-[20px] '>

                {/* for phones */}

                <div className="tablet:hidden block">

                <div className="flex justify-between align-items-center content-center mt-20 ">
                <Link href="/">
                      <Image
                         src="/LOGO.svg"
                         alt="logo"
                         width={70}
                         height={70}
                         />
                                
                </Link>

                <Link href="Register"className=" text-white bg-[#1B3D74] px-2 pt-1 pb-0 border-1 border-[#1B3D74] rounded-xl ml-5 #REGISTER " >REGISTER</Link>
                <Link href="LANGUAGE"className=" text-white bg-[#1B3D74] px-2 pt-1 pb-0 border-1 border-[#1B3D74] rounded-xl">LANGUAGE PORTALS</Link>
            </div>

            <div className=" ">
                        <div className="flex text-[#1B3D74] justify-between text-sm ">
                            <Link href="/">HOME</Link>
                            <Link href="about">ABOUT US</Link>
                            <Link href="Trainings">TRAININGS</Link>
                            <Link href="Shop">SHOP</Link>
                            <Link href="Contact">CONTACT US</Link>
                        </div>
                        
                    </div>
                </div>

            {/* for small screens */}
        <div className=' hidden tablet:block largeTablet:hidden'>
            <div className="flex justify-between align-items-center content-center mt-4 ">
                <Link href="/">
                      <Image
                         src="/LOGO.svg"
                         alt="logo"
                         width={90}
                         height={90}
                         />
                                
                </Link>

                <Link href="Register"className=" text-white bg-[#1B3D74] px-4 pt-3 pb-1 border-2 border-[#1B3D74] rounded-3xl ml-10 #REGISTER ">REGISTER</Link>
                <Link href="LANGUAGE"className=" text-white bg-[#1B3D74] px-4 pt-3 pb-1 border-2 border-[#1B3D74] rounded-3xl">LANGUAGE PORTALS</Link>
            </div>

            <div className=" ">
                        <div className="flex text-[#1B3D74] justify-between">
                            <Link href="/">HOME</Link>
                            <Link href="about">ABOUT US</Link>
                            <Link href="Trainings">TRAININGS</Link>
                            <Link href="Shop">SHOP</Link>
                            <Link href="Contact">CONTACT US</Link>
                        </div>
                        
                    </div>
        </div>


        {/* large screens */}

        <div className='hidden largeTablet:block bigDesktop:hidden'>
        <nav className="bg-white">
                <div className="flex items-center justify-between h-16 mt-8">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                src="/LOGO.svg"
                                alt="logo"
                                width={90}
                                height={90}
                                />
                                
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-2 flex items-center">
                            <Link href="/"className="Navbar__link text-color:rgb(27 61 116) bg-white text-xs ">HOME</Link>
                            <Link href="about"className="Navbar__link text-color:rgb(27 61 116) bg-white text-xs leading-3 ">ABOUT US</Link>
                            <Link href="Trainings"className="Navbar__link text-color:rgb(27 61 116) bg-white text-xs ">TRAININGS</Link>
                            <Link href="Shop"className="Navbar__link text-color:rgb(27 61 116) bg-white text-xs ">SHOP</Link>
                            <Link href="Contact"className="Navbar__link text-color:rgb(27 61 116) bg-white text-xs leading-3 ">CONTACT US</Link>
                            <Link href="Register"className="Navbar__REGISTER text-color:rgb(27 61 116) bg-white text-xs #REGISTER ">REGISTER</Link>
                            <Link href="LANGUAGE"className="Navbar__LANGUAGE text-color:rgb(27 61 116) bg-white text-xs ">LANGUAGE PORTALS</Link>
                        </div>
                        
                    </div>

                </div>
            

        </nav>

        </div>
            {/* for larger screens */}
        <div className='hidden bigDesktop:block'>

        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                            <Link href="/">
                                <Image
                                src="/LOGO.svg"
                                alt="logo"
                                width={120}
                                height={120}
                                />
                                
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="ml-4 flex items-center">
                            <Link href="/"className="Navbar__link text-color:rgb(27 61 116) bg-white ">HOME</Link>
                            <Link href="about"className="Navbar__link text-color:rgb(27 61 116) bg-white ">ABOUT US</Link>
                            <Link href="Trainings"className="Navbar__link text-color:rgb(27 61 116) bg-white ">TRAININGS</Link>
                            <Link href="Shop"className="Navbar__link text-color:rgb(27 61 116) bg-white ">SHOP</Link>
                            <Link href="Contact"className="Navbar__link text-color:rgb(27 61 116) bg-white ">CONTACT US</Link>
                            <Link href="Register"className="Navbar__REGISTER text-color:rgb(27 61 116) bg-white #REGISTER ">REGISTER</Link>
                            <Link href="LANGUAGE"className="Navbar__LANGUAGE text-color:rgb(27 61 116) bg-white ">LANGUAGE PORTALS</Link>
                        </div>
                        
                    </div>

                </div>
            </div>

        </nav>

        </div>
        </div>
    </div>
  )
}

export default Navbar