import React, { useState, useEffect } from "react";
import bigLogoDarkIlustrado from "/public/encabezado-tipografico-ilustrado2.png";
import bigLogoDarkIlustrados from "/public/encabezado-tipografico-ilustrado-dark.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Arrow } from "@/common/icons";
import { useTheme } from "next-themes";
import { Spinner } from "@nextui-org/react"; 

export default function Start() {
  const [showArrow, setShowArrow] = useState(false);
  const [loading, setLoading] = useState(true); 
  const controls = useAnimation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowArrow(true);
      setLoading(false); 
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (showArrow) {
      controls.start({
        y: [0, 10, 0],
        transition: {
          y: {
            repeat: Infinity,
            duration: 1,
          },
        },
      });
    }
  }, [showArrow, controls]);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className="flex items-center justify-center pt-[50%] sm:pt-[11%] dark:bg-backGrey"
      id="#home"
    >
      <div className="text-center h-[80vh]">
        {loading ? ( 
          <Spinner color="primary" size="large" className={"h-[50vh]"} />
        ) : (
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
                restDelta: 0.001,
              },
            }}
          >
            {currentTheme === "dark" ? (
              <Image
                src={bigLogoDarkIlustrados}
                alt="logoImage"
                width={1100}
                className="mb-4 sm:mb-0"
                loading="eager"
              />
            ) : (
              <Image
                src={bigLogoDarkIlustrado}
                alt="logoImage"
                width={1100}
                className="mb-4 sm:mb-0"
                loading="eager"
              />
            )}
            <div className="text-[15px] pl-24 mt-[-38px] sm:flex sm:text-3xl sm:mt-[-50px] sm:pl-36 font-montserrat font-bold">
              <p className="text-redePort mx-3">DESARROLLADOR FRONT-END.</p>
              <p className="text-bluePort mx-3 dark:text-light-blue-400">DISEÑADOR GRÁFICO.</p>
            </div>
          </motion.div>
        )}
        {showArrow && (
          <motion.div
            className="flex justify-center pt-32 md:pt-24"
            animate={controls}
          >
            <button
              aria-label="move to about"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Arrow className={" stroke-backGrey dark:stroke-white"} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}