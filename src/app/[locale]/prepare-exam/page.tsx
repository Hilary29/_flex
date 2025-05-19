import React from "react";
import Header2 from "../home/components/Header2";
import PrepareExam from "../home/components/PrepareExam";
import Footer from "../home/components/Footer";

const Page = () => {
  return (
    <div>
      <Header2 />
      <div className="pt-28">
        <PrepareExam />
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;
