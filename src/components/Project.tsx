import React from "react";
import showcase1_display from "../assets/showcase1_display.jpg";
import Image from "next/image";
const Project = () => {
  return (
    <div>
      <Image
        src={showcase1_display}
        alt="showcase1_display"
        quality={100}
        className="w-full h-full absolute top-0 left-0 rounded-sm"
      />
    </div>
  );
};

export default Project;
