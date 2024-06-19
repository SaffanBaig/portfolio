import Image from "next/image";
import React from "react";

type props = {
  tech: {
    name: string;
    icon: string;
  };
};
const TechCard = ({ tech }: props) => {
  return (
    <div className="flex flex-col items-center" key={tech.name}>
      <div className="rounded">
        <Image src={tech.icon} alt={tech.name} width={100} height={100} />
      </div>
      <p>{tech.name}</p>
    </div>
  );
};

export default TechCard;
