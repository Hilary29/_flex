import React from "react";
import Image from "next/image";
import SlideInItem from "../about/SlideInItem";
import RegisterButton from "../home/components/RegisterButton";

const Special = () => {
  return (
    <div className="w-[80%] h-auto m-auto pt-[20px]">
      <div className="tablet:hidden block">
        <div className="text-[#373839] text-xl font-medium mt-[0.5px]">
          <h2>SPECIAL TRAININGS</h2>
        </div>
        <div className="">
          <div className="mb-8">
            <Image
              className="rounded-lg"
              src="/artificial.png"
              alt="A ROBOT EXPLAINING"
              width={257}
              height={250}
            />
            <div className="flex w-49 ">
              <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-2 py-1 tracking-tight leading-3">
                ARTIFICIAL INTELLIGENCE
              </button>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
          <div className="mb-8">
            <Image
              className="rounded-lg"
              src="/cyber.png"
              alt="HACKER CODING"
              width={257}
              height={250}
            />
            <div className="flex w-50 ">
              <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-0.0 py-2 tracking-tight leading-3 ">
                CYBERSECURITY AND CRYPTOSYSTEMS
              </button>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
          <div className="mb-8">
            <Image
              className="rounded-lg"
              src="/algorithm.png"
              alt="A SET OF PROGRAMS ON A PC"
              width={257}
              height={250}
            />
            <div className="flex w-50 ">
              <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-2 py-2 tracking-tight leading-3 ">
                ALGORITHMS AND DATA STRUCTURE
              </button>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
          <div className="mb-8">
            <Image
              className="rounded-lg"
              src="/cloud.png"
              alt="CODES ON THE CLOUD"
              width={257}
              height={250}
            />
            <div className="flex w-50 ">
              <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-2 py-2 tracking-tight leading-3 ">
                CLOUD COMPUTING
              </button>
              <RegisterButton>REGISTER</RegisterButton>
            </div>
          </div>
        </div>
      </div>

      <SlideInItem>
        <div className="hidden tablet:block largeTablet:hidden">
          <div className="text-[#373839] text-xl font-medium">
            <h2>SPECIAL TRAININGS</h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 align-items: stretch justify-evenly content-evenly ">
            <div>
              <Image
                className="rounded-lg"
                src="/artificial.png"
                alt="A ROBOT EXPLAINING"
                width={300}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-4 py-2 tracking-tight leading-3 ">
                  ARTIFICIAL INTELLIGENCE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="/cyber.png"
                alt="HACKER CODING"
                width={300}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 ">
                  CYBERSECURITY AND CRYPTOSYSTEMS
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="/algorithm.png"
                alt="A SET OF PROGRAMS ON A PC"
                width={300}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  ALGORITHMS AND DATA STRUCTURE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                className="rounded-lg"
                src="/cloud.png"
                alt="CODES ON THE CLOUD"
                width={300}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  CLOUD COMPUTING
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
          </div>
        </div>
      </SlideInItem>

      {/* for large screens */}

      <SlideInItem>
        <div className="hidden largeTablet:block bigDesktop:hidden">
          <div className="text-[#373839] text-2xl font-medium mt-4">
            <h2>SPECIAL TRAININGS</h2>
          </div>
          <div className="flex justify-around">
            <div>
              <Image
                className="rounded-lg"
                src="/artificial.png"
                alt="A ROBOT EXPLAINING"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="rounded-lg text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-4 py-2 tracking-tight leading-3 ">
                  ARTIFICIAL INTELLIGENCE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/cyber.png"
                alt="HACKER CODING"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 ">
                  CYBERSECURITY AND CRYPTOSYSTEMS
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/algorithm.png"
                alt="A SET OF PROGRAMS ON A PC"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  ALGORITHMS AND DATA STRUCTURE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/cloud.png"
                alt="CODES ON THE CLOUD"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  CLOUD COMPUTING
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
          </div>
        </div>
      </SlideInItem>

      {/* for larger screens */}
      <SlideInItem>
        <div className="hidden bigDesktop:block">
          <div className="join ">
            <h2>SPECIAL TRAININGS</h2>
          </div>
          <div className="flex justify-between">
            <div>
              <Image
                src="/artificial.png"
                alt="A ROBOT EXPLAINING"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-4 py-2 tracking-tight leading-3 ">
                  ARTIFICIAL INTELLIGENCE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/cyber.png"
                alt="HACKER CODING"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-1 py-2 tracking-tight leading-3 ">
                  CYBERSECURITY AND CRYPTOSYSTEMS
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/algorithm.png"
                alt="A SET OF PROGRAMS ON A PC"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  ALGORITHMS AND DATA STRUCTURE
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
            <div>
              <Image
                src="/cloud.png"
                alt="CODES ON THE CLOUD"
                width={257}
                height={250}
              />
              <div className="flex w-64 ">
                <button className="text-[#1b3d74] bg-white border-2 border-[#1b3d74] w-1/2 px-6 py-2 tracking-tight leading-3 ">
                  CLOUD COMPUTING
                </button>
                <RegisterButton>REGISTER</RegisterButton>
              </div>
            </div>
          </div>
        </div>
      </SlideInItem>
    </div>
  );
};

export default Special;
