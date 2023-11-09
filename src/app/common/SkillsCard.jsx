import Image from "next/image";
import React from "react";

const SkillCards = ({ skills }) => {
  return (
    <div data-aos="zoom-in" className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="m-auto">
          <Image src={skills.image} alt="loguitos" width="64" height="64" />
        </div>
        <div className="m-auto">
          <p className="text-gray-900">{skills.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
