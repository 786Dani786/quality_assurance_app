import Image from "next/image";
import React from "react";

const AboutForm: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#559cea] to-[#7daadb]">
        <div className="bg-[url('/images/about-form.jpeg')] bg-no-repeat  pt-10 pb-10">
          <div className="heading-area text-center">
            <h2 className="text-5xl mb-10 font-semibold   text-white">
              Request a Free Consultaion
            </h2>
          </div>
          <div>
            <div className="container">
              <div className="max-[768px]:bg-transparent  lg:bg-white mt-5 ">
                <div className="max-[640px]:grid max-[640px]:grid-cols-1 max-[768px]:grid max-[768px]:grid-cols-1  lg:grid lg:grid-cols-2 gap-0">
                  <div className="max-[640px]:hidden col-span-1">
                    <div className=" img-area p-10">
                      <Image
                        alt="xillixtech"
                        className="w-fit"
                        src="/images/free-consultation.jpg"
                      />
                    </div>
                  </div>

                  <div className="max-[480px]:bg-transparent col-span-1">
                    <div className=" max-[768px]:p-10 max-[768px]:bg-transparent  form lg:bg-white p-24 w-75">
                      <div className="flex flex-col items-center justify-evenly  h-full">
                        <div className="sub-title">
                          <span className="max-[768px]:text-white max-[768px]:text-3xl max-[640px]:pb-4 lg:text-2xl">
                            {" "}
                            Get a free consultation
                          </span>
                        </div>
                        <div>
                          <p>
                            Not sure what you need? Set up a free consultation
                            and we`&apos;`ll help you uncover gaps in your process and
                            expose areas for improvement.
                          </p>
                        </div>
                        <div className="mt-10">
                          <button className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-xl  rounded-full">
                            Speak To Expert
                          </button>
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
    </>
  );
};

export default AboutForm;
