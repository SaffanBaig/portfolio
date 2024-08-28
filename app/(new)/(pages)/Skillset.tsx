import React from "react";
import PageTitle from "../_components/PageTitle";
import TechStack from "../../../data/techdata.json";
import TechCard from "@/app/components/ui/techcard";

const Skillset = () => {
  return (
    <section
      id="skillset"
      className="h-full min-h-screen flex flex-col justify-center py-4 md:py-12"
    >
      <div>
        <PageTitle text="Skillset" />
      </div>

      <div className="h-full grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {TechStack.map((tech, index) => (
          <TechCard tech={tech} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skillset;
