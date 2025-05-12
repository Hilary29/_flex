import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-transparent via-[rgba(0,132,255,0.05)] to-[rgba(0,132,255,0.28)] bg-opacity-10 rounded-sm">
      <div className="flex flex-col md:flex-row mx-auto px-16 lg:px-12 xl:px-32 pt-56  lg:pt-44 ">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-[52px] text-center md:text-left font-extrabold leading-tight tracking-[2px] text-black font-['Roboto'] mb-8 md:mb-20">
            Learn <span className="text-[#0084FF]">languages</span> with joy and
            confidence
          </h1>

          <p className="text-xl md:text-2xl lg:text-[28px] text-justify md:text-left font-bold leading-relaxed tracking-[1px] text-[#173D74] font-['Inter'] max-w-3xl mb-12 md:mb-16">
            Up-to-date courses designed to match the job market. From office
            tools to digital marketing, accounting, and entrepreneurship—learn
            what matters.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link
              href="/trainings"
              className="flex justify-center items-center bg-[#000D85] text-white font-bold text-lg md:text-xl py-3 px-8 rounded-full shadow-md hover:bg-[#000a6b] transition-colors w-full sm:w-auto  "
            >
              Explore Trainings
            </Link>
            <Link
              href="/contact"
              className="flex justify-center items-center bg-white text-[#000D85] font-bold text-lg md:text-xl py-3 px-8 rounded-full shadow-md hover:bg-gray-50 transition-colors w-full sm:w-auto "
            >
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-1/2 relative animate-fade-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Circle background with pulse animation */}
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-sky-200 to-[rgb(80,173,255)]  rounded-full animate-pulse duration-200"></div>
              <div className="absolute inset-0">
                <Image
                  src="/newNero.png"
                  alt="Student with notebook"
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
