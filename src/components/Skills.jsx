import React from "react";
import dataSkills from "../utils/skills";
import SkillCards from "../common/SkillsCard";


const Skills = () => {
  return (
    <div id="skills">
    <div  className="dark:bg-backGrey">
    <div  className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest  font-bold mb-6 text-bluePort dark:text-light-blue-400">Habilidades</p>
        <div className="grid m-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {dataSkills.map(skills => 
            <SkillCards key={skills.name} skills={skills}/>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Skills;
