"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-2 pt-16 md:pt-24 pb-56">
      <div className="max-w-[1000px] m-auto ">
        
        <div className="md:flex gap-8 md:max-w-[80%] m-auto ">
            
          <div
            data-aos="zoom-in"
            data-aos-offset="-200"
            className="w-full h-auto shadow-2xl shadow-shodowGrey400 rounded-xl p-4 lg:p-10"
          >
            <form action="https://formspree.io/f/xnqyljlz" method="POST">
            <p className="uppercase text-xl tracking-widest text-bluePort font-bold mb-10">
          Contacto
        </p>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col pb-5">
                  <Input type="string" label="Nombre" variant={"bordered"} />
                </div>
                <div className="flex flex-col pb-5">
                  <Input type="string" label="Apellido" variant={"bordered"}  />
                </div>
              </div>
              <div className="flex flex-col py-2 pb-5">
                <Input type="string" label="Asunto" variant={"bordered"} />
              </div>
              <div className="flex flex-col py-2 pb-5">
                <Input type="email" label="Email" variant={"bordered"} />
              </div>
              <div className="flex flex-col py-2">
                <Textarea
                  label="Descripción"
                  placeholder="Descripción"
                  description="Ingrese una Descripción."
                  className="full"
                  variant={"bordered"}
                />
              </div>
              <Button size="lg" className="w-full" color="primary">Enviar mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
