import React, { useState } from "react";

const Dropdown = ({ onSelect }) => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          onClick={() => onSelect("ingles")}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          role="menuitem"
        >
          Inglés
        </button>
        <button
          onClick={() => onSelect("espanol")}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          role="menuitem"
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default function Button() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDownload = (language) => {
    const driveLink =
      language === "ingles"
        ? "https://drive.google.com/file/d/1ZUHB0CpazJTdlBCT1KPW2Nca5QZgc_Fb/view?usp=sharing"
        : "https://drive.google.com/file/d/1VzEDMGow7eyx9rBSxRwkKP3CJW16DxOO/view?usp=sharing";

    window.open(driveLink, "_blank");
    setDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-center py-2">
      <div className="relative -mt-6 group">
        <button
          onClick={handleDropdownToggle}
          className="flex rounded-full shadow-xl p-3 cursor-pointer hover:scale-110 ease-in duration-300  hover:text-buttonTextMain bg-white"
        >
          <p className="font-bold px-2 text-bluePort">DESCARGAR CV</p>
        </button>
        {dropdownOpen && <Dropdown onSelect={handleDownload} />}
      </div>
    </div>
  );
}
