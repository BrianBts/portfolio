import React from "react";
import bigLogo from "/public/encabezado-tipografico.png";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Start() {
  return (
    <div className="flex items-center justify-center pt-[50%] sm:pt-28 ">
      <div className="text-center h-[80vh]">
      <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 7,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
            >
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
        </motion.div>
      </div>
    </div>
  );
}
