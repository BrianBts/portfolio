import { ArrowInfo } from "@/common/icons";
import React from "react";
import { Chip } from "@nextui-org/react";

export default function TimeLine() {
  return (
    <>
      <div id="exp">
        <div className="w-full h-auto flex justify-center  py-16">
          <ol className="ml-1   md:ml-[30%] border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4 w-80 md:w-[50%]">
              <div className="bullet w-3 h-3 bg-gray-500 rounded-full absolute left-[-15px] top-1/2 transform -translate-y-1/2"></div>

              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Septiembre 2023 - Actualidad
              </time>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">
                Desarrollador Full Stack
              </p>

              <div className="py-2">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-blue-500 to-blue-300 border-small border-white/50 ",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                  <p>First Plug Argentina</p>
                </Chip>
              </div>
              <p class="mb-4  text-[15px] md:text-base font-normal text-gray-500 dark:text-gray-400 ">
                Desarrollo de plataforma web donde el foco principal es la
                gestión, adquisición y control de inventario, simplificando el
                onboarding y equipamiento para trabajadores remotos. <br />
                <strong>
                  Equipo de 4 desarrolladores, metodología ágil, sprints de 2
                  semanas.
                </strong>
              </p>
            </li>

            <li class="mb-10 ms-4 w-80 md:w-[50%]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Noviembre 2023 - Actualidad
              </time>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">
                Desarrollador Full Stack
              </p>
              <div className="py-2">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-blue-500 to-blue-300 border-small border-white/50 ",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                  <p>Proyecto ACE Plataforma 5 - BOX APP</p>
                </Chip>
              </div>
              <p class="mb-4 text-[15px] md:text-base font-normal text-gray-500 dark:text-gray-400">
                Desarrollo de Aplicación web (mobile first) para reparto de
                productos/paquetería con geolocalización y seguimiento en tiempo
                real. Posee perfiles de usuario, administrador y repartidor.{" "}
                <br />
                <strong>
                  Equipo de 4 desarrolladores, metodología ágil, sprints
                  semanales.
                </strong>
              </p>
            </li>

            <li class="mb-10 w-80 ms-4 md:w-[50%]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Septiembre 2021 - Actualidad
              </time>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">
                Founder
              </p>
              <div className="py-2">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-blue-500 to-blue-300 border-small border-white/50 ",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                  <p>Brave Family Drinks</p>
                </Chip>
              </div>
              <p class="text-[15px] md:text-base font-normal text-gray-500 dark:text-gray-400">
                Como Founder de este proyecto, lideré la creación y desarrollo
                de un innovador mercado de bebidas/vinoteca. Mi visión y
                dedicación han sido pilares fundamentales para establecer este
                espacio como una opción distintiva en la zona.
              </p>
              <a
                href="https://www.instagram.com/bravefamily_escobar/"
                target="_blank"
                class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Redes
                <ArrowInfo />
              </a>
            </li>

            <li class="ms-4 w-80 md:w-[50%]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Agosto 2020 - Actualidad
              </time>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">
                Co-Founder
              </p>
              <div className="py-2">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-blue-500 to-blue-300 border-small border-white/50 ",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                  <p>Bohemia Cervecería</p>
                </Chip>
              </div>
              <p class="text-[15px] md:text-base font-normal text-gray-500 dark:text-gray-400">
                Como Co-Founder de Bohemia Cervecería, lideré el desarrollo
                integral del negocio desde su concepción hasta su
                implementación, desempeñando un papel fundamental en todas las
                etapas del establecimiento. Mi enfoque estratégico y ejecución
                hábil fueron esenciales para llevar a la realidad la visión de
                Bohemia Cervecería, consolidándola con éxito como un referente
                en la escena gastronómica de la zona.
              </p>
              <a
                href="https://www.instagram.com/bohemia.cerveceria/"
                target="_blank"
                class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Redes
                <ArrowInfo />
              </a>
            </li>

            <li class="mt-10 ms-4 w-80 md:w-[50%]">
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Enero 2019 - Abril 2023
              </time>
              <p class="text-lg font-semibold text-gray-900 dark:text-white">
                Diseñador Gráfico
              </p>
              <div className="py-2">
                <Chip
                  variant="shadow"
                  classNames={{
                    base: "bg-gradient-to-br from-blue-500 to-blue-300 border-small border-white/50",
                    content: "drop-shadow shadow-black text-white",
                  }}
                >
                  <p>B Graphic</p>
                </Chip>
              </div>
              <p class="text-[15px] md:text-base font-normal text-gray-500 dark:text-gray-400">
                Como diseñador, tuve la oportunidad de trabajar en una variedad
                de proyectos creativos que incluyen la creación de piezas
                publicitarias, contenido para redes sociales, producción
                fotográfica, edición de foto y video, además brindar aportes
                creativos y asesoramiento a los clientes. En mi camino cooperé
                en el rebranding de varias marcas de indumentaria, fusionando mi
                interes por el diseño gráfico con la moda para impulsar el éxito
                de mis clientes. Mi enfoque se centró en la innovación y la
                comunicación efectiva a través del diseño, siempre buscando
                superar las expectativas y lograr resultados impactantes.
              </p>
              <a
                href="https://www.behance.net/brianbts"
                target="_blank"
                class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Redes
                <ArrowInfo />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
