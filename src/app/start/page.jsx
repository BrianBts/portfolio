"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "/public/optimized_encabezado-tipografico.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const [showHello, setShowHello] = useState(false);
  const [showHowAreYou, setShowHowAreYou] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowHello(true);
    setTimeout(() => {
      setShowHowAreYou(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2500);
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
      </div>

      <div className="absolute bottom-20 md:bottom-16  left-1/2 transform -translate-x-1/2 text-center ">
        <Image src={logo} alt="logoImage" width={60} height={60} />
      </div>
    </section>
  );
};

export default Page;
