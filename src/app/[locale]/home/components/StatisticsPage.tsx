"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticsPage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger everytime the section becomes visible
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <section
      className="bg-[#000D85] text-white py-16 px-4 md:px-8 lg:px-12"
      ref={ref}
      id="statistics"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <p className="text-lg text-center text-gray-400 max-w-lg mx-auto mb-12">
          Discover the impact we&apso;ve made in helping students achieve their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {/* Stat Card 1 */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {inView && <CountUp start={0} end={150} duration={5} delay={0} />}
            </h1>
            <div className="w-20 h-1 bg-sky-300 mb-4"></div>
            <p className="text-center text-sm md:text-base lg:text-lg">
              Students trained within 7 weeks
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {inView && <CountUp start={0} end={250} duration={5} delay={0} />}
            </h1>
            <div className="w-20 h-1 bg-sky-300 mb-4"></div>
            <p className="text-center text-sm md:text-base lg:text-lg">
              Students sitting for international paper-based exams every month
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {inView && <CountUp start={0} end={100} duration={5} delay={0} />}
            </h1>
            <div className="w-20 h-1 bg-sky-300 mb-4"></div>
            <p className="text-center text-sm md:text-base lg:text-lg">
              Students sitting for international computer-based exams every month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsPage;