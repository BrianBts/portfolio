"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "/public/encabezado-y-tipografia.png";
import { useRouter } from "next/navigation";


const Page = () => {
  const [showHello, setShowHello] = useState(false);
  const [showHowAreYou, setShowHowAreYou] = useState(false);

  const [showSign, setShowSign] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);

  const router = useRouter();

  const handleSecondPage = () => {
    router.push("/second");
  } 

  useEffect(() => {
    setShowHello(true);
    setTimeout(() => {
      setShowHowAreYou(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setShowSign(true);
    setTimeout(() => {
      setShowSignOut(true);
    }, 2000);
  }, []);

  return (
    <section className="bg-backgroundColor w-full h-screen flex flex-col justify-center items-center relative">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showHello ? 1 : 0, y: showHello ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-bold mb-4 text-redePort text-5xl md:text-7xl"
        >
          ¡Hola!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: showHowAreYou ? 1 : 0,
            y: showHowAreYou ? 0 : -20,
          }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-bold text-bluePort text-5xl md:text-7xl "
        >
          ¿Cómo estás?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showSignOut ? 1 : 0, y: showSignOut ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          onClick={handleSecondPage}
          className="font-montserrat font-bold text-redePort text-base md:text-base pt-12 underline cursor-pointer "
        >
          Ingresar
        </motion.p>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center ">
        <Image src={logo} alt="logoImage" width={60} height={60} />
      </div>
    </section>
  );
};

export default Page;
