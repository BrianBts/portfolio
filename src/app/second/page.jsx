import React from "react";
import bigLogo from "/public/encabezado-tipografico.png";
import Image from "next/image";
import Navbar from "../components/page";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Page = () => {
  return (
    <div className="relative bg-backgroundColor ">
      <Navbar />
      <div className="flex items-center justify-center pt-[50%] sm:pt-28 ">
        <div className="text-center h-[80vh]">
          <Image
            src={bigLogo}
            alt="logoImage"
            width={1100}
            className="mb-4 sm:mb-0"
          />
          <div className="text-[15px] pl-24 mt-[-38px] sm:flex sm:text-3xl sm:mt-[-50px] sm:pl-36 font-montserrat font-bold">
            <p className="text-redePort mx-3">DESARROLLADOR FULL-STACK.</p>
            <p className="text-bluePort mx-3">DISEÑADOR GRÁFICO.</p>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Page;
