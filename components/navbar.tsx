import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiPhone,
  FiMail,
  FiLinkedin
} from "react-icons/fi";
import { TfiClose, TfiLocationPin } from "react-icons/tfi";
import { SideBar } from "./sidebar";
import Link from "next/link";

export const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuStatic, setShowMenuStatic] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setShowMenuStatic(window.scrollY > 70);
    });
  }, []);
  return (
    <div
    // style={{height: "150px"}}
      className={`bg-white text-black w-full  z-30 right-0 pb-10  pt-5${
        showMenuStatic ? "fixed top-0 left-0" : ""
      }`}
    >
      <div className="container lg:container lg:mx-auto lg:block hidden ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            {/* <Image
              src="/images/logo.png"
              className=""
              alt="company logo"
              width={300}
              height={150}
            />
  */}
          <p className="font-semibold text-lg">Musmotech</p>         
           </div>

          <div className="flex flex-row justify-center items-center">
            <div className="pt-5 font-semibold">
            <NavBarButton href="/"className="text-[#fff] font-semibold">Home</NavBarButton>
            <NavBarButton href="/about"className="text-black font-semibold">About</NavBarButton>
            <NavBarButton href="/services"className="text-black font-semibold">Services</NavBarButton>
            <NavBarButton href="/contact" className="text-black font-semibold">Contact</NavBarButton>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex lg:hidden justify-between p-3 items-center`}>
        <Image
        
          src="/images/logo.png"
          className="mr-10"
          alt="company logo"
          width={300}
          height={150}
        />
        
        <h3 className="text-white">Componay Logo</h3>
        <button
          className="bg-transparent"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiMenu className="text-white text-2xl" />
        </button>
      </div>

      <SideBar
        open={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        contentPosition="left"
      >
        <div className="">
        <Image
              src="/images/logo.png"
              className=" mr-10"
              alt="company logo"
              width={300}
              height={150}
            /> 
        </div>
        <button
          className="absolute top-0 m-3 right-0 p-3 bg-indigo-600 text-cyan-500 rounded-lg "
          onClick={() => setShowMenu(!showMenu)}
        >
          <TfiClose className="font-extrabold text-2xl" />
        </button>

        <div className="flex flex-col items-stretch divide-y font-semibold  ">
          <Link className="py-3 text-[#fff]" href="/">Home</Link>
          <Link className="py-3 text-black" href="/about">About</Link>
          <Link className="py-3 text-black" href="/services">Services</Link>
          <Link className="py-3 text-black" href="/contact">Contact</Link>
        </div>

        <div className="flex flex-col mt-20">
          <div className="flex items-start">
            <TfiLocationPin
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
              strokeWidth={0.6}
            />
            <div className="flex flex-col">
              <span className="font-bold">Address</span>
              <span>
                2nd Floor, Plot No# 71, Commercial Area, Chaklala Scheme 3,
                Rawalpind
              </span>
            </div>
          </div>

          <div className="flex items-start my-5">
            <FiPhone
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
            />
            <div className="flex flex-col">
              <span className="font-bold">Phone</span>
              <span>+92 (51) 844-2705</span>
            </div>
          </div>

          <div className="flex items-start my-5">
            <FiMail
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
            />
            <div className="flex flex-col">
              <span className="font-bold">Email</span>
              <span>info@musmotech.com</span>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

const NavBarButton: React.FC<any> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="cursor-pointer font-bold text-sm bg-transparent text-[#f4701d] hover:text-[#98e4b6] py-5 px-5"
    >
      {children}
    </a>
  );
};
