import React, { useState } from "react";
import { Image, Spinner } from "@nextui-org/react";
import MyModal from "@/utils/Modal";

export default function CardProjects({ image, title, description, tech, api, client }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true); 
  };

  return (
    <>
      {!imageLoaded && (
        <div className="flex justify-center items-center">
          <Spinner size="lg" /> 
        </div>
      )}
      <Image
        showSkeleton={!imageLoaded} 
        isZoomed
        width={240}
        height={240} 
        alt={title}
        src={image}
        onLoad={handleImageLoaded} 
        onClick={handleOpenModal}
        css={{ display: imageLoaded ? 'block' : 'none' }} 
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