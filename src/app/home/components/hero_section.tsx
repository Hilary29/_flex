import React from "react";

const HeroSection = () => {

  return <div className="hero">

    {/* for phones */}

    <div className="tablet:hidden block">

    
    <div className="text-center pt-[50px] mx-auto">
          <div id="welcome-style">
            <h1 className="mt-50 py-4 text-[35px] font-bold text-white">WELCOME TO FLEXACADEMY</h1>
          </div>
          <div id="through-style" >
            <p className="text-[15px] text-white text-lg">It is through learning that we unlock our potentials </p>
            <p className="text-[15px] text-white text-lg">and shape a brighter future</p>
          </div>
          <a href="Trainings"><button className="grid ml-[3rem] bg-[#1b3d74] px-[12px] py-[4px] rounded-3xl mt-10 text-white">ENGAGE IN A TRAINING</button></a>
          <a href="Trainings"><button className="grid ml-[4rem] bg-[#1b3d74] px-[12px] py-[4px] rounded-3xl mt-4 text-white ">LEARN A SOFTWARE</button></a>
          <video src="/WhatsApp Video 2025-01-30 at 12.09.14.MP4 " autoPlay muted loop></video>
         </div>

    

    </div>

    {/* for small screens */}
    <div className="hidden tablet:block largeTablet:hidden">
    <div className="text-center pt-[50px] mx-auto">
          <div id="welcome-style">
            <h1 className="mt-50 py-4 text-[35px] font-bold text-white">WELCOME TO FLEXACADEMY</h1>
          </div>
          <div id="through-style">
            <p className="text-[20px] text-white text-lg">It is through learning that we unlock our potentials </p>
            <p className="text-[20px] text-white text-lg">and shape a brighter future</p>
          </div>
          <a href="Trainings"><button className="engage ">ENGAGE IN A TRAINING</button></a>
          <a href="Trainings"><button className="engage ml-8">LEARN A SOFTWARE</button></a>
          <video src="/WhatsApp Video 2025-01-30 at 12.09.14.MP4 " autoPlay muted loop></video>
         </div>
    </div>

    {/* for large screens */}

    <div className="hidden largeTablet:block bigDesktop:hidden">
    <div className="text-center pt-[140px] mx-auto">
          <div id="welcome-style">
            <h1 className="mt-150 py-4 text-[45px] font-bold text-white">WELCOME TO FLEXACADEMY</h1>
          </div>
          <div id="through-style" >
            <p className="text-[25px] text-white text-lg">It is through learning that we unlock our potentials </p>
            <p className="text-[25px] text-white text-lg">and shape a brighter future</p>
          </div>
          <a href="Trainings"><button className="engage ">ENGAGE IN A TRAINING</button></a>
          <a href="Trainings"><button className="engage ml-20">LEARN A SOFTWARE</button></a>
          <video src="/WhatsApp Video 2025-01-30 at 12.09.14.MP4 " autoPlay muted loop></video>
         </div>

    </div>

    {/* for larger screens */}
    <div className="hidden bigDesktop:block">
         <div className="text-center pt-[140px] mx-auto">
          <div id="welcome-style">
            <h1 className="mt-90 py-4 text-[45px] font-bold text-white ">WELCOME TO FLEXACADEMY</h1>
          </div>
          <div id="through-style">
            <p className="text-[25px] text-white text-lg">It is through learning that we unlock our potentials </p>
            <p className="text-[25px] text-white text-lg">and shape a brighter future</p>
          </div>
          <a href="Trainings"><button className="engage ">ENGAGE IN A TRAINING</button></a>
          <a href="Trainings"><button className="engage ml-20">LEARN A SOFTWARE</button></a>
          <video src="/WhatsApp Video 2025-01-30 at 12.09.14.MP4 " autoPlay muted loop></video>
         </div>
    
    </div>
  </div>;
};

export default HeroSection;
