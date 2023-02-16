import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AboutForm from "../components/aboutform";
import FooterBanner from "../components/footerbanner";
import HomeBanner from "../components/homeBanner";
import OurProcess from "../components/OurProcess";
import ServiceCard from "../components/ServiceCard";
import WhychooseUS from "../components/whychooseus";
import Workprocess from "../components/Workprocess";
import services from "./json/services.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Software Quality Assurance App: Best Quality Assurance Services
          Provided To Our customers
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBanner />

      {/* Services Section starts here */}
      <section>
        <div className="container ">
          <div className="h-screen flex flex-col items-center justify-evenly">
          <div className="heading-area text-center">
            <div className="sub-title">
              <span className="font-semibold">SERVICES</span>
            </div>
            <div className="title">
              <h3 className="text-3xl font-semibold">
                We Are Offering All Kinds of IT Solutions Services
              </h3>
            </div>
          </div>
          <div className="max-[640px]:grid max-[640px]:grid-cols-1 max-[820px]:grid max-[820px]:grid-cols-2  lg:grid lg:grid-cols-3 gap-10  ">
            {services.slice(0, 3).map((item, idx) => (
              <ServiceCard key={idx} {...item}></ServiceCard>
            ))}
          </div>
          <div className=" text-center ">
            <Link href="/services" className="bg-gradient-to-r from-[#f24c1a] to-[#f27c1e] hover:bg-gradient-to-r from-[#f27c1e] to-[#f24c1a] p-6 text-white font-semibold text-xl  rounded-full">
              View All Services
            </Link>
          </div>
          </div>
          
        </div>
      </section>
      {/* Services section ends here */}
      <section>
        {/* <div>
       <OurProcess />
       </div> */}
      </section> 
        <WhychooseUS /> 

      <div className="">
        <Workprocess />
      </div>
      <div>
        <AboutForm />
      </div>
      <div className="">
        {/* <FooterBanner /> */}
      </div>
      {/* <main className={styles.main}>
     
      </main> */}
    </div>
  );
}