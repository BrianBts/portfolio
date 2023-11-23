import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillCards = ({ skills }) => {
  return (
    <>
    <button className="cursor-auto">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.05 }}
        className="p-6 shadow-xl rounded-xl ease-in duration-300 dark:bg-backgroundColor "
      >
        <div className="grid grid-cols-2 justify-center items-center ">
          <div className="m-auto">
            <Image src={skills.image} alt="loguitos" width="64" height="64" />
          </div>
          <div className="m-auto px-2 text-sm md:text-lg md:px-0">
            <p className="text-gray-900">{skills.name}</p>
          </div>
        </div>
      </motion.div>
      </button>
    </>
  );
};

export default SkillCards;
