import logo from "public/encabezado-y-tipografia.png";
import logoWhite from "public/encabezado-y-tipografia-dark.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

export default function Footer() {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="bg-transparent dark:bg-backGrey">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
        {currentTheme === "dark" ? (
            <Image src={logoWhite} alt="logo" width={60} height={60} />
          ) : (
            <Image src={logo} alt="logo" width={60} height={60} />
          )}
        </a>
        <p className="text-gray-600 dark:text-backgroundColor">© 2023 Braian Barrientos. All rights reserved</p>
      </div>
    </footer>
  );
}
