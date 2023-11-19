import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-2 pt-16 md:pt-9 pb-56">
      <div className="max-w-[1000px] m-auto ">
        <div className="md:flex gap-8 md:max-w-[80%] m-auto ">
          <div
            data-aos="zoom-in"
            data-aos-offset="-200"
            className="w-full h-auto shadow-2xl shadow-shodowGrey400 rounded-xl p-4 lg:p-10"
          >
            <form action="https://formspree.io/f/xyyqalzl" method="POST">
              <p className="uppercase text-xl tracking-widest text-bluePort font-bold mb-10">
                Contacto
              </p>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col pb-5 text-black">
                  <Input type="string" label="Nombre" variant={"bordered"} name="Nombre" />
                </div>
                <div className="flex flex-col pb-5 text-black">
                  <Input type="string" label="Apellido" variant={"bordered"} name="Apellido" />
                </div>
              </div>
              <div className="flex flex-col py-2 pb-5 text-black">
                <Input type="string" label="Asunto" variant={"bordered"} name="Asunto" />
              </div>
              <div className="flex flex-col py-2 pb-5 text-black">
                <Input type="email" label="Email" variant={"bordered"} name="Email" />
              </div>
              <div className="flex flex-col py-2 text-black">
                <Textarea
                  label="Descripción"
                  placeholder="Descripción"
                  description="Ingrese una Descripción."
                  className="full"
                  variant={"bordered"}
                  name="Descripción"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" color="primary">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;