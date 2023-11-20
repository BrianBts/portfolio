import React from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import Image from "next/image";

const MyModal = ({
  isOpen,
  onClose,
  title,
  content,
  backdrop,
  image,
  tech,
  api,
  client,
}) => {
  const handleClientClick = () => {
    if (client) {
      window.open(client, "_blank");
    }
    onClose();
  };

  const handleApiClick = () => {
    if (api) {
      window.open(api, "_blank");
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop={backdrop}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <div className="flex justify-center items-center flex-col">
                <p>{content}</p>
                <p className="font-bold pt-4 text-light-blue-500">{tech}</p>
                <div className="rounded-lg mt-5 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={240}
                    height={240}
                    layout="responsive"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              {client && (
                <Button color="primary" onPress={handleClientClick}>
                  Client
                </Button>
              )}
              {api && (
                <Button color="secondary" onPress={handleApiClick}>
                  Api
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
