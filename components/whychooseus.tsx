import Image from "next/image";
import React from "react";

const WhychooseUS: React.FC = () => {
  return (
    <>
      <section className="h-screen">
        <div className="container flex flex-col items-center justify-around">
          <div className="grid grid-rows-1">
            <div className="max[768px]:grid max[768px]:grid-cols-1 lg:grid lg:grid-cols-2 gap-3">
              <div className="col-span-1">
                <div className="img-area p-5">
                  <Image
                    src="images/whychooseus.jpg"
                    alt="Why choose Xillixtech"
                  ></Image>
                </div>
              </div>
              <div className="col-span-1">
                <div className="content-area p-5">
                  <div className="headings">
                    <div className="sub-title">
                      <span>WHAT TO EXPECT</span>
                    </div>
                    <div className="title">
                      <h3>An expert QA team</h3>
                    </div>
                  </div>
                  <div className="progress-area">
                    <div className="mt-10 mb-7">
                      <p className="mt-5 mb-0 text-lg font-sans	">
                        Want to develop software that`&apos;`s under budget and on
                        time? OnPath`&apos;`s team of QA engineers provide skilled,
                        data-driven quality assurance expertise for your web and
                        mobile applications including IoT products and apps.
                      </p>
                      <p className="mt-5 mb-0 text-lg font-sans	">
                        As experienced remote workers in this time of Covid,
                        we`&apos;`re perfectly positioned to meet your needs, no matter
                        where you are based.
                      </p>
                      <p className="mt-5 mb-0 text-xl font-sans	">
                        Looking for a long-term engagement or short-term surge
                        testing? Find out if we are right for you.
                      </p>
                      <div className="mt-10">
                        <button className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-xl  rounded-full">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhychooseUS;
