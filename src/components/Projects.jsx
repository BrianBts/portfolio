"use client";
import React from "react";
import projectsDetails from "../utils/projectsDetails";
import CardProjects from "../common/cardProjects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest  font-bold mb-6 text-bluePort">
          PROYECTOS
        </p>
        <div className="grid m-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 overflow-x-auto">
          {projectsDetails.map((project, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <CardProjects
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                client={project.client}
                api={project.api}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
