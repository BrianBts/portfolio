import React from "react";
import {Image} from "@nextui-org/react";


export default function CardProjects({image}) {

  return (
    <Image
      isZoomed
      width={240}
      alt="NextUI Fruit Image with Zoom"
      src={image}
    />
  );
}
