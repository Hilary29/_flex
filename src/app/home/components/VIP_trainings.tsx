import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SlideUpContent from "./SlideUpContent";
import RegisterButton from "./RegisterButton";

const VIP_trainings = () => {
  return (
    <div className="w-[80%] h-auto m-auto pt-[20px]">
      <div className="tablet:hidden block">
        <div className="text-[#373839] text-xl font-medium mt-[0.5px]">
          <h2>We offer trainings for everyone</h2>
        </div>
        <div className="text-[#535557] text-lg font-medium mt-2">
          <p>choose the plan that is right for you</p>
        </div>

        <div className="justify-evenly align-items-between content-around ">
          <div className="vip3 mb-[3rem]">
            <h2 className="text-2xl font-medium">VIP TRAININGS</h2>
            <div className="icon-text mb-4">
              <i className="bi bi-1-circle-fill mb-10"> </i>{" "}
              <p>Do you want to book a teacher? </p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-2-circle-fill mb-10"> </i>
              <p> Do you want a training ina super fast mode?</p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-3-circle-fill mb-10"> </i>{" "}
              <p> Do you want any other training?</p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-4-circle-fill mb-10"> </i>{" "}
              <p> Anyother worry?</p>
            </div>
            <RegisterButton>REGISTER</RegisterButton>
          </div>
          <div className="vip4 mb-[8rem] ">
            <h2 className="text-2xl font-medium">SPECIAL TRAININGS</h2>
            <h3 className="text-lg font-base">
              We offer top quality tech related trainings
            </h3>

            <div className="icon-text mb-4">
              <i className="bi bi-1-circle-fill mb-10"> </i>{" "}
              <p>ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-2-circle-fill mb-10"> </i>{" "}
              <p>CYBERSECURITY AND CRYPTOSYSTEMS</p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-3-circle-fill mb-10"></i>{" "}
              <p>ALGORITHMS AND DATA STRUCTURE</p>
            </div>
            <div className="icon-text mb-4">
              <i className="bi bi-4-circle-fill mb-10"> </i>{" "}
              <p>CLOUD COMPUTING</p>
            </div>

            <RegisterButton>REGISTER</RegisterButton>
          </div>
        </div>
      </div>

      <SlideUpContent>
        <div className=" hidden tablet:block largeTablet:hidden">
          <div className="text-[#373839] text-xl font-medium mt-[0.5px]">
            <h2>We offer trainings for everyone</h2>
          </div>
          <div className="text-[#535557] text-lg font-medium mt-2">
            <p>choose the plan that is right for you</p>
          </div>

          <div className="flex justify-evenly align-items-between content-around ">
            <div className="vip3 mb-[8rem] rounded-lg ">
              <h2 className="text-2xl font-medium">VIP TRAININGS</h2>
              <div className="icon-text mb-4">
                <i className="bi bi-1-circle-fill mb-10"> </i>{" "}
                <p>Do you want to book a teacher? </p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-2-circle-fill mb-10"> </i>
                <p> Do you want a training ina super fast mode?</p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-3-circle-fill mb-10"> </i>{" "}
                <p> Do you want any other training?</p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-4-circle-fill mb-10"> </i>{" "}
                <p> Anyother worry?</p>
              </div>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
            <div className="vip4 mb-[8rem] rounded-lg ">
              <h2 className="text-2xl font-medium">SPECIAL TRAININGS</h2>
              <h3 className="text-lg font-base">
                We offer top quality tech related trainings
              </h3>

              <div className="icon-text mb-4">
                <i className="bi bi-1-circle-fill mb-10"> </i>{" "}
                <p>ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-2-circle-fill mb-10"> </i>{" "}
                <p>CYBERSECURITY AND CRYPTOSYSTEMS</p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-3-circle-fill mb-10"></i>{" "}
                <p>ALGORITHMS AND DATA STRUCTURE</p>
              </div>
              <div className="icon-text mb-4">
                <i className="bi bi-4-circle-fill mb-10"> </i>{" "}
                <p>CLOUD COMPUTING</p>
              </div>

              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
        </div>
      </SlideUpContent>

      {/* for large screens */}

      <div className="hidden largeTablet:block bigDesktop:hidden">
        <SlideUpContent>
          <div className="join ">
            <h2>We offer trainings for everyone</h2>
          </div>
          <div className="practical_softwares">
            <p>choose the plan that is right for you</p>
          </div>

          <div className="vip ">
            <div className="vip1 rounded-lg ">
              <h2>VIP TRAININGS</h2>
              <div className="icon-text">
                <i className="bi bi-1-circle-fill"> </i>{" "}
                <p>Do you want to book a teacher? </p>
              </div>
              <div className="icon-text">
                <i className="bi bi-2-circle-fill"> </i>
                <p> Do you want a training ina super fast mode?</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-3-circle-fill"> </i>{" "}
                <p> Do you want any other training?</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-4-circle-fill"> </i> <p> Anyother worry?</p>
              </div>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
            <div className="vip2 rounded-lg ">
              <h2>SPECIAL TRAININGS</h2>
              <h3>We offer top quality tech related trainings</h3>

              <div className="icon-text">
                <i className="bi bi-1-circle-fill"> </i>{" "}
                <p>ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-2-circle-fill"> </i>{" "}
                <p>CYBERSECURITY AND CRYPTOSYSTEMS</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-3-circle-fill"></i>{" "}
                <p>ALGORITHMS AND DATA STRUCTURE</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-4-circle-fill"> </i> <p>CLOUD COMPUTING</p>
              </div>

              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
        </SlideUpContent>
      </div>

      {/* for larger screens */}
      <div className="hidden bigDesktop:block">
        <SlideUpContent>
          <div className="join ">
            <h2>We offer trainings for everyone</h2>
          </div>
          <div className="practical_softwares">
            <p>choose the plan that is right for you</p>
          </div>
          <div className="vip ">
            <div className="vip1 rounded-lg " id="youdo">
              <h2>VIP TRAININGS</h2>
              <div className="icon-text">
                <i className="bi bi-1-circle-fill"> </i>{" "}
                <p>Do you want to book a teacher? </p>
              </div>
              <div className="icon-text">
                <i className="bi bi-2-circle-fill"> </i>
                <p> Do you want a training ina super fast mode?</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-3-circle-fill"> </i>{" "}
                <p> Do you want any other training?</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-4-circle-fill"> </i> <p> Anyother worry?</p>
              </div>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
            <div className="vip2 rounded-lg" id="doyou">
              <h2>SPECIAL TRAININGS</h2>
              <h3>We offer top quality tech related trainings</h3>

              <div className="icon-text">
                <i className="bi bi-1-circle-fill"> </i>{" "}
                <p>ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-2-circle-fill"> </i>{" "}
                <p>CYBERSECURITY AND CRYPTOSYSTEMS</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-3-circle-fill"></i>{" "}
                <p>ALGORITHMS AND DATA STRUCTURE</p>
              </div>
              <div className="icon-text">
                <i className="bi bi-4-circle-fill"> </i> <p>CLOUD COMPUTING</p>
              </div>

              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
        </SlideUpContent>
      </div>
    </div>
  );
};

export default VIP_trainings;
