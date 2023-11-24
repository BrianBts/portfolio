import Image from "next/image";
import React, { useEffect, useState } from "react";
import imagePerfil from "/public/foto-Perfil.png";
import imagePerfil2 from "/public/foto-Perfil-blue.png";
import { Github, Behance, Linkedin, Instagram } from "../common/icons";
import Button from "@/common/Button";
import { useTheme } from "next-themes";

const About = () => {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div id="about" className="dark:bg-backGrey ">
        <div
          className={` md:ml-10 flex items-center  py-16 md:py-24 bg-backGrey md:rounded-l-2xl `}
        >
          <div className="max-w-[1240px] px-5 m-auto md:grid grid-cols-3 gap-16 ">
            <div
              data-aos="zoom-in"
              className="flex flex-col justify-center col-span-2 "
            >
              <p className="uppercase text-3xl font-bold text-redePort dark:text-light-blue-400 ">
                Sobre Mí
              </p>
              <p className="py-2 text-lg text-white dark:text-backgroundColor dark:font-medium">
                👋 Soy un apasionado del{" "}
                <strong className="text-light-blue-400">diseño</strong>, el{" "}
                <strong className="text-light-blue-400">arte</strong>, la{" "}
                <strong className="text-light-blue-400">ilustración</strong> y
                la <strong className="text-light-blue-400">tecnología</strong>.
                Mi búsqueda constante es la chispa de{" "}
                <strong className="text-light-blue-400">creatividad</strong> en
                cada proyecto. Mi paso por el{" "}
                <strong className="text-light-blue-400">diseño gráfico</strong>{" "}
                despertó mi deseo de llevar mi creatividad más allá, lo que me
                llevó a sumergirme y completar un{" "}
                <strong className="text-light-blue-400">
                  Bootcamp de programación
                </strong>{" "}
                con más de 1000 horas de práctica técnica/teórica. Durante este
                tiempo, amplié mis habilidades en diversas tecnologías para
                poder transmitir mis ideas en un entorno diferente.
              </p>
              <p className="py-2 text-lg text-white dark:text-backgroundColor dark:font-medium">
                Actualmente, me encuentro en la búsqueda de un entorno laboral
                donde pueda crecer{" "}
                <strong className="text-light-blue-400">
                  personal y profesionalmente
                </strong>
                . Cuento con{" "}
                <strong className="text-light-blue-400">
                  habilidades técnicas
                </strong>{" "}
                populares en el mercado IT, así como{" "}
                <strong className="text-light-blue-400">
                  habilidades blandas
                </strong>{" "}
                necesarias para aportar mi granito de arena en cada proyecto.
              </p>
              <div className="flex justify-center mt-10">
                <button className="hover:rotate-12 hover:scale-125 hover:transition-all">
                  <a
                    href="https://github.com/BrianBts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-white " />
                  </a>
                </button>
                <button className="hover:-rotate-12 hover:scale-125 hover:transition-all">
                  <a
                    href="https://www.behance.net/brianbts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Behance className="text-white " />
                  </a>
                </button>
                <button className="hover:rotate-12 hover:scale-125 hover:transition-all">
                  <a
                    href="https://www.instagram.com/brianbts_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-white " />
                  </a>
                </button>
                <button className="hover:-rotate-12 hover:scale-125 hover:transition-all">
                  <a
                    href="https://www.linkedin.com/in/braian-barrientos-49591112a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-white " />
                  </a>
                </button>
              </div>
            </div>

            <div className="flex h-full items-center w-[80%] mx-auto md:w-full">
              <div className="mt-12 md:m-0 rounded-3xl ">
                <div className="rounded-3xl rotate-0  hover:rotate-0 overflow-hidden">
                  
                {currentTheme === "dark" ? (
                  <Image
                    className="rounded-2xl"
                    src={imagePerfil2}
                    alt="Foto de Perfil"
                    width={360}
                  />
                  ) : (

                    <Image
                    className="rounded-2xl"
                    src={imagePerfil}
                    alt="Foto de Perfil"
                    width={360}
                  />
                  )}

                </div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
