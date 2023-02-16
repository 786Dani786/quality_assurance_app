import Image from "next/image";
import React from "react";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import AboutForm from "../components/aboutform";
import BreadCrumb from "../components/BreadCrumb";
import OurProcess from "../components/OurProcess";
import WhychooseUS from "../components/whychooseus";
import Workprocess from "../components/Workprocess";

const AboutUs: React.FC = () => {
  return (
    <section>
      <BreadCrumb pageTitle="About Us"></BreadCrumb>

      <div className="mt-4 mb-4">
        <div className="container">
          <div className="grid grid-rows-1">
            <div className="max-[768px]:grid max-[768px]:grid-cols-1 lg:grid lg:grid-cols-2">
              <div className="col-span-1">
                <div className="p-10 flex flex-col justify-evenly h-full">
                  <div>
                  <div className="sub-title">
                    <span>Our Mission</span>
                  </div>
                  <div className="title">
                    <h3>Quality as a Service</h3>
                  </div>
                  </div>
                  <div className="description">
                    {" "}
                    <p className="text-lg font-semibold text-gray-500">
                      {" "}
                      Get expert-driven quality assurance that you can rely on
                      throughout a project. We use on- and offshore engineers to
                      give our clients timely and dedicated testing support.
                    </p>
                    <p className="mt-5 text-lg font-normal text-black">
                      At OnPath Testing, we derive deep satisfaction from
                      knowing we are performing a job well done, while also
                      giving back to the QA community by offering resources and
                      participating in industry discussions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="p-4">
                  <Image alt="xillixtech " src="/images/aboutpage.jpg"></Image>
                </div>
              </div>
            </div>

            {/* Row 2  Starts*/}
            <div className="max-[768px]:grid max-[768px]:grid-cols-1 lg:grid lg:grid-cols-2">
              <div className="col-span-1">
                <div className="p-4">
                  <Image alt="xillixtech " src="/images/aboutpage2.jpeg"></Image>
                </div>
              </div>

              <div className="col-span-1">
                <div className="p-10 p-10 flex flex-col justify-evenly h-full">
                  <div>
                  <div className="sub-title">
                    <span>WHAT WE VALUE</span>
                  </div>
                  <div className="title">
                    <h3>Our principles of work</h3>
                  </div>
                  </div>
                  <div className="description">
                    {" "}
                    <p className="text-lg font-semibold text-gray-500">
                      {" "}
                      Quality is our top priority. We are dedicated to building
                      software that works well, and that works as intended. That
                      goal is achieved by hitting milestones throughout the
                      process. By working with us, you can expect:
                    </p>
                   
                  </div>
                  <div >
                  <ul style={{lineHeight: '50px'}}>
                      <li className="flex items-center h-full"><FiArrowRight className="mr-2 font-semibold text-cyan-500" /> Excellent testing strategy and execution</li>
                      <li className="flex items-center h-full"><FiArrowRight className="mr-2 font-semibold text-cyan-500" />Clear communications from a QA manager</li>
                      <li className="flex items-center h-full"><FiArrowRight className="mr-2 font-semibold text-cyan-500" />Responsive engineering resources</li>
                      <li className="flex items-center h-full"><FiArrowRight className="mr-2 font-semibold text-cyan-500" />Expert process and tools management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2 Ends here */}

            {/* Row 3 Starts Here  */}
            <div className="max-[768px]:grid max-[768px]:grid-cols-1 lg:grid lg:grid-cols-2 mt-15">
              
            <div className="col-span-1">
                <div className="p-10  flex flex-col justify-evenly h-full">
                 <div>
                 <div className="sub-title">
                    <span>The Musmotech team</span>
                  </div>
                  <div className="title">
                    <h3>Setting the standard for remote QA services</h3>
                  </div>
                 </div>
                  <div className="description">
                    {" "}
                    <p className="text-2xl font-semibold">
                      {" "}
                      As a remote working business, we choose from a global
                      talent pool of quality assurance engineers and managers.
                      We find and hire the top engineers around the world to
                      join our team, from functional testers and test team
                      managers, to experienced engineers with specialized
                      technical knowledge in automation, performance, mobile,
                      and more. 
                    </p>
                    <p className="mt-3 text-2xl">
                      As a company, we aim to build a diverse and inclusive
                      culture. Our teams are well-supported in ongoing skills
                      development, and we like to give back to our communities
                      with quarterly donations to local charities.
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="col-span-1">
                <div className="p-4">
                  <Image alt="xillixtech " src="/images/aboutpage1.jpeg"></Image>
                </div>
              </div>

              
            </div>
            {/* Row 3 ends here  */}

          </div>
        </div>
      </div>
      <div>
        <OurProcess />
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutUs;
