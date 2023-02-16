import Link from "next/link";
import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <>
      <div className="bg-[#98e4b6] bg-cover bg-no-repeat p-4">
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[480px]:block md:grid md:grid-cols-3 flex justify-items-center items-center">
              <div className="col-span-2">
                <div className="pt-5 pb-5 mt-10 ">
                  <h3 className="max-[480px]:text-2xl max-[480px]:pb-3 text-white md:mt-5 mb-0 text-lg font-sans	">
                    Grow Your Business and Build Your Website <br /> or Software
                    With Us.
                  </h3>
                </div>
              </div>
              <div className="col-span-1">
                <div className="max-[480px]:pb-5 pt-3">
                  <Link className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-xl  rounded-full" href="/contact">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
