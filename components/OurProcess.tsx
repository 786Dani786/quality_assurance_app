import Image from "next/image";
import React from "react";

export default function OurProcess() {
  return (
    <section style={{minHeight: "50vh", marginTop: "100px"}}>
      <div className="container">
      <div className="grid grid-rows mt-5 mb-15">
      <div className="heading-area   mb-5 pt-5 pb-5">
        <p className="sub-title text-center">Our Process</p>
        <p className="title text-center">Our process</p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {/* Col1 Starts here  */}
        <div className="grid-col-span-1">
          <div className="bg-gradient-to-r from-[#f69f6b] to-[#fbbb6a]     z-30  p-10  ">
            <div className="mt-2 mb-2 ">
              <Image src="" alt="" />
            </div>
            <h1 className="font-semibold text-3xl text-white  ">Plan</h1>
          </div>
        </div>
        {/* Col2 starts here */}
        <div className="grid-col-span-1">
          <div className="bg-gradient-to-r from-[#559cea] to-[#6ba3cb]     z-30  p-10  ">
            <div className="mt-2 mb-2 ">
              <Image src="" alt="" />
            </div>
            <h1 className="font-semibold text-3xl text-white  ">Automate</h1>
          </div>
        </div>
        {/* Col3 starts here  */}
        <div className="grid-col-span-1">
          <div className="bg-gradient-to-r from-[#f954a1] to-[#f2a1c6]     z-30  p-10  ">
            <div className="mt-2 mb-2 ">
              <Image src="" alt="" />
            </div>
            <h1 className="font-semibold text-3xl text-white  ">Monitor</h1>
          </div>
        </div>
        {/* col4 starts here  */}
        <div className="grid-col-span-1">
          <div className="bg-gradient-to-r from-[#a040f3] to-[#a86ae3]     z-30  p-10  ">
            <div className="mt-2 mb-2 ">
              <Image src="" alt="" />
            </div>
            <h1 className="font-semibold text-3xl text-white  ">Check</h1>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
