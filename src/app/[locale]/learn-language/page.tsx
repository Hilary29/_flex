import React from "react";
import Header2 from "../home/components/Header2";
import Footer from "../home/components/Footer";
import LearnLanguage from "../home/components/LearnLanguage";

const Page = () => {
  return (
    <div>
      <Header2 />
      <div className="pt-28">
        <LearnLanguage/>
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;
