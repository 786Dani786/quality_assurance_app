import Image from "next/image";
import React from "react";

const HomeBanner: React.FC = () => {
  return (
    <div className="h-screen w-full bg-[url('/images/bg-background.jpg')] bg-no-repeat bg-contain overflow-hidden">
      <div className="h-full bg-gradient-to-r from-[transparent] to-[#7fb2ea] bg-no-repeat bg-cover ">
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[768px]:grid max-[768px]:grid-cols-1   lg:grid lg:grid-cols-2 h-full flex justify-items-center items-center">
              <div className="max-[768px]:col-span-1  md:col-span-1">
                <div>
                  <div className="flex flex-col items-start h-50 justify-between max-[768px]:p-6">
                    <div className="mt-4">
                      <h2
                        className="max-[480px]:text-3xl md:text-5xl leading-10 font-bold"
                        style={{ lineHeight: "60px" }}
                      >
                        Software QA & Testing Services <br /> with{" "}
                        <span className="text-[#f24c1a] ">
                          Musmotech Testing Solutions
                        </span>{" "}
                        <br />
                      </h2>
                    </div>
                    <div className="mt-4">
                      <p className="max-[480px]:text-xl text-3xl  mt-4 font-semibold leading-10">
                        Delivering your software goals with end-to-end QA
                        solutions and expert advice.
                      </p>
                    </div>
                    <div className="mt-6 pt-4">
                      <button className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-bold text-2xl  rounded-full">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-[768px]:hidden lg:col-span-1">
                <div className="p-10">
                  <div className=" z-1 relative">
                    <div className="bg-[url('/images/homebanner.jpg')]   bg-no-repeat flex relative">
                      <Image src="/images/homebanner.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
