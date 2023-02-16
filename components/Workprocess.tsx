import React from "react";

const Workprocess: React.FC = () => {
  return (
    <section >
      <div className="w-full h-full ">
        <div className=" bg-no-repeat w-full h-full pt-28 pr-0 pl-0 pb-28 ">
          <div className="container">
            <div className="grid grid-rows-1">
              <div className="heading text-center ">
                <div className="sub-title">
                  <span>Why work with us</span>
                  <h3 className="title text-black">How we Works</h3>
                </div>
              </div>
              <div>
              <div className=" max-[640px]:grid max-[640px]:grid-cols-1 max-[768px]:grid max-[768px]:grid-cols-1   lg:grid lg:grid-cols-3  gap-1  ">
                <div className="left-side px-10 py-20 col-span-1">
                  <div className="bg-[#f29900] bg-cover   bg-no-repeat w-full h-full   px-10 py-20">
                    <div className="sub-title">
                      <p className="text-2xl font-semibold font-normal uppercase text-white">
                        Working Process
                      </p>
                    </div>
                    <div className="title ">
                      <h1 className="max-[480px]:text-3xl mt-0 mr-2.5  mb-8 ml-0 text-white md:text-5xl relative font-semibold">
                        Our Process - How We Work For Our Clients.
                      </h1>
                    </div>
                    <div className="button-area">
                      {" "}
                      <div className="flex items-center justify-start">
                      <a className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-xl  rounded-full">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="sm:grid sm:grid-cols-1  md:grid md:grid-cols-2">
                    <div className=" mt-20">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">
                            1.
                          </span>
                        </div>
                        <div className="p-title">
                          <h3 className="sm:text-black md:text-black mt-0 mr-3   ml-0 title  mb-0">
                            Informed expertise
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            We bring the latest QA testing developments and
                            technical skills into our work.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-20">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold text-5xl">
                            2.
                          </span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Clear communication
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            Expect perceptive recommendations and
                            straightforward advice from our team.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-10">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">
                            3.
                          </span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Timely delivery
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	">
                            From ongoing deadlines to meeting release dates, we
                            stay on point.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-10">
                      <div className="right-side  px-12 py-0">
                        <div className="p-number">
                          <span className="text-[#03228F] font-semibold  text-5xl">
                            4.
                          </span>
                        </div>
                        <div className="p-title">
                          <h3 className="text-black mt-0 mr-3 mb-1 ml-0 title">
                            Flexible support
                          </h3>
                        </div>
                        <div className="p-description">
                          <p className="sm:text-black md:text-black text-xl font-sans	 ">
                            We can support you on short projects, long projects,
                            and multiple engagements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
