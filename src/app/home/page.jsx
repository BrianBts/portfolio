import Image from "next/image";
import React from "react";
import logo from "/public/encabezado-y-tipografia.png";

const page = () => {
  return (
    <section className="bg-backgroundColor w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="font-montserrat font-bold mb-4 text-redePort text-5xl md:text-7xl">
            ¡Hola!
          </p>
          <p className="font-montserrat font-bold text-bluePort text-5xl md:text-7xl">
            ¿Cómo estás?
          </p>
        </div>
      </div>
    
      <div className="text-center">
        <Image src={logo} alt="logoImage" width={100} height={100}  className="pb-5"/>
      </div>
    </section>
  );
};

export default page;
