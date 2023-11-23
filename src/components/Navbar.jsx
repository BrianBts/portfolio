import React, { useState, useEffect } from "react";
import logo from "public/encabezado-y-tipografia.png";
import logoWhite from "public/encabezado-y-tipografia-dark.png";
import Image from "next/image";
import { Burger, Sun, Moon } from "@/common/icons";
import { useTheme } from "next-themes";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className=" bg-backgroundColor dark:bg-backGrey dark:shadow-xl shadow-sm fixed w-full z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          {currentTheme === "dark" ? (
            <Image src={logoWhite} alt="logo" width={60} height={60} />
          ) : (
            <Image src={logo} alt="logo" width={60} height={60} />
          )}
        </a>
        <button
          onClick={handleMenuToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Burger className={"dark:stroke-white"} />
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block  md:w-auto absolute mt-72 flex justify-center md:mt-0 md:relative md:items-center md:justify-between md:space-x-12 md:space-y-0`}
          id="navbar-default"
        >
          <ul className="font-medium ml-40 flex flex-col p-4 md:p-0 mt-4 md:shadow-none shadow-md dark:border-1 dark:shadow-xl dark:border-light-blue-400 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-backgroundColor dark:bg-backGrey md:w-auto">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById("about");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 pl-3 md:py-4 md:px-4 pr-4 text-backGrey dark:text-white font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-redePort md:p-0  md:dark:hover:text-redePort dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                SOBRE MÍ
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById("skills");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 pl-3 md:py-4 md:px-4 pr-4 text-backGrey dark:text-white font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-redePort md:p-0 md:dark:hover:text-redePort dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                HABILIDADES
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById("projects");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 pl-3 md:py-4 md:px-4  text-backGrey dark:text-white font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-redePort md:p-0 md:dark:hover:text-redePort dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                PROYECTOS
              </a>
            </li>
            <li className="relative">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById("contact");
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="block py-2 pl-3 md:py-4 md:px-4  text-redePort dark:text-light-blue-400 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:dark:hover:text-redePort dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CONTACTO
              </a>
            </li>
            {currentTheme === "dark" ? (
              <button
                className=" text-black dark:text-white block py-2 pl-3 md:py-4 md:px-4 "
                onClick={() => setTheme("light")}
              ><Sun/>
                {" "}
              </button>
            ) : (
              <button
                className="text-black block py-2 pl-3 md:py-4 md:px-4 "
                onClick={() => setTheme("dark")}
              ><Moon/></button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
