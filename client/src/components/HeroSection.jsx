import React from "react";
import bookSvg from "../images/undraw_bibliophile_re_xarc (3).svg";

const HeroSection = () => {
  return (
    <>
      <div className="bg-darkslategray">
        <div className="container mx-auto md:py-8 flex-column md:flex md:justify-between items-center bg-darkslategray">
          <div className="pt-16 md:py-8 md:w-2/4">
            <img src={bookSvg} className="w-1/2 mx-auto" alt="" />
          </div>
          <div className="mx-auto py-16 w-full md:py-0 md:w-2/4">
            <h1 className="font-poppins text-paleturquoise text-3xl md:text-4xl w-11/12 md:w-4/5 text-center mx-auto">
              "Books are uniquely portable magic"
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
