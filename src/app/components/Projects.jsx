"use client";
import React from "react";
import projectsDetails from "../utils/projectsDetails";
import CardProjects from "../common/CardProjects";



const Projects = () => {
  return (
    <div id="skills" className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest  font-bold mb-6 text-bluePort">
          PROYECTOS
        </p>
        <div className="grid m-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 overflow-x-auto">
          {projectsDetails.map((project, index) => (
            <div key={index} className="mb-8">
              <CardProjects
                key={index}
                title={project.title} 
                image={project.image}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;