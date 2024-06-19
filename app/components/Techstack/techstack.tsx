import React from "react";
import TechStack from "../../../data/techdata.json";
import TechCard from "../ui/techcard";
const Techstack = () => {
  return (
    <section id="skills" className="mb-12">
      <p className="text-teal-700 text-4xl pb-2 font-bold">Techstack</p>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {TechStack.map((tech, index) => (
          <TechCard tech={tech} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Techstack;
