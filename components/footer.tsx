import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook, 
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <div className="w-full footer-xi bg-cover">
      <div className="lg:container lg:p-0 lg:py-10 p-10">
        <div className="max-[640px]:items-center md:flex lg:flex-row pl-3 flex-col">
          <div className="flex flex-col flex-1">
            {/* <Image
              width={200}
              height={2}
              src="/logo-navbar.jpeg"
              alt="Company Logo"
              className="h-10"
            /> */}
            <p className="font-bold">Musmotech</p>
            <div className="my-6 shrink">
              <p className="text-lg font-semibold open-sans">
                {
                  "Delivering your software goals with end-to-end QA solutions and expert advice. "
                }
              </p>
            </div>

            <div className="flex">
              <a href="#" target="_blank" className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiFacebook  className="text-lg"/>
              </a>
              <a href="#" target="_blank" className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiTwitter  className="text-lg"/>
              </a>
              <a href="#" target="_blank" className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiLinkedin className="text-lg" />
              </a>
            </div>
          </div>
          <div className="max-[640px]:items-center md:flex flex-col grow lg:ml-10 lg:my-0 my-10 flex-1 ">
            <p className="text-xl text-black font-semibold mb-5">
              Useful Links
            </p>
            <Link href= "/" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              Home
            </Link>
            <Link href= "/about" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              About
            </Link>
            <Link href= "/services" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              Services
            </Link>
          </div>
          <div className="max-[640px]:items-center md:flex flex-col grow flex-1 ">
            <p className="text-xl text-black font-semibold mb-5">
              Contact Info
            </p>

            <div className="flex items-center ">
              <FiMapPin className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">
                2nd Floor, Plot No# 71,  Chaklala Scheme 3,
                Rawalpindi
              </span>
            </div>

            <div className="flex items-center my-3 ">
              <FiPhone className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">+00 (00) 000-0000</span>
            </div>
            <div className="flex items-center ">
              <FiMail className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">info@musmotech.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
