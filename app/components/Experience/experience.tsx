import React from "react";
import ExperienceData from "../../../data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="my-12 z-10">
      <p className="text-teal-700 text-4xl pb-2 font-bold">Experience</p>
      <div className="pt-12 border-l-4 border-teal-700 border-solid">
        {ExperienceData.map((exp) => (
          <div className="pl-2 mb-12" key={exp?.id}>
            <div className="relative">
              <div className="absolute w-8 h-8 bg-teal-700 rounded-full left-[-26px] flex items-center justify-center" />
            </div>
            <div className="ml-5">
              <h4 className="text-white text-2xl font-bold">
                {exp.title}{" "}
                <span className="text-teal-700">@ {exp.company}</span>
              </h4>
              <p className="text-white text-lg font-medium">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-white text-lg font-medium">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
