import Image from "next/image";
import React from "react";
import imagePerfil from "/public/foto-Perfil.png";
import { Github, Behance, Linkedin, Instagram } from "../common/icons";
import Button from "@/common/Button";

const About = () => {
  return (
    <div className="w-full px-2 flex items-center py-16 md:py-24 bg-backGrey">
      <div className="max-w-[1240px] px-5 m-auto md:grid grid-cols-3 gap-16">
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center col-span-2"
        >
          <p className="uppercase text-3xl font-bold text-redePort">Sobre Mí</p>
          <p className="py-2 text-gray600 text-lg">
            👋 ¡Hola, te cuento un poco de mí! Soy un apasionado por el diseño,
            el arte, la ilustración y la tecnología, mi búsqueda constante es la
            chispa de creatividad en cada proyecto.🎨 Mi paso por el diseño
            gráfico despertó mi deseo llevar mi creatividad más allá, a lo que
            me llevó a sumergirme y finalizar un Bootcamp de programación con
            más de 1000 horas de práctica técnica/teórica donde amplié mis
            skills en diversas tecnologías para poder transmitir mis ideas en un
            entorno diferente.
          </p>
          <p className="py-2 text-gray600 text-lg">
            Actualmente me encuentro en la búsqueda de un entorno laboral donde pueda
            crecer personal y profesionalmente, cuento con hards skills
            populares en el mercado IT pero también softs skills necesarias para
            aportar mi granito de arena en cada proyecto.
          </p>
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/BrianBts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.behance.net/brianbts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Behance />
            </a>
            <a
              href="https://www.instagram.com/brianbts_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/braian-barrientos-49591112a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="flex h-full items-center w-[80%] mx-auto md:w-full">
          <div className="mt-12 md:m-0 rounded-3xl ">
            <div className="rounded-3xl rotate-0  hover:rotate-0 overflow-hidden">
              <Image
                className="rounded-2xl"
                src={imagePerfil}
                alt="Foto de Perfil"
                width={360}
              />
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
