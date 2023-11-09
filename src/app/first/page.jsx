import React from "react";
import bigLogo from "/public/encabezado-tipografico.png";
import Image from "next/image";

const page = () => {
  return (
    <section className="bg-backgroundColor w-full h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <Image
          src={bigLogo}
          alt="logoImage"
          width={1100}
          className="mb-4 sm:mb-0"
        />
      </div>
      <div className="w-full p-4 sm:p-8 flex justify-center items-center font-montserrat font-bold sm:pl-72 sm:mt-[-20px]">
        <p className="text-redePort text-sm mt-[-80px] sm:text-2xl sm:mt-[-120px] w-auto ">
          DESARROLLADOR FRONT-END.
        </p>
        <p className="text-bluePort text-sm mt-[-80px] sm:text-2xl sm:mt-[-120px] mx-3 w-auto">
          DISEÑADOR GRÁFICO.
        </p>
      </div>
    </section>
  );
};

export default page;