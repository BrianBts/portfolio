import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import MyModal from "@/utils/Modal";

export default function CardProjects({ image, title, description, tech, api, client }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Image
        isZoomed
        width={240}
        alt={title}
        src={image}
        onClick={handleOpenModal}
      />

      <MyModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={title}
        content={description}
        backdrop="blur"
        image={image}
        tech={tech}
        client={client}
        api={api}
      />
    </>
  );
}