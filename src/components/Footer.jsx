import React from "react";
import logo from "public/encabezado-y-tipografia.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <Image src={logo} alt="logo" width={60} height={60} />
        </a>
        <p className="text-gray-600">© 2023 Braian Barrientos. All rights reserved</p>
      </div>
    </footer>
  );
}
