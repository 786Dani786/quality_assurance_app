import React from "react";
import Head from "next/head";
import { FiAirplay, FiSettings } from "react-icons/fi";

interface Props {
  serviceTitle: string;
  shortDescription: string;
  serId: number
   
}

const ServiceCard: React.FC<Props> = ({
  serviceTitle,
  shortDescription,
   serId
}: Props) => {
  return (
    <section> 
      <div className="card rounded-lg hover:scale-105 duration-500">
      <div className="items-center	justify-items-center shadow-gray-600 p-6 ">
        <div className="flex-col">
          <div className=" block box-border mb-5 border-box text-center mt-2">
            <span className="inline-block text-center  text-7xl service-icons">
              {/* <FiSettings />  */}
            </span>
          </div>
          <div className="text-[#03228F] font-semibold  text-3xl mb-5 service-round">{serId}</div>
          <div className="text-center border-box  mb-2.5 box-border block text-base">
            <h3 className="service_title m-0 text-2xl font-bold">
              {" "}
              {serviceTitle}{" "}
            </h3>
          </div>
          <div className="box-border block text-left">
            <p className="mt-5 mb-0 text-lg font-sans	">
               {shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServiceCard;
