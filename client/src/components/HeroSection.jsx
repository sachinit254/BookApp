import React from "react";
import bookSvg from "../images/undraw_bibliophile_re_xarc (1).svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex-column  md:flex justify-between items-center bg-gray-100">
        <div className="pt-14 md:py-0 md:w-2/4">
          <img src={bookSvg} className="w-1/2 mx-auto" alt="" />
        </div>
        <div className="mx-auto py-24 md:py-0 md:w-2/4">
          <h1 className="font-poppins text-4xl w-4/5 text-center mx-auto">
            "Books are uniquely portable magic"
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
