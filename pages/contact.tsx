import Head from "next/head";
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { FiArrowDownRight, FiArrowRight, FiMail, FiMapPin, FiPhone, FiSmartphone } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <>
      <BreadCrumb pageTitle="Contact Us"></BreadCrumb>

      <div className="container mt-14 mb-14">
        <div className="max-[480px]:grid p-0  md:grid-col-2 flex  m-5  mt-14">
          <div className="  max-[480px]:w-full w-1/3 md:w-fit  mt-14 ">
            <div className=" w-full h-16 z-30 right-0  ... p-4 rounded h-auto">
              <div className="flex flex-col pt-16 pr-8 pb-8 pl-12 md:pl-4">
                <div className="relative mb-5"> 
                  <h1 className="mt-0 mr-2.5  mb-8 ml-0 text-3xl relative font-bold text-[#08083d]">
                    Contact us and we`&apos;`ll get back to you within one business
                    day.
                  </h1>
                </div>
                <div className="">
                  <ul>
                    
                    <div className="flex items-center w-100"> 
                      <li className="text-[#f27c1e] font-bold  text-[#08083d] text-2xl mt-2"> 
                      
                      We want to hear from you if:</li></div>

                      <div className="flex  items-center w-100">
                    <span className="mt-2"><FiArrowRight  color="#f27c1e"/> </span>
                      <li className="font-semibold  text-[#08083d] text-lg mt-2"> 
                      
                      You`&apos;`re interested in our QA testing services.</li></div>

                      <div className="flex items-center w-100">
                    <span className="mt-2"><FiArrowRight  color="#f27c1e"/> </span>
                      <li className="font-semibold  text-[#08083d] text-lg mt-2"> 
                      
                      You want to pitch a product or service to us.</li></div>

                      <div className="flex items-center w-100">
                     <span className="mt-2"><FiArrowRight  color="#f27c1e"/> </span>
                      <li className="font-semibold  text-[#08083d] text-lg mt-2"> 
                      
                      You would like to work at OnPath Testing.</li></div>
                      <div className="flex items-center w-100">
                     <span className="mt-2"><FiArrowRight  color="#f27c1e"/> </span>
                      <li className="font-semibold  text-[#08083d] text-lg mt-2"> 
                      
                      You have a question about QA and need some info.</li></div>
                      <div className="flex items-center w-100">
                     <span className="mt-2"><FiArrowRight  color="#f27c1e"/> </span>
                      <li className="font-semibold  text-[#08083d] text-lg mt-2"> 
                      
                      There`&apos;`s something else that we can help with.</li></div> 
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form start */}

          <div className=" max-[480px]:w-full w-2/3 contact-us-form mt-14  sm:ml-0 lg:ml-32 md:ml-2">
            <div className="block border-box mb-2">
              <p
                
                className=" text-sm font-bold uppercase text-[#f27c1e]"
              >
                GET IN TOUCH
              </p>
              <h2 className="mt-0 mr-3 mb-1 ml-0 title">Fill The Form Below</h2>
            </div>
            <div className="grid gap-4 mb-6 md:grid cols-2">
              <form>
                <div className="">
                  <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="mb-6">
                      <input
                        type="text"
                        id="user_fname"
                        className="rounded  bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="mb-6 text-right">
                      <input
                        type="text"
                        id="user_lname"
                        className="rounded bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full "
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
                    <div className="mb-6">
                      <input
                        type="number"
                        id="user_pnum"
                        className="rounded bg-gray-100 w-11/12 p-4 focus:border-0   max-[480px]:w-full"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="mb-6 text-right">
                      <input
                        type="text"
                        id="user_email"
                        className="rounded bg-gray-100 w-11/12 p-4  focus:border-0  max-[480px]:w-full"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <textarea
                      rows={3}
                      cols={20}
                      className="rounded bg-gray-100 w-24 p-4 focus:border-0  max-[480px]:w-full md:w-full"
                      placeholder="Message ..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-start">
                    <button className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-lg  rounded-full">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Form Ends  */}
        </div>
        {/* Container Ends here */}
      </div>

      {/* Map */}

      <div className="w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d425456.61150342284!2d73.0921755!3d33.5824706!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfecb2bfb441f3%3A0x515ef902403f7d64!2sChaklala%20Scheme%203%20Chaklala%20Cantt.%2C%20Rawalpindi%2C%20Punjab!3m2!1d33.5824706!2d73.0921755!5e0!3m2!1sen!2s!4v1669304643728!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
