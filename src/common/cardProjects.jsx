import React from "react";
import {Image} from "@nextui-org/react";

export default function CardProjects({image, title}) {
  return (
    <Image
      isZoomed
      width={240}
      alt={title}
      src={image}
    />
  );
}
