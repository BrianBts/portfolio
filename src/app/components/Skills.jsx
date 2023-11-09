import React from "react";
import dataSkills from "../utils/skills";
import SkillCards from "../common/SkillsCard";


const Skills = () => {
  return (
    <div id="skills" className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-secondary font-bold mb-6 text-bluePort">Habilidades</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {dataSkills.map(skills => 
            <SkillCards key={skills.name} skills={skills}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
