"use client";
import React from "react";
import projectsDetails from "../utils/projectsDetails";
import CardProjects from "../common/cardProjects";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";

const Projects = () => {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div id="projects" className="dark:bg-backGrey">
      <div  className="bg-backGrey md:mr-10 md:rounded-r-2xl  ">
        <div className={`w-full px-2 py-16 md:py-24  `}>
          <div
            className={`max-w-[1240px] mx-auto flex flex-col justify-center h-full `}
          >
            <p className="uppercase text-xl tracking-widest  font-bold mb-6 text-redePort">
              PROYECTOS
            </p>
            <div className="grid m-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 overflow-x-auto">
              {projectsDetails.map((project, index) => (
                <motion.div
                  key={index}
                  rel="preload" as="image"
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div >
                    <CardProjects
                      title={project.title}
                      image={project.image}
                      description={project.description}
                      tech={project.tech}
                      client={project.client}
                      api={project.api}
                      behance={project.behance}
                      estado={project.estado}
                      loading="lazy"
                    />

                    {project.estado && (
                      <div className="pt-3 space-y-2 grid grid-cols-1 ml-0">
                        <Chip color="success" size="sm" variant="bordered">
                          {project.estado}
                        </Chip>
                        <Chip color="success" size="sm" variant="dot" className="text-white"> 
                          {formattedDate}
                        </Chip>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
